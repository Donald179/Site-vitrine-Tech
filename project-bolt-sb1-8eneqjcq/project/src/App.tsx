import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import BuyerApp from './components/BuyerApp';
import SellerApp from './components/SellerApp';

const AppContent = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // Si l'utilisateur est connecté et est un vendeur, afficher l'interface vendeur
  if (user && user.role === 'seller') {
    return <SellerApp />;
  }

  // Sinon, afficher l'interface acheteur (par défaut)
  return <BuyerApp />;
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;