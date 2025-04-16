
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-garden-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-garden-700 rounded-lg p-8 mb-12 -mt-24 shadow-lg relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-garden-100">Get plant care tips, exclusive offers, and be the first to know about new arrivals.</p>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow p-3 rounded-l-lg focus:outline-none text-garden-900 min-w-[220px]" 
                />
                <button className="bg-garden-600 hover:bg-garden-500 px-4 py-3 rounded-r-lg transition-colors flex items-center">
                  Subscribe <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-garden-800 font-semibold text-lg">G</span>
              </div>
              <span className="font-serif font-bold text-xl text-white">GardenVerse</span>
            </div>
            
            <p className="text-garden-100 mb-6">Your one-stop destination for beautiful, healthy plants and everything you need to care for them.</p>
            
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-garden-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-garden-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-garden-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5 border-b border-garden-600 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-garden-100 hover:text-white transition-colors">Shop All</Link></li>
              <li><Link to="/categories" className="text-garden-100 hover:text-white transition-colors">Plant Categories</Link></li>
              <li><Link to="/care-guides" className="text-garden-100 hover:text-white transition-colors">Plant Care Guides</Link></li>
              <li><Link to="/about" className="text-garden-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-garden-100 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-garden-100 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-5 border-b border-garden-600 pb-2">Customer Service</h4>
            <ul className="space-y-3">
              <li><Link to="/account" className="text-garden-100 hover:text-white transition-colors">My Account</Link></li>
              <li><Link to="/track-order" className="text-garden-100 hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="/shipping" className="text-garden-100 hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-garden-100 hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="text-garden-100 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="text-garden-100 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5 border-b border-garden-600 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-garden-300 shrink-0 mt-1" />
                <span className="text-garden-100">123 Garden Street, Green City, GC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-garden-300" />
                <span className="text-garden-100">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-garden-300" />
                <span className="text-garden-100">support@gardenverse.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Business Hours</h5>
              <p className="text-garden-100">Monday - Friday: 9am - 6pm</p>
              <p className="text-garden-100">Saturday: 10am - 5pm</p>
              <p className="text-garden-100">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-garden-700 mt-12 pt-8 text-center text-garden-100">
          <p>© {new Date().getFullYear()} GardenVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
