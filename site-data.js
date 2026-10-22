/* ============ EDIT YOUR CONTENT HERE (the only file you need to change) ============ */
const SITE = {
  name: "Devansh",
  tagline: "I write, shoot, direct and edit videos.",
  location: "Mumbai, India",
  email: "devanshprof@gmail.com",
  photo: "",                       // e.g. "me.jpg" (upload the image next to these files). Leave empty for none.
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/frames.devansh/" },
    { label: "LinkedIn",  url: "www.linkedin.com/in/devansh-ranadive-1b8662254" }
    { label: "WhatsApp",  "+91 9328977377" }
  ],
  about: [
    "Bringing Stories to Life, Frame by Frame.
I’m a video editor and visual storyteller with a passion for turning raw concepts into compelling visual experiences. While my core expertise lies in video editing and color grading, my hands-on background in writing, directing, and shooting allows me to look at every project through a complete creative lens.

Knowing how a scene is conceived on paper and captured on set gives me a deeper understanding of rhythm, pacing, and emotional impact in the edit suite. Whether it’s crafting sharp, high-energy edits, fine-tuning visual storytelling, or building a narrative from the ground up, I focus on delivering clean, engaging, and precise visuals.

  ],
  skills: [
    ["Editing",   "I am Proficient in DaVinci Resolve, Basics of After Effects. I Cater videos to the liking of the client and the story"]
    ["Writing",   "I mostly write short films, but I also have Experience in writing promotional reels and Advertisements."],
    ["Directing", "I Conceptualize visual hooks, structure narratives, and shape tone to keep audiences engaged."],
    ["Shooting",  "I have deep knowledge of Framing, visual composition, and capturing crisp, high-quality footage tailored for post-production workflows."],
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
