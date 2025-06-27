"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { Button } from "./ui/button";
import { Menu, X, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/#accueil", label: "Accueil" },
    { href: "/#solutions", label: "Nos Solutions" },
    { href: "/#videos", label: "Vidéos" },
    { href: "/#a-propos", label: "À propos" },
    { href: "/#contact", label: "Contact" },
  ];

  const headerVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const navItemVariants: Variants = {
    hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        staggerChildren: 0.1, 
        when: "beforeChildren"
      }
    }
  };

  const mobileLinkVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      
      {/* Top bar with contact info */}
      <div className={`transition-all duration-300 text-sm ${isScrolled ? 'text-gan-blue-900' : 'text-white'} bg-gan-blue-900/50 ${isScrolled ? 'bg-white/0' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-1">
          <div className="flex items-center space-x-4">
            <a href="tel:0142182200" className="flex items-center space-x-1 hover:text-gan-yellow-400">
              <Phone size={14} />
              <span>01 42 18 22 00</span>
            </a>
            <a href="mailto:contact@assuparviaugirard.com" className="flex items-center space-x-1 hover:text-gan-yellow-400">
              <Mail size={14} />
              <span>contact@assuparviaugirard.com</span>
            </a>
          </div>
          <span className="hidden md:block text-xs">31 rue Falguière, 75015 Paris, Île-de-France</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
                <Image src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/Logo_Gan_2010.svg/1200px-Logo_Gan_2010.svg.png" alt="Logo GAN Assurances" width={48} height={48} />
                <div>
                    <p className={`font-bold text-lg ${isScrolled ? 'text-gan-blue-900' : 'text-white'}`}>Assurances Paris Vaugirard</p>
                    <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>Agence GAN Assurances</p>
                </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div key={link.label} variants={navItemVariants} whileHover="hover">
                <Link href={link.href} className={`font-medium transition-colors ${isScrolled ? 'text-gan-blue-900 hover:text-gan-yellow-500' : 'text-white hover:text-gan-yellow-400'}`}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <motion.div variants={navItemVariants} whileHover="hover" className="hidden sm:block">
                <Button asChild variant={isScrolled ? 'default' : 'outline'}>
                    <Link href="/#contact">Demander un devis</Link>
                </Button>
            </motion.div>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-md ${isScrolled ? 'text-gan-blue-900' : 'text-white'}`}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute top-full left-0 right-0"
          >
            <nav className="flex flex-col items-center space-y-4 py-8">
              {navLinks.map((link) => (
                <motion.div key={link.label} variants={mobileLinkVariants}>
                  <Link href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-gan-blue-900 hover:text-gan-yellow-500">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileLinkVariants} className="mt-4">
                <Button asChild>
                    <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Demander un devis</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;