import type { SVGProps } from "react";

export type OccasionIconName =
  | "weddings"
  | "engagements"
  | "housewarming"
  | "birthday"
  | "family"
  | "pooja"
  | "corporate"
  | "special";

export function OccasionIcon({
  name,
  className = "size-10",
  ...props
}: { name: OccasionIconName } & SVGProps<SVGSVGElement>) {
  switch (name) {
    case "housewarming":
      // Traditional Indian home with triangular roof, chimney, arched double doorway and threshold
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          {...props}
        >
          {/* Roof & Chimney */}
          <path d="M3 12L12 4l9 8" />
          <path d="M18 9.5V5.5h-2.5v2" />
          {/* House walls */}
          <path d="M5 11v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
          {/* Arched doorway with traditional division */}
          <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
          <line x1="12" y1="15" x2="12" y2="21" />
          {/* Auspicious threshold toranam dot */}
          <circle cx="12" cy="10" r="1.2" fill="currentColor" />
        </svg>
      );

    case "weddings":
      // Kalyana Mandapam with sacred coconut kalash & pillars
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          {...props}
        >
          {/* Mandapam Roof & Kalash */}
          <path d="M3 9c3.5-3.5 6-4 9-4s5.5.5 9 4" />
          <path d="M12 2l-1.5 1.5M12 2l1.5 1.5M12 5v-3" />
          <circle cx="12" cy="3.5" r="1" fill="currentColor" />
          {/* Columns */}
          <line x1="5" y1="9" x2="5" y2="21" />
          <line x1="19" y1="9" x2="19" y2="21" />
          {/* Inner arch & sacred flame */}
          <path d="M8 21v-7a4 4 0 0 1 8 0v7" />
          <path
            d="M12 17c-1 0-1.5-1-1.5-2 0-1.5 1.5-2.5 1.5-2.5s1.5 1 1.5 2.5c0 1-.5 2-1.5 2z"
            fill="currentColor"
            fillOpacity="0.25"
          />
          <line x1="3" y1="21" x2="21" y2="21" />
        </svg>
      );

    case "engagements":
      // Intertwined engagement rings with brilliant diamond facets
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          {...props}
        >
          {/* Left Ring */}
          <circle cx="9" cy="14" r="5" />
          {/* Right Ring */}
          <circle cx="15" cy="14" r="5" />
          {/* Diamond atop left ring */}
          <path d="M9 9l-2.5-3.5h5L9 9z" fill="currentColor" fillOpacity="0.25" />
          {/* Sparkle rays */}
          <line x1="9" y1="2.5" x2="9" y2="4.5" />
          <line x1="5.5" y1="4.5" x2="7" y2="5.5" />
          <line x1="12.5" y1="4.5" x2="11" y2="5.5" />
        </svg>
      );

    case "birthday":
      // Two-tier celebration birthday cake with candles and frosting
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          {...props}
        >
          {/* Bottom Tier */}
          <rect x="4" y="14" width="16" height="7" rx="1.5" />
          {/* Top Tier */}
          <rect x="7" y="9" width="10" height="5" rx="1" />
          {/* Candles */}
          <line x1="9.5" y1="9" x2="9.5" y2="6.5" />
          <line x1="14.5" y1="9" x2="14.5" y2="6.5" />
          {/* Candle Flames */}
          <circle cx="9.5" cy="5" r="1" fill="currentColor" />
          <circle cx="14.5" cy="5" r="1" fill="currentColor" />
          {/* Frosting Scallops */}
          <path d="M4 17c1.5 1 2.5 0 4 1s2.5 0 4 1 2.5 0 4 1" />
        </svg>
      );

    case "family":
      // Traditional family celebration emblem with Namaste & celebration arch
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          {...props}
        >
          {/* Center figure */}
          <circle cx="12" cy="7" r="2.5" />
          <path d="M8.5 19v-2a3.5 3.5 0 0 1 7 0v2" />
          {/* Left figure */}
          <circle cx="6" cy="10" r="2" />
          <path d="M3.5 20v-1.5a2.5 2.5 0 0 1 5 0V20" />
          {/* Right figure */}
          <circle cx="18" cy="10" r="2" />
          <path d="M15.5 20v-1.5a2.5 2.5 0 0 1 5 0V20" />
          {/* Celebratory arch */}
          <path d="M4 5c4.5-2.5 11.5-2.5 16 0" strokeDasharray="1.5 1.5" />
        </svg>
      );

    case "pooja":
      // South Indian traditional brass Diya (Deepam) with sacred flame
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          {...props}
        >
          {/* Base */}
          <path d="M6 21h12M9 21v-3h6v3" />
          {/* Stem & rings */}
          <line x1="12" y1="18" x2="12" y2="11" />
          <circle cx="12" cy="14" r="1.5" />
          {/* Oil bowl */}
          <path d="M5 11h14a7 7 0 0 1-14 0z" />
          {/* Sacred Flame */}
          <path
            d="M12 11c-2 0-2.5-2-2.5-3.5 0-2.5 2.5-5 2.5-5s2.5 2.5 2.5 5c0 1.5-.5 3.5-2.5 3.5z"
            fill="currentColor"
            fillOpacity="0.3"
          />
        </svg>
      );

    case "corporate":
      // Corporate executive building & presentation podium
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          {...props}
        >
          {/* High-rise building */}
          <rect x="4" y="4" width="8" height="17" rx="1" />
          <line x1="7" y1="8" x2="9" y2="8" />
          <line x1="7" y1="12" x2="9" y2="12" />
          <line x1="7" y1="16" x2="9" y2="16" />
          {/* Executive Briefcase */}
          <rect x="13" y="10" width="8" height="11" rx="1.5" />
          <path d="M15.5 10V7.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V10" />
          <line x1="13" y1="15" x2="21" y2="15" />
        </svg>
      );

    case "special":
    default:
      // Festive celebration sparkles & auspicious brass thali
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          {...props}
        >
          {/* Center festive sun/burst */}
          <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.25" />
          {/* Burst rays */}
          <line x1="12" y1="3" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="21" />
          <line x1="3" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="21" y2="12" />
          <line x1="5.5" y1="5.5" x2="7.8" y2="7.8" />
          <line x1="16.2" y1="16.2" x2="18.5" y2="18.5" />
          <line x1="5.5" y1="18.5" x2="7.8" y2="16.2" />
          <line x1="16.2" y1="7.8" x2="18.5" y2="5.5" />
          {/* Small sparkle */}
          <path d="M19 4l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z" fill="currentColor" />
        </svg>
      );
  }
}
