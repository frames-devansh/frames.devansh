const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function banner(msg){ document.body.insertAdjacentHTML("afterbegin", `<p style="background:#e5382b;color:#fff;padding:12px 20px;font:600 15px sans-serif">Site error: ${esc(msg)}. Check site-data.js for a missing comma, quote or bracket.</p>`); }
window.addEventListener("error", e => banner(e.message));
if(typeof SITE === "undefined"){ banner("site-data.js did not load"); throw new Error("SITE missing"); }

const page = document.body.dataset.page;
const ROLES = SITE.roles;
document.title = (page === "home" ? "" : document.body.dataset.title + " | ") + SITE.name + (page === "home" ? " | Video portfolio" : "");

// shared header + footer
const links = [["home","index.html","Home"],["work","work.html","Work"],["about","about.html","About"],["contact","contact.html","Contact"]];
$("nav").innerHTML = `<a class="rec" href="index.html"><i></i>${esc(SITE.name)}</a><div>` +
  links.map(([k,h,l]) => `<a href="${h}"${k===page?' aria-current="page"':''}>${l}</a>`).join("") + `</div>`;
$("foot").textContent = `© ${new Date().getFullYear()} ${SITE.name}. ${SITE.location}.`;

// video + cards
function parseVideo(url){
  if(!url) return null;
  let m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  if(m) return {embed:`https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0`, thumb:`https://img.youtube.com/vi/${m[1]}/hqdefault.jpg`};
  m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if(m) return {embed:`https://player.vimeo.com/video/${m[1]}?autoplay=1`, thumb:""};
  return null;
}
const sortRoles = p => [...p.roles].sort((a,b) => ROLES.indexOf(a) - ROLES.indexOf(b));
function cards(list){
  if(!list.length) return `<p class="lead">No video has all of the selected roles. Try removing a filter.</p>`;
  return list.map(p => {
    const i = SITE.projects.indexOf(p), v = parseVideo(p.video), img = p.thumb || (v && v.thumb);
    return `<button class="card" data-i="${i}" aria-label="Play ${esc(p.title)}"><div class="th"${img ? ` style="background-image:url('${esc(img)}')"` : ""}>${img ? "" : `<b>${esc(p.title[0])}</b>`}</div>
      <h3>${esc(p.title)}</h3><p class="tags">${sortRoles(p).map(r => `<span>${esc(r)}</span>`).join("")}${p.year ? `<em>${esc(p.year)}</em>` : ""}</p></button>`;
  }).join("");
}

// project pop-up
if(document.querySelector("[data-cards]")){
  document.body.insertAdjacentHTML("beforeend",
   `<dialog id="dlg" aria-labelledby="dt"><div class="vid" id="vid"></div><div class="info"><button class="x" id="close">Close</button><h3 id="dt"></h3><p class="meta" id="dm"></p><p id="db"></p></div></dialog>`);
  const dlg = $("dlg"), shut = () => { dlg.close(); $("vid").innerHTML = ""; };
  $("close").onclick = shut;
  dlg.addEventListener("click", e => { if(e.target === dlg) shut(); });
  dlg.addEventListener("cancel", () => { $("vid").innerHTML = ""; });
  document.addEventListener("click", e => {
    const c = e.target.closest(".card"); if(!c) return;
    const p = SITE.projects[c.dataset.i], v = parseVideo(p.video);
    $("vid").innerHTML = v ? `<iframe src="${esc(v.embed)}" title="${esc(p.title)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`
      : `<p>No video yet. Add a YouTube or Vimeo link to this project in site-data.js.</p>`;
    $("dt").textContent = p.title;
    $("dm").textContent = [sortRoles(p).join(" · "), p.client, p.year].filter(Boolean).join("  |  ");
    $("db").textContent = p.blurb || "";
    dlg.showModal();
  });
}

// ---- per page ----
if(page === "home"){
  $("h1").textContent = SITE.name; $("tag").textContent = SITE.tagline;
  const f = SITE.projects.filter(p => p.featured);
  $("grid").innerHTML = cards(f.length ? f : SITE.projects.slice(0,3));
  $("idx").innerHTML = ROLES.map(r => `<a href="work.html?filter=${encodeURIComponent(r)}">${esc(r)}</a>`).join("");
  if(!matchMedia("(prefers-reduced-motion: reduce)").matches){
    const t0 = performance.now(), pad = n => String(n).padStart(2,"0");
    (function tick(){
      const fr = Math.floor((performance.now()-t0)/1000*24);
      $("tc").textContent = [Math.floor(fr/86400)%100, Math.floor(fr/1440)%60, Math.floor(fr/24)%60, fr%24].map(pad).join(":");
      requestAnimationFrame(tick);
    })();
  }
}
if(page === "work"){
  const sel = new Set((new URLSearchParams(location.search).get("filter") || "").split(",").filter(r => ROLES.includes(r)));
  $("filters").innerHTML = `<button data-r="">All</button>` + ROLES.map(r => `<button data-r="${esc(r)}">${esc(r)}</button>`).join("");
  const draw = () => {
    $("filters").querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.r ? sel.has(b.dataset.r) : sel.size === 0));
    const list = SITE.projects.filter(p => [...sel].every(r => p.roles.includes(r)));
    $("count").textContent = sel.size ? `Showing ${list.length} of ${SITE.projects.length}: ${[...sel].join(" + ")}` : `Showing all ${SITE.projects.length}`;
    $("grid").innerHTML = cards(list);
  };
  $("filters").addEventListener("click", e => {
    const b = e.target.closest("button"); if(!b) return;
    const r = b.dataset.r;
    if(!r) sel.clear(); else if(sel.has(r)) sel.delete(r); else sel.add(r);
    draw();
  });
  draw();
}
if(page === "about"){
  $("bio").innerHTML = (SITE.photo ? `<img src="${esc(SITE.photo)}" alt="${esc(SITE.name)}">` : "") + SITE.about.map(p => `<p>${esc(p)}</p>`).join("");
  $("skills").innerHTML = SITE.skills.map(([a,b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join("");
}
if(page === "contact"){
  $("mail").textContent = SITE.email; $("mail").href = "mailto:" + SITE.email;
  $("soc").innerHTML = SITE.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
  $("form").addEventListener("submit", e => {
    e.preventDefault();
    const n = $("fn").value, m = $("fm").value;
    location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Project enquiry from " + n)}&body=${encodeURIComponent(m)}`;
  });
}
