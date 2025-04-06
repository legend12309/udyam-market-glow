
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "No listing fees for first 30 days",
  "Global customer reach",
  "Secure payment processing",
  "Dedicated seller support"
];

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-udyam-royal-blue to-udyam-teal z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-white/20"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-6">START TODAY</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to start selling your products?
              </h2>
              
              <p className="text-white/80 mb-8 text-lg">
                Join thousands of sellers on UDYAM and reach customers around the world.
                Create your account today and start listing your products.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-white/90" />
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button className="bg-white text-udyam-royal-blue hover:bg-white/90 btn-hover text-base px-6 py-6 shadow-lg">
                    Create Account
                  </Button>
                </Link>
                
                <Link to="/how-it-works">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 btn-hover text-base px-6 py-6 group">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Seller success" 
                className="w-full h-auto rounded-lg shadow-2xl transform rotate-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
