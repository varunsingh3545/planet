import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Satellite, ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/hero-earth-bg.jpg';

const statsData = [
  { label: 'Species Tracked', value: 2500000, color: 'primary' },
  { label: 'Countries', value: 150, color: 'accent' },
  { label: 'Real-time', value: 1, color: 'marine', suffix: '/7' },
];

function useAnimatedCounter(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [target]);
  return count;
}

const HeroSection = () => {
  // Animated counters for stats
  const species = useAnimatedCounter(2500000);
  const countries = useAnimatedCounter(150, 1000);
  // Real-time is always 24/7, so just animate 24
  const realtime = useAnimatedCounter(24, 1000);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Earth in Space Background with Data Streams and Stars */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBackground}
          alt="Earth from space"
          className="w-full h-full object-cover object-center opacity-80"
          style={{ filter: 'brightness(0.7) blur(1px)' }}
        />
        {/* Stars overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full absolute inset-0" style={{ opacity: 0.5 }}>
            {[...Array(80)].map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 1920}
                cy={Math.random() * 1080}
                r={Math.random() * 1.2 + 0.3}
                fill="#fff"
                opacity={Math.random() * 0.7 + 0.2}
              />
            ))}
          </svg>
        </div>
        {/* Data streams (animated lines) */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full absolute inset-0">
            <motion.line x1="30%" y1="0" x2="40%" y2="100%" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="6 6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }} />
            <motion.line x1="70%" y1="0" x2="60%" y2="100%" stroke="#00ffb2" strokeWidth="1.5" strokeDasharray="8 8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }} />
            <motion.line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#fff" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 1 }} />
          </svg>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 py-24 flex flex-col items-center text-center">
        {/* Headline */}
        <motion.h1
          className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary via-accent to-marine bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Digital Nervous System<br />
          <span className="text-foreground">of the Planet</span>
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Real-time AI-powered conservation intelligence system monitoring Earth's ecosystems, wildlife populations, and environmental changes with unprecedented precision.
        </motion.p>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary via-accent to-marine hover:from-primary-glow hover:to-accent-glow text-primary-foreground px-10 py-6 text-lg shadow-xl shadow-primary/20 border-0 rounded-full tracking-wide relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <Satellite className="mr-2 h-5 w-5" />
              Explore Live Data
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            {/* Futuristic glow effect */}
            <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
          </Button>
        </motion.div>
        {/* Animated Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="text-4xl sm:text-5xl font-extrabold text-primary drop-shadow-glow">
              {species.toLocaleString()}+
            </span>
            <span className="text-base text-muted-foreground mt-2 tracking-wide uppercase">Species Tracked</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <span className="text-4xl sm:text-5xl font-extrabold text-accent drop-shadow-glow">
              {countries}+
            </span>
            <span className="text-base text-muted-foreground mt-2 tracking-wide uppercase">Countries</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <span className="text-4xl sm:text-5xl font-extrabold text-marine drop-shadow-glow">
              {realtime}/7
            </span>
            <span className="text-base text-muted-foreground mt-2 tracking-wide uppercase">Real-time</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;