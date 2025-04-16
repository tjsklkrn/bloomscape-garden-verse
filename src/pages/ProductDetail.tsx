
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronRight, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  ShieldCheck, 
  RefreshCw,
  Droplets,
  Sun,
  Thermometer
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || "0");
  
  const product = products.find(p => p.id === productId);
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  
  // Get similar products (same category)
  const similarProducts = product 
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];
  
  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-garden-900 mb-4">Product Not Found</h1>
          <p className="text-garden-700 mb-8">We couldn't find the product you're looking for.</p>
          <Link to="/shop" className="bg-garden-600 hover:bg-garden-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="bg-garden-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-garden-600">
            <Link to="/" className="hover:text-garden-800 transition-colors">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/shop" className="hover:text-garden-800 transition-colors">Shop</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to={`/categories/${product.category}`} className="hover:text-garden-800 transition-colors">{product.category}</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-garden-800">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Detail Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg overflow-hidden border border-garden-200 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {/* This would normally be replaced with actual thumbnails */}
                {[1, 2, 3, 4].map((_, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-lg overflow-hidden cursor-pointer ${index === 0 ? 'border-garden-600' : 'border-garden-200'}`}
                  >
                    <img 
                      src={product.image} 
                      alt={`${product.name} thumbnail ${index + 1}`} 
                      className="w-full h-auto aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="lg:w-1/2">
              {/* Badge */}
              {(product.isNew || product.isBestseller || product.isLowStock) && (
                <div className="mb-4">
                  {product.isNew && (
                    <span className="inline-block bg-garden-600 text-white text-xs font-bold px-3 py-1 rounded-full mr-2">New</span>
                  )}
                  {product.isBestseller && (
                    <span className="inline-block bg-earth-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-2">Bestseller</span>
                  )}
                  {product.isLowStock && (
                    <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Low Stock</span>
                  )}
                </div>
              )}
              
              {/* Product Name and Price */}
              <h1 className="text-3xl md:text-4xl font-bold text-garden-900 mb-2">{product.name}</h1>
              <p className="text-xl text-garden-700 mb-4">{product.category}</p>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className={`w-5 h-5 ${star <= product.rating ? 'text-yellow-400' : 'text-gray-200'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-garden-700">4.8 (124 reviews)</span>
              </div>
              
              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                {product.discountPrice ? (
                  <>
                    <span className="text-3xl font-bold text-garden-900">${product.discountPrice.toFixed(2)}</span>
                    <span className="text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
                    <span className="bg-garden-100 text-garden-800 text-sm font-semibold px-2 py-1 rounded">
                      Save ${(product.price - product.discountPrice).toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-garden-900">${product.price.toFixed(2)}</span>
                )}
              </div>
              
              {/* Short Description */}
              <p className="text-garden-700 mb-8">
                A beautiful, easy-to-care-for plant that will thrive in medium to bright indirect light. Perfect for adding a touch of greenery to any room in your home.
              </p>
              
              {/* Plant Care Highlights */}
              <div className="bg-garden-50 p-4 rounded-lg mb-8">
                <h3 className="font-medium text-garden-900 mb-4">Quick Plant Care</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-garden-100 rounded-full p-2 mt-1">
                      <Droplets size={18} className="text-garden-600" />
                    </div>
                    <div>
                      <p className="font-medium text-garden-800">Water</p>
                      <p className="text-sm text-garden-700">Once a week</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-garden-100 rounded-full p-2 mt-1">
                      <Sun size={18} className="text-garden-600" />
                    </div>
                    <div>
                      <p className="font-medium text-garden-800">Light</p>
                      <p className="text-sm text-garden-700">Medium indirect</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-garden-100 rounded-full p-2 mt-1">
                      <Thermometer size={18} className="text-garden-600" />
                    </div>
                    <div>
                      <p className="font-medium text-garden-800">Temperature</p>
                      <p className="text-sm text-garden-700">65-80°F</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="inline-flex items-center border border-garden-200 rounded-lg overflow-hidden">
                    <button 
                      className="p-3 hover:bg-garden-50 transition-colors"
                      onClick={decreaseQuantity}
                    >
                      <Minus size={18} className="text-garden-700" />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-12 text-center border-none focus:outline-none focus:ring-0 p-3 text-garden-900"
                    />
                    <button 
                      className="p-3 hover:bg-garden-50 transition-colors"
                      onClick={increaseQuantity}
                    >
                      <Plus size={18} className="text-garden-700" />
                    </button>
                  </div>
                  
                  <button className="flex-1 bg-garden-600 hover:bg-garden-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                  
                  <button className="bg-white hover:bg-garden-50 text-garden-800 font-medium p-3 rounded-lg transition-colors shadow-sm border border-garden-200">
                    <Heart size={20} />
                  </button>
                  
                  <button className="bg-white hover:bg-garden-50 text-garden-800 font-medium p-3 rounded-lg transition-colors shadow-sm border border-garden-200">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
              
              {/* Shipping & Returns */}
              <div className="border-t border-garden-200 pt-6 mb-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-3">
                    <Truck size={20} className="text-garden-600" />
                    <span className="text-garden-800">Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={20} className="text-garden-600" />
                    <span className="text-garden-800">14-day plant health guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCw size={20} className="text-garden-600" />
                    <span className="text-garden-800">Easy 30-day returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Tabs */}
      <section className="py-12 bg-garden-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-garden-200">
              <button 
                className={`px-6 py-4 font-medium text-garden-900 hover:bg-garden-50 transition-colors ${activeTab === 'description' ? 'border-b-2 border-garden-600' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`px-6 py-4 font-medium text-garden-900 hover:bg-garden-50 transition-colors ${activeTab === 'care' ? 'border-b-2 border-garden-600' : ''}`}
                onClick={() => setActiveTab('care')}
              >
                Care Guide
              </button>
              <button 
                className={`px-6 py-4 font-medium text-garden-900 hover:bg-garden-50 transition-colors ${activeTab === 'reviews' ? 'border-b-2 border-garden-600' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews (124)
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="p-6 md:p-8">
              {activeTab === 'description' && (
                <div>
                  <h2 className="text-2xl font-bold text-garden-900 mb-4">About {product.name}</h2>
                  <p className="text-garden-700 mb-4">
                    The {product.name} is a stunning tropical plant that will add a touch of exotic beauty to your home. 
                    With its distinctive split leaves and lush green foliage, it's sure to become a focal point in any room.
                  </p>
                  <p className="text-garden-700 mb-4">
                    Native to the rainforests of Central and South America, this plant has adapted well to indoor environments 
                    and is known for its air-purifying qualities. It's relatively easy to care for, making it a great choice
                    for both beginner and experienced plant parents.
                  </p>
                  <p className="text-garden-700 mb-4">
                    Each plant comes in a 6" nursery pot and is approximately 24-30" tall, including the pot. 
                    Please note that all plants are unique and may vary slightly from the picture shown.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-garden-900 mt-8 mb-4">Features</h3>
                  <ul className="list-disc pl-5 text-garden-700 space-y-2">
                    <li>Air-purifying qualities</li>
                    <li>Distinctive split leaves</li>
                    <li>Thrives in medium to bright indirect light</li>
                    <li>Perfect statement plant</li>
                    <li>Pet-friendly (non-toxic)</li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'care' && (
                <div>
                  <h2 className="text-2xl font-bold text-garden-900 mb-4">Caring for Your {product.name}</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-garden-900 mb-3">Light</h3>
                    <p className="text-garden-700 mb-2">
                      Thrives in medium to bright indirect light. Can tolerate low light conditions, but growth may slow.
                      Avoid direct sunlight, which can scorch the leaves.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-garden-900 mb-3">Water</h3>
                    <p className="text-garden-700 mb-2">
                      Water when the top 1-2 inches of soil feels dry to the touch, typically once a week.
                      Reduce watering in winter when growth slows. Ensure good drainage and avoid letting the plant sit in water.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-garden-900 mb-3">Humidity</h3>
                    <p className="text-garden-700 mb-2">
                      Enjoys humid environments. Regular misting or a humidifier can help, especially in dry climates or during winter.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-garden-900 mb-3">Temperature</h3>
                    <p className="text-garden-700 mb-2">
                      Prefers temperatures between 65-80°F (18-27°C). Avoid cold drafts and sudden temperature changes.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-garden-900 mb-3">Fertilizer</h3>
                    <p className="text-garden-700 mb-2">
                      Feed with a balanced, water-soluble fertilizer diluted to half strength once a month during the growing season (spring and summer).
                      No fertilizer needed in fall and winter.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-garden-900 mb-3">Common Issues</h3>
                    <ul className="list-disc pl-5 text-garden-700 space-y-2">
                      <li><span className="font-medium">Yellow leaves:</span> Often a sign of overwatering or poor drainage.</li>
                      <li><span className="font-medium">Brown leaf tips:</span> Usually indicates low humidity or inconsistent watering.</li>
                      <li><span className="font-medium">Drooping leaves:</span> Could be underwatering, overwatering, or temperature stress.</li>
                      <li><span className="font-medium">Pests:</span> Keep an eye out for spider mites, mealybugs, and scale insects.</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-garden-900">Customer Reviews</h2>
                    <button className="bg-garden-600 hover:bg-garden-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                      Write a Review
                    </button>
                  </div>
                  
                  <div className="bg-garden-50 p-6 rounded-lg mb-8">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-garden-900 mb-1">4.8</div>
                        <div className="flex justify-center mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg 
                              key={star} 
                              className={`w-5 h-5 ${star <= 5 ? 'text-yellow-400' : 'text-gray-200'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <div className="text-sm text-garden-700">124 reviews</div>
                      </div>
                      
                      <div className="flex-1">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center gap-2 mb-2">
                            <div className="text-sm text-garden-700 w-7">{rating} ★</div>
                            <div className="flex-1 bg-garden-200 rounded-full h-2.5 overflow-hidden">
                              <div 
                                className="bg-yellow-400 h-full rounded-full" 
                                style={{ width: `${rating === 5 ? 75 : rating === 4 ? 20 : rating === 3 ? 5 : 0}%` }}
                              ></div>
                            </div>
                            <div className="text-sm text-garden-700 w-8">
                              {rating === 5 ? '75%' : rating === 4 ? '20%' : rating === 3 ? '5%' : '0%'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Sample Reviews */}
                  <div className="space-y-8">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border-b border-garden-200 pb-8">
                        <div className="flex justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-garden-200 rounded-full flex items-center justify-center text-garden-800 font-semibold">
                              {review === 1 ? 'JD' : review === 2 ? 'SM' : 'AK'}
                            </div>
                            <div>
                              <p className="font-semibold text-garden-900">
                                {review === 1 ? 'Jane Doe' : review === 2 ? 'Sam Miller' : 'Alex Kim'}
                              </p>
                              <p className="text-sm text-garden-700">
                                {review === 1 ? 'May 15, 2023' : review === 2 ? 'April 28, 2023' : 'March 10, 2023'}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg 
                                key={star} 
                                className={`w-5 h-5 ${star <= (review === 3 ? 4 : 5) ? 'text-yellow-400' : 'text-gray-200'}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        
                        <h4 className="font-medium text-garden-900 mb-2">
                          {review === 1 
                            ? 'Beautiful, healthy plant!' 
                            : review === 2 
                              ? 'Exceeded my expectations' 
                              : 'Nice plant, but smaller than expected'}
                        </h4>
                        
                        <p className="text-garden-700 mb-4">
                          {review === 1 
                            ? 'My Monstera arrived in perfect condition. It was carefully packaged and even bigger than I expected! Already seeing new growth after just 2 weeks.' 
                            : review === 2 
                              ? 'I was a bit hesitant to order plants online, but this exceeded my expectations. Healthy, beautiful, and came with detailed care instructions. Very happy with my purchase!' 
                              : 'The plant arrived healthy and well-packaged, but it was smaller than I expected based on the photos. Still a nice plant, but I was hoping for something a bit larger.'}
                        </p>
                        
                        {review === 1 && (
                          <div className="flex gap-3 mt-4">
                            <img 
                              src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=200&auto=format&fit=crop"
                              alt="Customer photo"
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <img 
                              src="https://images.unsplash.com/photo-1603912699214-92627f304eb6?q=80&w=200&auto=format&fit=crop"
                              alt="Customer photo"
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <button className="bg-white hover:bg-garden-50 text-garden-800 font-medium px-6 py-2 rounded-lg transition-colors border border-garden-200">
                      Load More Reviews
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-garden-900 mb-8">You May Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
