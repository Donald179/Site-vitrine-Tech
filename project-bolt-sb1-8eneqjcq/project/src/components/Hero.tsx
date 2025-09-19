import React from 'react';
import { ArrowRight, Zap, Target, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                La Tech qui
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Propulse</span>
                <br />votre Réussite
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Découvrez notre sélection exclusive de produits tech pour étudiants et entrepreneurs, 
                accompagnée de conseils experts pour maximiser votre potentiel.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span className="font-semibold">Découvrir nos Produits</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold">
                Lire nos Conseils
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Produits Tech</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Clients Satisfaits</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Taux de Réussite</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">MacBook Pro M3</h3>
                    <p className="text-sm text-gray-600">Performance ultime pour étudiants</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-lg font-bold text-gray-900">1,899€</div>
                    <div className="text-sm text-green-600">-200€</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">iPad Air + Apple Pencil</h3>
                    <p className="text-sm text-gray-600">Kit complet créatif</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-lg font-bold text-gray-900">649€</div>
                    <div className="text-sm text-green-600">-50€</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Setup Gaming Pro</h3>
                    <p className="text-sm text-gray-600">Configuration entrepreneur</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-lg font-bold text-gray-900">2,299€</div>
                    <div className="text-sm text-green-600">-300€</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;