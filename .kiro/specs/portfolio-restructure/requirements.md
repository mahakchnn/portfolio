# Requirements Document

## Introduction

The repository root currently mixes the portfolio HTML pages, image assets, animated GIF assets, the LICENSE, a stale wiki note, OS detritus (`.DS_Store`), and the embedded `app/`, `uploads/`, and `.atoms/` folders. This is hard to scan and the resume link is broken (it points to `mahak-chanana-resume.pdf`, an old surname; the correct filename is `mahak-sharma-resume.pdf`). This feature restructures only the root of the repository into a clean static-site layout: a single `index.html`, two case-study pages, and an `assets/` tree split into `images/`, `gifs/`, and `resume/`. All in-page references are updated to match, a `README.md` is added, and `.gitignore` is confirmed to exclude `.DS_Store`. The `app/`, `uploads/`, and `.atoms/` directories are explicitly out of scope. The resume PDF itself is not produced as part of this work; only its target directory is created so the eventual file can drop in without further changes.

## Glossary

- **Repository**: The root of this Git repository, including all files and directories at the top level. Modifications in this spec are limited to root-level files and the new `assets/` directory tree.
- **Restructure_Process**: The set of file moves, renames, and content edits performed to transition the Repository from its pre-feature layout to the layout defined in this document.
- **Portfolio_Page**: The main portfolio HTML page. Before the Restructure_Process its filename is `mahak-sharma-portfolio.html`; after the Restructure_Process its filename is `index.html`.
- **Swap_Case_Study_Page**: The case study HTML page at `swap-case-study.html`. Its filename does not change.
- **Credit_Lite_Case_Study_Page**: The Credit Lite case study HTML page. Before the Restructure_Process its filename is `credit-lite-portfolio-theme.html`; after the Restructure_Process its filename is `credit-lite-case-study.html`.
- **Assets_Directory**: The directory at path `assets/` within the Repository.
- **Images_Directory**: The directory at path `assets/images/` within the Repository.
- **Gifs_Directory**: The directory at path `assets/gifs/` within the Repository.
- **Resume_Directory**: The directory at path `assets/resume/` within the Repository.
- **Resume_File**: The file `mahak-sharma-resume.pdf` whose intended location is `assets/resume/mahak-sharma-resume.pdf`. The Resume_File itself is not produced by this feature.
- **Page**: Any one of Portfolio_Page, Swap_Case_Study_Page, or Credit_Lite_Case_Study_Page.
- **Local_Reference**: An `href` or `src` attribute inside a Page whose value is a relative path (begins with `./` or with no scheme) and which therefore resolves to a path within the Repository.
- **Out_Of_Scope_Directories**: The directories `app/`, `uploads/`, and `.atoms/` at the root of the Repository.

## Requirements

### Requirement 1: Root layout after restructure

**User Story:** As a maintainer browsing the repo, I want a single, predictable static-site layout at the root, so that I can find pages and assets without scanning a flat dump of files.

#### Acceptance Criteria

1. THE Repository SHALL contain a file at path `index.html` whose contents are the post-restructure version of the Portfolio_Page.
2. THE Repository SHALL contain a file at path `swap-case-study.html` whose contents are the post-restructure version of the Swap_Case_Study_Page.
3. THE Repository SHALL contain a file at path `credit-lite-case-study.html` whose contents are the post-restructure version of the Credit_Lite_Case_Study_Page.
4. THE Repository SHALL contain a file at path `LICENSE`, unchanged from before the Restructure_Process.
5. THE Repository SHALL contain a file at path `README.md`.
6. THE Repository SHALL contain a file at path `.gitignore`.
7. WHEN the Restructure_Process completes, THE Repository SHALL no longer contain any of the following root-level files: `mahak-sharma-portfolio.html`, `credit-lite-portfolio-theme.html`, `headshot.png`, `swap_card.png`, `credit_lite_card.png`, `inspiration.gif`, `inspiration-livevideo.gif`, `convincing-app.gif`, `consideration.gif`, `purchase.gif`, `.wiki.md`.

### Requirement 2: Assets directory tree

**User Story:** As a maintainer adding or replacing media, I want all binary assets grouped under `assets/`, so that I always know where they live and pages reference them through one stable prefix.

#### Acceptance Criteria

1. THE Repository SHALL contain an Assets_Directory at path `assets/`.
2. THE Repository SHALL contain an Images_Directory at path `assets/images/`.
3. THE Repository SHALL contain a Gifs_Directory at path `assets/gifs/`.
4. THE Repository SHALL contain a Resume_Directory at path `assets/resume/`.
5. THE Images_Directory SHALL contain the files `headshot.png`, `swap_card.png`, and `credit_lite_card.png`, each byte-identical to the pre-restructure root-level file of the same name.
6. THE Gifs_Directory SHALL contain the files `inspiration.gif`, `inspiration-livevideo.gif`, `convincing-app.gif`, `consideration.gif`, and `purchase.gif`, each byte-identical to the pre-restructure root-level file of the same name.
7. WHERE the Resume_File has not yet been produced, THE Resume_Directory SHALL exist as an empty directory or as a directory containing only Git-tracking placeholders (for example, a `.gitkeep` file).
8. WHEN the Resume_File is later added, THE Resume_File SHALL reside at path `assets/resume/mahak-sharma-resume.pdf`.

### Requirement 3: Resume filename correction

**User Story:** As a recruiter clicking the resume button, I want the linked filename to reflect the current surname, so that the link is unambiguous and matches the file that will eventually be served.

#### Acceptance Criteria

1. THE Portfolio_Page SHALL reference the resume exclusively via the path `./assets/resume/mahak-sharma-resume.pdf`.
2. THE Portfolio_Page SHALL retain the `download` attribute on every anchor element that links to the resume, preserving the pre-restructure behavior of triggering a download rather than navigating.
3. IF any reference to the literal string `mahak-chanana-resume.pdf` exists in any Page after the Restructure_Process, THEN THE Restructure_Process SHALL be considered incomplete.

### Requirement 4: Portfolio page reference updates

**User Story:** As a visitor opening `index.html`, I want the headshot, project thumbnails, project card links, and resume button to all resolve, so that the page renders fully and every link works.

#### Acceptance Criteria

1. THE Portfolio_Page SHALL reference the headshot image exclusively via the path `./assets/images/headshot.png`.
2. THE Portfolio_Page SHALL reference the SWAP project card image exclusively via the path `./assets/images/swap_card.png`.
3. THE Portfolio_Page SHALL reference the Credit Lite project card image exclusively via the path `./assets/images/credit_lite_card.png`.
4. THE Portfolio_Page SHALL link to the SWAP case study exclusively via the path `./swap-case-study.html`.
5. THE Portfolio_Page SHALL link to the Credit Lite case study exclusively via the path `./credit-lite-case-study.html`.
6. IF any reference to the literal strings `credit-lite-portfolio-theme.html` or `mahak-sharma-portfolio.html` exists in any Page after the Restructure_Process, THEN THE Restructure_Process SHALL be considered incomplete.

### Requirement 5: SWAP case study reference updates

**User Story:** As a visitor reading the SWAP case study, I want the embedded GIFs to play and the back-to-portfolio links to return me to the home page, so that the case study is fully navigable.

#### Acceptance Criteria

1. THE Swap_Case_Study_Page SHALL reference the file `inspiration.gif` exclusively via the path `./assets/gifs/inspiration.gif`.
2. THE Swap_Case_Study_Page SHALL reference the file `inspiration-livevideo.gif` exclusively via the path `./assets/gifs/inspiration-livevideo.gif`.
3. THE Swap_Case_Study_Page SHALL reference the file `convincing-app.gif` exclusively via the path `./assets/gifs/convincing-app.gif`.
4. THE Swap_Case_Study_Page SHALL reference the file `consideration.gif` exclusively via the path `./assets/gifs/consideration.gif`.
5. THE Swap_Case_Study_Page SHALL reference the file `purchase.gif` exclusively via the path `./assets/gifs/purchase.gif`.
6. THE Swap_Case_Study_Page SHALL link to the portfolio home from the wordmark and from any "Back to portfolio" or "Back to Projects" anchor exclusively via paths beginning with `./index.html`.

### Requirement 6: Credit Lite case study reference updates

**User Story:** As a visitor reading the Credit Lite case study, I want the back-to-portfolio links to return me to the home page, so that the case study is fully navigable.

#### Acceptance Criteria

1. THE Credit_Lite_Case_Study_Page SHALL link to the portfolio home from the wordmark and from any "Back to portfolio" or "Back to Projects" anchor exclusively via paths beginning with `./index.html`.

### Requirement 7: Local reference resolution invariant

**User Story:** As a developer opening the site directly from the filesystem, I want every local link and image source on every page to resolve to a file that actually exists, so that I never see a broken image or a 404 — except for the one file that is intentionally not yet present.

#### Acceptance Criteria

1. FOR EACH Local_Reference in any Page, THE Restructure_Process SHALL ensure that the referenced path resolves to an existing file within the Repository, with the single exception of the path `./assets/resume/mahak-sharma-resume.pdf`.
2. WHEN the Portfolio_Page is opened in a browser via the local filesystem, THE Portfolio_Page SHALL render the headshot, the SWAP project card image, and the Credit Lite project card image without missing-asset placeholders.
3. WHEN the Swap_Case_Study_Page is opened in a browser via the local filesystem, THE Swap_Case_Study_Page SHALL render all five embedded GIFs without missing-asset placeholders.
4. IF a user clicks the resume anchor on the Portfolio_Page before the Resume_File has been added to the Repository, THEN THE browser SHALL receive the standard "file not found" response for `./assets/resume/mahak-sharma-resume.pdf`, and no other anchor on the Portfolio_Page SHALL be affected.

### Requirement 8: Bidirectional navigation between pages

**User Story:** As a visitor moving between the home page and a case study, I want the link in each direction to go to the right page, so that navigation feels closed and predictable.

#### Acceptance Criteria

1. WHEN a user activates the SWAP project card on the Portfolio_Page, THE browser SHALL load `swap-case-study.html`.
2. WHEN a user activates the Credit Lite project card on the Portfolio_Page, THE browser SHALL load `credit-lite-case-study.html`.
3. WHEN a user activates the wordmark or any "Back to portfolio" anchor on the Swap_Case_Study_Page, THE browser SHALL load `index.html`.
4. WHEN a user activates the wordmark or any "Back to portfolio" anchor on the Credit_Lite_Case_Study_Page, THE browser SHALL load `index.html`.

### Requirement 9: Visual design and content preservation

**User Story:** As the portfolio owner, I want the restructure to be invisible to anyone reading the pages, so that the visual design and written content I have already approved are not disturbed.

#### Acceptance Criteria

1. WHEN the Restructure_Process is applied, THE Portfolio_Page SHALL differ from `mahak-sharma-portfolio.html` only in (a) `href` and `src` attribute values that point to relocated or renamed Repository files and (b) whitespace or encoding-neutral edits required to perform those attribute changes.
2. WHEN the Restructure_Process is applied, THE Swap_Case_Study_Page SHALL differ from its pre-restructure form only in `href` and `src` attribute values that point to relocated or renamed Repository files.
3. WHEN the Restructure_Process is applied, THE Credit_Lite_Case_Study_Page SHALL differ from `credit-lite-portfolio-theme.html` only in `href` attribute values that point to relocated or renamed Repository files.
4. THE Restructure_Process SHALL NOT introduce changes to any `<style>` block, inline `style` attribute, copy text, heading, list item, or non-link DOM structure within any Page.

### Requirement 10: README

**User Story:** As a first-time visitor to the repository, I want a top-level README that explains what the project is and how to view the site, so that I can orient myself in under a minute.

#### Acceptance Criteria

1. THE Repository SHALL contain a file at path `README.md` at the root of the Repository.
2. THE README.md SHALL identify the project as Mahak Sharma's portfolio.
3. THE README.md SHALL document the post-restructure root layout, including the role of `index.html`, the two case-study pages, the `assets/images/` directory, the `assets/gifs/` directory, and the `assets/resume/` directory.
4. THE README.md SHALL state that the Resume_File `mahak-sharma-resume.pdf` belongs at `assets/resume/mahak-sharma-resume.pdf` and is added separately from this restructure.
5. THE README.md SHALL provide instructions for viewing the site locally, sufficient to reproduce a working render of `index.html` from a fresh clone.

### Requirement 11: .gitignore covers OS detritus

**User Story:** As a contributor on macOS, I want `.DS_Store` files to be ignored by Git, so that they never enter the repository's history.

#### Acceptance Criteria

1. THE `.gitignore` file SHALL contain a pattern that causes Git to ignore files named `.DS_Store` at any depth within the Repository.
2. WHEN a `.DS_Store` file is created at any depth within the Repository, THE Git index SHALL exclude that file from staging by default.

### Requirement 12: Out-of-scope directories are untouched

**User Story:** As the owner of the embedded React app and the uploads and atoms folders, I want the restructure to leave those directories alone, so that nothing inside them shifts beneath me.

#### Acceptance Criteria

1. THE Restructure_Process SHALL leave every file and subdirectory inside `app/` byte-identical to its pre-restructure state.
2. THE Restructure_Process SHALL leave every file and subdirectory inside `uploads/` byte-identical to its pre-restructure state.
3. THE Restructure_Process SHALL leave every file and subdirectory inside `.atoms/` byte-identical to its pre-restructure state.
4. THE Restructure_Process SHALL NOT add any new file or subdirectory to `app/`, `uploads/`, or `.atoms/`.

### Requirement 13: Stale documentation removal

**User Story:** As a future reader of the repo, I want stale notes that contradict the current structure to be removed, so that I do not act on outdated information.

#### Acceptance Criteria

1. WHEN the Restructure_Process completes, THE Repository SHALL no longer contain the file `.wiki.md` at its root, since its content describes a layout that is superseded by this restructure and by the README.md introduced in Requirement 10.
