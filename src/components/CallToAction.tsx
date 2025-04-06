
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-udyam-royal-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-white/20"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start selling your products?
          </h2>
          
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of sellers on UDYAM and reach customers around the world. 
            Create your account today and start listing your products.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button className="bg-white text-udyam-royal-blue hover:bg-white/90 btn-hover text-base px-6 py-6">
                Create Account
              </Button>
            </Link>
            
            <Link to="/how-it-works">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 btn-hover text-base px-6 py-6">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
