/* ============ EDIT YOUR CONTENT HERE (the only file you need to change) ============ */
const SITE = {
  name: "Devansh",
  tagline: "I shoot, edit and direct videos.",
  location: "Mumbai, India",
  email: "devanshprof09@gmail.com",
  photo: "",                       // e.g. "me.jpg" (upload the image next to these files). Leave empty for none.
  socials: [
    { label: "Instagram", url: "https://instagram.com/frames.devansh" },
    { label: "YouTube",   url: "https://youtube.com/@frames.devansh" },
    { label: "LinkedIn",  url: "www.linkedin.com/in/devansh-ranadive-1b8662254" }
  ],
  about: [
    "I make Films, Videos, Ads and other Creatives. I don't like to be boxed in a genre. I prefer to work in as many diversified genres as I can work. What I like to do is make them more interesting and suitable for the target audience it is meant to be made for. 
Personally I make Story-Based Short Films to Practice all the Aspects of Filmmaking.",
     ],  
  ],
  // Text shown at the top of each section on the Work page.
  roles: {
    Directed: "Projects where I led the idea, the cast and the crew.",
    Shot:     "Projects where I was behind the camera.",
    Edited:   "Projects where I shaped the story in the edit."
  },
  // roles: any of "Directed", "Shot", "Edited". A project can have several and appears in each section.
  // video: paste a YouTube or Vimeo link. thumb: optional image file/URL (YouTube thumbnails are automatic).
  // featured: true shows it on the landing page.
  projects: [
    { title: "Project one",   year: "2026", client: "Client or college", roles: ["Directed","Shot","Edited"], video: "", thumb: "", featured: true,  blurb: "One or two sentences: the idea, what you did, and the result." },
    { title: "Project two",   year: "2026", client: "Client or college", roles: ["Edited"],                    video: "", thumb: "", featured: true,  blurb: "Describe this project here." },
    { title: "Project three", year: "2025", client: "Personal",          roles: ["Shot","Edited"],             video: "", thumb: "", featured: true,  blurb: "Describe this project here." },
    { title: "Project four",  year: "2025", client: "Client or college", roles: ["Directed"],                  video: "", thumb: "", featured: false, blurb: "Describe this project here." }
  ]
};
