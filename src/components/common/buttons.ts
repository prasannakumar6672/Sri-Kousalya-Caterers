export const btnBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export const btnPrimary = `${btnBase} bg-primary text-primary-foreground shadow-soft hover:bg-forest-deep`;

export const btnGold = `${btnBase} bg-gold text-accent-foreground shadow-soft hover:brightness-105`;

export const btnOutline = `${btnBase} border border-primary/25 bg-transparent text-primary hover:border-gold hover:bg-card`;

export const btnOutlineLight = `${btnBase} border border-primary-foreground/35 text-primary-foreground hover:border-gold hover:text-gold-soft`;

export const btnWhatsApp = `${btnBase} bg-[#128C7E] text-white shadow-soft hover:brightness-110`;
