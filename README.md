# frames.devansh

A simple 4-page portfolio website for my video work: directing, shooting and editing.

**Live site:** https://frames-devansh.github.io/frames.devansh/

## Pages

| Page | File | What it shows |
| --- | --- | --- |
| Landing | `index.html` | Intro, selected work, and links to each role |
| Work | `work.html` | Projects split into **Directed**, **Shot** and **Edited** |
| About | `about.html` | Bio, photo and skills |
| Contact | `contact.html` | Email, social links and a short message form |

## Files

```
index.html      Landing page
work.html       Work page
about.html      About page
contact.html    Contact page
site-data.js    All the content (edit this file)
site.js         Builds the pages from the content
style.css       Colours, fonts and layout
```

No frameworks and no build step. It is plain HTML, CSS and JavaScript.

## Editing the content

Almost everything is changed in one file: **`site-data.js`**.

1. Open `site-data.js` on GitHub and click the pencil icon.
2. Change the text, then click **Commit changes**.
3. The live site updates in a minute or two. Hard refresh with `Ctrl + Shift + R` if the old version still shows.

### What you can change

- **Name, tagline, location, email:** the fields at the top.
- **Social links:** the `socials` list.
- **Bio and skills:** `about` and `skills`.
- **Photo:** upload an image to the repository and set `photo: "me.jpg"` (use the real file name).

### Adding a project

Copy one of the entries in the `projects` list and fill it in:

```js
{
  title: "My film",
  year: "2026",
  client: "Client or personal",
  roles: ["Directed", "Shot", "Edited"],   // any of these three
  video: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  thumb: "",                               // optional image; YouTube thumbnails are automatic
  featured: true,                          // true shows it on the landing page
  blurb: "One or two sentences about the project."
}
```

A project appears in every section listed in `roles`. YouTube and Vimeo links are supported.

## Preview on your computer

Download the files into one folder and open `index.html` in a browser. No setup is needed.

## Publishing

The site is hosted with GitHub Pages.

1. Go to **Settings → Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then save.

The address is `https://<username>.github.io/<repository>/`. If the repository is renamed to `<username>.github.io`, the site moves to `https://<username>.github.io/`.

## Notes

- The contact form opens the visitor's email app with the message filled in, because GitHub Pages cannot process form submissions.
- The site follows the visitor's light or dark mode.
- Videos are hosted on YouTube or Vimeo, not in this repository.

## Copyright

Videos, photos and text on this site belong to Devansh. All rights reserved.
