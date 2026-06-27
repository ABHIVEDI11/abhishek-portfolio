#!/usr/bin/env python3
"""
convert-certificates.py

Run this after you've dropped your real certificate files into the
certificates/ folder. It looks for any .pdf file in this folder and
creates a matching .png preview image (just the first page), so the
certificate shows up as an actual image on the website instead of
just a clickable link.

If your certificate is already a .jpg or .png, you don't need to run
this at all - just make sure the filename matches what's listed in
README.md, and copy it to a .png with the same base name if needed
(or update the <img> src in index.html to point at your file directly).

HOW TO RUN THIS (no programming experience needed):
1. Make sure Python is installed (most computers already have it -
   open a terminal/command prompt and type `python3 --version` or
   `python --version` to check).
2. Install one helper library (only needed once):
       pip install pdf2image
   pdf2image also needs a small system tool called "poppler":
     - Windows: download poppler from
       https://github.com/oschwartz10612/poppler-windows/releases
       and add its `bin` folder to your PATH.
     - Mac: run `brew install poppler` (needs Homebrew).
     - Linux: run `sudo apt install poppler-utils`.
3. Open a terminal in this `certificates` folder and run:
       python3 convert-certificates.py
4. Refresh the website - each certificate card now shows the real
   certificate image.
"""

import os
import sys

try:
    from pdf2image import convert_from_path
except ImportError:
    print("Missing dependency. Run this first:\n    pip install pdf2image")
    sys.exit(1)

HERE = os.path.dirname(os.path.abspath(__file__))

def main():
    pdf_files = [f for f in os.listdir(HERE) if f.lower().endswith(".pdf")]

    if not pdf_files:
        print("No PDF files found in this folder. Nothing to convert.")
        print("(If your certificates are already .jpg/.png, you don't need this script.)")
        return

    for pdf_name in pdf_files:
        base_name = os.path.splitext(pdf_name)[0]
        pdf_path = os.path.join(HERE, pdf_name)
        png_path = os.path.join(HERE, base_name + ".png")

        try:
            pages = convert_from_path(pdf_path, dpi=150, first_page=1, last_page=1)
            pages[0].save(png_path, "PNG")
            print(f"Created preview: {base_name}.png")
        except Exception as e:
            print(f"Could not convert {pdf_name}: {e}")

    print("\nDone. Refresh the website to see the certificate images.")

if __name__ == "__main__":
    main()
