
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const demoProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: 129.99,
    seller: "TechGadgets"
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: 79.99,
    seller: "FashionStyle"
  },
  {
    id: 3,
    name: "Modern Desk Lamp",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: 49.99,
    seller: "HomeDecor"
  },
  {
    id: 4,
    name: "Natural Face Serum",
    image: "https://images.unsplash.com/photo-1608248543804-c6cc359ff2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: 34.99,
    seller: "OrganicBeauty"
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const query = useQuery();
  const q = query.get("query")?.toLowerCase() || "";

  const filteredProducts = demoProducts.filter(product =>
    product.name.toLowerCase().includes(q)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-udyam-royal-blue via-sketch-gray to-udyam-light-gray flex flex-col items-center">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl mb-6 font-marker text-white text-center animate-fade-in">
          Search Results
        </h1>
        <div className="mb-10 text-white/90 text-center text-lg animate-fade-in">
          Results for "<span className="font-bold">{q}</span>"
        </div>
        {filteredProducts.length < 1 ? (
          <div className="text-xl text-sketch-dark text-center bg-white/70 p-10 rounded shadow animate-fade-in">
            No products found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {filteredProducts.map(product => (
              <Card key={product.id} className="rounded-lg overflow-hidden shadow-lg bg-white/80 transition-transform hover:scale-105">
                <img src={product.image} alt={product.name} className="w-full h-52 object-cover" />
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold font-marker mb-2 text-udyam-royal-blue">{product.name}</h2>
                  <div className="flex items-center mb-2">
                    <span className="text-lg font-bold text-sketch-dark">${product.price}</span>
                  </div>
                  <div className="text-sm text-sketch-neutral mb-4">
                    Seller: {product.seller}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
