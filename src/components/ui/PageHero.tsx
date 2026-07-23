import { FadeIn } from "./Motion";
import { LeafAccent } from "./LeafPattern";

export default function PageHero({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative pt-28 pb-16 sm:pb-20 bg-cream-light overflow-hidden border-b border-brown-dark/5">
      <LeafAccent className="top-0 right-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="down" className="max-w-3xl space-y-4">
          <span className="text-[11px] uppercase tracking-[0.2em] text-ayur-green font-semibold">
            {label}
          </span>
          <h1 className="font-serif text-3.5xl sm:text-5xl font-semibold text-brown-dark leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-sm sm:text-base text-brown-muted font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
