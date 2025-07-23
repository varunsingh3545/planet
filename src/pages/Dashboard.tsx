import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Globe, Activity, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import researchBg from '@/assets/research-bg.jpg';

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

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-primary/5">
      {/* Hero Section with Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${researchBg})` }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <BarChart3 className="h-16 w-16 text-primary animate-float" />
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-6xl mb-6">
              <span className="text-gradient">Dashboard</span>
              <br />
              <span className="text-foreground">Conservation Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Visualize real-time conservation data, monitor project progress, and collaborate with global teams—all in one unified dashboard.
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
              <Button
                variant="outline"
                size="lg"
                className="border-glass-border hover:bg-glass px-8 py-6"
              >
                <Users className="mr-2 h-5 w-5" />
                Team Portal
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-background/80">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </section>
    </div>
  );
};

export default Dashboard; 