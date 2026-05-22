# Mahak Sharma — Portfolio

This repository is the static portfolio site for Mahak Sharma. It is plain HTML — no build step, no framework, no runtime — served directly from the files at the root of this repo.

## Layout

```text
.
├── .gitignore              (existing — confirmed to cover .DS_Store)
├── LICENSE                 (existing — unchanged)
├── README.md               (this file)
├── index.html              (portfolio landing page)
├── swap-case-study.html    (SWAP case study)
├── credit-lite-case-study.html
│                           (Credit Lite case study)
├── assets/
│   ├── images/             (headshot.png, swap_card.png, credit_lite_card.png)
│   ├── gifs/               (5 GIFs used in the SWAP case study)
│   └── resume/             (mahak-sharma-resume.pdf — added separately)
```

## Pages

- `index.html` — landing page. Contains the hero, about, projects, and contact sections, and links out to both case studies and the resume.
- `swap-case-study.html` — SWAP case study. Long-form writeup with five embedded GIFs.
- `credit-lite-case-study.html` — Credit Lite case study. Long-form writeup; links back to the landing page.

## Assets

Static images live in `assets/images/`, animated GIFs used by the SWAP case study live in `assets/gifs/`, and the resume PDF belongs at `assets/resume/mahak-sharma-resume.pdf`. The PDF is added separately from this restructure; the directory is committed empty via `.gitkeep` so the path exists ahead of the file.

## Viewing locally

Two options:

- Open `index.html` directly in a browser.
- Or, from the repo root, run `python -m http.server 8000` and visit `http://localhost:8000/`.

## What is out of scope

The directories `app/`, `uploads/`, and `.atoms/` are unrelated to the public site. They are not part of this restructure and are not served.

## License

See [`LICENSE`](LICENSE).
