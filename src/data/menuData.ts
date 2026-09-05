import pulihora from "@/assets/dish-pulihora.jpg";
import gongura from "@/assets/dish-gongura.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import pappu from "@/assets/dish-pappu.jpg";
import bobbatlu from "@/assets/dish-bobbatlu.jpg";
import payasam from "@/assets/dish-payasam.jpg";
import pesarattu from "@/assets/dish-pesarattu.jpg";

export type Dish = {
  name: string;
  te: string;
  description: string;
  veg: boolean;
  image?: string;
  category: MenuCategoryId;
  signature?: boolean;
};

export type MenuCategoryId =
  | "starters"
  | "rice-biryani"
  | "curries"
  | "dal"
  | "pachadi"
  | "vegetables"
  | "sweets"
  | "desserts"
  | "beverages"
  | "special";

export const menuCategories: { id: MenuCategoryId; label: string; te: string }[] = [
  { id: "starters", label: "Starters", te: "స్టార్టర్స్" },
  { id: "rice-biryani", label: "Rice & Biryani", te: "అన్నం & బిర్యానీ" },
  { id: "curries", label: "Curries", te: "కూరలు" },
  { id: "dal", label: "Dal", te: "పప్పు" },
  { id: "pachadi", label: "Pachadi", te: "పచ్చడి" },
  { id: "vegetables", label: "Vegetables", te: "కూరగాయలు" },
  { id: "sweets", label: "Sweets", te: "మిఠాయిలు" },
  { id: "desserts", label: "Desserts", te: "డెజర్ట్స్" },
  { id: "beverages", label: "Beverages", te: "పానీయాలు" },
  { id: "special", label: "Special Andhra Items", te: "ఆంధ్ర ప్రత్యేకాలు" },
];

/*
 * SAMPLE menu — these are common Andhra catering dishes shown as examples,
 * not a confirmed Sri Kousalya menu. Replace with the actual business menu.
 */
export const dishes: Dish[] = [
  {
    name: "Mirchi Bajji",
    te: "మిర్చి బజ్జీ",
    description: "Stuffed green chilli fritters, a Vizag beachside favourite.",
    veg: true,
    category: "starters",
  },
  {
    name: "Punugulu",
    te: "పునుగులు",
    description: "Crisp dosa-batter fritters served with peanut chutney.",
    veg: true,
    category: "starters",
  },
  {
    name: "Chicken 65",
    te: "చికెన్ 65",
    description: "Spiced fried chicken with curry leaf and green chilli.",
    veg: false,
    category: "starters",
  },
  {
    name: "Andhra Biryani",
    te: "ఆంధ్రా బిర్యానీ",
    description: "Long-grain rice layered with spice, served with raita and salan.",
    veg: false,
    image: biryani,
    category: "rice-biryani",
    signature: true,
  },
  {
    name: "Pulihora",
    te: "పులిహోర",
    description: "Tamarind rice tempered with peanuts, curry leaf and sesame.",
    veg: true,
    image: pulihora,
    category: "rice-biryani",
    signature: true,
  },
  {
    name: "Bagara Annam",
    te: "బగారా అన్నం",
    description: "Fragrant mild rice, the classic partner to curries.",
    veg: true,
    category: "rice-biryani",
  },
  {
    name: "Veg Dum Biryani",
    te: "వెజ్ దమ్ బిర్యానీ",
    description: "Slow-cooked vegetable biryani with whole spices.",
    veg: true,
    category: "rice-biryani",
  },
  {
    name: "Kodi Kura",
    te: "కోడి కూర",
    description: "Traditional Andhra country-style chicken curry.",
    veg: false,
    category: "curries",
  },
  {
    name: "Royyala Iguru",
    te: "రొయ్యల ఇగురు",
    description: "Coastal prawn masala, thick and deeply spiced.",
    veg: false,
    category: "curries",
  },
  {
    name: "Vankaya Masala",
    te: "వంకాయ మసాలా",
    description: "Brinjal in a roasted peanut and sesame gravy.",
    veg: true,
    category: "curries",
  },
  {
    name: "Pappu",
    te: "పప్పు",
    description: "Toor dal with ghee — the heart of every Andhra meal.",
    veg: true,
    image: pappu,
    category: "dal",
    signature: true,
  },
  {
    name: "Tomato Pappu",
    te: "టమాటా పప్పు",
    description: "Tangy dal simmered with ripe tomatoes and tempering.",
    veg: true,
    category: "dal",
  },
  {
    name: "Gongura Pachadi",
    te: "గోంగూర పచ్చడి",
    description: "Sorrel leaf chutney with garlic and red chilli.",
    veg: true,
    image: gongura,
    category: "pachadi",
    signature: true,
  },
  {
    name: "Avakaya",
    te: "ఆవకాయ",
    description: "Classic Andhra raw mango pickle with mustard.",
    veg: true,
    category: "pachadi",
  },
  {
    name: "Dosakaya Pachadi",
    te: "దోసకాయ పచ్చడి",
    description: "Cooling yellow cucumber chutney.",
    veg: true,
    category: "pachadi",
  },
  {
    name: "Beans Vepudu",
    te: "బీన్స్ వేపుడు",
    description: "Dry-fried beans with coconut and tempering.",
    veg: true,
    category: "vegetables",
  },
  {
    name: "Aloo Fry",
    te: "ఆలూ ఫ్రై",
    description: "Crisp potato fry with mild Andhra spice.",
    veg: true,
    category: "vegetables",
  },
  {
    name: "Bobbatlu",
    te: "బొబ్బట్లు",
    description: "Sweet stuffed flatbread served warm with ghee.",
    veg: true,
    image: bobbatlu,
    category: "sweets",
    signature: true,
  },
  {
    name: "Poornam Boorelu",
    te: "పూర్ణం బూరెలు",
    description: "Festive jaggery and lentil sweet dumplings.",
    veg: true,
    category: "sweets",
  },
  {
    name: "Laddu",
    te: "లడ్డు",
    description: "Traditional boondi laddu for auspicious occasions.",
    veg: true,
    category: "sweets",
  },
  {
    name: "Semiya Payasam",
    te: "సేమియా పాయసం",
    description: "Milk dessert with vermicelli, cashew and raisin.",
    veg: true,
    image: payasam,
    category: "desserts",
    signature: true,
  },
  {
    name: "Double Ka Meetha",
    te: "డబుల్ కా మీఠా",
    description: "Rich bread pudding in saffron milk.",
    veg: true,
    category: "desserts",
  },
  {
    name: "Majjiga",
    te: "మజ్జిగ",
    description: "Spiced buttermilk with ginger and curry leaf.",
    veg: true,
    category: "beverages",
  },
  {
    name: "Filter Coffee",
    te: "ఫిల్టర్ కాఫీ",
    description: "Strong South Indian filter coffee.",
    veg: true,
    category: "beverages",
  },
  {
    name: "Pesarattu",
    te: "పెసరట్టు",
    description: "Green gram dosa with ginger chutney and upma.",
    veg: true,
    image: pesarattu,
    category: "special",
    signature: true,
  },
  {
    name: "Ulava Charu",
    te: "ఉలవ చారు",
    description: "Horse gram broth, a coastal Andhra speciality.",
    veg: true,
    category: "special",
  },
  {
    name: "Gutti Vankaya",
    te: "గుత్తి వంకాయ",
    description: "Stuffed baby brinjal in peanut masala.",
    veg: true,
    category: "special",
  },
];

export const signatureDishes = dishes.filter((d) => d.signature);
