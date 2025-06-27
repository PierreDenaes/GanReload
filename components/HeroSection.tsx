"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Video } from 'lucide-react';

const HeroSection = () => {
  console.log("HeroSection component rendered");

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gan-gradient overflow-hidden pt-32 md:pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gan-yellow-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gan-yellow-400/5 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-max relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <Shield className="h-5 w-5 text-gan-yellow-400" />
            <span className="text-sm font-medium">15 ans d'expertise à votre service</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Expert Multirisques
            <span className="block text-gan-yellow-400">Prévoyance & Retraite</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
            Solutions complètes pour protéger votre entreprise et vos biens à Paris et ses alentours
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16 animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg"
              className="btn-gan-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 group w-full sm:w-auto"
              onClick={() => console.log("Demander un devis hero clicked")}
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gan-blue-500 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 group w-full sm:w-auto"
              onClick={() => console.log("Voir nos vidéos clicked")}
            >
              <Video className="mr-2 h-5 w-5" />
              Nos Solutions
            </Button>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-gan-yellow-400 mb-2">15+</div>
              <div className="text-blue-100">Années d'expérience</div>
              <div className="text-sm text-blue-200 mt-1">Expertise multirisque en IdF</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-gan-yellow-400 mb-2">24h</div>
              <div className="text-blue-100">Réactivité</div>
              <div className="text-sm text-blue-200 mt-1">Réponse garantie sous 24h</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-gan-yellow-400 mb-2">100%</div>
              <div className="text-blue-100">Sur mesure</div>
              <div className="text-sm text-blue-200 mt-1">Solutions adaptées à votre secteur</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;