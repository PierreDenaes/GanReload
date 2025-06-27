"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Clock, 
  Target, 
  Award, 
  Users, 
  MapPin, 
  Phone, 
  Shield 
} from 'lucide-react';

const WhyChooseUsSection = () => {
  console.log("WhyChooseUsSection component rendered");

  const reasons = [
    {
      icon: Calendar,
      number: "15+",
      title: "Années d'expérience",
      description: "Expertise multirisque en IdF",
      details: "Une connaissance approfondie du marché francilien et des spécificités sectorielles"
    },
    {
      icon: Clock,
      number: "24h",
      title: "Réactivité",
      description: "Réponse garantie sous 24h",
      details: "Disponibilité permanente pour vos urgences et questions importantes"
    },
    {
      icon: Target,
      number: "100%",
      title: "Sur mesure",
      description: "Solutions adaptées à votre secteur",
      details: "Chaque contrat est étudié et personnalisé selon vos besoins spécifiques"
    },
    {
      icon: Award,
      number: "GAN",
      title: "Réseau de confiance",
      description: "Force du groupe GAN",
      details: "Bénéficiez de la solidité financière et de l'expertise du groupe GAN"
    },
    {
      icon: Users,
      number: "1000+",
      title: "Clients satisfaits",
      description: "Entreprises accompagnées",
      details: "Des TPE aux grandes entreprises, tous secteurs confondus"
    },
    {
      icon: MapPin,
      number: "Paris",
      title: "Proximité locale",
      description: "Agence Vaugirard",
      details: "Un interlocuteur de proximité qui connaît votre environnement"
    }
  ];

  return (
    <section id="pourquoi-nous-choisir" className="section-padding bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-gan-title mb-6">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-gan-subtitle text-gray-600 max-w-3xl mx-auto">
            Découvrez les atouts qui font de notre agence GAN votre partenaire de confiance 
            pour la protection de votre entreprise et de vos projets.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card 
                key={index} 
                className="card-hover text-center group cursor-pointer bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-gan-blue-500/20"
                onClick={() => console.log(`Reason clicked: ${reason.title}`)}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="mx-auto w-20 h-20 bg-gan-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transform transition-all duration-300 group-hover:bg-gan-blue-600">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Number/Badge */}
                  <div className="text-4xl font-bold text-gan-yellow-400 mb-2 group-hover:scale-105 transform transition-all duration-300">
                    {reason.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gan-blue-500 mb-2 group-hover:text-gan-blue-600 transition-colors">
                    {reason.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 font-medium">
                    {reason.description}
                  </p>
                  
                  {/* Details */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {reason.details}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="bg-gan-blue-500 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-gan-yellow-400 mr-3" />
            <h3 className="text-2xl font-bold">Votre sécurité, notre priorité</h3>
          </div>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            Spécialiste multirisques en Île-de-France depuis plus de 15 ans. 
            Solutions complètes pour entreprises, commerçants et bureaux.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-xl p-4">
              <Phone className="h-6 w-6 text-gan-yellow-400 mx-auto mb-2" />
              <div className="font-semibold">Contact direct</div>
              <div className="text-sm text-blue-200">01 42 18 22 00</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <MapPin className="h-6 w-6 text-gan-yellow-400 mx-auto mb-2" />
              <div className="font-semibold">Agence Vaugirard</div>
              <div className="text-sm text-blue-200">31 rue Falguière, 75015</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <Clock className="h-6 w-6 text-gan-yellow-400 mx-auto mb-2" />
              <div className="font-semibold">Disponibilité</div>
              <div className="text-sm text-blue-200">Lun-Ven 9h-18h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;