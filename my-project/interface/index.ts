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
