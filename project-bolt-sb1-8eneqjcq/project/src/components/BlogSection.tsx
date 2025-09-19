import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  published_date: string;
  image_url?: string;
  reading_time: number;
}

const BlogSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');

  // Articles par défaut en attendant la base de données
  const defaultArticles: Article[] = [
    {
      id: '1',
      title: '10 Outils IA Indispensables pour Entrepreneurs en 2024',
      excerpt: 'Découvrez les outils d\'intelligence artificielle qui révolutionnent le quotidien des entrepreneurs et boostent leur productivité.',
      content: 'Contenu complet de l\'article...',
      author: 'Alex Martin',
      category: 'ia',
      published_date: '2024-01-15',
      image_url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      reading_time: 8
    },
    {
      id: '2',
      title: 'Setup Gaming pour Étudiants : Guide Complet 2024',
      excerpt: 'Comment créer un setup gaming performant avec un budget étudiant ? Nos conseils pour optimiser votre configuration.',
      content: 'Contenu complet de l\'article...',
      author: 'Sarah Chen',
      category: 'hardware',
      published_date: '2024-01-10',
      image_url: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg',
      reading_time: 12
    },
    {
      id: '3',
      title: 'Productivité Mac : 15 Raccourcis qui Changent Tout',
      excerpt: 'Maîtrisez ces raccourcis Mac essentiels pour devenir 3x plus productif dans vos tâches quotidiennes.',
      content: 'Contenu complet de l\'article...',
      author: 'David Lee',
      category: 'productivite',
      published_date: '2024-01-08',
      image_url: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
      reading_time: 6
    },
    {
      id: '4',
      title: 'Créer une Startup Tech : Les Erreurs à Éviter',
      excerpt: 'Retour d\'expérience sur les pièges courants dans la création d\'une startup technologique et comment les éviter.',
      content: 'Contenu complet de l\'article...',
      author: 'Marie Dubois',
      category: 'startup',
      published_date: '2024-01-05',
      image_url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      reading_time: 15
    }
  ];

  useEffect(() => {
    setArticles(defaultArticles);
  }, []);

  const categories = [
    { id: 'all', name: 'Tous', icon: BookOpen },
    { id: 'ia', name: 'IA & Tech', icon: TrendingUp },
    { id: 'productivite', name: 'Productivité', icon: Lightbulb },
    { id: 'hardware', name: 'Hardware', icon: BookOpen },
    { id: 'startup', name: 'Startup', icon: TrendingUp },
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & <span className="text-purple-600">Conseils Tech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez à la pointe de la technologie avec nos articles, guides pratiques, 
            et conseils d'experts pour optimiser votre setup et votre productivité.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredArticles.map((article, index) => (
            <article 
              key={article.id} 
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative">
                <img 
                  src={article.image_url} 
                  alt={article.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                    index === 0 ? 'h-80' : 'h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {article.reading_time} min de lecture
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.published_date)}</span>
                  </div>
                </div>
                
                <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors ${
                  index === 0 ? 'text-2xl' : 'text-xl'
                }`}>
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                <button className="flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors font-medium group">
                  <span>Lire l'article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">Voir tous les articles</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;