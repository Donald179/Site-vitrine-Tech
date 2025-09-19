import React, { useState } from 'react';
import { Menu, X, ShoppingBag, BookOpen, User, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TechPro</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Accueil
            </a>
            <a href="#produits" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
              <ShoppingBag className="w-4 h-4" />
              <span>Produits</span>
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Admin</span>
            </button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
              <a href="#produits" className="text-gray-700 hover:text-blue-600 transition-colors">Produits</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-left">
                Admin
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;