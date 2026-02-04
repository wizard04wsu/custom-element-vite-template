import fs from "node:fs";
import path from "node:path";
import process from "node:process";

// Template placeholders (known from this repo)
const OLD_TAG = "my-element";
const OLD_CLASS = "MyElement";
const OLD_OUTFILE = "my-element.js";
const OLD_LIBNAME = "MyElementBundle";

const root = process.cwd();

function die(msg) {
	console.error(msg);
	process.exit(1);
}

function parseArgs(argv) {
	const out = {};
	for (let i = 0; i < argv.length; i++) {
		const a = argv[i];
		if (a === "--tag") out.tag = argv[++i];
		else if (a === "--class") out.className = argv[++i];
	}
	return out;
}

function toClassName(tag) {
	// "my-element" -> "MyElement"
	return tag
		.split("-")
		.filter(Boolean)
		.map(s => s.charAt(0).toUpperCase() + s.slice(1))
		.join("");
}

function assertValidTag(tag) {
	
	if (!tag || typeof tag !== "string") die("Missing --tag <custom-element-tag>.");
	
	const validCharacters = /^[a-z](?=([a-z0-9-]*).$)\1[a-z0-9]$/.test(tag);
	const hasHyphen = tag.includes('-');
	if (!validCharacters || !hasHyphen) {
		die(`Invalid tag "${tag}". A custom element tag must start with a letter, end with a letter or number, and include a hyphen.`);
	}
}

function read(p) {
	return fs.readFileSync(p, "utf8");
}

function write(p, s) {
	fs.writeFileSync(p, s, "utf8");
}

function replaceAll(s, find, repl) {
	return s.split(find).join(repl);
}

const args = parseArgs(process.argv.slice(2));
const newTag = args.tag?.toLowerCase?.();
assertValidTag(newTag);

const newClass = args.className || toClassName(newTag);
if (!/^[A-Z][A-Za-z0-9_]*$/.test(newClass)) {
	die(`Invalid class name "${newClass}". Expects upper camel case.`);
}

const newOutfile = `${newTag}.js`;
const newLibname = `${newClass}Bundle`;

const files = [
	path.join(root, "index.html"),
	path.join(root, "src", "element.ts"),
	path.join(root, "src", "main.ts"),
	path.join(root, "vite.config.ts"),
	path.join(root, "README.md"),
];

for (const f of files) {
	const before = read(f);
	let after = before;

	after = replaceAll(after, OLD_TAG, newTag);
	after = replaceAll(after, OLD_CLASS, newClass);
	after = replaceAll(after, OLD_OUTFILE, newOutfile);
	after = replaceAll(after, OLD_LIBNAME, newLibname);

	if (after !== before) write(f, after);
}

console.log(`Renamed template:`);
console.log(`- tag:       ${OLD_TAG} -> ${newTag}`);
console.log(`- class:     ${OLD_CLASS} -> ${newClass}`);
console.log(`- output:    ${OLD_OUTFILE} -> ${newOutfile}`);
console.log(`- lib name:  ${OLD_LIBNAME} -> ${newLibname}`);
