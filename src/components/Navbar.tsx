
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingCart, User, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/AuthProvider";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={cn(
      "w-full py-4 sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white shadow-sm"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-udyam-royal-blue">UDYAM</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/categories" className={cn(
            "link-hover font-medium transition-colors",
            location.pathname === "/categories" ? "text-udyam-royal-blue" : "text-gray-700"
          )}>
            Categories
          </Link>
          <Link to="/sell" className={cn(
            "link-hover font-medium transition-colors",
            location.pathname === "/sell" ? "text-udyam-royal-blue" : "text-gray-700"
          )}>
            Sell
          </Link>
          <Link to="/about" className={cn(
            "link-hover font-medium transition-colors",
            location.pathname === "/about" ? "text-udyam-royal-blue" : "text-gray-700"
          )}>
            About
          </Link>
          <div className="relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none input-focus w-64 transition-all duration-300 focus:w-72"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-udyam-royal-blue text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
          
          {user ? (
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button className="bg-udyam-royal-blue hover:bg-udyam-royal-blue/90 btn-hover flex gap-2 items-center">
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-udyam-royal-blue">UDYAM</h1>
            <button onClick={closeMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8 flex-1 px-4">
            <div className="relative w-full mb-4">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none input-focus w-full"
              />
            </div>
            
            <Link
              to="/categories"
              className="text-xl font-medium w-full text-center py-3 border-b border-gray-100"
              onClick={closeMenu}
            >
              Categories
            </Link>
            <Link
              to="/sell"
              className="text-xl font-medium w-full text-center py-3 border-b border-gray-100"
              onClick={closeMenu}
            >
              Sell
            </Link>
            <Link
              to="/about"
              className="text-xl font-medium w-full text-center py-3 border-b border-gray-100"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/cart"
              className="text-xl font-medium w-full text-center py-3 border-b border-gray-100"
              onClick={closeMenu}
            >
              Cart
            </Link>
            
            {user ? (
              <Link
                to="/profile"
                className="text-xl font-medium w-full text-center py-3"
                onClick={closeMenu}
              >
                My Profile
              </Link>
            ) : (
              <Link
                to="/login"
                className="w-full"
                onClick={closeMenu}
              >
                <Button className="bg-udyam-royal-blue hover:bg-udyam-royal-blue/90 w-full py-6 mt-4">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
