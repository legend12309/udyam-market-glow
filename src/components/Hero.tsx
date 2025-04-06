
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-udyam-light-gray to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482745637430-91c0bbcea3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')] bg-cover opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Your Marketplace for <span className="text-udyam-royal-blue">Exceptional</span> Products
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Join thousands of sellers and buyers in the most elegant marketplace. 
            Discover unique products or showcase your own creations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Link to="/categories">
              <Button className="bg-udyam-royal-blue hover:bg-udyam-royal-blue/90 btn-hover text-base px-6 py-6">
                Explore Products
              </Button>
            </Link>
            
            <Link to="/sell">
              <Button variant="outline" className="border-udyam-royal-blue text-udyam-royal-blue hover:bg-udyam-royal-blue/5 btn-hover text-base px-6 py-6">
                Start Selling <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
