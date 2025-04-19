
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Technology",
    image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80",
    count: 1243,
    description: "Premium electronics and gadgets",
  },
  {
    id: 2,
    name: "Fashion & Apparel",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80",
    count: 872,
    description: "Luxury clothing and accessories",
  },
  {
    id: 3,
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80",
    count: 536,
    description: "Curated home decor and furnishings",
  },
  {
    id: 4,
    name: "Beauty & Wellness",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80",
    count: 329,
    description: "Premium beauty and wellness products",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-700 rounded-full text-sm font-semibold mb-4">EXPLORE CATEGORIES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Curated Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our carefully selected categories, featuring premium products from verified sellers worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link to={`/categories/${category.id}`} key={category.id}>
              <Card className="overflow-hidden border-0 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group h-full">
                <div className="relative h-64">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-white/80 text-sm mb-3">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-white/90 text-sm font-medium">{category.count.toLocaleString()} products</span>
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/categories"
            className="text-blue-700 font-semibold hover:text-blue-800 inline-flex items-center group text-lg"
          >
            View All Categories
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
