import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Activity,
  Globe,
  Zap
} from 'lucide-react';

const DashboardPreview = () => {
  const stats = [
    {
      label: 'Active Monitoring Stations',
      value: '12,847',
      change: '+156 today',
      trend: 'up',
      color: 'primary'
    },
    {
      label: 'Species Under Protection',
      value: '2,847',
      change: '+23 this week',
      trend: 'up',
      color: 'accent'
    },
    {
      label: 'Deforestation Alerts',
      value: '47',
      change: '-12% from last month',
      trend: 'down',
      color: 'warning'
    },
    {
      label: 'Ocean Health Score',
      value: '73.2%',
      change: '+2.1% improvement',
      trend: 'up',
      color: 'marine'
    }
  ];

  const alerts = [
    {
      type: 'critical',
      title: 'Amazon Deforestation Spike',
      location: 'Brazil, Acre State',
      time: '2 hours ago',
      icon: AlertTriangle
    },
    {
      type: 'warning',
      title: 'Coral Bleaching Detected',
      location: 'Great Barrier Reef',
      time: '4 hours ago',
      icon: Activity
    },
    {
      type: 'success',
      title: 'Tiger Population Increase',
      location: 'India, Madhya Pradesh',
      time: '1 day ago',
      icon: CheckCircle
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
            Live <span className="text-gradient">Global Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time insights from our planetary monitoring network, 
            providing actionable intelligence for conservation efforts worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Grid */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card border-glass-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-muted-foreground">
                          {stat.label}
                        </h3>
                        {stat.trend === 'up' ? (
                          <TrendingUp className={`h-4 w-4 text-${stat.color}`} />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-warning" />
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </p>
                        <p className={`text-sm text-${stat.color}`}>
                          {stat.change}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Data Visualization Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-glass-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-primary" />
                    Global Conservation Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gradient-to-r from-primary/10 via-accent/10 to-marine/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
                      <p className="text-muted-foreground">Interactive visualization</p>
                      <p className="text-sm text-muted-foreground">Real-time data streams</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Alerts Panel */}
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
                  <Zap className="h-5 w-5 mr-2 text-accent" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors"
                  >
                    <alert.icon className={`h-5 w-5 mt-1 flex-shrink-0 ${
                      alert.type === 'critical' ? 'text-destructive' :
                      alert.type === 'warning' ? 'text-warning' :
                      'text-success'
                    }`} />
                    
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground">
                        {alert.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {alert.location}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {alert.time}
                      </p>
                    </div>

                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        alert.type === 'critical' ? 'border-destructive/50 text-destructive' :
                        alert.type === 'warning' ? 'border-warning/50 text-warning' :
                        'border-success/50 text-success'
                      }`}
                    >
                      {alert.type}
                    </Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Connection Status */}
            <Card className="glass-card border-glass-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 bg-success rounded-full animate-pulse" />
                  <div>
                    <p className="font-medium text-sm">System Status</p>
                    <p className="text-xs text-muted-foreground">All systems operational</p>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Satellites Connected</span>
                    <span className="text-success">847/847</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">AI Models Active</span>
                    <span className="text-success">12/12</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Data Streams</span>
                    <span className="text-success">Live</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;