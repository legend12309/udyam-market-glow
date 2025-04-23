
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: 129.99,
    status: "Active",
    createdAt: "2024-04-12",
  },
  {
    id: 2,
    name: "Modern Desk Lamp",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: 49.99,
    status: "Sold",
    createdAt: "2024-03-27",
  },
  {
    id: 3,
    name: "Natural Face Serum",
    image: "https://images.unsplash.com/photo-1608248543804-c6cc359ff2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: 34.99,
    status: "Active",
    createdAt: "2024-03-22",
  },
];

export default function SellerProducts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-udyam-royal-blue via-sketch-gray to-udyam-light-gray flex flex-col items-center">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl mb-4 font-marker text-white drop-shadow-xl tracking-wider text-center animate-fade-in">
          My Listed Products
        </h1>
        <p className="mb-8 text-lg font-indie text-white/90 text-center animate-fade-in">
          All your products, beautifully displayed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {products.map((product, idx) => (
            <Card key={product.id} className="rounded-lg overflow-hidden shadow-lg bg-white/80 relative transition-transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'backwards' }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
              />
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold font-marker mb-2 text-udyam-royal-blue">
                  {product.name}
                </h2>
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-sketch-dark">${product.price}</span>
                  <span className={`ml-3 px-3 py-1 rounded-full text-xs font-semibold ${product.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"}`}>
                    {product.status}
                  </span>
                </div>
                <div className="text-sm text-sketch-neutral mb-4">
                  Listed on: {product.createdAt}
                </div>
                <Button variant="outline" className="w-full flex gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  View Details
                </Button>
              </CardContent>
              {product.status === "Sold" && (
                <div className="absolute top-4 right-4 bg-sketch-purple text-white px-4 py-1 rounded-full text-xs font-bold">
                  SOLD
                </div>
              )}
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/sell">
            <Button className="font-marker bg-udyam-royal-blue hover:bg-udyam-royal-blue/90 text-lg px-8 py-4 shadow-xl animate-scale-in">+ Add New Product</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
