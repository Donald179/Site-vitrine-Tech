import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  MousePointer, 
  ShoppingBag, 
  BookOpen,
  Users,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Analytics, Product, Article } from '../../types';

const SellerDashboard = () => {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    // Simulation des données analytiques
    const mockAnalytics: Analytics = {
      total_views: 12450,
      total_clicks: 3280,
      top_products: [
        {
          id: '1',
          seller_id: '1',
          name: 'MacBook Pro M3 14"',
          description: 'Performance ultime',
          price: 1899,
          category: 'laptops',
          image_url: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
          rating: 4.9,
          reviews_count: 324,
          views: 2840,
          clicks: 892,
          created_at: '2024-01-15'
        },
        {
          id: '2',
          seller_id: '1',
          name: 'iPhone 15 Pro',
          description: 'Smartphone révolutionnaire',
          price: 1229,
          category: 'phones',
          image_url: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
          rating: 4.8,
          reviews_count: 567,
          views: 2156,
          clicks: 634,
          created_at: '2024-01-10'
        }
      ],
      top_articles: [
        {
          id: '1',
          seller_id: '1',
          title: '10 Outils IA Indispensables pour Entrepreneurs',
          excerpt: 'Découvrez les outils d\'IA révolutionnaires',
          content: 'Contenu complet...',
          author: 'Alex Martin',
          category: 'ia',
          published_date: '2024-01-15',
          image_url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
          reading_time: 8,
          views: 1840,
          clicks: 456,
          created_at: '2024-01-15'
        }
      ],
      recent_activity: [
        {
          id: '1',
          type: 'view',
          item_type: 'product',
          item_id: '1',
          item_title: 'MacBook Pro M3 14"',
          timestamp: '2024-01-20T10:30:00Z'
        },
        {
          id: '2',
          type: 'click',
          item_type: 'article',
          item_id: '1',
          item_title: '10 Outils IA Indispensables',
          timestamp: '2024-01-20T09:15:00Z'
        }
      ]
    };

    setAnalytics(mockAnalytics);
  }, [timeRange]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const getClickRate = (views: number, clicks: number) => {
    return views > 0 ? ((clicks / views) * 100).toFixed(1) : '0';
  };

  if (!analytics) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Vendeur</h1>
          <p className="text-gray-600">Analysez les performances de vos produits et articles</p>
        </div>

        {/* Filtres de période */}
        <div className="mb-8">
          <div className="flex space-x-4">
            {[
              { value: '7d', label: '7 jours' },
              { value: '30d', label: '30 jours' },
              { value: '90d', label: '90 jours' },
              { value: '1y', label: '1 an' }
            ].map((period) => (
              <button
                key={period.value}
                onClick={() => setTimeRange(period.value)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  timeRange === period.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>

        {/* Métriques principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Vues totales</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(analytics.total_views)}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+12.5%</span>
              <span className="text-gray-500 ml-1">vs période précédente</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Clics totaux</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(analytics.total_clicks)}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <MousePointer className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+8.2%</span>
              <span className="text-gray-500 ml-1">vs période précédente</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Taux de clic</p>
                <p className="text-2xl font-bold text-gray-900">
                  {getClickRate(analytics.total_views, analytics.total_clicks)}%
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
              <span className="text-red-500 font-medium">-2.1%</span>
              <span className="text-gray-500 ml-1">vs période précédente</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Visiteurs uniques</p>
                <p className="text-2xl font-bold text-gray-900">2.8k</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+15.3%</span>
              <span className="text-gray-500 ml-1">vs période précédente</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Top Produits */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <ShoppingBag className="w-5 h-5 mr-2 text-blue-600" />
                  Produits les plus performants
                </h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Voir tout
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {analytics.top_products.map((product, index) => (
                  <div key={product.id} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {product.name}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {formatNumber(product.views)}
                        </span>
                        <span className="flex items-center">
                          <MousePointer className="w-3 h-3 mr-1" />
                          {formatNumber(product.clicks)}
                        </span>
                        <span>{getClickRate(product.views, product.clicks)}%</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">#{index + 1}</div>
                      <div className="text-xs text-gray-500">{product.price}€</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Articles */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                  Articles les plus lus
                </h3>
                <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  Voir tout
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {analytics.top_articles.map((article, index) => (
                  <div key={article.id} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={article.image_url} 
                        alt={article.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {article.title}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {formatNumber(article.views)}
                        </span>
                        <span className="flex items-center">
                          <MousePointer className="w-3 h-3 mr-1" />
                          {formatNumber(article.clicks)}
                        </span>
                        <span>{article.reading_time} min</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">#{index + 1}</div>
                      <div className="text-xs text-gray-500">{getClickRate(article.views, article.clicks)}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activité récente */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-gray-600" />
              Activité récente
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {analytics.recent_activity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'view' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {activity.type === 'view' ? (
                      <Eye className={`w-4 h-4 ${activity.type === 'view' ? 'text-blue-600' : 'text-green-600'}`} />
                    ) : (
                      <MousePointer className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">
                        {activity.type === 'view' ? 'Vue' : 'Clic'}
                      </span>
                      {' '}sur {activity.item_type === 'product' ? 'le produit' : 'l\'article'}{' '}
                      <span className="font-medium">{activity.item_title}</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(activity.timestamp).toLocaleString('fr-FR')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;