/** Subtle traditional line motifs — one per major section, never behind text. */

export function MangoLeafDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="rule-gold w-16 sm:w-24" />
      <svg width="26" height="16" viewBox="0 0 26 16" fill="none" className="text-gold">
        <path
          d="M13 1c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M13 2v12M2 8h5M19 8h5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      <span className="rule-gold w-16 sm:w-24" />
    </div>
  );
}

export function BananaLeafOutline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 60C10 30 55 10 100 10s90 20 90 50-45 50-90 50-90-20-90-50Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M10 60h180" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 9 }).map((_, i) => (
        <path
          key={i}
          d={`M${28 + i * 18} 24c6 12 6 60 0 72`}
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.7"
        />
      ))}
    </svg>
  );
}

export function BrassVessel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M14 26h36c0 16-6 26-18 26S14 42 14 26Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 24h44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M24 18c0-4 3-6 8-6s8 2 8 6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
