import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Bird, 
  Camera, 
  MapPin, 
  TrendingUp, 
  AlertTriangle, 
  Shield,
  Activity,
  Zap,
  ArrowRight
} from 'lucide-react';
import wildlifeBg from '@/assets/wildlife-bg.jpg';

const Wildlife = () => {
  const activeSpecies = [
    { name: 'Siberian Tiger', count: 432, status: 'Critical', change: '+12' },
    { name: 'Snow Leopard', count: 4080, status: 'Vulnerable', change: '+89' },
    { name: 'Giant Panda', count: 1864, status: 'Vulnerable', change: '+156' },
    { name: 'Black Rhino', count: 5500, status: 'Critical', change: '+45' }
  ];

  const threats = [
    { type: 'Poaching Activity', level: 'High', location: 'Kenya, Tsavo' },
    { type: 'Habitat Loss', level: 'Medium', location: 'Indonesia, Sumatra' },
    { type: 'Human Conflict', level: 'Low', location: 'India, Assam' }
  ];

  return (
    <div className="min-h-screen bg-wildlife">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${wildlifeBg})` }}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <Bird className="h-16 w-16 text-wildlife animate-float" />
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-6xl mb-6">
              <span className="text-gradient">Wildlife AI</span>
              <br />
              <span className="text-foreground">Conservation Intelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced AI monitoring system tracking endangered species, migration patterns, 
              and population dynamics across global wildlife reserves and natural habitats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-wildlife hover:bg-wildlife-glow text-primary-foreground px-8 py-6"
              >
                <Camera className="mr-2 h-5 w-5" />
                Live Wildlife Cams
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-glass-border hover:bg-glass px-8 py-6"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Tracking Map
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Species Monitoring Dashboard */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Real-time Species Monitoring
            </h2>
            <p className="text-lg text-muted-foreground">
              AI-powered tracking of endangered species populations worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Species Status Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeSpecies.map((species, index) => (
                  <motion.div
                    key={species.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card border-glass-border">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-foreground">{species.name}</h3>
                          <Badge 
                            variant={species.status === 'Critical' ? 'destructive' : 'secondary'}
                            className="text-xs"
                          >
                            {species.status}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-2xl font-bold text-wildlife">
                            {species.count.toLocaleString()}
                          </p>
                          <div className="flex items-center text-sm">
                            <TrendingUp className="h-4 w-4 text-accent mr-1" />
                            <span className="text-accent">{species.change} this month</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* AI Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-glass-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-wildlife" />
                      AI-Powered Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-wildlife/10">
                        <Camera className="h-8 w-8 text-wildlife mx-auto mb-2" />
                        <h4 className="font-semibold text-sm">Camera Traps</h4>
                        <p className="text-xs text-muted-foreground">12,847 active</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-accent/10">
                        <Activity className="h-8 w-8 text-accent mx-auto mb-2" />
                        <h4 className="font-semibold text-sm">Behavior Analysis</h4>
                        <p className="text-xs text-muted-foreground">Real-time AI</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-primary/10">
                        <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                        <h4 className="font-semibold text-sm">Anti-Poaching</h4>
                        <p className="text-xs text-muted-foreground">24/7 alerts</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Threat Detection Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="glass-card border-glass-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
                    Threat Detection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {threats.map((threat, index) => (
                    <div 
                      key={index}
                      className="p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-sm text-foreground">
                          {threat.type}
                        </p>
                        <Badge 
                          variant={
                            threat.level === 'High' ? 'destructive' :
                            threat.level === 'Medium' ? 'secondary' : 'outline'
                          }
                          className="text-xs"
                        >
                          {threat.level}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 inline mr-1" />
                        {threat.location}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card border-glass-border">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="h-3 w-3 bg-success rounded-full mx-auto mb-3 animate-pulse" />
                    <p className="font-medium text-sm">System Status</p>
                    <p className="text-xs text-muted-foreground">All monitoring systems active</p>
                    
                    <div className="mt-4 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Satellites</span>
                        <span className="text-success">Online</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">AI Models</span>
                        <span className="text-success">Active</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Field Sensors</span>
                        <span className="text-success">Connected</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wildlife;