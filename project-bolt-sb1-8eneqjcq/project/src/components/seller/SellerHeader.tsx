import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  BarChart3, 
  ShoppingBag, 
  BookOpen, 
  Settings, 
  LogOut,
  User
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const SellerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">TechPro</span>
              <span className="text-sm text-purple-600 ml-2 font-medium">Vendeur</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
              <BarChart3 className="w-4 h-4" />
              <span>Dashboard</span>
            </a>
            <a href="#produits" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
              <ShoppingBag className="w-4 h-4" />
              <span>Mes Produits</span>
            </a>
            <a href="#articles" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>Mes Articles</span>
            </a>
            <a href="#parametres" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
              <Settings className="w-4 h-4" />
              <span>Paramètres</span>
            </a>
            
            <div className="flex items-center space-x-4 border-l border-gray-200 pl-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">
                    {user?.profile?.business_name || 'Mon Business'}
                  </div>
                  <div className="text-gray-500">{user?.email}</div>
                </div>
              </div>
              <button 
                onClick={logout}
                className="text-gray-500 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
                title="Déconnexion"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
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
              <a href="#dashboard" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Dashboard</span>
              </a>
              <a href="#produits" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Mes Produits</span>
              </a>
              <a href="#articles" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Mes Articles</span>
              </a>
              <a href="#parametres" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Paramètres</span>
              </a>
              <button 
                onClick={logout}
                className="text-red-600 text-left flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Déconnexion</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SellerHeader;