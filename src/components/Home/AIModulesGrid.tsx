import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  TreePine, 
  Fish, 
  Bird, 
  Microscope, 
  GraduationCap, 
  Users, 
  BarChart3,
  Zap,
  ArrowRight
} from 'lucide-react';

const aiModules = [
  {
    id: 'wildlife',
    icon: Bird,
    title: 'Wildlife AI',
    description: 'Track endangered species, migration patterns, and population dynamics in real-time.',
    features: ['Population Monitoring', 'Behavior Analysis', 'Threat Detection'],
    color: 'wildlife',
    href: '/wildlife'
  },
  {
    id: 'marine',
    icon: Fish,
    title: 'Marine AI',
    description: 'Monitor ocean health, marine life, and underwater ecosystem changes.',
    features: ['Ocean Health', 'Species Tracking', 'Coral Monitoring'],
    color: 'marine',
    href: '/marine'
  },
  {
    id: 'forest',
    icon: TreePine,
    title: 'Forest AI',
    description: 'Detect deforestation, track forest health, and monitor carbon sequestration.',
    features: ['Deforestation Alert', 'Carbon Tracking', 'Biodiversity Index'],
    color: 'forest',
    href: '/forest'
  },
  {
    id: 'research',
    icon: Microscope,
    title: 'Research Portal',
    description: 'Advanced analytics and research tools for conservation scientists.',
    features: ['Data Analysis', 'Predictive Models', 'Research Collaboration'],
    color: 'primary',
    href: '/research'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education Hub',
    description: 'Educational resources and interactive learning about conservation.',
    features: ['Interactive Maps', 'Learning Modules', 'Virtual Tours'],
    color: 'accent',
    href: '/education'
  },
  {
    id: 'citizen',
    icon: Users,
    title: 'Citizen Science',
    description: 'Contribute to global conservation through community data collection.',
    features: ['Data Collection', 'Community Reports', 'Impact Tracking'],
    color: 'secondary',
    href: '/citizen'
  }
];

const AIModulesGrid = () => {
  return (
    <section className="py-20 relative">
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
            <span className="text-gradient">AI-Powered</span> Conservation Modules
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized artificial intelligence systems working together to monitor, 
            analyze, and protect our planet's ecosystems in real-time.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:border-glass-border/50 transition-all duration-300 relative overflow-hidden">
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${module.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-${module.color}/10 mb-4 group-hover:bg-${module.color}/20 transition-colors`}>
                    <module.icon className={`h-6 w-6 text-${module.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {module.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Zap className={`h-3 w-3 text-${module.color} mr-2 flex-shrink-0`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full group/btn border-glass-border hover:border-primary/50"
                    asChild
                  >
                    <a href={module.href}>
                      <span>Explore Module</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview Link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow text-primary-foreground px-8 py-6"
            asChild
          >
            <a href="/dashboard">
              <BarChart3 className="mr-2 h-5 w-5" />
              View Live Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIModulesGrid;