import React from 'react';
import BuyerHeader from './buyer/BuyerHeader';
import Hero from './Hero';
import ProductsSection from './ProductsSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const BuyerApp = () => {
  return (
    <div className="min-h-screen bg-white">
      <BuyerHeader />
      <Hero />
      <ProductsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default BuyerApp;