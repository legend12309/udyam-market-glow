
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-20 px-4 bg-udyam-light-gray">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-bold text-udyam-royal-blue mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Page not found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-udyam-royal-blue hover:bg-udyam-royal-blue/90 btn-hover w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
              </Button>
            </Link>
            <Link to="/categories">
              <Button variant="outline" className="border-udyam-royal-blue text-udyam-royal-blue hover:bg-udyam-royal-blue/5 btn-hover w-full sm:w-auto">
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
