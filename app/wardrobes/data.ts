export type Wardrobe = {
  name: string;
  category: string;
  description: string;
  cover: string;
  gallery: string[];
  items: string[];
  brands: string[];
  circulation: string;
  monthlyFee: number;
  inventoryMix: string;
  newArrival?: boolean;
  sizes: string[];
  seasons: string[];
  occasions: string[];
  styles: string[];
};

export const WARDROBES: Wardrobe[] = [
  {
    name: "Campus Core",
    category: "Everyday",
    description:
      "A balanced rotation for campus, study sessions, and casual nights that still feel intentional.",
    cover: "/wardrobes/campus.jpg",
    gallery: [
      "/wardrobes/203/1.jpg",
      "/wardrobes/203/4.jpg",
      "/wardrobes/203/5.jpg",
      "/wardrobes/203/6.jpg",
    ],
    items: [
      "Relaxed hoodie",
      "Straight-leg denim",
      "Neutral sneakers",
      "Overshirt",
      "Everyday tee",
    ],
    brands: ["COS", "Uniqlo", "Archive streetwear"],
    circulation: "In circulation · 0-2 rotations",
    monthlyFee: 119,
    inventoryMix: "New + refreshed staples",
    sizes: ["XS", "S", "M", "L"],
    seasons: ["Fall", "Winter"],
    occasions: ["School", "Travel"],
    styles: ["Casual", "Modern"],
  },
  {
    name: "203 Collection",
    category: "Urban",
    description:
      "Clean silhouettes, sharp layers, and modern essentials with a future-forward edge.",
    cover: "/wardrobes/203/cover.jpg",
    gallery: [
      "/wardrobes/203/1.jpg",
      "/wardrobes/203/2.jpg",
      "/wardrobes/203/3.jpg",
      "/wardrobes/203/4.jpg",
      "/wardrobes/203/5.jpg",
      "/wardrobes/203/6.jpg",
    ],
    items: [
      "Tailored trousers",
      "Structured knit",
      "Minimal leather sneakers",
      "Lightweight coat",
      "Clean base tee",
    ],
    brands: ["Theory", "A.P.C.", "Ami"],
    circulation: "In circulation · Launch release",
    monthlyFee: 189,
    inventoryMix: "Fresh drop",
    newArrival: true,
    sizes: ["S", "M", "L", "XL"],
    seasons: ["Fall", "Winter"],
    occasions: ["Work", "Events", "Travel"],
    styles: ["Minimal", "Tailored"],
  },
  {
    name: "Weekend Social",
    category: "Going Out",
    description:
      "Statement layers and sharp denim for nights out, events, and elevated casual looks.",
    cover: "/wardrobes/weekend.jpg",
    gallery: [
      "/wardrobes/203/2.jpg",
      "/wardrobes/203/3.jpg",
      "/wardrobes/203/5.jpg",
      "/wardrobes/203/6.jpg",
    ],
    items: ["Fitted jacket", "Premium tee", "Slim denim", "Dress sneakers"],
    brands: ["AllSaints", "John Elliott", "Modern denim houses"],
    circulation: "In circulation · 1-3 rotations",
    monthlyFee: 149,
    inventoryMix: "New + circulating favorites",
    newArrival: true,
    sizes: ["XS", "S", "M", "L"],
    seasons: ["Spring", "Fall"],
    occasions: ["Events", "Weekend", "Travel"],
    styles: ["Statement", "Modern"],
  },
  {
    name: "Athletic Everyday",
    category: "Active",
    description:
      "Performance-inspired pieces that move from workouts to daily wear without looking technical.",
    cover: "/wardrobes/athletic.jpg",
    gallery: [
      "/wardrobes/203/1.jpg",
      "/wardrobes/203/3.jpg",
      "/wardrobes/203/4.jpg",
      "/wardrobes/203/6.jpg",
    ],
    items: [
      "Technical joggers",
      "Breathable top",
      "Layering hoodie",
      "Training sneakers",
    ],
    brands: ["Nike Lab", "Lululemon", "District Vision"],
    circulation: "In circulation · Just released",
    monthlyFee: 129,
    inventoryMix: "Performance drop + fresh sets",
    newArrival: true,
    sizes: ["S", "M", "L", "XL"],
    seasons: ["Spring", "Summer", "Fall"],
    occasions: ["Active", "Travel"],
    styles: ["Athletic", "Casual"],
  },
  {
    name: "City Commuter",
    category: "Work",
    description:
      "Polished, weather-ready layers for commuting, client meetings, and after-work plans.",
    cover: "/wardrobes/city.jpg",
    gallery: [
      "/wardrobes/203/1.jpg",
      "/wardrobes/203/2.jpg",
      "/wardrobes/203/4.jpg",
    ],
    items: [
      "Water-resistant topcoat",
      "Merino crew",
      "Tapered chinos",
      "Hybrid commuter sneaker",
    ],
    brands: ["Norse Projects", "Everlane", "Rains"],
    circulation: "In circulation · Refreshed this month",
    monthlyFee: 169,
    inventoryMix: "New arrivals + kept favorites",
    sizes: ["S", "M", "L"],
    seasons: ["Fall", "Winter"],
    occasions: ["Work", "Travel"],
    styles: ["Tailored", "Minimal"],
  },
];

export const NEW_ARRIVALS = WARDROBES.filter((w) => w.newArrival);
