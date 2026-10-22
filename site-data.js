/* ============ EDIT YOUR CONTENT HERE (the only file you need to change) ============ */
const SITE = {
  name: "Devansh",
  tagline: "I write, shoot, direct and edit videos.",
  location: "Mumbai, India",
  email: "you@example.com",
  photo: "",                       // e.g. "me.jpg" (upload the image next to these files). Leave empty for none.
  socials: [
    { label: "Instagram", url: "https://instagram.com/yourhandle" },
    { label: "YouTube",   url: "https://youtube.com/@yourchannel" },
    { label: "LinkedIn",  url: "https://linkedin.com/in/yourname" }
  ],
  about: [
    "Write two or three short paragraphs about you here: who you are, the kind of films you like making, and what you want to make next.",
    "Add a line about how you work with clients, teams and deadlines."
  ],
  skills: [
    ["Writing",   "Describe what you write: scripts, concepts, ads"],
    ["Directing", "Concepts, shot lists, working with actors and crews"],
    ["Shooting",  "Cameras, lenses and lighting you use"],
    ["Editing",   "Premiere Pro, DaVinci Resolve, After Effects"]
  ],
  // The filter buttons on the Work page, in this order. Every project's "roles" must use these exact words.
  roles: ["Directed", "Shot", "Edited", "Written"],

  // Projects show in THIS order on the site. Move a { ... }, block up or down to reorder.
  // year / client / blurb are optional: leave "" and they simply don't show.
  // featured: true shows it on the landing page (keep this to about 3).
  projects: [
    { title: "Mime",               video: "https://www.youtube.com/watch?v=puEDxTdmdog", roles: ["Shot","Edited"],                         year: "", client: "", thumb: "", featured: false, blurb: "" },
    { title: "Avshesh",            video: "https://www.youtube.com/watch?v=jr9YhOK96qM", roles: ["Edited"],                                year: "", client: "", thumb: "", featured: false, blurb: "" },
    { title: "Naftat",             video: "https://youtube.com/shorts/N_Ic_08mpuI",      roles: ["Directed","Shot","Edited","Written"],    year: "", client: "", thumb: "", featured: true,  blurb: "" },
    { title: "Monster Ad",         video: "https://www.youtube.com/watch?v=DcyhSmbSaQ8", roles: ["Directed","Shot","Edited","Written"],    year: "", client: "", thumb: "", featured: true,  blurb: "" },
    { title: "Always Late",        video: "https://www.youtube.com/watch?v=BRAOrLRt7gc", roles: ["Shot"],                                  year: "", client: "", thumb: "", featured: false, blurb: "" },
    { title: "Samay",              video: "https://www.youtube.com/watch?v=X6Dg842DThE", roles: ["Directed","Shot","Edited","Written"],    year: "", client: "", thumb: "", featured: true,  blurb: "" },
    { title: "Leher Music Video",  video: "https://www.youtube.com/watch?v=IyZPxqupWEQ", roles: ["Edited"],                                year: "", client: "", thumb: "", featured: false, blurb: "" },
    { title: "Benne Ad",           video: "https://www.youtube.com/watch?v=wWMy7ykrJC8", roles: ["Directed","Shot","Edited"],              year: "", client: "", thumb: "", featured: false, blurb: "" },
    { title: "Disconnected",       video: "https://www.youtube.com/watch?v=6r4BrM9V-BM", roles: ["Edited"],                                year: "", client: "", thumb: "", featured: false, blurb: "" },
    { title: "HTFL Promo",         video: "https://youtube.com/shorts/bSKjS9yu3bg",      roles: ["Edited"],                                year: "", client: "", thumb: "", featured: false, blurb: "" }
  ]
};
