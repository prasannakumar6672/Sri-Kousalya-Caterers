import type { OccasionIconName } from "@/components/common/OccasionIcon";

export type Occasion = {
  id: OccasionIconName;
  title: string;
  te: string;
  description: string;
};

export const occasions: Occasion[] = [
  {
    id: "weddings",
    title: "Weddings",
    te: "పెళ్లి విందు",
    description: "Traditional wedding bhojanam served on banana leaf or buffet.",
  },
  {
    id: "engagements",
    title: "Engagements",
    te: "నిశ్చితార్థం",
    description: "Elegant menus for pellikuthuru and engagement gatherings.",
  },
  {
    id: "housewarming",
    title: "Housewarming",
    te: "గృహప్రవేశం",
    description: "Auspicious meals prepared fresh at your new home.",
  },
  {
    id: "birthday",
    title: "Birthday Parties",
    te: "పుట్టినరోజు",
    description: "Family-friendly spreads with Andhra favourites and sweets.",
  },
  {
    id: "family",
    title: "Family Functions",
    te: "కుటుంబ వేడుకలు",
    description: "Naming ceremonies, anniversaries and reunions of every size.",
  },
  {
    id: "pooja",
    title: "Poojas & Religious Events",
    te: "పూజలు",
    description: "Pure vegetarian satvik cooking prepared with care.",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    te: "కార్యాలయ కార్యక్రమాలు",
    description: "Punctual, hygienic service for office events and meetings.",
  },
  {
    id: "special",
    title: "Special Celebrations",
    te: "ప్రత్యేక వేడుకలు",
    description: "Festivals, get-togethers and any occasion worth a feast.",
  },
];
