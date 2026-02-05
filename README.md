# Custom Element Template

Goals:
- Develop Web Components with a fast dev server (Vite)
- Author in TypeScript
- Keep HTML/CSS/LESS in separate files with syntax highlighting
- Build a **single** browser-friendly JS file for `<script src="..."></script>`

## Quick start

```bash
# Install dependencies
npm install

# Rename the template (optional)
npm run rename -- --tag fancy-dialog --class FancyDialog

# Start the dev server
npm run dev
```

## Renaming the template

The rename script is conservative; it only replaces known placeholders from the template. It is recommended to run it before making any other changes to the codebase. You can run it multiple times if needed.

- Custom element tag names must contain a hyphen.
- If the `--class` option is omitted, it defaults to an UpperCamelCase version of the tag name.

## Build a single JS file

```bash
npm run build
```

Output:
- `dist/my-element.js` (or whatever you named your element)  
This is an IIFE bundle; include it via a normal `<script>` tag.

Preview the bundled output:
```bash
npm run preview
```
