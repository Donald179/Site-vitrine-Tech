import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, role: 'buyer' | 'seller') => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler la vérification de l'authentification
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulation de l'authentification
      const mockUser: User = {
        id: '1',
        email,
        role: email.includes('seller') ? 'seller' : 'buyer',
        profile: email.includes('seller') ? {
          id: '1',
          user_id: '1',
          business_name: 'TechPro Store',
          description: 'Spécialiste en produits tech pour étudiants',
          created_at: new Date().toISOString()
        } : undefined
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, role: 'buyer' | 'seller') => {
    setLoading(true);
    try {
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        role,
        profile: role === 'seller' ? {
          id: Date.now().toString(),
          user_id: Date.now().toString(),
          business_name: 'Nouveau Vendeur',
          description: 'Description à compléter',
          created_at: new Date().toISOString()
        } : undefined
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};