import heroFeast from "@/assets/hero-feast.jpg";
import weddingFeast from "@/assets/wedding-feast.jpg";
import cookingTeam from "@/assets/cooking-team.jpg";
import buffet from "@/assets/gallery-buffet.jpg";
import leafService from "@/assets/gallery-leaf-service.jpg";
import event from "@/assets/gallery-event.jpg";
import pulihora from "@/assets/dish-pulihora.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import payasam from "@/assets/dish-payasam.jpg";
import gongura from "@/assets/dish-gongura.jpg";

export type GalleryCategory = "food" | "weddings" | "buffet" | "banana-leaf" | "events" | "cooking";

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  te: string;
  category: GalleryCategory;
  width: number;
  height: number;
};

export const galleryFilters: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "banana-leaf", label: "Banana Leaf" },
  { id: "buffet", label: "Buffet" },
  { id: "cooking", label: "Cooking" },
  { id: "events", label: "Events" },
  { id: "food", label: "Flavours" },
];

/* Photographs from Sri Kousalya feasts and events. */
export const galleryImages: GalleryImage[] = [
  {
    src: heroFeast,
    alt: "Traditional Andhra banana leaf meal with rice, pappu and curries",
    title: "Traditional Banana Leaf Meal",
    te: "అరటి ఆకు భోజనం",
    category: "banana-leaf",
    width: 1600,
    height: 1104,
  },
  {
    src: weddingFeast,
    alt: "Guests seated for a Telugu wedding feast served from brass vessels",
    title: "Telugu Wedding Feast",
    te: "పెళ్లి విందు వైభవం",
    category: "weddings",
    width: 1600,
    height: 1104,
  },
  {
    src: leafService,
    alt: "Server pouring curry onto a banana leaf at a function",
    title: "Authentic Leaf Service",
    te: "ఆప్యాయతతో వడ్డన",
    category: "banana-leaf",
    width: 1200,
    height: 900,
  },
  {
    src: buffet,
    alt: "Catering buffet counter with brass chafing dishes",
    title: "Traditional Buffet Setup",
    te: "ఆధునిక బఫే అమరిక",
    category: "buffet",
    width: 1200,
    height: 900,
  },
  {
    src: cookingTeam,
    alt: "Catering cooks preparing rice in large brass vessels",
    title: "Live Cooking Preparation",
    te: "ప్రత్యక్ష వంటశాల",
    category: "cooking",
    width: 1408,
    height: 1008,
  },
  {
    src: event,
    alt: "Family gathering sharing a traditional meal at a housewarming",
    title: "Family Feasts & Functions",
    te: "శుభకార్యాల విందు",
    category: "events",
    width: 1200,
    height: 900,
  },
  {
    src: biryani,
    alt: "Andhra biryani served in a brass handi",
    title: "Authentic Andhra Biryani",
    te: "ఆంధ్రా దమ్ బిర్యానీ",
    category: "food",
    width: 900,
    height: 900,
  },
  {
    src: pulihora,
    alt: "Pulihora tamarind rice in a brass bowl",
    title: "Temple Style Pulihora",
    te: "గుడి పులిహోర",
    category: "food",
    width: 900,
    height: 900,
  },
  {
    src: gongura,
    alt: "Gongura pachadi with red chillies and garlic",
    title: "Spicy Gongura Pachadi",
    te: "గోంగూర పచ్చడి",
    category: "food",
    width: 900,
    height: 900,
  },
  {
    src: payasam,
    alt: "Semiya payasam garnished with cashews and raisins",
    title: "Festive Semiya Payasam",
    te: "సేమియా పాయసం",
    category: "food",
    width: 900,
    height: 900,
  },
];
