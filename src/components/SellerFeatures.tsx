
import { CheckCircle } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Easy Product Listing",
    description: "Upload products in minutes with our intuitive interface. Add images, descriptions, and set your prices.",
    icon: "📋",
  },
  {
    id: 2,
    title: "Secure Payments",
    description: "Receive payments securely through our trusted payment system. Get paid quickly and reliably.",
    icon: "🔒",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Track your sales, views, and customer demographics with our comprehensive analytics tools.",
    icon: "📊",
  },
  {
    id: 4,
    title: "Global Audience",
    description: "Reach customers from around the world. Expand your business beyond local boundaries.",
    icon: "🌎",
  },
  {
    id: 5,
    title: "Marketing Tools",
    description: "Promote your products with built-in marketing tools and increase your visibility.",
    icon: "📢",
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team available around the clock.",
    icon: "🛠️",
  },
];

const SellerFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-udyam-warm-orange/10 text-udyam-warm-orange rounded-full text-sm font-medium mb-4">FOR SELLERS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Sell on UDYAM</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the benefits of becoming a seller on our platform and grow your business with our powerful tools and global reach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 text-4xl">
                {feature.icon}
              </div>
              <div className="flex items-start mb-4">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to become a seller?</h3>
              <p className="text-gray-600">Join our community of successful entrepreneurs today.</p>
            </div>
            <a href="/sell" className="px-8 py-4 bg-udyam-royal-blue text-white rounded-lg shadow-md hover:bg-udyam-royal-blue/90 transition-colors inline-flex items-center space-x-2">
              <span>Start Selling</span>
              <CheckCircle className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerFeatures;
