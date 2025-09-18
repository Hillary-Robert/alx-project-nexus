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
