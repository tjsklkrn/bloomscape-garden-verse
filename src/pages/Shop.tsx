
import { useState } from "react";
import { Filter, ChevronDown, Check, Search } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

const priceRanges = [
  { id: "price-1", label: "Under $25", min: 0, max: 25 },
  { id: "price-2", label: "$25 - $50", min: 25, max: 50 },
  { id: "price-3", label: "$50 - $100", min: 50, max: 100 },
  { id: "price-4", label: "Over $100", min: 100, max: 1000 }
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest Arrivals" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "bestselling", label: "Best Selling" },
];

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter products based on selected categories, price ranges, and search query
  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategories.length > 0) {
      const categoryMatch = categories.find(cat => cat.name === product.category);
      if (!categoryMatch || !selectedCategories.includes(categoryMatch.id)) {
        return false;
      }
    }
    
    // Price range filter
    if (selectedPriceRanges.length > 0) {
      const price = product.discountPrice || product.price;
      const priceMatch = selectedPriceRanges.some(rangeId => {
        const range = priceRanges.find(r => r.id === rangeId);
        return range && price >= range.min && price <= range.max;
      });
      
      if (!priceMatch) return false;
    }
    
    // Search query filter
    if (searchQuery) {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
             product.category.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case "price-low":
        return (a.discountPrice || a.price) - (b.discountPrice || b.price);
      case "price-high":
        return (b.discountPrice || b.price) - (a.discountPrice || a.price);
      case "newest":
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      case "bestselling":
        return a.isBestseller ? -1 : b.isBestseller ? 1 : 0;
      default:
        return 0;
    }
  });
  
  const toggleCategory = (categoryId: number) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };
  
  const togglePriceRange = (rangeId: string) => {
    if (selectedPriceRanges.includes(rangeId)) {
      setSelectedPriceRanges(selectedPriceRanges.filter(id => id !== rangeId));
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, rangeId]);
    }
  };
  
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <div className="bg-garden-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-garden-900 mb-2">Shop Plants</h1>
          <p className="text-garden-700">Find the perfect green companions for your space</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg border border-garden-200 p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg text-garden-900">Filters</h2>
                  <button 
                    className="text-garden-600 text-sm hover:underline"
                    onClick={resetFilters}
                  >
                    Reset All
                  </button>
                </div>
                
                {/* Search Input */}
                <div className="mb-6">
                  <label className="block text-garden-800 mb-2 font-medium">Search</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full p-2 pl-10 border border-garden-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-garden-500 focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-garden-400" size={18} />
                  </div>
                </div>
                
                {/* Categories Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-garden-800 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`category-${category.id}`}
                          checked={selectedCategories.includes(category.id)}
                          onChange={() => toggleCategory(category.id)}
                          className="w-4 h-4 text-garden-600 border-garden-300 rounded focus:ring-garden-500"
                        />
                        <label htmlFor={`category-${category.id}`} className="ml-2 text-garden-700">
                          {category.name} ({category.count})
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range Filter */}
                <div>
                  <h3 className="font-medium text-garden-800 mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <div key={range.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={range.id}
                          checked={selectedPriceRanges.includes(range.id)}
                          onChange={() => togglePriceRange(range.id)}
                          className="w-4 h-4 text-garden-600 border-garden-300 rounded focus:ring-garden-500"
                        />
                        <label htmlFor={range.id} className="ml-2 text-garden-700">
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              className="w-full bg-white border border-garden-200 rounded-lg p-3 flex items-center justify-center gap-2 shadow-sm"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <Filter size={18} className="text-garden-700" />
              <span className="font-medium text-garden-800">Filters</span>
              <ChevronDown size={18} className={`text-garden-700 transition-transform ${isMobileFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Filters Dropdown */}
            {isMobileFilterOpen && (
              <div className="mt-4 bg-white border border-garden-200 rounded-lg p-6 shadow-md">
                {/* Search Input */}
                <div className="mb-6">
                  <label className="block text-garden-800 mb-2 font-medium">Search</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full p-2 pl-10 border border-garden-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-garden-500 focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-garden-400" size={18} />
                  </div>
                </div>
                
                {/* Categories Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-garden-800 mb-3">Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map(category => (
                      <div key={category.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`mobile-category-${category.id}`}
                          checked={selectedCategories.includes(category.id)}
                          onChange={() => toggleCategory(category.id)}
                          className="w-4 h-4 text-garden-600 border-garden-300 rounded focus:ring-garden-500"
                        />
                        <label htmlFor={`mobile-category-${category.id}`} className="ml-2 text-garden-700 text-sm">
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range Filter */}
                <div>
                  <h3 className="font-medium text-garden-800 mb-3">Price Range</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {priceRanges.map(range => (
                      <div key={range.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`mobile-${range.id}`}
                          checked={selectedPriceRanges.includes(range.id)}
                          onChange={() => togglePriceRange(range.id)}
                          className="w-4 h-4 text-garden-600 border-garden-300 rounded focus:ring-garden-500"
                        />
                        <label htmlFor={`mobile-${range.id}`} className="ml-2 text-garden-700 text-sm">
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <button
                    className="flex-1 bg-garden-600 text-white font-medium py-2 rounded-lg hover:bg-garden-700 transition-colors"
                    onClick={() => setIsMobileFilterOpen(false)}
                  >
                    Apply Filters
                  </button>
                  <button
                    className="flex-1 border border-garden-300 text-garden-800 font-medium py-2 rounded-lg hover:bg-garden-50 transition-colors"
                    onClick={resetFilters}
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Products Section */}
          <div className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-garden-700">Showing {sortedProducts.length} products</p>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-garden-200 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-garden-500 focus:border-transparent cursor-pointer"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-garden-600 pointer-events-none" />
              </div>
            </div>
            
            {/* Active Filters */}
            {(selectedCategories.length > 0 || selectedPriceRanges.length > 0 || searchQuery) && (
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedCategories.map(categoryId => {
                  const category = categories.find(c => c.id === categoryId);
                  return category ? (
                    <div key={categoryId} className="flex items-center bg-garden-100 rounded-full px-3 py-1">
                      <span className="text-sm text-garden-800">{category.name}</span>
                      <button 
                        className="ml-2 text-garden-600"
                        onClick={() => toggleCategory(categoryId)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </button>
                    </div>
                  ) : null;
                })}
                
                {selectedPriceRanges.map(rangeId => {
                  const range = priceRanges.find(r => r.id === rangeId);
                  return range ? (
                    <div key={rangeId} className="flex items-center bg-garden-100 rounded-full px-3 py-1">
                      <span className="text-sm text-garden-800">{range.label}</span>
                      <button 
                        className="ml-2 text-garden-600"
                        onClick={() => togglePriceRange(rangeId)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </button>
                    </div>
                  ) : null;
                })}
                
                {searchQuery && (
                  <div className="flex items-center bg-garden-100 rounded-full px-3 py-1">
                    <span className="text-sm text-garden-800">"{searchQuery}"</span>
                    <button 
                      className="ml-2 text-garden-600"
                      onClick={() => setSearchQuery("")}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </button>
                  </div>
                )}
                
                <button 
                  className="text-garden-600 text-sm hover:underline ml-2"
                  onClick={resetFilters}
                >
                  Clear All
                </button>
              </div>
            )}
            
            {/* Product Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-garden-50 rounded-lg">
                <div className="flex justify-center mb-4">
                  <div className="bg-garden-100 rounded-full p-3">
                    <Search className="text-garden-600" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-garden-900 mb-2">No products found</h3>
                <p className="text-garden-700 mb-6">Try adjusting your filters or search term.</p>
                <button 
                  className="bg-garden-600 hover:bg-garden-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;
