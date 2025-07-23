import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Target, 
  TrendingUp, 
  Users, 
  Globe,
  Award,
  ArrowRight,
  FileText,
  Presentation
} from 'lucide-react';

const InvestorSection = () => {
  const impactMetrics = [
    {
      icon: Target,
      label: 'SDG Goals Aligned',
      value: '12/17',
      description: 'UN Sustainable Development Goals'
    },
    {
      icon: TrendingUp,
      label: 'Market Size',
      value: '$47.8B',
      description: 'Conservation Technology Market'
    },
    {
      icon: Users,
      label: 'Potential Users',
      value: '2.3M+',
      description: 'Conservation Professionals Worldwide'
    },
    {
      icon: Globe,
      label: 'Global Reach',
      value: '195',
      description: 'Countries & Territories'
    }
  ];

  const sdgGoals = [
    { number: 13, title: 'Climate Action', primary: true },
    { number: 14, title: 'Life Below Water', primary: true },
    { number: 15, title: 'Life on Land', primary: true },
    { number: 6, title: 'Clean Water', primary: false },
    { number: 7, title: 'Clean Energy', primary: false },
    { number: 11, title: 'Sustainable Cities', primary: false }
  ];

  const testimonials = [
    {
      quote: "Revolutionary approach to conservation monitoring. The AI-driven insights are unprecedented.",
      author: "Dr. Sarah Chen",
      role: "Director, WWF Conservation Technology",
      organization: "World Wildlife Fund"
    },
    {
      quote: "This platform represents the future of environmental intelligence and conservation strategy.",
      author: "Prof. Michael Rodriguez",
      role: "Climate Change Research Lead",
      organization: "MIT Environmental Solutions"
    }
  ];

  return (
    <section className="py-20 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-5xl mb-6">
            Investment in <span className="text-gradient">Planetary Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in building the world's most comprehensive conservation intelligence platform. 
            Together, we can create unprecedented impact for our planet's future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display font-semibold text-2xl mb-6 text-foreground">
                Market Opportunity & Impact
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {impactMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card border-glass-border">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <metric.icon className="h-5 w-5 text-primary" />
                          <span className="font-semibold text-lg text-primary">
                            {metric.value}
                          </span>
                        </div>
                        <p className="font-medium text-sm text-foreground">
                          {metric.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {metric.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SDG Alignment */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4 text-foreground">
                UN SDG Alignment
              </h4>
              <div className="flex flex-wrap gap-2">
                {sdgGoals.map((goal) => (
                  <Badge
                    key={goal.number}
                    variant={goal.primary ? "default" : "outline"}
                    className={`${
                      goal.primary 
                        ? "bg-primary/20 text-primary border-primary/30" 
                        : "border-muted-foreground/30"
                    } text-xs`}
                  >
                    SDG {goal.number}: {goal.title}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-display font-semibold text-2xl mb-6 text-foreground">
              Industry Recognition
            </h3>
            
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-glass-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} className="h-4 w-4 text-accent fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="text-sm">
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-muted-foreground">
                        {testimonial.organization}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center glass-card p-8 border-glass-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display font-semibold text-2xl mb-4 text-foreground">
            Ready to Transform Conservation?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download our comprehensive investor deck and technical documentation 
            to learn more about this groundbreaking opportunity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Investor Deck
              <FileText className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-glass-border hover:bg-glass px-8 py-6"
            >
              <Presentation className="mr-2 h-5 w-5" />
              Schedule Presentation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorSection;