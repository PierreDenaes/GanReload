"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Video, Clock, Eye, ArrowRight } from 'lucide-react';

const VideosSection = () => {
  console.log("VideosSection component rendered");

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes les vidéos', count: 12 },
    { id: 'multirisques', name: 'Multirisques', count: 5 },
    { id: 'prevoyance', name: 'Prévoyance', count: 4 },
    { id: 'retraite', name: 'Retraite', count: 3 },
  ];

  const videos = [
    {
      id: 1,
      title: "Qu'est-ce que l'assurance multirisques professionnelle ?",
      description: "Découvrez les garanties essentielles pour protéger votre activité professionnelle.",
      thumbnail: "https://via.placeholder.com/400x225/002c5f/ffffff?text=MRP+Expliquée",
      duration: "3:45",
      views: "1.2k vues",
      category: "multirisques",
      featured: true
    },
    {
      id: 2,
      title: "Prévoyance professionnelle : pourquoi c'est indispensable",
      description: "L'importance de se protéger contre les aléas de la vie professionnelle.",
      thumbnail: "https://via.placeholder.com/400x225/dc2626/ffffff?text=Prévoyance+Pro",
      duration: "4:12",
      views: "890 vues",
      category: "prevoyance",
      featured: false
    },
    {
      id: 3,
      title: "Solutions retraite : Madelin vs PER, que choisir ?",
      description: "Comparatif des différentes solutions d'épargne retraite disponibles.",
      thumbnail: "https://via.placeholder.com/400x225/059669/ffffff?text=Retraite+Solutions",
      duration: "5:20",
      views: "2.1k vues",
      category: "retraite",
      featured: true
    },
    {
      id: 4,
      title: "Responsabilité civile professionnelle : cas concrets",
      description: "Exemples réels de sinistres et comment s'en protéger.",
      thumbnail: "https://via.placeholder.com/400x225/002c5f/ffffff?text=RC+Pro+Cas",
      duration: "6:15",
      views: "1.5k vues",
      category: "multirisques",
      featured: false
    },
    {
      id: 5,
      title: "Optimisation fiscale avec les contrats Madelin",
      description: "Comment réduire vos impôts tout en préparant votre retraite.",
      thumbnail: "https://via.placeholder.com/400x225/059669/ffffff?text=Fiscal+Madelin",
      duration: "4:33",
      views: "967 vues",
      category: "retraite",
      featured: false
    },
    {
      id: 6,
      title: "Prévoyance collective : obligations et avantages",
      description: "Tout savoir sur la prévoyance collective en entreprise.",
      thumbnail: "https://via.placeholder.com/400x225/dc2626/ffffff?text=Prévoyance+Collective",
      duration: "3:28",
      views: "743 vues",
      category: "prevoyance",
      featured: false
    }
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const handleVideoClick = (video: any) => {
    console.log(`Video clicked: ${video.title}`);
    // Ici on ajouterait la logique pour ouvrir la vidéo dans une lightbox ou rediriger
  };

  return (
    <section id="videos" className="section-padding bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-gan-title mb-6">
            Nos vidéos explicatives
          </h2>
          <p className="text-gan-subtitle text-gray-600 max-w-3xl mx-auto">
            Christophe vous explique en détail chaque solution d'assurance. 
            Des conseils d'expert pour mieux comprendre et choisir vos garanties.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`${
                selectedCategory === category.id 
                  ? 'btn-gan-primary' 
                  : 'btn-gan-outline hover:bg-gan-blue-50'
              }`}
              onClick={() => {
                console.log(`Category filter clicked: ${category.name}`);
                setSelectedCategory(category.id);
              }}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured videos */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gan-blue-500 mb-6 flex items-center">
              <Video className="h-6 w-6 mr-2" />
              Vidéos les plus populaires
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {videos.filter(video => video.featured).map((video) => (
                <Card 
                  key={video.id} 
                  className="card-hover cursor-pointer overflow-hidden group shadow-lg"
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-gan-blue-500 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gan-blue-500 mb-2 group-hover:text-gan-blue-600 line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {video.views}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {categories.find(cat => cat.id === video.category)?.name}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All videos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredVideos.map((video, index) => (
            <Card 
              key={video.id} 
              className={`video-card-hover cursor-pointer overflow-hidden group shadow-lg animate-on-scroll delay-${(index % 3) * 100}`}
              onClick={() => handleVideoClick(video)}
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center play-button-hover shadow-2xl">
                    <Play className="h-8 w-8 text-gan-blue-500 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm flex items-center font-medium">
                  <Clock className="h-4 w-4 mr-1" />
                  {video.duration}
                </div>
                {video.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-gan-yellow-400 text-gan-blue-500 text-xs font-semibold px-3 py-1">
                      ⭐ Populaire
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-5">
                <h4 className="font-bold text-gan-blue-500 mb-3 line-clamp-2 text-base group-hover:text-gan-blue-600 transition-colors duration-200">
                  {video.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {video.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-gray-100">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    <span className="font-medium">{video.views}</span>
                  </div>
                  <Badge variant="outline" className="text-xs bg-gray-50">
                    {categories.find(cat => cat.id === video.category)?.name}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gan-blue-500 mb-4">
            Une question après avoir vu nos vidéos ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Christophe est disponible pour répondre à toutes vos questions et vous accompagner 
            dans le choix de vos solutions d'assurance.
          </p>
          <Button 
            size="lg"
            className="btn-gan-secondary"
            onClick={() => console.log("Contact après vidéos clicked")}
          >
            Prendre rendez-vous avec Christophe
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;