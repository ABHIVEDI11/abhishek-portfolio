# Put your certificate files here

Each certificate card on the website shows two things:
1. A **preview image** people see directly on the page (no need to click).
2. A link to the **full original file** when someone clicks the card.

## Step 1 — Download your certificates from LinkedIn
1. Go to your LinkedIn profile.
2. Scroll to "Licenses & certifications".
3. Click a certificate → "Show credential" or the download icon.
4. Save the file.

## Step 2 — Rename and place each file here
Use the exact filenames below (case-sensitive), so the website finds them
automatically — no code editing needed.

| Certificate | Required filename |
|---|---|
| Computational Drug Discovery, Docking, MD & QM/MM Approaches (DE·LIFE) | `computational-drug-discovery.pdf` |
| Genomic Data Science: Tools, Trends & Translation (NIPGR/BRIC) | `genomic-data-science.pdf` |
| CRISPR & Gene Editing — 3-Day Workshop (Eduvea) | `crispr-gene-editing.pdf` |
| National Workshop on WGS & RNA-Seq (BioTecNika) | `wgs-rnaseq-workshop.pdf` |
| CADD Master Certification — 20-Day Program (BioTecNika) | `cadd-master.pdf` |
| Python Bootcamp — Zero to Hero (Udemy) | `python-bootcamp.pdf` |
| Mastering R for Bioinformatics (Dr. Omics Labs) | `r-for-bioinformatics.pdf` |
| Bioinformatics Methods & Tools Master Program (BioTecNika) | `bioinformatics-methods-tools.pdf` |
| Full Stack Development with AI (Physics Wallah x PwC) | `full-stack-development-ai.png` |
| Cracking the Coding Interview in Java - Foundation (Physics Wallah) | `java-interview-cracking.pdf` |

If your downloaded file is a **PDF** — keep going to Step 3 to generate a
preview image. If it's already a **.jpg/.png**, just save it with the same
base name shown above but the right extension (e.g. `python-bootcamp.jpg`)
and then open `index.html`, find the matching `<img data-cert-img ...>`
tag, and change its `src` to match your file extension.

## Step 3 — Generate preview images from your PDFs (one command)
A small script in this folder, `convert-certificates.py`, automatically
turns each `.pdf` in this folder into a matching `.png` preview image, so
the certificate is visible right on the page.

1. Install the one-time helper library:
   ```
   pip install pdf2image
   ```
   `pdf2image` also needs a small system tool called **poppler**:
   - **Windows**: download from
     https://github.com/oschwartz10612/poppler-windows/releases and add
     its `bin` folder to your PATH.
   - **Mac**: `brew install poppler` (needs Homebrew installed first).
   - **Linux**: `sudo apt install poppler-utils`.

2. Open a terminal in this `certificates` folder (in VS Code: right-click
   the folder → "Open in Integrated Terminal") and run:
   ```
   python3 convert-certificates.py
   ```
3. You'll see a `.png` appear next to each `.pdf`. Refresh the website —
   every card now shows the real certificate image.

## That's it
No other code changes are needed. Cards without a matching file just show
a plain document icon until you add the file — nothing breaks.
