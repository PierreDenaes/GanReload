"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactFormSection = () => {
  console.log("ContactFormSection component rendered");

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    besoin: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    console.log(`Form field changed: ${field} = ${value}`);
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Ici on ajouterait la logique d'envoi du formulaire
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-gan-title mb-6">
            Demandez votre devis gratuit
          </h2>
          <p className="text-gan-subtitle text-gray-600 max-w-3xl mx-auto">
            Un expert vous recontacte sous 24h pour analyser vos besoins et vous proposer 
            une solution sur-mesure adaptée à votre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gan-blue-500">
                Demander un devis
              </CardTitle>
              <CardDescription>
                Remplissez ce formulaire et recevez votre devis personnalisé
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom complet *</Label>
                    <Input
                      id="nom"
                      type="text"
                      placeholder="Votre nom complet"
                      value={formData.nom}
                      onChange={(e) => handleInputChange('nom', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone *</Label>
                    <Input
                      id="telephone"
                      type="tel"
                      placeholder="01 23 45 67 89"
                      value={formData.telephone}
                      onChange={(e) => handleInputChange('telephone', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="entreprise">Entreprise</Label>
                    <Input
                      id="entreprise"
                      type="text"
                      placeholder="Nom de votre entreprise"
                      value={formData.entreprise}
                      onChange={(e) => handleInputChange('entreprise', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="besoin">Type de besoin *</Label>
                  <Select onValueChange={(value) => handleInputChange('besoin', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre besoin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multirisques">Multirisques professionnelles</SelectItem>
                      <SelectItem value="prevoyance">Prévoyance professionnelle</SelectItem>
                      <SelectItem value="retraite">Solutions retraite</SelectItem>
                      <SelectItem value="multiple">Plusieurs solutions</SelectItem>
                      <SelectItem value="autre">Autre besoin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre besoin, votre activité, vos questions..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full btn-gan-secondary text-lg py-3">
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer ma demande
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe. 
                  Vos données sont traitées conformément à notre politique de confidentialité.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gan-blue-500 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contactez-nous directement</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gan-yellow-400 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-gan-blue-500" />
                    </div>
                    <div>
                      <div className="font-semibold">Téléphone</div>
                      <div className="text-blue-100">01 42 18 22 00</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gan-yellow-400 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-gan-blue-500" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-blue-100">contact@assuparisviaugirard.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gan-yellow-400 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-gan-blue-500" />
                    </div>
                    <div>
                      <div className="font-semibold">Adresse</div>
                      <div className="text-blue-100">31 rue Falguière<br />75015 Paris, Île-de-France</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gan-yellow-400 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-gan-blue-500" />
                    </div>
                    <div>
                      <div className="font-semibold">Horaires</div>
                      <div className="text-blue-100">
                        Lundi - Vendredi : 9h00 - 18h00<br />
                        Samedi : Sur rendez-vous
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 bg-white shadow-lg">
                <div className="text-3xl font-bold text-gan-yellow-400 mb-2">24h</div>
                <div className="text-sm text-gray-600">Délai de réponse</div>
              </Card>
              <Card className="text-center p-6 bg-white shadow-lg">
                <div className="text-3xl font-bold text-gan-yellow-400 mb-2">Gratuit</div>
                <div className="text-sm text-gray-600">Devis et conseils</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;