import { LucideIcon } from "lucide-react";

type Variant = "hospital" | "therapy" | "speciality" | "doctor" | "facility" | "gallery";

const variantStyles: Record<Variant, string> = {
  hospital: "from-cream-light via-white to-cream-muted",
  therapy: "from-white via-cream-light to-cream-muted",
  speciality: "from-cream-light via-white to-cream-bg",
  doctor: "from-cream-muted via-cream-light to-white",
  facility: "from-white via-cream-light to-cream-muted",
  gallery: "from-cream-light via-white to-cream-bg",
};

export default function PlaceholderImage({
  variant = "hospital",
  icon: Icon,
  label,
  className = "",
}: {
  variant?: Variant;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${variantStyles[variant]} ${className}`}
      role="img"
      aria-label={label ?? "Placeholder image"}
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_30%,_rgba(46,125,50,0.06),_transparent_60%)]" />
      {Icon && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-brown-muted/25">
          <Icon className="h-12 w-12 sm:h-16 sm:w-16" strokeWidth={1} />
          {label && (
            <span className="mt-3 text-[10px] uppercase tracking-[0.2em] font-medium text-brown-light px-4 text-center">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
