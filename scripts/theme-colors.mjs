import fs from "fs";
import path from "path";

function walk(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) files = files.concat(walk(p));
    else if (p.endsWith(".tsx")) files.push(p);
  }
  return files;
}

const replacements = [
  ["text-primary-green dark:text-white", "text-brown-accent dark:text-cream-bg"],
  ["text-primary-green dark:text-ayurveda-gold", "text-brown-accent dark:text-cream-bg"],
  ["hover:text-primary-green dark:hover:text-ayurveda-gold", "hover:text-brown-dark dark:hover:text-cream-bg"],
  ["group-hover:text-primary-green dark:group-hover:text-ayurveda-gold", "group-hover:text-brown-dark dark:group-hover:text-cream-bg"],
  ["bg-primary-green/5", "bg-brown-accent/8"],
  ["bg-primary-green/10", "bg-brown-accent/10"],
  ["dark:bg-ayurveda-gold/10", "dark:bg-brown-accent/15"],
  ["dark:bg-ayurveda-gold/15", "dark:bg-brown-accent/15"],
  ["dark:bg-ayurveda-gold/20", "dark:bg-brown-accent/20"],
  ["dark:text-ayurveda-gold", "dark:text-cream-bg"],
  ["border-primary-green dark:border-ayurveda-gold", "border-brown-accent"],
  ["border-primary-green/20", "border-brown-accent/25"],
  ["border-primary-green/15", "border-brown-accent/20"],
  ["border-primary-green/30", "border-brown-accent/30"],
  ["border-2 border-primary-green dark:border-ayurveda-gold text-primary-green dark:text-ayurveda-gold", "border-2 border-brown-accent text-brown-accent dark:text-cream-bg"],
  ["from-dark-green", "from-brown-dark"],
  ["via-primary-green", "via-brown-accent"],
  ["to-[#07361a]", "to-[#3D2A18]"],
  ["to-[#063b1c]", "to-[#3D2A18]"],
  ["to-[#042411]", "to-[#3D2A18]"],
  ["to-[#072412]", "to-[#3D2A18]"],
  ["bg-dark-green", "bg-brown-dark"],
  ["dark:from-[#030e09] dark:to-dark-green", "dark:from-[#1F1610] dark:to-brown-dark"],
  ["bg-primary-green dark:bg-ayurveda-gold hover:bg-dark-green dark:hover:bg-ayurveda-gold/90", "bg-primary-green hover:bg-dark-green"],
  ["bg-primary-green dark:bg-ayurveda-gold hover:bg-dark-green", "bg-primary-green hover:bg-dark-green"],
  ["text-primary-green dark:text-ayurveda-gold shrink-0", "text-brown-accent dark:text-cream-bg shrink-0"],
  ["text-primary-green shrink-0", "text-brown-accent shrink-0"],
  ["focus:border-primary-green", "focus:border-brown-accent"],
  ["hover:border-primary-green/30", "hover:border-brown-accent/35"],
  ["hover:border-primary-green/20", "hover:border-brown-accent/25"],
  ["hover:text-dark-green dark:hover:text-ayurveda-gold/80", "hover:text-brown-dark dark:hover:text-cream-bg/80"],
  ["hover:text-dark-green", "hover:text-brown-dark"],
  ["bg-ayurveda-gold hover:bg-ayurveda-gold/90", "bg-primary-green hover:bg-dark-green"],
  ["bg-ayurveda-gold/20 text-ayurveda-gold border border-ayurveda-gold/25", "bg-brown-accent/15 text-brown-accent border border-brown-accent/25"],
  ["text-ayurveda-gold", "text-brown-accent"],
  ["bg-ayurveda-gold/10", "bg-brown-accent/10"],
  ["bg-ayurveda-gold/5", "bg-brown-accent/8"],
  ["border-ayurveda-gold/50", "border-brown-accent/40"],
  ["border-ayurveda-gold/25", "border-brown-accent/25"],
  ["text-primary-green dark:text-theme-muted", "text-brown-accent dark:text-theme-muted"],
  ["group-hover:bg-primary-green/10 dark:group-hover:bg-ayurveda-gold/20", "group-hover:bg-brown-accent/12 dark:group-hover:bg-brown-accent/20"],
  ["bg-gradient-to-br from-primary-green to-ayurveda-gold", "bg-gradient-to-br from-brown-accent to-brown-dark"],
  ['? "border-primary-green dark:border-ayurveda-gold text-primary-green dark:text-ayurveda-gold"', '? "border-brown-accent text-brown-accent dark:text-cream-bg"'],
  ["bg-primary-green dark:bg-ayurveda-gold border-transparent", "bg-primary-green border-transparent"],
  ["after:bg-ayurveda-gold", "after:bg-brown-accent"],
  ["text-primary-green ", "text-brown-accent "],
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
