import { CheckoutFormData, Slide } from "@/interface";

export const slides: Slide[] = [
  {
    image: "/hero1.jpg",
    title: "Discover Products Easily",
    text: "Search, filter, sort, and scroll through our API-powered catalog. Fast. Responsive. Accessible.",
    ctas: [
      { label: "Browse Catalog", href: "#catalog", primary: true },
      { label: "Smartphones", href: "/category/smartphones" },
    ],
  },

  {
    image: "/hero4.jpg",
    title: "Kitchen Gadgets",
    text: "Upgrade your cooking experience with smart, modern kitchen tools designed to save time and effort.",
    ctas: [
      {
        label: "View Kitchen Gadgets",
        href: "/category/kitchen-gadgets",
        primary: true,
      },
      { label: "Browse All", href: "#catalog" },
    ],
  },
  
  {
    image: "/hero2.jpg",
    title: "Shop the Latest Laptops",
    text: "Find laptops with the best specs, sorted and filtered to your needs.",
    ctas: [
      { label: "View Laptops", href: "/category/laptops", primary: true },
      { label: "Browse All", href: "#catalog" },
    ],
  },
  {
    image: "/hero3.jpg",
    title: "Fragrances & Skincare",
    text: "Explore products that make you feel and look great, curated for you.",
    ctas: [
      { label: "View Fragrances", href: "/category/fragrances", primary: true },
      { label: "View Skincare", href: "/category/skincare" },
    ],
  },

  
];


export const CATEGORIES = ["all","smartphones","laptops","fragrances","skincare","groceries","home-decoration"];





export const initialForm: CheckoutFormData = {
  fullName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  stateRegion: "",
  postalCode: "",
  country: "",
  cardName: "",
  cardNumber: "",
  cardExpiry: "",
  cardCvc: "",
};
