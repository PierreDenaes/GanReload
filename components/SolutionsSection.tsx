"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Heart, PiggyBank, ArrowRight, CheckCircle } from 'lucide-react';

const SolutionsSection = () => {
  console.log("SolutionsSection component rendered");

  const solutions = [
    {
      id: 'mrp',
      icon: Building2,
      title: 'Multirisques professionnelles (MRP)',
      description: 'Locaux, matériels, RC pro, pertes d\'exploitation.',
      features: [
        'Protection des locaux et équipements',
        'Responsabilité civile professionnelle',
        'Couverture pertes d\'exploitation',
        'Assistance juridique incluse'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      id: 'prevoyance',
      icon: Heart,
      title: 'Prévoyance professionnelle',
      description: 'Arrêt de travail, invalidité, décès.',
      features: [
        'Maintien de salaire en arrêt',
        'Couverture invalidité permanente',
        'Capital décès pour la famille',
        'Accompagnement personnalisé'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    {
      id: 'retraite',
      icon: PiggyBank,
      title: 'Solutions retraite',
      description: 'Madelin, PER, surcomplémentaire.',
      features: [
        'Contrats Madelin adaptés',
        'Plan Épargne Retraite (PER)',
        'Retraite surcomplémentaire',
        'Optimisation fiscale'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-gan-title mb-6">
            Des couvertures complètes adaptées à chaque type d'activité
          </h2>
          <p className="text-gan-subtitle text-gray-600 max-w-3xl mx-auto">
            Nous proposons des solutions d'assurance sur-mesure pour protéger votre activité professionnelle, 
            votre santé et préparer votre retraite en toute sérénité.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={solution.id} 
                className={`card-hover cursor-pointer group ${solution.bgColor} border-0 shadow-lg`}
                onClick={() => console.log(`Solution clicked: ${solution.title}`)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 ${solution.bgColor} ${solution.hoverColor} rounded-2xl flex items-center justify-center mb-4 transition-colors group-hover:scale-110 transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${solution.color}`} />
                  </div>
                  <CardTitle className={`text-xl font-bold ${solution.color} mb-2`}>
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className={`h-5 w-5 ${solution.color} mt-0.5 flex-shrink-0`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full group ${solution.color === 'text-blue-600' ? 'btn-gan-primary' : solution.color === 'text-red-600' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(`En savoir plus clicked: ${solution.title}`);
                    }}
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gan-blue-500 mb-4">
            Besoin d'une solution personnalisée ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Chaque entreprise est unique. Contactez-nous pour une étude gratuite 
            et découvrez la solution qui correspond parfaitement à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="btn-gan-secondary"
              onClick={() => console.log("Demander une étude gratuite clicked")}
            >
              Demander une étude gratuite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="btn-gan-outline"
              onClick={() => console.log("Voir nos vidéos explicatives clicked")}
            >
              Voir nos vidéos explicatives
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;