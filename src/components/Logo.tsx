export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden fill="none">
        <rect x="2" y="2" width="28" height="28" rx="6" fill="#1a73e8" />
        <path
          d="M8 22V13l8-6 8 6v9"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="23" cy="23" r="4" fill="#34a853" stroke="#fff" strokeWidth="1.5" />
      </svg>
      <span className="text-[18px] font-medium tracking-tight text-ink">Your Bhoomi</span>
    </span>
  );
}
