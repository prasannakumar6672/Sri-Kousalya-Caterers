export type Testimonial = {
  name: string;
  eventType: string;
  quote: string;
  rating: number;
  placeholder: boolean;
};

/*
 * PLACEHOLDER CONTENT — no real customer reviews have been supplied yet.
 * Every entry is marked placeholder:true and is labelled in the UI.
 * Replace with actual reviews (and set placeholder:false) when available.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Sample review",
    eventType: "Wedding",
    quote: "Replace with an actual customer review about the wedding catering experience.",
    rating: 5,
    placeholder: true,
  },
  {
    name: "Sample review",
    eventType: "Housewarming",
    quote: "Replace with an actual customer review about the home function catering.",
    rating: 5,
    placeholder: true,
  },
  {
    name: "Sample review",
    eventType: "Family Function",
    quote: "Replace with an actual customer review about the food and service.",
    rating: 5,
    placeholder: true,
  },
];
