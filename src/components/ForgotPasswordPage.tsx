
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Church, ArrowLeft, Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        setIsEmailSent(true);
        toast({
          title: "Reset Email Sent",
          description: "Please check your email for password reset instructions.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isEmailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Church className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Divine Church Manager</h1>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl text-green-600">Email Sent!</CardTitle>
              <CardDescription>
                We've sent password reset instructions to {email}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">
                  Please check your email and click the reset link to create a new password.
                  The link will expire in 24 hours.
                </p>
              </div>
              
              <Button 
                onClick={() => navigate('/login')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Back to Login
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => {
                  setIsEmailSent(false);
                  setEmail('');
                }}
                className="w-full"
              >
                Send Another Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => navigate('/login')}
            className="mb-6 text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </Button>
          
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Church className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Divine Church Manager</h1>
          </div>
        </div>

        {/* Forgot Password Form */}
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Reset Your Password</CardTitle>
            <CardDescription>
              Enter your email address and we'll send you a link to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isLoading || !email}
              >
                {isLoading ? 'Sending Reset Email...' : 'Send Reset Email'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign in here
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
