
import { useState } from "react";
import { ShoppingCart, Menu, Search, Heart, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems } = useCart();
  
  // Calculate total items in cart
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-garden-800" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <div className="flex-1 flex justify-start md:justify-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 bg-garden-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-xl">G</span>
              </div>
              <span className="font-serif font-bold text-xl sm:text-2xl text-garden-800">GardenVerse</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 px-6">
            <Link to="/" className="font-medium text-garden-800 hover:text-garden-600 transition-colors">Home</Link>
            <Link to="/shop" className="font-medium text-garden-800 hover:text-garden-600 transition-colors">Shop</Link>
            <Link to="/categories" className="font-medium text-garden-800 hover:text-garden-600 transition-colors">Categories</Link>
            <Link to="/care-guides" className="font-medium text-garden-800 hover:text-garden-600 transition-colors">Care Guides</Link>
            <Link to="/about" className="font-medium text-garden-800 hover:text-garden-600 transition-colors">About</Link>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              className="text-garden-800 hover:text-garden-600 transition-colors" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={22} />
            </button>
            <Link to="/wishlist" className="text-garden-800 hover:text-garden-600 transition-colors">
              <Heart size={22} />
            </Link>
            <Link to="/account" className="text-garden-800 hover:text-garden-600 transition-colors">
              <User size={22} />
            </Link>
            <Link to="/cart" className="text-garden-800 hover:text-garden-600 transition-colors relative">
              <ShoppingCart size={22} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-garden-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount > 99 ? '99+' : cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
        
        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-3 border-t border-garden-100 mt-4 transition-all">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for plants, pots, tools..."
                className="w-full p-2 pl-10 border border-garden-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-garden-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-garden-400" size={18} />
            </div>
          </div>
        )}
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-garden-100 mt-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="font-medium text-garden-800 hover:text-garden-600 transition-colors px-2 py-1">Home</Link>
              <Link to="/shop" className="font-medium text-garden-800 hover:text-garden-600 transition-colors px-2 py-1">Shop</Link>
              <Link to="/categories" className="font-medium text-garden-800 hover:text-garden-600 transition-colors px-2 py-1">Categories</Link>
              <Link to="/care-guides" className="font-medium text-garden-800 hover:text-garden-600 transition-colors px-2 py-1">Care Guides</Link>
              <Link to="/about" className="font-medium text-garden-800 hover:text-garden-600 transition-colors px-2 py-1">About</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
