export interface AboutFeature {
  id: string;
  title: string;
  te: string;
  description: string;
  iconName: "Flame" | "Leaf" | "ShieldCheck" | "Users";
}

export const homeAboutFeatures: AboutFeature[] = [
  {
    id: "tradition",
    title: "Heritage Recipes",
    te: "సాంప్రదాయ వంటలు",
    description: "Authentic Andhra preparation in time-tested proportions.",
    iconName: "Flame",
  },
  {
    id: "freshness",
    title: "Fresh Sourcing",
    te: "తాజా సరుకులు",
    description: "Quality ingredients bought fresh for every single event.",
    iconName: "Leaf",
  },
  {
    id: "hygiene",
    title: "Pure Hygiene",
    te: "పరిశుభ్రత",
    description: "Clean preparation, covered vessels and spotless service.",
    iconName: "ShieldCheck",
  },
  {
    id: "team",
    title: "Master Cooks",
    te: "అనుభవజ్ఞులైన బృందం",
    description: "Experienced cooking team and attentive serving staff.",
    iconName: "Users",
  },
];
