
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Church, ArrowLeft, Mail, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Attempting login with:', formData.emailOrPhone);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.emailOrPhone,
        password: formData.password,
      });

      if (error) {
        console.error('Login error:', error);
        toast({
          title: "Login Failed",
          description: error.message,
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      if (data.user) {
        console.log('User authenticated, fetching profile for:', data.user.id);
        
        // Fetch user profile to get role and other details
        const { data: userProfile, error: profileError } = await supabase
          .from('users')
          .select('role, church_id, full_name, first_name, last_name')
          .eq('id', data.user.id)
          .maybeSingle();

        if (profileError) {
          console.error('Profile fetch error:', profileError);
          toast({
            title: "Error",
            description: "Failed to fetch user profile. Please try again.",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }

        if (!userProfile) {
          console.error('No profile found for user:', data.user.id);
          toast({
            title: "Profile Not Found",
            description: "User profile not found. Please contact support.",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }

        console.log('User profile fetched:', userProfile);

        const userName = userProfile.full_name || userProfile.first_name || 'User';
        
        toast({
          title: "Login Successful",
          description: `Welcome back, ${userName}!`,
        });

        // Route based on role
        const role = userProfile.role;
        console.log('Routing user with role:', role);
        
        switch (role) {
          case 'admin':
            navigate('/dashboard/admin');
            break;
          case 'clergy':
            navigate('/dashboard/clergy');
            break;
          case 'treasurer':
            navigate('/dashboard/treasurer');
            break;
          case 'secretary':
            navigate('/dashboard/secretary');
            break;
          default:
            navigate('/dashboard/member');
        }
      }
      
      setIsLoading(false);
    } catch (error) {
      console.error('Unexpected login error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Church className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Divine Church Manager</h1>
          </div>
        </div>

        {/* Login Form */}
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to access your church community dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="emailOrPhone">Email or Phone</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="emailOrPhone"
                    name="emailOrPhone"
                    type="text"
                    placeholder="Enter your email or phone number"
                    className="pl-10"
                    value={formData.emailOrPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-2">
              <button
                onClick={() => navigate('/forgot-password')}
                className="text-sm text-blue-600 hover:text-blue-700 block w-full"
              >
                Forgot your password?
              </button>
              
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={() => navigate('/register')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Join our community
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
