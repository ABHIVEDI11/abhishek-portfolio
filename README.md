# Abhishek Dwivedi — Personal Portfolio

A personal portfolio website built with plain HTML, CSS, and JavaScript —
no frameworks, no build tools, nothing to install just to view it.

## What's in this folder

```
index.html      -> the whole page (content + structure)
styles.css       -> all the styling/design
script.js        -> small bits of interactivity (mobile menu, contact form, cert previews)
images/
  profile.jpg    -> your photo, already cropped for the hero section
certificates/
  README.md               -> exact filenames to use, and how to add real cert files
  convert-certificates.py  -> turns your certificate PDFs into preview images automatically
Abhishek_Dwivedi_CV_ComputationalBiologist.pdf  -> your résumé, linked from the "Résumé" button
```

The page has these sections, in order: Hero, About, Skills, Bioinformatics
Projects, Web Development (your event management / quiz / tic-tac-toe
projects), Experience & Education, Certifications, Contact.

---

## 1. Running it on your computer (VS Code)

You don't need Node.js, npm, or any package manager for this site — it's
plain HTML/CSS/JS. Here's what to install and do:

### Install once
1. **VS Code** — download from https://code.visualstudio.com if you don't have it.
2. Open VS Code → Extensions (the icon on the left sidebar that looks like four squares) →
   search for **"Live Server"** by Ritwick Dey → click **Install**.
   (This extension lets you preview the site with auto-refresh, instead of just
   double-clicking the HTML file.)

### Open and preview the project
1. In VS Code: **File → Open Folder** → select this `site` folder.
2. Right-click `index.html` in the file list → **"Open with Live Server"**.
3. Your browser opens automatically at something like `http://127.0.0.1:5500`
   and shows the live site. Any time you save a change to a file, the page
   refreshes automatically.

That's the entire setup. No terminal commands required.

### Making edits
- Text content (headings, paragraphs, links) → edit `index.html`.
- Colors, fonts, spacing → edit `styles.css`. The top of that file has a
  `:root { ... }` block with named colors (`--paper`, `--ink`, `--teal`, etc.)
  — change a value there and it updates everywhere that color is used.
- To swap your photo: replace `images/profile.jpg` with a new file of the
  same name (keep it roughly square for the best crop).

---

## 2. Adding your certificates (with real images, not just links)

See `certificates/README.md` for full details. Short version:
1. Download each certificate from LinkedIn and save it into the
   `certificates` folder using the exact filename listed there.
2. If it's a PDF, run the included script once to turn it into a preview
   image:
   ```
   pip install pdf2image
   python3 certificates/convert-certificates.py
   ```
3. Refresh the site — the certificate now shows as an actual image on the
   page, and still links to the original file when clicked.

Cards without a matching file just show a plain document icon — nothing
breaks if you add certificates gradually.

---

## 3. Putting it on GitHub (so it has a public link)

### If you don't have a repository yet
1. Go to https://github.com/ABHIVEDI11 and click **New** (or the **+** icon
   top-right → **New repository**).
2. Name it something like `portfolio` or `abhivedi11.github.io`
   (naming it exactly `abhivedi11.github.io` gives you a live URL at
   `https://abhivedi11.github.io` automatically — see step 5).
3. Leave it **Public**, don't add a README (you already have one), click
   **Create repository**.

### Upload your files
**Option A — using VS Code's built-in Git (no terminal typing needed):**
1. In VS Code, open the Source Control icon on the left sidebar (looks like
   a branching line).
2. Click **Initialize Repository**.
3. Stage all changes (the `+` icon next to "Changes"), write a commit
   message like `Initial portfolio`, click the checkmark to commit.
4. Click **Publish Branch** at the bottom — VS Code will ask you to sign in
   to GitHub and pick the repository name you created above.

**Option B — using the terminal in VS Code:**
Open VS Code's terminal (**Terminal → New Terminal**) and run, one line at a time:
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ABHIVEDI11/portfolio.git
git push -u origin main
```
(Replace `portfolio` in the URL with whatever you named your repository.)

### Make it live with GitHub Pages
1. On GitHub, open your repository → **Settings** → **Pages** (left sidebar).
2. Under "Build and deployment" → **Source**, choose **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)` → **Save**.
4. Wait about a minute, then refresh the page — GitHub shows you the live
   URL (something like `https://abhivedi11.github.io/portfolio/`).

From then on, any time you push new changes (`git add .` → `git commit -m "..."`
→ `git push`), the live site updates automatically within a minute or two.

---

## 4. Quick troubleshooting

- **Photo or résumé not showing on the live site** — double-check the file
  was actually committed and pushed (`git status` should show "nothing to
  commit, working tree clean" after a push).
- **Certificate card stays greyed out** — the filename in `certificates/`
  doesn't exactly match what `index.html` expects. Check `certificates/README.md`.
- **Changes not appearing locally** — make sure Live Server is still running
  and you saved the file (Ctrl+S / Cmd+S).
