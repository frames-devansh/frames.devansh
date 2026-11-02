/* EDIT THE LANDING PAGE TEXT HERE (no rebuild needed) */
window.LANDING = {
  brand: "frames.devansh",                       // top-left name
  eyebrow: "Video Editor · Filmmaker",            // small blue line above the headline
  headline: ["Stories,", "cut", "to feel."],     // the middle word is shown in silver
  scrollLabel: "Scroll ↓",
  nav: [["Work", "work.html"], ["About", "about.html"], ["Contact", "contact.html"]],
  sections: [
    { tag: "01 / Work",    title: "Shot, written, directed and cut.",   link: "work.html",    label: "See the work" },
    { tag: "02 / About",   title: "Behind the camera and in the edit.", link: "about.html",   label: "About me" },
    { tag: "03 / Contact", title: "Let's make something.",              link: "contact.html", label: "Get in touch" }
  ],
  // false = built-in 3D laptop and camera. true = load realistic-laptop.glb and realistic-camera.glb from the site.
  useRealModels: false
};
