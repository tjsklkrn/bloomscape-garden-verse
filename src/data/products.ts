
import { Product } from "../components/ProductCard";

export const products: Product[] = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 39.99,
    discountPrice: 29.99,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop",
    category: "Indoor Plants",
    rating: 4.5,
    isNew: true,
    isBestseller: true
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1616580175776-9ca9c73c1375?q=80&w=800&auto=format&fit=crop",
    category: "Indoor Plants",
    rating: 4,
    isBestseller: true
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1598880940952-6e9060e721a3?q=80&w=800&auto=format&fit=crop",
    category: "Indoor Plants",
    rating: 5,
    isLowStock: true
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1622398925373-3f91b1ff51ff?q=80&w=800&auto=format&fit=crop",
    category: "Indoor Plants",
    rating: 4
  },
  {
    id: 5,
    name: "Peace Lily",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?q=80&w=800&auto=format&fit=crop",
    category: "Air Purifying Plants",
    rating: 4.5
  },
  {
    id: 6,
    name: "Pothos",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1632520298271-c443903d89f4?q=80&w=800&auto=format&fit=crop",
    category: "Hanging Plants",
    rating: 4.5,
    isNew: true
  },
  {
    id: 7,
    name: "Rubber Plant",
    price: 34.99,
    discountPrice: 27.99,
    image: "https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?q=80&w=800&auto=format&fit=crop",
    category: "Indoor Plants",
    rating: 4
  },
  {
    id: 8,
    name: "Boston Fern",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1617173944883-6fff6c2e7eda?q=80&w=800&auto=format&fit=crop",
    category: "Hanging Plants",
    rating: 3.5,
    isLowStock: true
  },
];

export const categories = [
  {
    id: 1,
    name: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1630796643137-b1c0e377df96?q=80&w=800&auto=format&fit=crop",
    count: 120
  },
  {
    id: 2,
    name: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?q=80&w=800&auto=format&fit=crop",
    count: 85
  },
  {
    id: 3,
    name: "Succulents",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=800&auto=format&fit=crop",
    count: 64
  },
  {
    id: 4,
    name: "Hanging Plants",
    image: "https://images.unsplash.com/photo-1632471894335-1b8080e7bbb7?q=80&w=800&auto=format&fit=crop",
    count: 42
  },
  {
    id: 5,
    name: "Air Purifying",
    image: "https://images.unsplash.com/photo-1597055181449-61396d051ff1?q=80&w=800&auto=format&fit=crop",
    count: 38
  },
  {
    id: 6,
    name: "Planters & Pots",
    image: "https://images.unsplash.com/photo-1622527507227-5d619fe7e7dd?q=80&w=800&auto=format&fit=crop",
    count: 93
  }
];
