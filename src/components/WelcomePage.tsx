
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Church, Users, Heart, Calendar } from 'lucide-react';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Church className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Divine Church Manager</h1>
                <p className="text-sm text-gray-600">Connecting Faith, Community & Service</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/login')}
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Login
              </Button>
              <Button 
                onClick={() => navigate('/register')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our
            <span className="text-blue-600 block">Church Community</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A comprehensive platform designed to strengthen our faith community through 
            seamless communication, organized worship, and meaningful connections.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/login')}>
              <CardHeader className="text-center pb-4">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Existing Members</CardTitle>
                <CardDescription>
                  Access your dashboard, view events, and stay connected with our community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Sign In
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/register')}>
              <CardHeader className="text-center pb-4">
                <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-xl">New to Our Church?</CardTitle>
                <CardDescription>
                  Join our growing family and become part of our faith journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Join Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Church Management
            </h3>
            <p className="text-lg text-gray-600">
              Streamlined tools to help our community grow and connect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h4 className="text-xl font-semibold mb-4">Event Management</h4>
              <p className="text-gray-600">
                Stay updated with services, events, and community activities
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h4 className="text-xl font-semibold mb-4">Community Connection</h4>
              <p className="text-gray-600">
                Connect with fellow members and join small groups
              </p>
            </div>
            
            <div className="text-center">
              <Heart className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h4 className="text-xl font-semibold mb-4">Spiritual Growth</h4>
              <p className="text-gray-600">
                Access sermons, prayer requests, and spiritual resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Church className="h-6 w-6" />
            <span className="text-lg font-semibold">Divine Church Manager</span>
          </div>
          <p className="text-gray-400">
            Building stronger communities through faith and technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
