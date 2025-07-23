import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/wildlife', label: 'Wildlife AI' },
    { href: '/marine', label: 'Marine AI' },
    { href: '/forest', label: 'Forest AI' },
    { href: '/research', label: 'Research' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/about', label: 'About' }
  ];

  const getNavbarStyle = () => {
    const path = location.pathname;
    
    if (path === '/wildlife') {
      return 'bg-wildlife/20 border-wildlife/30';
    } else if (path === '/marine') {
      return 'bg-marine/20 border-marine/30';
    } else if (path === '/forest') {
      return 'bg-forest/20 border-forest/30';
    } else if (path === '/research' || path === '/dashboard') {
      return 'bg-primary/10 border-primary/20';
    }
    
    return 'glass-nav';
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarStyle()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
            <Globe className="h-8 w-8 text-primary animate-rotate-slow" />
            <span className="font-display font-bold text-xl hidden sm:block">
              Digital Nervous System
            </span>
            <span className="font-display font-bold text-xl sm:hidden">
              DNS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'text-primary bg-primary/10 shadow-lg'
                    : 'text-foreground hover:text-primary hover:bg-glass'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <Button variant="outline" size="sm" className="ml-4 border-primary/50 hover:border-primary">
              <Zap className="h-4 w-4 mr-2" />
              Portal
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-glass-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-glass'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <Button variant="outline" className="w-full mt-4 border-primary/50">
                <Zap className="h-4 w-4 mr-2" />
                Enter Portal
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;