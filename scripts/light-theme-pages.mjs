import fs from "fs";
import path from "path";

const pages = [
  "src/app/about/page.tsx",
  "src/app/appointment/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/doctors/page.tsx",
  "src/app/facilities/page.tsx",
  "src/app/gallery/page.tsx",
  "src/app/testimonials/page.tsx",
  "src/app/blog/page.tsx",
  "src/app/therapies/page.tsx",
  "src/app/specialities/page.tsx",
  "src/app/hms-portal/page.tsx",
];

const replacements = [
  ["bg-theme-bg", "bg-cream-bg"],
  ["bg-theme-card", "bg-white"],
  ["text-brown-accent dark:text-cream-bg", "text-brown-dark"],
  ["dark:text-cream-bg", ""],
  ["dark:group-hover:text-cream-bg", ""],
  ["dark:hover:text-cream-bg/80", ""],
  ["from-brown-dark to-[#3D2A18] dark:from-[#1F1610] dark:to-brown-dark text-cream-bg", "from-cream-light to-white text-brown-dark"],
  ["from-brown-dark to-[#3D2A18] text-cream-bg", "from-cream-light to-white text-brown-dark"],
  ["text-cream-bg/80", "text-brown-muted"],
  ["text-cream-bg/95", "text-brown-muted"],
  ["text-brown-accent font-bold", "text-ayur-green font-semibold"],
  ["border-theme-border", "border-brown-dark/8"],
  ["text-theme-fg", "text-brown-dark"],
  ["text-theme-muted", "text-brown-muted"],
  ["text-theme-accent", "text-ayur-green"],
  ["hover:text-brown-dark", "hover:text-ayur-green"],
  ["bg-primary-green hover:bg-dark-green", "bg-ayur-green hover:bg-dark-green"],
  ["bg-primary-green", "bg-ayur-green"],
];

for (const file of pages) {
  if (!fs.existsSync(file)) continue;
  let c = fs.readFileSync(file, "utf8");
  const orig = c;
  for (const [from, to] of replacements) c = c.split(from).join(to);
  if (c !== orig) fs.writeFileSync(file, c);
}
console.log("Updated inner pages");
