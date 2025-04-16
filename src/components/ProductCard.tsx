
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isLowStock?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="plant-card group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        
        {/* Badge overlays */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-garden-600 text-white text-xs font-bold px-2 py-1 rounded">New</span>
          )}
          {product.isBestseller && (
            <span className="bg-earth-500 text-white text-xs font-bold px-2 py-1 rounded">Bestseller</span>
          )}
          {product.isLowStock && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Low Stock</span>
          )}
        </div>
        
        {/* Wishlist button */}
        <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-garden-100">
          <Heart size={18} className="text-garden-700" />
        </button>
        
        {/* Quick add to cart */}
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white bg-opacity-95 text-garden-800 font-medium px-4 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-garden-600 hover:text-white transform translate-y-2 group-hover:translate-y-0">
          Add to Cart
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-medium text-lg text-garden-900 hover:text-garden-600 transition-colors">
              {product.name}
            </h3>
          </Link>
          
          {/* Rating stars */}
          <div className="flex items-center">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-200'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-sm text-garden-800 mb-2">{product.category}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.discountPrice ? (
              <>
                <span className="font-bold text-lg text-garden-800">${product.discountPrice.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-bold text-lg text-garden-800">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
