import React, { useState } from 'react';
import { Menu, X, ShoppingBag, BookOpen, Phone, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import AuthModal from '../auth/AuthModal';

const BuyerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const { user, logout } = useAuth();

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <>
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
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Bonjour, {user.email}</span>
                  <button 
                    onClick={logout}
                    className="text-gray-500 hover:text-red-600 transition-colors flex items-center space-x-1"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Déconnexion</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => handleAuthClick('login')}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Connexion
                  </button>
                  <button 
                    onClick={() => handleAuthClick('register')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                  >
                    <User className="w-4 h-4" />
                    <span>S'inscrire</span>
                  </button>
                </div>
              )}
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
                {user ? (
                  <button 
                    onClick={logout}
                    className="text-red-600 text-left"
                  >
                    Déconnexion
                  </button>
                ) : (
                  <>
                    <button 
                      onClick={() => handleAuthClick('login')}
                      className="text-gray-700 text-left"
                    >
                      Connexion
                    </button>
                    <button 
                      onClick={() => handleAuthClick('register')}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-left"
                    >
                      S'inscrire
                    </button>
                  </>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default BuyerHeader;