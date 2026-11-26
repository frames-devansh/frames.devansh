/* Custom scroll bar on the right edge (PCs and laptops only). Shows how far down the page you are; drag it or click the track. */
(function(){
  if(!matchMedia("(hover: hover) and (pointer: fine)").matches) return;   // not on phones / tablets
  const css = document.createElement("style");
  css.textContent = "html{scrollbar-width:none}html::-webkit-scrollbar,body::-webkit-scrollbar{display:none}" +
    ".fx-sb{position:fixed;top:14px;right:6px;bottom:14px;width:12px;z-index:9998;opacity:.55;transition:opacity .25s,width .2s}" +
    ".fx-sb:hover,.fx-sb.drag{opacity:1;width:14px}.fx-sb.off{display:none}" +
    ".fx-sb .tr{position:absolute;top:0;bottom:0;left:0;right:0;border-radius:99px;background:rgba(120,150,255,.14)}" +
    ".fx-sb .th{position:absolute;top:0;left:2px;right:2px;border-radius:99px;min-height:48px;background:linear-gradient(#6b98ff,#3c63e6);box-shadow:0 0 14px rgba(80,120,255,.55);cursor:grab}" +
    ".fx-sb.drag .th{cursor:grabbing}body.fx-noselect{user-select:none;-webkit-user-select:none}";
  document.head.appendChild(css);
  const root = document.documentElement;
  const sb = document.createElement("div");
  sb.className = "fx-sb"; sb.setAttribute("aria-hidden", "true");
  sb.innerHTML = '<div class="tr"></div><div class="th"></div>';
  document.body.appendChild(sb);
  const th = sb.querySelector(".th");
  let max = 0, trackH = 0, thumbH = 0;
  function update(){
    const total = root.scrollHeight, view = window.innerHeight;
    max = total - view;
    if(max <= 4){ sb.classList.add("off"); return; }
    sb.classList.remove("off");
    trackH = sb.clientHeight;
    thumbH = Math.max(48, trackH * view / total);
    th.style.height = thumbH + "px";
    th.style.transform = "translateY(" + (window.scrollY / max) * (trackH - thumbH) + "px)";
  }
  addEventListener("scroll", update, {passive: true});
  addEventListener("resize", update);
  if(window.ResizeObserver) new ResizeObserver(update).observe(document.body);
  let dragging = false, startY = 0, startScroll = 0;
  th.addEventListener("pointerdown", e => {
    dragging = true; startY = e.clientY; startScroll = window.scrollY;
    th.setPointerCapture(e.pointerId); sb.classList.add("drag"); document.body.classList.add("fx-noselect"); e.preventDefault();
  });
  th.addEventListener("pointermove", e => {
    if(!dragging) return;
    window.scrollTo({top: startScroll + (e.clientY - startY) * (max / (trackH - thumbH)), behavior: "instant"});
  });
  const end = () => { dragging = false; sb.classList.remove("drag"); document.body.classList.remove("fx-noselect"); };
  th.addEventListener("pointerup", end); th.addEventListener("pointercancel", end);
  sb.addEventListener("pointerdown", e => {            // click on the track: jump there
    if(e.target === th) return;
    const r = sb.getBoundingClientRect();
    const f = (e.clientY - r.top - thumbH / 2) / (trackH - thumbH);
    window.scrollTo({top: Math.max(0, Math.min(1, f)) * max, behavior: "smooth"});
  });
  sb.addEventListener("mousedown", e => e.stopPropagation());   // so the 3D push effect ignores the scroll bar
  update();
})();
