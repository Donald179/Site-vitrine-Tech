import React from 'react';
import SellerHeader from './seller/SellerHeader';
import SellerDashboard from './seller/SellerDashboard';
import AdminPanel from './AdminPanel';

const SellerApp = () => {
  return (
    <div className="min-h-screen bg-white">
      <SellerHeader />
      <SellerDashboard />
      <AdminPanel />
    </div>
  );
};

export default SellerApp;