
import { useState } from "react";
import { ChevronRight, Leaf, Truck, Droplets, Clock, Sun, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import { products, categories } from "../data/products";

const Index = () => {
  const [email, setEmail] = useState("");
  
  const featuredProducts = products.slice(0, 4);
  const bestsellerProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-garden-100 overflow-hidden">
        <div className="absolute inset-0 leaf-pattern opacity-30"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-garden-900 mb-6">
                Bring Nature Into Your Home
              </h1>
              <p className="text-xl text-garden-800 mb-8 max-w-xl">
                Discover our collection of beautiful, high-quality plants that transform your space and improve your wellbeing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop" className="bg-garden-600 hover:bg-garden-700 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-sm hover:shadow-md flex items-center justify-center">
                  Shop Now <ChevronRight size={20} className="ml-1" />
                </Link>
                <Link to="/care-guides" className="bg-white hover:bg-garden-50 text-garden-800 font-medium px-8 py-3 rounded-lg transition-colors shadow-sm border border-garden-200 flex items-center justify-center">
                  Plant Care Guides
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1545165375-8c0e57c5181a?q=80&w=3270&auto=format&fit=crop" 
                alt="Beautiful plants" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-garden-100 rounded-full p-2">
                    <Leaf className="text-garden-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-garden-900">Eco-Friendly</p>
                    <p className="text-sm text-garden-700">Sustainable Packaging</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-garden-100 rounded-full p-2">
                    <Truck className="text-garden-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-garden-900">Free Shipping</p>
                    <p className="text-sm text-garden-700">On orders over $50</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-garden-50 rounded-lg">
              <div className="bg-garden-100 rounded-full p-4 mb-4">
                <Leaf className="text-garden-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-garden-900 mb-2">Sustainable Practices</h3>
              <p className="text-garden-700">All our plants are grown using eco-friendly methods.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-garden-50 rounded-lg">
              <div className="bg-garden-100 rounded-full p-4 mb-4">
                <Truck className="text-garden-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-garden-900 mb-2">Free Shipping</h3>
              <p className="text-garden-700">Free shipping on all orders over $50.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-garden-50 rounded-lg">
              <div className="bg-garden-100 rounded-full p-4 mb-4">
                <Droplets className="text-garden-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-garden-900 mb-2">Expert Care</h3>
              <p className="text-garden-700">Each plant comes with detailed care instructions.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-garden-50 rounded-lg">
              <div className="bg-garden-100 rounded-full p-4 mb-4">
                <Clock className="text-garden-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-garden-900 mb-2">14-Day Guarantee</h3>
              <p className="text-garden-700">Not happy? We'll replace your plant for free.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-garden-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-garden-900 mb-4">Featured Plants</h2>
            <p className="text-garden-700 max-w-2xl mx-auto">Discover our handpicked selection of beautiful, easy-to-care-for plants that will thrive in your home.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/shop" className="inline-flex items-center bg-garden-600 hover:bg-garden-700 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-sm hover:shadow-md">
              View All Plants <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-garden-900 mb-4">Shop By Category</h2>
            <p className="text-garden-700 max-w-2xl mx-auto">Browse our extensive collection of plants by category to find the perfect addition to your space.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Bestsellers Section */}
      <section className="py-16 bg-earth-100">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-garden-900 mb-4">Bestselling Plants</h2>
            <p className="text-garden-700 max-w-2xl mx-auto">Our most popular plants loved by our customers for their beauty and ease of care.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellerProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/bestsellers" className="inline-flex items-center bg-earth-600 hover:bg-earth-700 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-sm hover:shadow-md">
              View All Bestsellers <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Plant Care Banner */}
      <section className="py-16 bg-garden-600 relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                New to Plant Parenthood?
              </h2>
              <p className="text-garden-100 text-lg mb-8 max-w-xl">
                Check out our comprehensive care guides to ensure your plants thrive. From watering schedules to light requirements, we've got you covered.
              </p>
              
              <Link to="/care-guides" className="inline-flex items-center bg-white text-garden-800 font-medium px-6 py-3 rounded-lg transition-colors shadow-md hover:bg-garden-50">
                Explore Care Guides <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
            
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex items-center mb-8">
                  <div className="bg-garden-100 rounded-full p-2">
                    <Sun className="text-garden-600" size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-garden-900 ml-3">Lighting Guide</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-garden-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-garden-800 mb-2">Bright Light</h4>
                    <p className="text-garden-700 text-sm">Perfect for succulents, cacti, and flowering plants.</p>
                  </div>
                  
                  <div className="bg-garden-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-garden-800 mb-2">Medium Light</h4>
                    <p className="text-garden-700 text-sm">Ideal for many common houseplants like pothos and peace lilies.</p>
                  </div>
                  
                  <div className="bg-garden-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-garden-800 mb-2">Low Light</h4>
                    <p className="text-garden-700 text-sm">Great for snake plants, ZZ plants, and other low-light tolerant varieties.</p>
                  </div>
                </div>
                
                <Link to="/care-guides/lighting" className="mt-6 inline-flex items-center text-garden-600 font-medium">
                  Read More <ArrowDown size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-garden-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-garden-900 mb-4">What Our Customers Say</h2>
            <p className="text-garden-700 max-w-2xl mx-auto">Don't just take our word for it, hear from our happy plant parents.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-garden-800 mb-4">"I was nervous about ordering plants online, but everything arrived in perfect condition. The Monstera I ordered is thriving in my apartment!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-garden-200 rounded-full flex items-center justify-center text-garden-800 font-semibold">SM</div>
                <div className="ml-3">
                  <p className="font-semibold text-garden-900">Sarah M.</p>
                  <p className="text-sm text-garden-700">Verified Customer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-garden-800 mb-4">"The care guides that came with my plants were incredibly helpful. I've never had much luck with houseplants before, but my GardenVerse plants are all doing great!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-garden-200 rounded-full flex items-center justify-center text-garden-800 font-semibold">JT</div>
                <div className="ml-3">
                  <p className="font-semibold text-garden-900">James T.</p>
                  <p className="text-sm text-garden-700">Verified Customer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-garden-800 mb-4">"The quality of the plants is outstanding. I've ordered from other online nurseries before, but GardenVerse is by far the best. The packaging was eco-friendly and the plants were healthy and vibrant."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-garden-200 rounded-full flex items-center justify-center text-garden-800 font-semibold">AL</div>
                <div className="ml-3">
                  <p className="font-semibold text-garden-900">Amelia L.</p>
                  <p className="text-sm text-garden-700">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
