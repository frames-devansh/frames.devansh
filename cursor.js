/* Floating cursor (desktop only). Used by every page. */
(function(){
  const CURSOR_STYLE = "tilt";       // "tilt" (tilted arrow) or "flat" (sharp triangle arrow)
  const HIDE_REAL_CURSOR = false;    // true = only the floating arrow shows
  if(!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if(matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const css = document.createElement("style");
  css.textContent = ".fx-cursor{position:fixed;top:0;left:0;z-index:99999;pointer-events:none;opacity:0;transition:opacity .2s;transform-origin:0 0;will-change:transform}" +
    ".fx-cursor svg{display:block;filter:drop-shadow(0 0 7px rgba(90,130,255,.6))}" +
    "html.fx-hide,html.fx-hide *{cursor:none!important}html.fx-hide dialog,html.fx-hide dialog *{cursor:auto!important}";
  document.head.appendChild(css);
  const shapes = {
    tilt: {rot: -18, d: "M3 2 L3 23 L8.5 18 L12.2 26 L16 24.3 L12.4 16.5 L20 16.5 Z"},
    flat: {rot: 0,   d: "M3 3 L27 14 L14 16 L3 27 Z"}
  };
  const s = shapes[CURSOR_STYLE] || shapes.tilt;
  const el = document.createElement("div");
  el.className = "fx-cursor"; el.setAttribute("aria-hidden", "true");
  el.innerHTML = `<svg width="34" height="34" viewBox="0 0 32 32"><path d="${s.d}" transform="translate(2.2 2.6)" fill="#000" stroke="#000" stroke-width="2.6" stroke-linejoin="round"/><path d="${s.d}" fill="#fff" stroke="#111" stroke-width="2.6" stroke-linejoin="round"/></svg>`;
  document.body.appendChild(el);
  if(HIDE_REAL_CURSOR) document.documentElement.classList.add("fx-hide");
  const off = HIDE_REAL_CURSOR ? 0 : 18;
  let x = 0, y = 0, tx = 0, ty = 0, rot = 0, sc = 1, tsc = 1, shown = false;
  addEventListener("mousemove", e => {
    tx = e.clientX + off; ty = e.clientY + off;
    if(!shown){ x = tx; y = ty; shown = true; el.style.opacity = 1; }
    tsc = e.target.closest && e.target.closest("a,button,.card,input,textarea,label") ? 1.35 : 1;
  });
  document.addEventListener("mouseleave", () => { shown = false; el.style.opacity = 0; });
  (function loop(){
    const dx = tx - x, dy = ty - y;
    x += dx * .16; y += dy * .16; sc += (tsc - sc) * .2;
    rot += (Math.max(-35, Math.min(35, dx * .6)) - rot) * .2;
    el.style.transform = `translate(${x}px,${y}px) rotate(${s.rot + rot}deg) scale(${sc})`;
    requestAnimationFrame(loop);
  })();
})();
