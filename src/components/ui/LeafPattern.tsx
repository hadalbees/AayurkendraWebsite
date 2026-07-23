export function LeafPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none text-ayur-green/8 ${className}`}
      viewBox="0 0 120 120"
      fill="currentColor"
      aria-hidden
    >
      <path d="M60 8C45 28 20 35 12 55c-6 16 2 38 22 48 8-22 18-38 26-55-10-8-18-22 0-40z" />
      <path d="M95 25c-8 14-22 22-30 38 12 4 22 14 28 28 14-18 18-42 2-66z" opacity="0.6" />
    </svg>
  );
}

export function LeafAccent({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none overflow-hidden ${className}`} aria-hidden>
      <LeafPattern className="w-48 h-48 sm:w-64 sm:h-64" />
    </div>
  );
}
