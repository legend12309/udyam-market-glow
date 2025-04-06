
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, Package, Heart, Settings, ShoppingCart, 
  Edit, Upload, Star, MessageCircle, LogOut, Eye
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample user data
const userData = {
  name: "Alex Johnson",
  username: "alexj",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
  bio: "Product designer and handcraft enthusiast. Selling unique items since 2020.",
  joinDate: "March 2020",
  location: "San Francisco, CA",
  email: "alex@example.com",
  phone: "+1 (555) 123-4567",
  rating: 4.8,
  reviewCount: 124,
  isVerified: true,
};

// Sample listed products
const listedProducts = [
  {
    id: 1,
    name: "Handcrafted Wooden Table",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1604074131665-7a4b13870ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    category: "Furniture",
    status: "active",
    views: 423,
    favorites: 32,
    date: "2023-04-15",
  },
  {
    id: 2,
    name: "Artisan Ceramic Mug Set",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    category: "Kitchen",
    status: "active",
    views: 287,
    favorites: 18,
    date: "2023-05-22",
  },
  {
    id: 3,
    name: "Macrame Wall Hanging",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1594321120004-5f26c76df4b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    category: "Home Decor",
    status: "active",
    views: 192,
    favorites: 24,
    date: "2023-06-10",
  },
];

// Sample favorite products
const favoriteProducts = [
  {
    id: 101,
    name: "Vintage Record Player",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    seller: "RetroVibes",
    rating: 4.6,
  },
  {
    id: 102,
    name: "Modern Wall Clock",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    seller: "ClockMaster",
    rating: 4.9,
  },
];

// Sample orders
const orders = [
  {
    id: "ORD-2023-1234",
    date: "2023-05-18",
    status: "Delivered",
    total: 129.99,
    items: 2,
  },
  {
    id: "ORD-2023-0987",
    date: "2023-06-24",
    status: "In Transit",
    total: 89.99,
    items: 1,
  },
];

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...userData });

  const handleSaveProfile = () => {
    // In a real app, you would save to the database here
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-udyam-light-gray py-10">
        <div className="container mx-auto px-4">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative">
                <Avatar className="h-28 w-28 border-4 border-white shadow-lg">
                  <img src={userData.avatar} alt={userData.name} />
                </Avatar>
                {userData.isVerified && (
                  <div className="absolute bottom-0 right-0 bg-udyam-royal-blue rounded-full p-1 border-2 border-white">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold">{userData.name}</h1>
                  {userData.isVerified && (
                    <Badge variant="outline" className="text-udyam-royal-blue border-udyam-royal-blue">
                      Verified Seller
                    </Badge>
                  )}
                </div>
                
                <p className="text-gray-500 mb-4">@{userData.username} • Joined {userData.joinDate}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-medium">{userData.rating}</span>
                    <span className="text-gray-500 ml-1">({userData.reviewCount} reviews)</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Package className="h-5 w-5 text-gray-500 mr-1" />
                    <span>{listedProducts.length} products</span>
                  </div>
                  
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-gray-500 mr-1" />
                    <span>Contact</span>
                  </div>
                </div>
                
                <p className="text-gray-700 max-w-2xl mb-4">{userData.bio}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Button variant="outline" className="border-udyam-royal-blue text-udyam-royal-blue hover:bg-udyam-royal-blue/5">
                    <Edit className="h-4 w-4 mr-2" /> Edit Profile
                  </Button>
                  
                  <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/5">
                    <LogOut className="h-4 w-4 mr-2" /> Sign Out
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs Section */}
          <Tabs defaultValue="listings" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="listings" className="text-sm md:text-base">
                <Package className="h-4 w-4 mr-2 hidden md:inline" /> My Listings
              </TabsTrigger>
              <TabsTrigger value="favorites" className="text-sm md:text-base">
                <Heart className="h-4 w-4 mr-2 hidden md:inline" /> Favorites
              </TabsTrigger>
              <TabsTrigger value="orders" className="text-sm md:text-base">
                <ShoppingCart className="h-4 w-4 mr-2 hidden md:inline" /> Orders
              </TabsTrigger>
              <TabsTrigger value="settings" className="text-sm md:text-base">
                <Settings className="h-4 w-4 mr-2 hidden md:inline" /> Settings
              </TabsTrigger>
            </TabsList>
            
            {/* My Listings Tab */}
            <TabsContent value="listings">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">My Products</h2>
                  <Link to="/sell">
                    <Button className="bg-udyam-royal-blue hover:bg-udyam-royal-blue/90">
                      <Upload className="h-4 w-4 mr-2" /> List New Product
                    </Button>
                  </Link>
                </div>
                
                {listedProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-48 h-48 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <span className="text-lg font-bold text-udyam-royal-blue">${product.price}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 mb-4">
                            <Badge variant="secondary">{product.category}</Badge>
                            <Badge variant="outline" className="capitalize">
                              {product.status}
                            </Badge>
                            <div className="text-sm text-gray-500">
                              Listed on {new Date(product.date).toLocaleDateString()}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" /> {product.views} views
                            </div>
                            <div className="flex items-center">
                              <Heart className="h-4 w-4 mr-1" /> {product.favorites} favorites
                            </div>
                          </div>
                          
                          <div className="flex gap-3 mt-4">
                            <Button size="sm" variant="outline">Edit</Button>
                            <Button size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/5">
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Favorites Tab */}
            <TabsContent value="favorites">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <h2 className="text-xl font-semibold col-span-full mb-4">Saved Items</h2>
                
                {favoriteProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-32 h-32 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium">{product.name}</h3>
                            <span className="font-bold text-udyam-royal-blue">${product.price}</span>
                          </div>
                          
                          <p className="text-sm text-gray-500 mb-2">by {product.seller}</p>
                          
                          <div className="flex items-center mb-3">
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
                          </div>
                          
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-udyam-royal-blue hover:bg-udyam-royal-blue/90">
                              <ShoppingCart className="h-3 w-3 mr-1" /> Add to Cart
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/5">
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Orders Tab */}
            <TabsContent value="orders">
              <div className="grid grid-cols-1 gap-6">
                <h2 className="text-xl font-semibold mb-4">My Orders</h2>
                
                {orders.map((order) => (
                  <Card key={order.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-medium">{order.id}</h3>
                          <p className="text-sm text-gray-500">
                            Ordered on {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <span className="font-bold text-udyam-royal-blue">${order.total}</span>
                          <span className="text-sm text-gray-500">{order.items} item(s)</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <Badge variant="outline" className={`
                          ${order.status === "Delivered" ? "border-green-500 text-green-600" : ""}
                          ${order.status === "In Transit" ? "border-blue-500 text-blue-600" : ""}
                        `}>
                          {order.status}
                        </Badge>
                        
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View Details</Button>
                          {order.status === "Delivered" && (
                            <Button size="sm" variant="outline">
                              Leave Review
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Settings Tab */}
            <TabsContent value="settings">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
                    
                    {isEditing ? (
                      <form onSubmit={(e) => { e.preventDefault(); handleSaveProfile(); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name
                            </label>
                            <Input 
                              value={editedUser.name}
                              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Username
                            </label>
                            <Input 
                              value={editedUser.username}
                              onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Email
                            </label>
                            <Input 
                              value={editedUser.email}
                              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Phone
                            </label>
                            <Input 
                              value={editedUser.phone}
                              onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Location
                            </label>
                            <Input 
                              value={editedUser.location}
                              onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
                            />
                          </div>
                          
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Bio
                            </label>
                            <Textarea 
                              value={editedUser.bio}
                              onChange={(e) => setEditedUser({ ...editedUser, bio: e.target.value })}
                              rows={4}
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-end gap-3 mt-6">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={() => {
                              setEditedUser({ ...userData });
                              setIsEditing(false);
                            }}
                          >
                            Cancel
                          </Button>
                          <Button type="submit" className="bg-udyam-royal-blue hover:bg-udyam-royal-blue/90">
                            Save Changes
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-sm text-gray-500 mb-1">Full Name</h3>
                            <p className="font-medium">{userData.name}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-sm text-gray-500 mb-1">Username</h3>
                            <p className="font-medium">@{userData.username}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-sm text-gray-500 mb-1">Email</h3>
                            <p className="font-medium">{userData.email}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-sm text-gray-500 mb-1">Phone</h3>
                            <p className="font-medium">{userData.phone}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-sm text-gray-500 mb-1">Location</h3>
                            <p className="font-medium">{userData.location}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-sm text-gray-500 mb-1">Member Since</h3>
                            <p className="font-medium">{userData.joinDate}</p>
                          </div>
                          
                          <div className="md:col-span-2">
                            <h3 className="text-sm text-gray-500 mb-1">Bio</h3>
                            <p>{userData.bio}</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-end mt-6">
                          <Button 
                            onClick={() => setIsEditing(true)}
                            className="bg-udyam-royal-blue hover:bg-udyam-royal-blue/90"
                          >
                            <Edit className="h-4 w-4 mr-2" /> Edit Profile
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Password & Security</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <Button variant="outline">Change Password</Button>
                        <p className="text-sm text-gray-500 mt-2">
                          It's a good idea to use a strong password that you don't use elsewhere
                        </p>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-100">
                        <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Add an extra layer of security to your account by requiring a verification code in addition to your password.
                        </p>
                        <Button>Enable 2FA</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Notifications</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Email Notifications</h3>
                          <p className="text-sm text-gray-500">Receive emails about your account activity</p>
                        </div>
                        <div>
                          <input type="checkbox" id="emailNotif" className="sr-only" defaultChecked />
                          <label
                            htmlFor="emailNotif"
                            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-udyam-royal-blue/20"
                          >
                            <span className="inline-block h-5 w-5 transform rounded-full bg-white translate-x-1 transition peer-checked:translate-x-6"></span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <h3 className="font-medium">Order Updates</h3>
                          <p className="text-sm text-gray-500">Get notified about order status changes</p>
                        </div>
                        <div>
                          <input type="checkbox" id="orderNotif" className="sr-only" defaultChecked />
                          <label
                            htmlFor="orderNotif"
                            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-udyam-royal-blue/20"
                          >
                            <span className="inline-block h-5 w-5 transform rounded-full bg-white translate-x-1 transition peer-checked:translate-x-6"></span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <h3 className="font-medium">Marketing Communications</h3>
                          <p className="text-sm text-gray-500">Receive emails about new features and special offers</p>
                        </div>
                        <div>
                          <input type="checkbox" id="marketingNotif" className="sr-only" />
                          <label
                            htmlFor="marketingNotif"
                            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-udyam-royal-blue/20"
                          >
                            <span className="inline-block h-5 w-5 transform rounded-full bg-white translate-x-1 transition peer-checked:translate-x-6"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
