import React, { useState } from 'react';
import { Star, ShoppingCart, Filter, Laptop, Smartphone, Headphones, Monitor } from 'lucide-react';

const ProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous', icon: Filter },
    { id: 'laptops', name: 'Ordinateurs', icon: Laptop },
    { id: 'phones', name: 'Smartphones', icon: Smartphone },
    { id: 'audio', name: 'Audio', icon: Headphones },
    { id: 'monitors', name: 'Écrans', icon: Monitor },
  ];

  const products = [
    {
      id: 1,
      name: 'MacBook Pro M3 14"',
      category: 'laptops',
      price: 1899,
      originalPrice: 2099,
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
      rating: 4.9,
      reviews: 324,
      description: 'Performance ultime pour étudiants et entrepreneurs',
      badge: 'Populaire'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      category: 'phones',
      price: 1229,
      originalPrice: 1329,
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      rating: 4.8,
      reviews: 567,
      description: 'Le smartphone qui révolutionne votre productivité',
      badge: 'Nouveau'
    },
    {
      id: 3,
      name: 'iPad Air + Apple Pencil',
      category: 'laptops',
      price: 649,
      originalPrice: 699,
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
      rating: 4.7,
      reviews: 892,
      description: 'Kit créatif complet pour vos projets',
      badge: 'Bundle'
    },
    {
      id: 4,
      name: 'AirPods Pro 2',
      category: 'audio',
      price: 279,
      originalPrice: 299,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      rating: 4.6,
      reviews: 1234,
      description: 'Son immersif pour la concentration maximale'
    },
    {
      id: 5,
      name: 'Dell XPS 13',
      category: 'laptops',
      price: 1199,
      originalPrice: 1399,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
      rating: 4.5,
      reviews: 445,
      description: 'Ultrabook premium pour entrepreneurs'
    },
    {
      id: 6,
      name: 'Samsung Odyssey G7',
      category: 'monitors',
      price: 599,
      originalPrice: 699,
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg',
      rating: 4.8,
      reviews: 278,
      description: 'Écran gaming 27" 240Hz pour le multitasking'
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section id="produits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Produits <span className="text-blue-600">Tech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection rigoureuse de produits tech, 
            spécialement choisis pour booster la productivité des étudiants et entrepreneurs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}€</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}€</span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {product.reviews} avis
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 group">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Ajouter</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;