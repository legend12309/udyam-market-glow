
import { CheckCircle, Shield, BarChart, Globe, Megaphone, Headphones } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Streamlined Listing",
    description: "List your products effortlessly with our intuitive interface and automated tools.",
    icon: CheckCircle,
  },
  {
    id: 2,
    title: "Secure Transactions",
    description: "Bank-grade security for all payments, ensuring safe and reliable transactions.",
    icon: Shield,
  },
  {
    id: 3,
    title: "Advanced Analytics",
    description: "Comprehensive insights and metrics to optimize your business performance.",
    icon: BarChart,
  },
  {
    id: 4,
    title: "Global Reach",
    description: "Access international markets and expand your business worldwide.",
    icon: Globe,
  },
  {
    id: 5,
    title: "Marketing Tools",
    description: "Powerful promotion tools to increase visibility and drive sales.",
    icon: Megaphone,
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Dedicated support team available round-the-clock for assistance.",
    icon: Headphones,
  },
];

const SellerFeatures = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-700 rounded-full text-sm font-semibold mb-4">FOR SELLERS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Why Choose UDYAM</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Empower your business with our comprehensive suite of tools and features designed for success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="mb-6 text-blue-700 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 md:p-16 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Scale Your Business?</h3>
                <p className="text-blue-100 text-lg">Join our community of successful entrepreneurs today.</p>
              </div>
              <a 
                href="/sell" 
                className="px-8 py-4 bg-white text-blue-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg inline-flex items-center group"
              >
                Start Selling
                <CheckCircle className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerFeatures;
