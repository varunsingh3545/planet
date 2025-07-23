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

      {/* Scroll Indicator - Refined Placement and Style */}
      <motion.div
        className="hidden lg:block fixed left-1/2" // Use fixed to keep it at the bottom of the viewport
        style={{ bottom: '40px', transform: 'translateX(-50%)' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center shadow-lg shadow-primary/20">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>

      {/* Content Wrapper for Desktop Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
        {/* Floating Earth Element - Left on Desktop */}
        <motion.div
          className="hidden lg:flex flex-col items-center justify-center mr-12"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ 
            scale: { duration: 1, ease: "easeOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        >
          <div className="relative flex items-center justify-center">
            {/* Circular Glow Behind Globe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full bg-primary/20 blur-2xl" />
            </div>
            <Globe className="h-40 w-40 text-primary animate-pulse-glow relative z-10" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30 z-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-tight">
              <span className="text-gradient">Digital Nervous System</span>
              <br />
              <span className="text-foreground">of the Planet</span>
            </h1>

            {/* Subtitle with Typewriter Effect */}
            <motion.p
              className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Real-time AI-powered conservation intelligence system monitoring Earth's ecosystems,
              wildlife populations, and environmental changes with unprecedented precision.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-8 mb-14 text-center"
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

            {/* CTA Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;