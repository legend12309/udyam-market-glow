
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Grid2X2,
  Grid3X3,
  Search,
  SlidersHorizontal,
  ChevronDown,
  XCircle 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Category data
const allCategories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    count: 1243,
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80",
    count: 872,
  },
  {
    id: 3,
    name: "Home & Garden",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80",
    count: 536,
  },
  {
    id: 4,
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80",
    count: 329,
  },
  {
    id: 5,
    name: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    count: 478,
  },
  {
    id: 6,
    name: "Toys & Games",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    count: 305,
  },
  {
    id: 7,
    name: "Books & Stationery",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    count: 412,
  },
  {
    id: 8,
    name: "Jewelry & Accessories",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    count: 253,
  },
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gridView, setGridView] = useState("grid"); // "grid" or "list"
  const [sortBy, setSortBy] = useState("name-asc"); // "name-asc", "name-desc", "count-asc", "count-desc"
  
  // Filter categories based on search term
  const filteredCategories = allCategories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort categories based on sort option
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    if (sortBy === "name-desc") return b.name.localeCompare(a.name);
    if (sortBy === "count-asc") return a.count - b.count;
    if (sortBy === "count-desc") return b.count - a.count;
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse Categories</h1>
            <p className="text-gray-600">
              Explore our wide range of product categories
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Box */}
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-udyam-royal-blue/20 focus:border-udyam-royal-blue"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")} 
                    className="absolute right-3 top-3"
                  >
                    <XCircle className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
              
              {/* Sort Options */}
              <div className="flex items-center">
                <span className="text-gray-600 mr-2 whitespace-nowrap">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-udyam-royal-blue/20 focus:border-udyam-royal-blue"
                >
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="count-asc">Products (Low to High)</option>
                  <option value="count-desc">Products (High to Low)</option>
                </select>
              </div>
              
              {/* View Toggle */}
              <div className="flex items-center space-x-2">
                <Button
                  variant={gridView === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setGridView("grid")}
                  className={gridView === "grid" ? "bg-udyam-royal-blue hover:bg-udyam-royal-blue/90" : ""}
                >
                  <Grid3X3 className="h-5 w-5" />
                </Button>
                <Button
                  variant={gridView === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setGridView("list")}
                  className={gridView === "list" ? "bg-udyam-royal-blue hover:bg-udyam-royal-blue/90" : ""}
                >
                  <Grid2X2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Results Info */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing <span className="font-medium">{sortedCategories.length}</span> categories
            </p>
          </div>
          
          {/* Categories Grid */}
          <div className={`grid ${
            gridView === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
              : "grid-cols-1 gap-4"
          }`}>
            {sortedCategories.map((category) => (
              <Link to={`/categories/${category.id}`} key={category.id}>
                {gridView === "grid" ? (
                  <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="relative h-48">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div>
                          <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                          <p className="text-white/80 text-sm">{category.count} products</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex">
                      <div className="w-24 h-24 flex-shrink-0">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex justify-between items-center flex-grow">
                        <div>
                          <h3 className="font-semibold text-lg">{category.name}</h3>
                          <p className="text-gray-600 text-sm">{category.count} products</p>
                        </div>
                        <ChevronDown className="h-5 w-5 text-gray-400 rotate-270" />
                      </div>
                    </div>
                  </Card>
                )}
              </Link>
            ))}
          </div>
          
          {/* No Results */}
          {sortedCategories.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No categories found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms</p>
              <Button 
                onClick={() => setSearchTerm("")}
                className="bg-udyam-royal-blue hover:bg-udyam-royal-blue/90"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
