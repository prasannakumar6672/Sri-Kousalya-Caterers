import weddingFeast from "@/assets/wedding-feast.jpg";
import cookingTeam from "@/assets/cooking-team.jpg";
import buffet from "@/assets/gallery-buffet.jpg";
import leafService from "@/assets/gallery-leaf-service.jpg";
import heroFeast from "@/assets/hero-feast.jpg";
import event from "@/assets/gallery-event.jpg";

export type Service = {
  slug: string;
  title: string;
  te: string;
  description: string;
  suitedFor: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "full-catering",
    title: "Full Catering",
    te: "సంపూర్ణ కేటరింగ్",
    description:
      "End-to-end catering — menu planning, cooking, serving team and clean-up handled by us.",
    suitedFor: ["Weddings", "Receptions", "Large family functions"],
    image: heroFeast,
  },
  {
    slug: "cooking-services",
    title: "Cooking Services",
    te: "వంట సేవలు",
    description: "Our cooks come to your venue or home and prepare everything fresh on site.",
    suitedFor: ["Home functions", "Poojas", "Small gatherings"],
    image: cookingTeam,
  },
  {
    slug: "wedding-catering",
    title: "Wedding Catering",
    te: "పెళ్లి కేటరింగ్",
    description: "Multi-session wedding menus across muhurtham, reception and family meals.",
    suitedFor: ["Weddings", "Engagements", "Receptions"],
    image: weddingFeast,
  },
  {
    slug: "buffet-service",
    title: "Buffet Service",
    te: "బఫే సర్వీస్",
    description: "Neatly presented counters with hot service, garnishing and attentive staff.",
    suitedFor: ["Receptions", "Corporate events", "Birthdays"],
    image: buffet,
  },
  {
    slug: "banana-leaf-service",
    title: "Banana Leaf Service",
    te: "అరటి ఆకు భోజనం",
    description: "Classic seated bhojanam served in traditional order on fresh banana leaves.",
    suitedFor: ["Weddings", "Religious functions", "Traditional feasts"],
    image: leafService,
  },
  {
    slug: "custom-menu-planning",
    title: "Custom Menu Planning",
    te: "మెనూ ప్రణాళిక",
    description: "We build the menu around your family's tastes, region and dietary needs.",
    suitedFor: ["Any event", "Mixed veg & non-veg", "Festival menus"],
    image: heroFeast,
  },
  {
    slug: "event-food-service",
    title: "Event Food Service",
    te: "ఈవెంట్ ఫుడ్ సర్వీస్",
    description: "Trained serving team, timely courses and organised counters through the event.",
    suitedFor: ["Corporate events", "Community functions"],
    image: event,
  },
  {
    slug: "large-gathering-catering",
    title: "Large Gathering Catering",
    te: "పెద్ద విందులు",
    description: "Bulk cooking with consistent taste and hygiene for high guest counts.",
    suitedFor: ["Temple events", "Reunions", "Large weddings"],
    image: cookingTeam,
  },
];
