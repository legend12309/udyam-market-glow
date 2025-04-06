
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    price: 129.99,
    rating: 4.5,
    reviews: 128,
    seller: "TechGadgets",
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    price: 79.99,
    rating: 4.8,
    reviews: 93,
    seller: "FashionStyle",
  },
  {
    id: 3,
    name: "Modern Desk Lamp",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    price: 49.99,
    rating: 4.2,
    reviews: 57,
    seller: "HomeDecor",
  },
  {
    id: 4,
    name: "Natural Face Serum",
    image: "https://images.unsplash.com/photo-1608248543804-c6cc359ff2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2528&q=80",
    price: 34.99,
    rating: 4.7,
    reviews: 142,
    seller: "OrganicBeauty",
  },
];

const TrendingProducts = () => {
  return (
    <section className="py-16 bg-udyam-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trending Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular products that customers love right now.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-0 shadow-md card-hover">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg line-clamp-2">{product.name}</h3>
                  <span className="text-udyam-royal-blue font-bold">${product.price}</span>
                </div>
                
                <p className="text-sm text-gray-500 mb-3">by {product.seller}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : i < product.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                  
                  <Button size="sm" className="bg-udyam-royal-blue hover:bg-udyam-royal-blue/90">
                    <ShoppingCart className="h-4 w-4 mr-1" /> Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/products"
            className="text-udyam-royal-blue font-medium hover:underline inline-flex items-center"
          >
            View All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
