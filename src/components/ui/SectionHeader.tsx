import { FadeIn } from "./Motion";

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className = "",
}: {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <FadeIn direction="down" className={`max-w-2xl mb-14 space-y-3 ${alignClass} ${className}`}>
      <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.2em] text-ayur-green font-semibold">
        {label}
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-brown-dark leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`text-sm sm:text-base text-brown-muted font-light leading-relaxed max-w-xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </FadeIn>
  );
}
