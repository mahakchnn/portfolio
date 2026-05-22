# Implementation Plan: Portfolio Restructure

## Overview

Single-pass restructure of the repository root into a clean static-site layout, executed in Git Bash on Windows. The plan performs filesystem moves and renames via `git mv` (preserving history per design risk R4), applies the literal-substring edit tables from `design.md` to the three HTML pages, adds `README.md`, deletes `.wiki.md`, and runs the V1–V9 verification suite from `design.md`. There is no application code, no build step, and no property-based tests — verification is binary file-existence and `grep` checks.

All commands assume the working directory is the repository root.

## Tasks

- [x] 1. Snapshot pre-state of out-of-scope directories (V8 baseline)
  - Run `git ls-tree -r HEAD -- app uploads .atoms | sort > /tmp/oos-before.txt` so V8 can diff post-state against this snapshot.
  - Do not modify anything inside `app/`, `uploads/`, or `.atoms/` from this point forward.
  - _Requirements: 12.1, 12.2, 12.3, 12.4_
  - _Verification target: V8_

- [x] 2. Create the assets directory tree with a resume placeholder
  - Run `mkdir -p assets/images assets/gifs assets/resume`.
  - Run `touch assets/resume/.gitkeep` so the empty resume directory survives commits before the PDF lands (per design Error Handling item 6 and risk R3).
  - Do **not** create the resume PDF; it is intentionally absent.
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.7_

- [x] 3. Move the three image files to `assets/images/` via `git mv`
  - `git mv headshot.png assets/images/headshot.png`
  - `git mv swap_card.png assets/images/swap_card.png`
  - `git mv credit_lite_card.png assets/images/credit_lite_card.png`
  - Use `git mv` (not `mv` + `git add/rm`) so each move is recorded as a rename (design risk R4).
  - _Requirements: 2.5, 1.7_

- [x] 4. Move the five GIF files to `assets/gifs/` via `git mv`
  - `git mv inspiration.gif assets/gifs/inspiration.gif`
  - `git mv inspiration-livevideo.gif assets/gifs/inspiration-livevideo.gif`
  - `git mv convincing-app.gif assets/gifs/convincing-app.gif`
  - `git mv consideration.gif assets/gifs/consideration.gif`
  - `git mv purchase.gif assets/gifs/purchase.gif`
  - Use `git mv` so each move is recorded as a rename (design risk R4).
  - _Requirements: 2.6, 1.7_

- [x] 5. Rename the portfolio page to `index.html` via `git mv`
  - Run `git mv mahak-sharma-portfolio.html index.html`.
  - This must happen before task 7 so the in-page edits operate on the renamed file.
  - _Requirements: 1.1, 1.7_

- [x] 6. Rename the Credit Lite page to `credit-lite-case-study.html` via `git mv`
  - Run `git mv credit-lite-portfolio-theme.html credit-lite-case-study.html`.
  - This must happen before task 9 so the in-page edits operate on the renamed file.
  - _Requirements: 1.3, 1.7_

- [x] 7. Apply in-page edits to `index.html` (rows P1–P5 in `design.md` § Data Models)
  - Apply each row in the P table as a literal substring replacement, exactly once per stated occurrence count:
    - P1 (×2): `./mahak-chanana-resume.pdf` → `./assets/resume/mahak-sharma-resume.pdf`
    - P2 (×1): `src="./headshot.png"` → `src="./assets/images/headshot.png"`
    - P3 (×1): `src="./swap_card.png"` → `src="./assets/images/swap_card.png"`
    - P4 (×1): `src="./credit_lite_card.png"` → `src="./assets/images/credit_lite_card.png"`
    - P5 (×1): `href="./credit-lite-portfolio-theme.html"` → `href="./credit-lite-case-study.html"`
  - Do not edit `<style>` blocks, copy text, or any non-attribute content (design risk R2).
  - The `download` attribute on both resume anchors must remain in place (the replacement only touches the path inside `href`).
  - _Requirements: 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 4.5, 4.6, 9.1, 9.4_

- [x] 8. Apply in-page edits to `swap-case-study.html` (rows S1–S7 in `design.md` § Data Models)
  - Apply each row as a literal substring replacement, exactly once per stated occurrence count. Each `oldStr` includes the closing `"` (or `#projects"` for S2) so S1 and S2 are non-overlapping under any order (design risk R5):
    - S1 (×2): `href="./mahak-sharma-portfolio.html"` → `href="./index.html"`
    - S2 (×1): `href="./mahak-sharma-portfolio.html#projects"` → `href="./index.html#projects"`
    - S3 (×1): `src="inspiration-livevideo.gif"` → `src="./assets/gifs/inspiration-livevideo.gif"`
    - S4 (×1): `src="inspiration.gif"` → `src="./assets/gifs/inspiration.gif"`
    - S5 (×1): `src="convincing-app.gif"` → `src="./assets/gifs/convincing-app.gif"`
    - S6 (×1): `src="consideration.gif"` → `src="./assets/gifs/consideration.gif"`
    - S7 (×1): `src="purchase.gif"` → `src="./assets/gifs/purchase.gif"`
  - Do not edit `<style>` blocks, copy text, or any non-attribute content (design risk R2).
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 9.2, 9.4_

- [x] 9. Apply in-page edits to `credit-lite-case-study.html` (rows C1–C2 in `design.md` § Data Models)
  - Apply each row as a literal substring replacement, exactly once per stated occurrence count. Each `oldStr` includes the closing `"` (or `#projects"` for C2) so C1 and C2 are non-overlapping under any order (design risk R5):
    - C1 (×2): `href="./mahak-sharma-portfolio.html"` → `href="./index.html"`
    - C2 (×1): `href="./mahak-sharma-portfolio.html#projects"` → `href="./index.html#projects"`
  - This page has no image references in its body; no `src` edits are required.
  - Do not edit `<style>` blocks, copy text, or any non-attribute content (design risk R2).
  - _Requirements: 6.1, 9.3, 9.4_

- [x] 10. Delete `.wiki.md`
  - Run `git rm .wiki.md`.
  - This stale note describes a layout superseded by the new README.
  - _Requirements: 1.7, 13.1_

- [x] 11. Create `README.md` per the outline in `design.md` § Data Models
  - Sections, in order: H1 title `# Mahak Sharma — Portfolio`; "What this is" paragraph; "Layout" fenced `text` block reproducing the post-restructure tree; "Pages" bullets for `index.html`, `swap-case-study.html`, `credit-lite-case-study.html`; "Assets" paragraph noting `assets/images/`, `assets/gifs/`, and that `mahak-sharma-resume.pdf` belongs at `assets/resume/mahak-sharma-resume.pdf` and is added separately (directory is committed empty via `.gitkeep`); "Viewing locally" with two options (open `index.html` directly; or `python -m http.server 8000` from the repo root then visit `http://localhost:8000/`); "What is out of scope" paragraph naming `app/`, `uploads/`, `.atoms/`; "License" line pointing to `LICENSE`.
  - Target length: under one screen. No images, no badges.
  - _Requirements: 1.5, 10.1, 10.2, 10.3, 10.4, 10.5_

- [x] 12. Verify `.gitignore` already covers `.DS_Store` (no edit unless regressed)
  - The repo's `.gitignore` already contains the bare line `.DS_Store`, which Git matches at any depth. No change is required.
  - Only edit `.gitignore` if the line has been removed since the spec was written; in that case, restore the bare line `.DS_Store`.
  - _Requirements: 1.6, 11.1, 11.2_
  - _Verification target: V7_

- [x] 13. Run V1 — required files and directories exist
  - Execute the V1 block from `design.md` § Testing Strategy verbatim. Every `test -f` / `test -d` line must exit 0.
  - Covers: `index.html`, `swap-case-study.html`, `credit-lite-case-study.html`, `LICENSE`, `README.md`, `.gitignore`, `assets/images/`, `assets/gifs/`, `assets/resume/`, `assets/resume/.gitkeep`.
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.7, 10.1_
  - _Verification target: V1_

- [x] 14. Run V2 — required asset files are at their new paths
  - Execute the V2 block from `design.md` § Testing Strategy verbatim. Every `test -f` line must exit 0.
  - Covers all three images under `assets/images/` and all five GIFs under `assets/gifs/`.
  - _Requirements: 2.5, 2.6_
  - _Verification target: V2_

- [x] 15. Run V3 — old root-level files are gone
  - Execute the V3 `for` loop from `design.md` § Testing Strategy verbatim. The loop must complete with exit 0 and print no `stale:` lines.
  - Covers removal of all 8 binary assets, both renamed HTML files, and `.wiki.md`.
  - _Requirements: 1.7, 13.1_
  - _Verification target: V3_

- [x] 16. Run V4 — no stale page references in the served pages
  - Execute the three `! grep -nF` lines from `design.md` § Testing Strategy V4. Each must exit 0 (i.e. `grep` finds zero matches).
  - Searches for `mahak-chanana-resume.pdf`, `mahak-sharma-portfolio.html`, and `credit-lite-portfolio-theme.html` across `index.html`, `swap-case-study.html`, `credit-lite-case-study.html`.
  - _Requirements: 3.3, 4.6_
  - _Verification target: V4_

- [x] 17. Run V5 — required new references are present in the served pages
  - Execute the V5 block from `design.md` § Testing Strategy verbatim. Every `grep -qF` line must exit 0.
  - Covers `index.html` references to the resume path, all three image paths, and both case-study links; `swap-case-study.html` references to all five GIF paths and to `./index.html`; and `credit-lite-case-study.html` reference to `./index.html`.
  - _Requirements: 3.1, 4.1, 4.2, 4.3, 4.4, 4.5, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 6.1_
  - _Verification target: V5_

- [x] 18. Run V6 — resume `download` attribute preserved
  - Execute `grep -cE 'href="\./assets/resume/mahak-sharma-resume\.pdf" download' index.html`. The output must be exactly `2` (hero CTA + contact link).
  - _Requirements: 3.2_
  - _Verification target: V6_

- [x] 19. Run V7 — `.gitignore` covers `.DS_Store`
  - Execute the V7 `grep` from `design.md` § Testing Strategy. The check must exit 0, confirming a `.DS_Store` ignore pattern is present in `.gitignore`.
  - _Requirements: 11.1, 11.2_
  - _Verification target: V7_

- [~] 20. Run V8 — out-of-scope directories are byte-identical
  - Execute the V8 post-state commands from `design.md` § Testing Strategy: regenerate the tree listing under `app uploads .atoms`, `diff` against `/tmp/oos-before.txt` from task 1, and run `git status --porcelain -- app uploads .atoms`.
  - The diff must be empty and the `git status` output must be empty.
  - If either is non-empty, revert any inadvertent changes inside `app/`, `uploads/`, or `.atoms/` before proceeding.
  - _Requirements: 12.1, 12.2, 12.3, 12.4_
  - _Verification target: V8_

- [~] 21. Run V9 — all local references resolve except the intentionally absent resume PDF
  - Execute the V9 pipeline from `design.md` § Testing Strategy verbatim against `index.html`, `swap-case-study.html`, and `credit-lite-case-study.html`.
  - The only allowed missing file is `assets/resume/mahak-sharma-resume.pdf`. Any other `broken:` line means a reference is dangling and must be fixed (re-check tasks 3, 4, 7, 8, 9).
  - _Requirements: 7.1, 7.4_
  - _Verification target: V9_

- [~] 22. Manual smoke check — open `index.html` in a browser and confirm rendering and navigation
  - Open `index.html` directly from the filesystem (or via `python -m http.server 8000`).
  - Confirm the headshot, SWAP card, and Credit Lite card all render without missing-asset placeholders.
  - Click the SWAP card; confirm `swap-case-study.html` loads and all five GIFs render.
  - Click the Credit Lite card; confirm `credit-lite-case-study.html` loads.
  - From each case study, click the wordmark and the "Back to portfolio" / "Back to Projects" anchors; confirm each returns to `index.html`.
  - Click "Download resume" on `index.html`; confirm the browser attempts to download `mahak-sharma-resume.pdf` (a 404 is expected and acceptable until the PDF is added).
  - _Requirements: 7.2, 7.3, 7.4, 8.1, 8.2, 8.3, 8.4_

## Notes

- Every task references the requirement clauses it satisfies and, where applicable, the V-number from `design.md` § Testing Strategy.
- Tasks 1 and 20 form a snapshot/diff pair that enforces the out-of-scope boundary (Requirement 12).
- Tasks 5 and 6 must precede tasks 7 and 9 respectively because the in-page edits operate on the renamed files.
- No task creates `assets/resume/mahak-sharma-resume.pdf`; the PDF is added separately, as documented in `README.md` and Requirement 2.8.
- All `git mv` operations preserve file history (design risk R4); `git status` after the moves should show `renamed:` lines, not paired `deleted:`/`new file:` lines.

## Workflow Completion

This workflow produces planning artifacts only. Once `tasks.md` is in place, the implementer can begin execution by opening `tasks.md` and clicking "Start task" next to each item, working top to bottom.
