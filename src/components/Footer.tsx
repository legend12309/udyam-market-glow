
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-udyam-soft-black text-white">
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2">Stay in the loop</h3>
              <p className="text-gray-400">Get the latest updates, deals and more.</p>
            </div>
            <div className="w-full md:w-auto flex-1 max-w-md">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-udyam-royal-blue/50 pr-32"
                />
                <Button className="absolute right-1 top-1 bg-udyam-royal-blue hover:bg-udyam-royal-blue/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6">UDYAM</h3>
            <p className="text-gray-400 mb-6">
              Empowering sellers and buyers in a seamless marketplace experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Marketplace</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  All Categories
                </Link>
              </li>
              <li>
                <Link to="/trending" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Trending Products
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Deals & Discounts
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Sell Your Products
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Account</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  My Orders
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Market Street, Suite 456, San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">support@udyam.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} UDYAM. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/cookies" className="text-gray-500 text-sm hover:text-white transition-colors">
              Cookies
            </Link>
            <Link to="/sitemap" className="text-gray-500 text-sm hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
