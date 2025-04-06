
import { useAuth } from "@/providers/AuthProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, User, Mail } from "lucide-react";

const Profile = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">My Profile</h1>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Account Information
                </CardTitle>
                <CardDescription>Your account details and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    {user?.email}
                  </p>
                </div>
                
                <div className="grid gap-1">
                  <p className="text-sm font-medium text-muted-foreground">User ID</p>
                  <p className="text-sm text-gray-500 break-all">{user?.id}</p>
                </div>

                <div className="grid gap-1">
                  <p className="text-sm font-medium text-muted-foreground">Last Sign In</p>
                  <p className="text-sm text-gray-500">
                    {user?.last_sign_in_at 
                      ? new Date(user.last_sign_in_at).toLocaleString() 
                      : "No previous sign in"}
                  </p>
                </div>

                <Button 
                  onClick={() => signOut()} 
                  variant="outline" 
                  className="mt-4 w-full sm:w-auto"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
