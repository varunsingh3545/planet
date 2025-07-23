import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Globe, Satellite, ArrowRight, Play } from 'lucide-react';
import heroBackground from '@/assets/hero-earth-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      </div>

      {/* Floating Earth Element */}
      <motion.div
        className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ 
          scale: { duration: 1, ease: "easeOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="relative">
          <Globe className="h-32 w-32 text-primary animate-pulse-glow" />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl mb-6">
            <span className="text-gradient">Digital Nervous System</span>
            <br />
            <span className="text-foreground">of the Planet</span>
          </h1>

          {/* Subtitle with Typewriter Effect */}
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Real-time AI-powered conservation intelligence system monitoring Earth's ecosystems,
            wildlife populations, and environmental changes with unprecedented precision.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="glass-card p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-primary">2.5M+</div>
              <div className="text-sm text-muted-foreground">Species Tracked</div>
            </div>
            <div className="glass-card p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-accent">150+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="glass-card p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-marine">24/7</div>
              <div className="text-sm text-muted-foreground">Real-time</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg"
            >
              <Satellite className="mr-2 h-5 w-5" />
              Explore Live Data
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-glass-border hover:bg-glass px-8 py-6 text-lg group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
              <span className="ml-2 text-xs text-muted-foreground">(2:30)</span>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;