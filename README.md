# Custom Element Template (Vite + TS + single-file build)

Goals:
- Develop Web Components with a fast dev server (Vite)
- Author in TypeScript
- Keep HTML/CSS/LESS in separate files with syntax highlighting
- Build a **single** browser-friendly JS file for `<script src="..."></script>`

## Quick start

```bash
npm install
npm run dev
```

Open the local dev URL printed by Vite.

## Build a single JS file

```bash
npm run build
```

Output:
- `dist/my-element.js` (IIFE bundle; include via a normal `<script>` tag)

## Rename the template

```bash
npm run rename -- --tag fancy-dialog --class FancyDialog
```

This updates:
- element tag name (`static tagName`)
- class name
- demo page usage
- build output filename (`dist/<tag>.js`)

Notes:
- Custom element tag names must contain a hyphen.
- The script is conservative; it only replaces known placeholders from the template.
