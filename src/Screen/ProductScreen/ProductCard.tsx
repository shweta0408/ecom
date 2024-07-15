// src/components/ProductCard.tsx

import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  const [quantity, setQuantity] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const addToCart = () => {
    console.log(`Added ${quantity} of ${title} to cart`);
  };

  return (
    <div className="p-4 bg-lime-100 rounded-lg shadow-md ">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="mt-4 ">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{price}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={decreaseQuantity}
            className="text-red-500 text-lg mr-2"
          >
            -
          </button>
          <span className="mx-4">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="text-green-500 text-lg ml-2"
          >
            +
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={addToCart}
            className="flex items-center p-2 bg-lime-700 text-white rounded hover:bg-lime-900"
          >
            <FaCartPlus className="mr-2" /> Add to Cart
          </button>
          <button
            onClick={toggleFavorite}
            className="text-red-500 hover:text-red-600"
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
