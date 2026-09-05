import { useEffect, useState } from "react";
import swamiIcon from "@/assets/hero/swami-icon.png";

/**
 * Premium Cinematic Loading Experience for Sri Kousalya Catering & Cooking Services.
 * Inspired by traditional Andhra hospitality, banana leaf bhojanam, and festive warmth.
 *
 * Sequence:
 * Phase 1 (0-300ms): Dark forest green appearance
 * Phase 2 (200-1000ms): Subtle warm gold ambient glow behind central logo
 * Phase 3 (400-1300ms): Traditional mango & banana leaf line-art motif SVG path drawing
 * Phase 4 (700-1600ms): Staggered brand reveal (Lord Swami + SRI KOUSALYA -> Subtitle -> Telugu cultural motto)
 * Phase 5 (1000-1800ms): Smooth antique gold progress line (0% -> 100%)
 * Phase 6 (1800-2400ms): Cinematic upward fade/curtain transition to website
 */
export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"enter" | "animate" | "exit" | "done">("enter");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setVisible(false);
      setPhase("done");
      return;
    }

    // Lock body scroll during initial loading
    document.body.style.overflow = "hidden";

    // Phase 1 -> Phase 2 Transition
    const t1 = setTimeout(() => {
      setPhase("animate");
    }, 200);

    // Phase 5: Smooth progress line animation
    const startTime = performance.now();
    const duration = 2000; // 2 seconds for complete sequence

    let animFrame: number;
    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        animFrame = requestAnimationFrame(updateProgress);
      } else {
        // Phase 6: Exit transition
        setPhase("exit");

        // Complete unmount after exit transition
        setTimeout(() => {
          setVisible(false);
          setPhase("done");
          document.body.style.overflow = "";
        }, 700);
      }
    };

    animFrame = requestAnimationFrame(updateProgress);

    // Fallback safety timeout (ensures the website is NEVER permanently blocked)
    const safetyTimer = setTimeout(() => {
      document.body.style.overflow = "";
      setVisible(false);
      setPhase("done");
    }, 3200);

    return () => {
      cancelAnimationFrame(animFrame);
      clearTimeout(t1);
      clearTimeout(safetyTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  const isExiting = phase === "exit";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Sri Kousalya Catering & Cooking Services"
      className={`fixed inset-0 z-[100] min-w-[1280px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#082015] via-[#0c2e1f] to-[#082015] px-6 text-center select-none transition-all duration-700 ease-out ${
        isExiting
          ? "opacity-0 -translate-y-4 scale-[1.02] pointer-events-none"
          : "opacity-100 translate-y-0 scale-100"
      }`}
      style={{
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      {/* Background subtle sacred vignette & warm radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(197, 160, 89, 0.25) 0%, rgba(12, 46, 31, 0.8) 60%, rgba(8, 32, 21, 1) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Center ambient breathing gold aura */}
      <div
        className="pointer-events-none absolute z-0 size-72 sm:size-96 rounded-full blur-3xl transition-opacity duration-1000"
        style={{
          background:
            "radial-gradient(circle, rgba(232, 205, 130, 0.16) 0%, rgba(197, 160, 89, 0.08) 50%, transparent 75%)",
          animation: "pulse-slow 2.4s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-sm sm:max-w-md w-full">
        {/* Traditional Line-Art Motif Framing the Emblem */}
        <div className="relative mb-5 flex items-center justify-center">
          {/* Subtle traditional leaf wreath line-art SVG */}
          <svg
            viewBox="0 0 160 160"
            className="size-32 sm:size-36 text-brand-gold-light pointer-events-none"
            aria-hidden="true"
            fill="none"
          >
            {/* Delicate outer circular guide */}
            <circle
              cx="80"
              cy="80"
              r="74"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeDasharray="4 6"
              className="opacity-30"
            />

            {/* Left Traditional Mango Leaf Arch */}
            <path
              d="M80 10 C50 14, 18 42, 14 80 C11 114, 44 148, 80 152"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="260"
              strokeDashoffset={Math.max(0, 260 - (progress / 100) * 260)}
              className="transition-all duration-300 ease-out opacity-85"
            />

            {/* Right Traditional Mango Leaf Arch */}
            <path
              d="M80 10 C110 14, 142 42, 146 80 C149 114, 116 148, 80 152"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="260"
              strokeDashoffset={Math.max(0, 260 - (progress / 100) * 260)}
              className="transition-all duration-300 ease-out opacity-85"
            />

            {/* Traditional Top Mango Leaf Sprig */}
            <path
              d="M74 14 C77 6, 83 6, 86 14 C83 18, 77 18, 74 14Z"
              stroke="currentColor"
              strokeWidth="0.9"
              fill="currentColor"
              className="opacity-60"
            />
            {/* Left Leaf Accents */}
            <path
              d="M24 55 C18 64, 22 72, 28 66 C32 62, 28 56, 24 55Z"
              stroke="currentColor"
              strokeWidth="0.8"
              className="opacity-50"
            />
            <path
              d="M22 105 C18 96, 22 88, 28 94 C32 98, 28 104, 22 105Z"
              stroke="currentColor"
              strokeWidth="0.8"
              className="opacity-50"
            />
            {/* Right Leaf Accents */}
            <path
              d="M136 55 C142 64, 138 72, 132 66 C128 62, 132 56, 136 55Z"
              stroke="currentColor"
              strokeWidth="0.8"
              className="opacity-50"
            />
            <path
              d="M138 105 C142 96, 138 88, 132 94 C128 98, 132 104, 138 105Z"
              stroke="currentColor"
              strokeWidth="0.8"
              className="opacity-50"
            />

            {/* Bottom Kalasam / Deepam motif base */}
            <path
              d="M72 148 h16 M76 148 c0 4 8 4 8 0"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              className="opacity-70"
            />
          </svg>

          {/* Central Lord Venkateswara Swami Temple Arch Emblem */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={swamiIcon}
              alt="Sri Venkateswara Swami"
              className="h-16 w-auto object-contain drop-shadow-[0_4px_16px_rgba(232,205,130,0.45)] transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Phase 4: Staggered Brand Reveal */}
        {/* Brand Name */}
        <h1
          className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase drop-shadow-sm transition-all duration-700 ease-out"
          style={{
            opacity: progress > 15 ? 1 : 0,
            transform: progress > 15 ? "translateY(0)" : "translateY(10px)",
          }}
        >
          Sri Kousalya
        </h1>

        {/* Subtitle with Gold Divider */}
        <div
          className="mt-1 flex items-center justify-center gap-2 transition-all duration-700 ease-out delay-100"
          style={{
            opacity: progress > 30 ? 1 : 0,
            transform: progress > 30 ? "translateY(0)" : "translateY(8px)",
          }}
        >
          <span className="rule-gold h-px w-5 sm:w-7" aria-hidden="true" />
          <span className="eyebrow text-[0.62rem] sm:text-xs font-semibold tracking-wider text-brand-gold-light uppercase">
            Catering &amp; Cooking Services
          </span>
          <span className="rule-gold h-px w-5 sm:w-7" aria-hidden="true" />
        </div>

        {/* Telugu Cultural Line */}
        <p
          className="te mt-3 text-sm sm:text-base font-medium text-brand-gold/90 transition-all duration-700 ease-out delay-200"
          style={{
            opacity: progress > 45 ? 1 : 0,
            transform: progress > 45 ? "translateY(0)" : "translateY(8px)",
          }}
        >
          ప్రతి వేడుకకు సంప్రదాయ రుచి
        </p>

        {/* Phase 5: Slender Gold Progress Line */}
        <div className="mt-6 w-40 sm:w-52 mx-auto">
          <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-gold-dark via-brand-gold-light to-brand-gold transition-all duration-150 ease-out shadow-[0_0_8px_rgba(232,205,130,0.7)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
