"use client";

import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Shield } from 'lucide-react';

const Footer = () => {
  console.log("Footer component rendered");

  const currentYear = new Date().getFullYear();

  const solutions = [
    { name: 'Multirisques Entreprise', href: '#solutions' },
    { name: 'Multirisques Commerce', href: '#solutions' },
    { name: 'Multirisques Bureaux', href: '#solutions' },
    { name: 'Prévoyance Professionnelle', href: '#solutions' },
    { name: 'Solutions Retraite', href: '#solutions' },
  ];

  const legalLinks = [
    { name: 'Mentions légales', href: '#mentions-legales' },
    { name: 'Politique de confidentialité', href: '#confidentialite' },
    { name: 'Conditions générales', href: '#conditions' },
    { name: 'Gestion des cookies', href: '#cookies' },
  ];

  return (
    <footer className="bg-gan-blue-900 text-white">
      {/* Main footer content */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 bg-white rounded-lg p-2 shadow-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/Logo_Gan_2010.svg/1200px-Logo_Gan_2010.svg.png"
                  alt="Logo GAN Assurances"
                  className="h-full w-full object-contain"
                  onError={() => console.log("Official GAN logo in footer failed to load")}
                  onLoad={() => console.log("Official GAN logo in footer loaded successfully")}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Assurances Paris Vaugirard</h3>
                <p className="text-blue-200 text-sm">Agence GAN Assurances</p>
              </div>
            </div>
            
            <p className="text-blue-100 mb-6 leading-relaxed">
              Spécialiste multirisques en Île-de-France depuis plus de 15 ans. 
              Solutions complètes pour entreprises, commerçants et bureaux.
            </p>

            <div className="flex items-center space-x-2 text-blue-200">
              <Shield className="h-5 w-5 text-gan-yellow-400" />
              <span className="text-sm">Agence agréée GAN Assurances</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gan-yellow-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">01 42 18 22 00</div>
                  <div className="text-blue-200 text-sm">Lun-Ven 9h-18h</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gan-yellow-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">contact@assuparisviaugirard.com</div>
                  <div className="text-blue-200 text-sm">Réponse sous 24h</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gan-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">31 rue Falguière</div>
                  <div className="text-blue-200 text-sm">75015 Paris, Île-de-France</div>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <a 
                    href={solution.href}
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm flex items-center"
                    onClick={() => console.log(`Footer link clicked: ${solution.name}`)}
                  >
                    {solution.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Informations légales</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm"
                    onClick={() => console.log(`Legal link clicked: ${link.name}`)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h5 className="font-semibold text-sm mb-2">Numéro ORIAS</h5>
              <p className="text-blue-200 text-xs">
                Courtier en assurances inscrit à l'ORIAS sous le n° [XXXXX]
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm">
              © {currentYear} Assurances Paris Vaugirard - Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6 text-blue-200 text-sm">
              <span>Propulsé par GAN Assurances</span>
              <div className="w-px h-4 bg-blue-700"></div>
              <span>Agence Vaugirard Paris 15ème</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;