// src/components/ProductScreen.tsx

import React from 'react';
import ProductCard from './ProductCard';
import products from '../ProductScreen/ProductData';
import { Header } from '../../component/Header/Header';
import Footer from '../../component/Footer/footer';

const navigation = [{ name: 'Home', href: '/Home' }];

const ProductScreen: React.FC = () => {
  return (
    <div id="productScreen">
      <Header navigation={navigation} />
      <div className="container mx-auto px-4 py-8 mt-36 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductScreen;
