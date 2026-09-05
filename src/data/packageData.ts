export type CateringPackage = {
  name: string;
  te: string;
  bestFor: string;
  guests: string;
  menuFlexibility: string;
  serviceStyle: string;
  highlights: string[];
  featured?: boolean;
};

/* Pricing is never shown — every package is quoted after we understand the event. */
export const packages: CateringPackage[] = [
  {
    name: "Essential",
    te: "సాధారణ విందు",
    bestFor: "Small home functions and poojas",
    guests: "Up to 100 guests",
    menuFlexibility: "Core Andhra meal, limited customisation",
    serviceStyle: "Cooking only or simple buffet",
    highlights: [
      "Rice, pappu, curry, pachadi, sweet",
      "Fresh on-site cooking",
      "Basic serving support",
    ],
  },
  {
    name: "Classic",
    te: "సంప్రదాయ విందు",
    bestFor: "Birthdays, housewarmings, family gatherings",
    guests: "100 – 300 guests",
    menuFlexibility: "Choose from a wider dish list",
    serviceStyle: "Buffet with serving team",
    highlights: [
      "Starters and multiple curries",
      "Sweet and dessert options",
      "Presentation and counters",
    ],
  },
  {
    name: "Wedding Feast",
    te: "పెళ్లి విందు",
    bestFor: "Weddings and receptions",
    guests: "300 – 1000+ guests",
    menuFlexibility: "Fully custom, multi-session menus",
    serviceStyle: "Banana leaf, buffet or both",
    highlights: [
      "Traditional banana leaf bhojanam",
      "Live counters on request",
      "Full serving and coordination team",
    ],
    featured: true,
  },
  {
    name: "Premium Celebration",
    te: "ప్రత్యేక వేడుక",
    bestFor: "Grand celebrations with elaborate spreads",
    guests: "Discussed for your event",
    menuFlexibility: "Signature and speciality dishes",
    serviceStyle: "Premium buffet with live counters",
    highlights: [
      "Extended menu with specials",
      "Refined presentation",
      "Dedicated event coordination",
    ],
  },
];
