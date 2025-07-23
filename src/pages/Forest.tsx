import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TreePine, 
  Satellite, 
  Leaf, 
  Wind, 
  AlertTriangle, 
  TrendingUp,
  MapPin,
  Zap,
  ArrowRight,
  Activity
} from 'lucide-react';
import forestBg from '@/assets/forest-bg.jpg';

const Forest = () => {
  const forestMetrics = [
    { name: 'Forest Coverage', value: '68.2%', change: '-2.1%', status: 'warning' },
    { name: 'Carbon Sequestration', value: '847 Mt', change: '+12 Mt', status: 'good' },
    { name: 'Biodiversity Index', value: '7.8/10', change: '+0.3', status: 'good' },
    { name: 'Deforestation Rate', value: '0.5%', change: '-0.8%', status: 'improving' }
  ];

  const deforestationAlerts = [
    { location: 'Amazon Basin, Brazil', area: '2,847 hectares', severity: 'Critical', time: '2 hours ago' },
    { location: 'Congo Basin, DRC', area: '1,203 hectares', severity: 'High', time: '6 hours ago' },
    { location: 'Sumatra, Indonesia', area: '876 hectares', severity: 'Medium', time: '1 day ago' }
  ];

  const carbonSinks = [
    { forest: 'Amazon Rainforest', carbon: '150 Gt', efficiency: '92%' },
    { forest: 'Congo Basin', carbon: '60 Gt', efficiency: '88%' },
    { forest: 'Boreal Forest', carbon: '88 Gt', efficiency: '85%' },
    { forest: 'Temperate Forests', carbon: '45 Gt', efficiency: '78%' }
  ];

  return (
    <div className="min-h-screen bg-forest">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${forestBg})` }}
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
              <TreePine className="h-16 w-16 text-forest animate-float" />
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-6xl mb-6">
              <span className="text-gradient">Forest AI</span>
              <br />
              <span className="text-foreground">Carbon & Biodiversity</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Satellite-powered AI monitoring deforestation, tracking carbon sequestration, 
              and measuring biodiversity across the world's forest ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-forest hover:bg-forest-glow text-primary-foreground px-8 py-6"
              >
                <Satellite className="mr-2 h-5 w-5" />
                Satellite View
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-glass-border hover:bg-glass px-8 py-6"
              >
                <Leaf className="mr-2 h-5 w-5" />
                Carbon Calculator
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Forest Monitoring Dashboard */}
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
              Global Forest Intelligence
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time monitoring of deforestation, carbon storage, and forest health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Forest Metrics */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {forestMetrics.map((metric, index) => (
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
                            metric.status === 'warning' ? 'bg-warning' :
                            metric.status === 'good' ? 'bg-success' :
                            'bg-accent'
                          } animate-pulse`} />
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-2xl font-bold text-forest">
                            {metric.value}
                          </p>
                          <div className="flex items-center text-sm">
                            <TrendingUp className={`h-4 w-4 mr-1 ${
                              metric.status === 'warning' ? 'text-destructive rotate-180' :
                              'text-success'
                            }`} />
                            <span className={
                              metric.status === 'warning' ? 'text-destructive' : 'text-success'
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

              {/* Carbon Sinks Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-glass-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wind className="h-5 w-5 mr-2 text-forest" />
                      Major Carbon Sinks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {carbonSinks.map((sink, index) => (
                        <div key={sink.forest} className="p-4 rounded-lg bg-forest/10">
                          <h4 className="font-semibold text-sm mb-2">{sink.forest}</h4>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Carbon Stored</span>
                              <span className="text-forest font-semibold">{sink.carbon}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Efficiency</span>
                              <span className="text-success">{sink.efficiency}</span>
                            </div>
                          </div>
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
                      AI Forest Monitoring
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-primary/10">
                        <Satellite className="h-8 w-8 text-primary mx-auto mb-2" />
                        <h4 className="font-semibold text-sm">Satellite Analysis</h4>
                        <p className="text-xs text-muted-foreground">Daily imagery</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-forest/10">
                        <Activity className="h-8 w-8 text-forest mx-auto mb-2" />
                        <h4 className="font-semibold text-sm">Change Detection</h4>
                        <p className="text-xs text-muted-foreground">Real-time alerts</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-accent/10">
                        <Leaf className="h-8 w-8 text-accent mx-auto mb-2" />
                        <h4 className="font-semibold text-sm">Species Analysis</h4>
                        <p className="text-xs text-muted-foreground">Biodiversity tracking</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Deforestation Alerts */}
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
                    Deforestation Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {deforestationAlerts.map((alert, index) => (
                    <div 
                      key={index}
                      className="p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-sm text-foreground">
                          <MapPin className="h-3 w-3 inline mr-1" />
                          {alert.location}
                        </p>
                        <Badge 
                          variant={
                            alert.severity === 'Critical' ? 'destructive' :
                            alert.severity === 'High' ? 'secondary' : 'outline'
                          }
                          className="text-xs"
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Area lost: {alert.area}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {alert.time}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card border-glass-border">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="h-3 w-3 bg-success rounded-full mx-auto mb-3 animate-pulse" />
                    <p className="font-medium text-sm">Forest Monitoring</p>
                    <p className="text-xs text-muted-foreground">Global satellite coverage</p>
                    
                    <div className="mt-4 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Satellites Active</span>
                        <span className="text-success">47</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Areas Monitored</span>
                        <span className="text-success">847</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Update Frequency</span>
                        <span className="text-success">Daily</span>
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

export default Forest;