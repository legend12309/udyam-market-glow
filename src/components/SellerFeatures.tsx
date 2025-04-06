
import { CheckCircle } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Easy Product Listing",
    description: "Upload products in minutes with our intuitive interface. Add images, descriptions, and set your prices.",
  },
  {
    id: 2,
    title: "Secure Payments",
    description: "Receive payments securely through our trusted payment system. Get paid quickly and reliably.",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Track your sales, views, and customer demographics with our comprehensive analytics tools.",
  },
  {
    id: 4,
    title: "Global Audience",
    description: "Reach customers from around the world. Expand your business beyond local boundaries.",
  },
  {
    id: 5,
    title: "Marketing Tools",
    description: "Promote your products with built-in marketing tools and increase your visibility.",
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team available around the clock.",
  },
];

const SellerFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Sell on UDYAM</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the benefits of becoming a seller on our platform and grow your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="text-udyam-royal-blue h-6 w-6 flex-shrink-0 mr-3 mt-1" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 pl-9">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerFeatures;
