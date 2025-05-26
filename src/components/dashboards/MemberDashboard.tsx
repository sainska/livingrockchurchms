
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Heart, 
  DollarSign, 
  Users, 
  BookOpen, 
  Bell,
  ChevronRight,
  Church
} from 'lucide-react';

const MemberDashboard = () => {
  const upcomingEvents = [
    { id: 1, title: "Sunday Service", date: "Dec 3, 2023", time: "10:00 AM" },
    { id: 2, title: "Bible Study", date: "Dec 5, 2023", time: "7:00 PM" },
    { id: 3, title: "Youth Meeting", date: "Dec 7, 2023", time: "6:00 PM" }
  ];

  const recentSermons = [
    { id: 1, title: "Walking in Faith", speaker: "Pastor John", date: "Nov 26, 2023" },
    { id: 2, title: "Love and Compassion", speaker: "Pastor Sarah", date: "Nov 19, 2023" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Church className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Member Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, John!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month's Giving</p>
                  <p className="text-2xl font-bold text-gray-900">$450</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Events Attended</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Small Groups</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Prayer Requests</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <Heart className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Events
              </CardTitle>
              <CardDescription>
                Stay connected with our community events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                    </div>
                    <Badge variant="outline">RSVP</Badge>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  View All Events
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Sermons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Recent Sermons
              </CardTitle>
              <CardDescription>
                Catch up on messages you may have missed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSermons.map((sermon) => (
                  <div key={sermon.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{sermon.title}</h4>
                      <p className="text-sm text-gray-600">By {sermon.speaker} • {sermon.date}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Watch
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  View All Sermons
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks you can perform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button className="h-20 flex flex-col space-y-2 bg-green-600 hover:bg-green-700">
                  <DollarSign className="h-6 w-6" />
                  <span>Give Online</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col space-y-2">
                  <Heart className="h-6 w-6" />
                  <span>Prayer Request</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col space-y-2">
                  <Users className="h-6 w-6" />
                  <span>Join Small Group</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col space-y-2">
                  <Calendar className="h-6 w-6" />
                  <span>Book Room</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Profile Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>
                Manage your personal information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                    JD
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">John Doe</h3>
                    <p className="text-sm text-gray-600">john.doe@email.com</p>
                    <p className="text-sm text-gray-600">Member since 2020</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    Update Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
