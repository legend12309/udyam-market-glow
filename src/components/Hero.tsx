import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative sketch-pattern overflow-hidden">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1.5 bg-sketch-purple/10 text-sketch-dark rounded-full text-sm font-marker mb-8 animate-fade-in sketch-container">
            Transform Your Business with UDYAM
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-marker mb-8 leading-tight tracking-tight animate-fade-in text-sketch-dark" style={{ animationDelay: "0.2s" }}>
            Elevate Your <span className="text-sketch-purple">Business</span> to New Heights
          </h1>
          
          <p className="text-lg md:text-xl text-sketch-neutral mb-10 leading-relaxed max-w-2xl animate-fade-in font-indie" style={{ animationDelay: "0.4s" }}>
            Join the premier marketplace where exceptional products meet their perfect audience. 
            Scale your business with powerful tools and reach customers worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Link to="/categories">
              <button className="sketch-button px-8 py-6">
                Discover Products
              </button>
            </Link>
            
            <Link to="/sell">
              <button className="sketch-button bg-white text-sketch-dark border-2 border-sketch-dark px-8 py-6 group">
                Start Selling <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
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
