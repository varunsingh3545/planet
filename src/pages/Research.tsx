import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, BarChart3, Users, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import researchBg from '@/assets/research-bg.jpg';

const researchFeatures = [
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Powerful tools for analyzing conservation data and extracting actionable insights.'
  },
  {
    icon: Zap,
    title: 'Predictive Models',
    description: 'Leverage AI-driven models to forecast trends and outcomes in environmental research.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Work together with scientists and organizations globally on conservation projects.'
  }
];

const Research = () => {
  return (
    <div className="min-h-screen bg-primary/10">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${researchBg})` }}
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <Microscope className="h-16 w-16 text-primary animate-float" />
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-6xl mb-6">
              <span className="text-gradient">Research Portal</span>
              <br />
              <span className="text-foreground">Advanced Conservation Analytics</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Access cutting-edge analytics, predictive models, and collaborative tools designed for conservation scientists and researchers. Drive impactful discoveries and foster global collaboration for a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-6"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                Launch Analytics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-glass-border hover:bg-glass px-8 py-6"
              >
                <Users className="mr-2 h-5 w-5" />
                Collaborate
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background/80">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchFeatures.map((feature, idx) => (
            <Card key={idx} className="shadow-lg border-primary/20">
              <CardHeader className="flex flex-col items-center">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-center">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Research; 