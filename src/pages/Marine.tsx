import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Fish, 
  Waves, 
  Thermometer, 
  Heart, 
  AlertCircle, 
  TrendingDown,
  Eye,
  Zap,
  ArrowRight
} from 'lucide-react';
import marineBg from '@/assets/marine-bg.jpg';

const Marine = () => {
  const oceanMetrics = [
    { name: 'Ocean Temperature', value: '22.4°C', change: '+0.8°C', status: 'warning' },
    { name: 'pH Level', value: '8.1', change: '-0.1', status: 'critical' },
    { name: 'Coral Coverage', value: '68%', change: '-12%', status: 'warning' },
    { name: 'Fish Populations', value: '2.3M', change: '+156K', status: 'good' }
  ];

  const marineThreats = [
    { type: 'Coral Bleaching', severity: 'High', location: 'Great Barrier Reef' },
    { type: 'Plastic Pollution', severity: 'Medium', location: 'Pacific Gyre' },
    { type: 'Overfishing', severity: 'High', location: 'Atlantic Coast' },
    { type: 'Ocean Acidification', severity: 'Critical', location: 'Arctic Ocean' }
  ];

  const trackedSpecies = [
    { name: 'Blue Whale', count: 847, trend: 'up' },
    { name: 'Sea Turtle', count: 23456, trend: 'up' },
    { name: 'Hammerhead Shark', count: 1203, trend: 'down' },
    { name: 'Dolphin Pods', count: 892, trend: 'stable' }
  ];

  return (
    <div className="min-h-screen bg-marine">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${marineBg})` }}
        >
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <Fish className="h-16 w-16 text-marine animate-float" />
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-6xl mb-6">
              <span className="text-gradient">Marine AI</span>
              <br />
              <span className="text-foreground">Ocean Intelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced underwater monitoring system tracking ocean health, marine biodiversity, 
              and climate change impacts across global marine ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-marine hover:bg-marine-glow text-primary-foreground px-8 py-6"
              >
                <Waves className="mr-2 h-5 w-5" />
                Ocean Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-glass-border hover:bg-glass px-8 py-6"
              >
                <Eye className="mr-2 h-5 w-5" />
                Live Underwater Feeds
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ocean Health Dashboard */}
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
              Ocean Health Monitoring
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time analysis of marine ecosystem health and biodiversity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ocean Metrics */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {oceanMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card border-glass-border">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-foreground">{metric.name}</h3>
                          <div className={`h-3 w-3 rounded-full ${
                            metric.status === 'critical' ? 'bg-destructive' :
                            metric.status === 'warning' ? 'bg-warning' :
                            'bg-success'
                          } animate-pulse`} />
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-2xl font-bold text-marine">
                            {metric.value}
                          </p>
                          <div className="flex items-center text-sm">
                            {metric.status === 'good' ? (
                              <TrendingDown className="h-4 w-4 text-success mr-1 rotate-180" />
                            ) : (
                              <TrendingDown className="h-4 w-4 text-destructive mr-1" />
                            )}
                            <span className={
                              metric.status === 'good' ? 'text-success' : 'text-destructive'
                            }>
                              {metric.change} this year
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Marine Species Tracking */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-glass-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Fish className="h-5 w-5 mr-2 text-marine" />
                      Marine Species Tracking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {trackedSpecies.map((species, index) => (
                        <div key={species.name} className="text-center p-4 rounded-lg bg-marine/10">
                          <Heart className={`h-6 w-6 mx-auto mb-2 ${
                            species.trend === 'up' ? 'text-success' :
                            species.trend === 'down' ? 'text-destructive' :
                            'text-warning'
                          }`} />
                          <h4 className="font-semibold text-sm">{species.name}</h4>
                          <p className="text-lg font-bold text-marine">{species.count.toLocaleString()}</p>
                          <Badge 
                            variant={
                              species.trend === 'up' ? 'outline' :
                              species.trend === 'down' ? 'destructive' : 'secondary'
                            }
                            className="text-xs mt-1"
                          >
                            {species.trend}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI Monitoring Systems */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-glass-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-accent" />
                      AI Monitoring Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-primary/10">
                        <Thermometer className="h-8 w-8 text-primary mx-auto mb-2" />
                        <h4 className="font-semibold text-sm">Temperature Sensors</h4>
                        <p className="text-xs text-muted-foreground">3,847 active buoys</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-marine/10">
                        <Eye className="h-8 w-8 text-marine mx-auto mb-2" />
                        <h4 className="font-semibold text-sm">Underwater Cameras</h4>
                        <p className="text-xs text-muted-foreground">Real-time feeds</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-accent/10">
                        <Waves className="h-8 w-8 text-accent mx-auto mb-2" />
                        <h4 className="font-semibold text-sm">Acoustic Monitoring</h4>
                        <p className="text-xs text-muted-foreground">Marine life sounds</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Marine Threats Panel */}
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
                    <AlertCircle className="h-5 w-5 mr-2 text-warning" />
                    Marine Threats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {marineThreats.map((threat, index) => (
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
                            threat.severity === 'Critical' ? 'destructive' :
                            threat.severity === 'High' ? 'secondary' : 'outline'
                          }
                          className="text-xs"
                        >
                          {threat.severity}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        📍 {threat.location}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card border-glass-border">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="h-3 w-3 bg-success rounded-full mx-auto mb-3 animate-pulse" />
                    <p className="font-medium text-sm">Ocean Monitoring</p>
                    <p className="text-xs text-muted-foreground">Global coverage active</p>
                    
                    <div className="mt-4 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Underwater Drones</span>
                        <span className="text-success">2,847</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sensor Buoys</span>
                        <span className="text-success">12,456</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Data Streams</span>
                        <span className="text-success">Live</span>
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

export default Marine;