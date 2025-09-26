export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface FiltersProps {
  q: string;
  setQ: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  limit: number;
  setLimit: (n: number) => void;
  infinite: boolean;
  setInfinite: (v: boolean) => void;
  loading: boolean;
  onApply: () => void;
}


export interface SortBarProps {
  sortBy: "price" | "rating" | "";
  sortOrder: "asc" | "desc" | "";
  setSortBy: (v: "price" | "rating" | "") => void;
  setSortOrder: (v: "asc" | "desc" | "") => void;
  onApply: () => void;
};


export interface Slide {
  image: string;
  title: string;
  text: string;
  ctas: {
    label: string;
    href: string;
    primary?: boolean;
  }[];
}


export interface gridProps {
  searchQuery: string;
  selectedCategory: string;
  sortField: "" | "price" | "rating";
  sortDirection: "" | "asc" | "desc";
  itemsPerPage: number;
  useInfiniteScroll: boolean;
  refreshSignal: number; 
};


export interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  qty: number;
};


export interface CheckoutFormData  {
  fullName: string;
  email: string;
  phone?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  stateRegion: string;
  postalCode: string;
  country: string;
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
};

