import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Globe, Activity, TrendingUp, Users, ArrowRight, ListChecks, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import heroEarthBg from '@/assets/hero-earth-bg.jpg';

const dashboardMetrics = [
  {
    icon: Activity,
    title: 'Active Projects',
    value: 24,
    description: 'Ongoing conservation initiatives worldwide.'
  },
  {
    icon: TrendingUp,
    title: 'Data Streams',
    value: 128,
    description: 'Live data feeds from sensors and satellites.'
  },
  {
    icon: Users,
    title: 'Collaborators',
    value: 56,
    description: 'Scientists and organizations connected.'
  }
];

const recentActivity = [
  { date: '2024-06-01', activity: 'New project launched: Amazon Rainforest Monitoring' },
  { date: '2024-05-28', activity: 'Data stream integrated: Oceanic Sensors' },
  { date: '2024-05-25', activity: 'User joined: Dr. Jane Goodall' },
  { date: '2024-05-20', activity: 'Report generated: Wildlife Migration Patterns' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-background">
      {/* Hero Section with Background */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroEarthBg})` }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-2">
              <span className="text-gradient">Dashboard Overview</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get a real-time overview of conservation projects, data streams, and team activity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-6"
              >
                <Globe className="mr-2 h-5 w-5" />
                Explore Data
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Grid */}
      <section className="py-12 bg-background/80">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {dashboardMetrics.map((metric, idx) => (
            <Card key={idx} className="shadow-lg border-primary/20">
              <CardHeader className="flex flex-col items-center">
                <metric.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold mb-2">{metric.title}</CardTitle>
                <div className="text-4xl font-extrabold text-primary mb-1">{metric.value}</div>
              </CardHeader>
              <CardContent className="text-muted-foreground text-center">
                {metric.description}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart and Activity Row */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chart Placeholder */}
          <Card className="shadow-lg border-primary/20 flex flex-col items-center justify-center min-h-[300px]">
            <CardHeader className="flex flex-row items-center gap-2">
              <BarChart3 className="h-7 w-7 text-primary" />
              <CardTitle className="text-xl font-bold">Project Progress</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center flex-1">
              <div className="w-full h-40 flex items-center justify-center text-muted-foreground">
                {/* Replace with actual chart component */}
                <span className="italic">[Chart Coming Soon]</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-lg border-primary/20">
            <CardHeader className="flex flex-row items-center gap-2">
              <ListChecks className="h-7 w-7 text-primary" />
              <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-border">
                {recentActivity.map((item, idx) => (
                  <li key={idx} className="py-3 flex items-start gap-3">
                    <CalendarDays className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                      <div className="text-base text-foreground">{item.activity}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Dashboard; 