export const site = {
  name: "Sri Kousalya",
  tagline: "Catering & Cooking Services",
  taglineTe: "సంప్రదాయ ఆంధ్ర విందు సేవలు",
  city: "Visakhapatnam",
  area: "Dabagardens",
  phones: [
    { display: "94405 56567", tel: "+919440556567", wa: "919440556567" },
    { display: "94407 88924", tel: "+919440788924", wa: "919440788924" },
  ],
  address: {
    lines: [
      "D.No. 28-9-55/1 & 2",
      "Opp. Saraswathi Park",
      "Near Ganesh Parlour",
      "Dabagardens",
      "Visakhapatnam – 530 020",
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Dabagardens%2C%20Visakhapatnam%20530020",
    embed:
      "https://www.google.com/maps?q=Dabagardens,%20Visakhapatnam,%20Andhra%20Pradesh%20530020&output=embed",
  },
  /* Replace with actual business social profiles when available. */
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  showTestimonials: true, // placeholder reviews are clearly marked until real ones arrive
} as const;

export const primaryPhone = site.phones[0];

export function waLink(message: string, number: string = primaryPhone.wa) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  "Hello Sri Kousalya, I would like to enquire about catering for my event.";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const eventTypes = [
  "Wedding",
  "Engagement",
  "Housewarming",
  "Birthday",
  "Family Function",
  "Corporate Event",
  "Religious Function",
  "Other",
] as const;

export const foodPreferences = ["Vegetarian", "Non-Vegetarian", "Both"] as const;

export const serviceTypes = [
  "Buffet",
  "Banana Leaf",
  "Cooking Only",
  "Full Catering",
  "Custom",
] as const;

export const guestRanges = [
  "Up to 50",
  "50 – 150",
  "150 – 300",
  "300 – 600",
  "600 – 1000",
  "1000+",
] as const;
