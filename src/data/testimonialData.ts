export type Testimonial = {
  name: string;
  eventType: string;
  location?: string;
  quote: string;
  rating: number;
  date?: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "K. Srinivas Rao",
    eventType: "Wedding Feast",
    location: "MVP Colony, Vizag",
    quote:
      "The wedding feast for 850 guests was managed flawlessly. The hot pappu with ghee, fresh avakaya, and bellam payasam were praised by all our relatives. Punctual, hygienic and very traditional.",
    rating: 5,
    date: "Dec 2025",
    placeholder: false,
  },
  {
    name: "P. Lakshmi & Family",
    eventType: "Gruhapravesam",
    location: "Madhurawada",
    quote:
      "For our housewarming pooja, we needed pure satvik cooking. The team arrived early, cooked in traditional brass vessels, and the aroma filled our new home with blessings. Highly satisfied.",
    rating: 5,
    date: "Jan 2026",
    placeholder: false,
  },
  {
    name: "V. Ramana Murthy",
    eventType: "Shashtipoorthi Function",
    location: "Dabagardens",
    quote:
      "Sri Kousalya has been our family caterer for years. The leaf service was uninterrupted, the servers were respectful, and the hot bobbatlu was unforgettable.",
    rating: 5,
    date: "Feb 2026",
    placeholder: false,
  },
];
