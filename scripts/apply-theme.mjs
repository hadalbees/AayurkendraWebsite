import fs from "fs";
import path from "path";

function walk(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) files = files.concat(walk(p));
    else if (p.endsWith(".tsx") || p.endsWith(".ts")) files.push(p);
  }
  return files;
}

const replacements = [
  ["from-ayurveda-gold", "from-brown-muted"],
  ["dark:group-hover:bg-ayurveda-gold/20", "dark:group-hover:bg-brown-accent/20"],
  ["dark:hover:border-ayurveda-gold/30", "dark:hover:border-brown-accent/30"],
  ["hover:bg-ayurveda-gold/30", "hover:bg-brown-accent/30"],
  ["fill-ayurveda-gold", "fill-brown-accent"],
  ["rounded-full bg-ayurveda-gold shrink-0", "rounded-full bg-brown-accent shrink-0"],
  [
    "border border-primary-green/10 dark:border-ayurveda-gold/20",
    "border border-brown-accent/15 dark:border-brown-accent/20",
  ],
  ["border border-primary-green/10", "border border-brown-accent/15"],
  ["from-primary-green/5 to-ayurveda-gold/5", "from-cream-card to-brown-accent/8"],
  ["bg-primary-green bg-primary-green", "bg-primary-green"],
  ["hover:bg-dark-green hover:bg-dark-green", "hover:bg-dark-green"],
  [
    '? "bg-primary-green bg-primary-green text-white shadow-md"',
    '? "bg-brown-accent text-cream-bg shadow-md"',
  ],
  [
    "bg-theme-card border border-primary-green h-5.5",
    "bg-theme-card border border-brown-accent text-brown-accent h-5.5",
  ],
];

let count = 0;
for (const file of walk("src")) {
  let c = fs.readFileSync(file, "utf8");
  const orig = c;
  for (const [from, to] of replacements) c = c.split(from).join(to);
  if (c !== orig) {
    fs.writeFileSync(file, c);
    count++;
  }
}
console.log(`Updated ${count} files`);
