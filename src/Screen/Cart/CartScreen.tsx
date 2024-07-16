import React from 'react';
import { Header } from '../../component/Header/Header';
import { Link } from 'react-router-dom';

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
    <div id="cart">
      <Header navigation={navigation} />
      <div className="container mx-auto px-4 mt-40">
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
            <Link
              to="/checkout"
              className="w-full sm:w-56 rounded-md bg-lime-200 px-4 py-3 text-center font-bold  bg-lime-700 text-white rounded hover:bg-lime-900"
            >
              Proceed To Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
