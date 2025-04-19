
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80')] bg-cover bg-center opacity-5"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-700 rounded-full text-sm font-semibold mb-8 animate-fade-in">Transform Your Business with UDYAM</span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Elevate Your <span className="text-blue-700">Business</span> to New Heights
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Join the premier marketplace where exceptional products meet their perfect audience. 
            Scale your business with powerful tools and reach customers worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Link to="/categories">
              <Button className="bg-blue-700 hover:bg-blue-800 text-base px-8 py-6 shadow-lg shadow-blue-700/20 font-semibold">
                Discover Products
              </Button>
            </Link>
            
            <Link to="/sell">
              <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 text-base px-8 py-6 font-semibold group">
                Start Selling <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-20 flex items-center gap-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg">
                  <img 
                    src={`https://randomuser.me/api/portraits/${i % 2 ? 'women' : 'men'}/${i + 20}.jpg`} 
                    alt={`User ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-semibold">Trusted by Thousands</span>
              <span className="text-gray-600 text-sm">Join 2,000+ sellers & 10,000+ buyers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
