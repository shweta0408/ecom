import React from 'react';
import { Header } from '../../component/Header/Header';

const navigation = [
  { name: 'Home', href: '/Home' },
  { name: 'Product', href: '/productScreen' },
];

const CartScreen = () => {
  const cartItems = [
    { id: 1, name: 'Item 1', price: 29.99, quantity: 2 },
    { id: 2, name: 'Item 2', price: 49.99, quantity: 1 },
    { id: 3, name: 'Item 3', price: 19.99, quantity: 3 },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header navigation={navigation} />
      <div className="container mx-auto px-4 mt-40" id="cart">
        <h1 className="text-3xl font-bold mb-6 text-lime-800">Shopping Cart</h1>
        <div className="bg-lime-100 rounded-lg shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 px-6"
              >
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-lime-900">
                    {item.name}
                  </h2>
                  <p className="text-lime-600">Quantity: {item.quantity}</p>
                </div>
                <div className="text-lg font-semibold text-lime-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center py-4 px-6 bg-lime-200">
            <h2 className="text-xl font-semibold text-lime-800">Total</h2>
            <div className="text-xl font-semibold  text-lime-900">
              ${totalPrice.toFixed(2)}
            </div>
          </div>
          <div className="flex justify-end p-6">
            <button className="bg-lime-700 hover:bg-lime-900 text-white py-2 px-6 rounded-lg shadow-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
