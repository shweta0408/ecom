import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const CheckoutPage: React.FC = () => {
  return (
    <div className="p-4 bg-lime-100 min-h-screen" id="checkout">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

        {/* Checkout grid container */}
        <div className="grid grid-cols-2 gap-6">
          {/* Address form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-700 focus:ring focus:ring-lime-700 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-700 focus:ring focus:ring-lime-700 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-700 focus:ring focus:ring-lime-700 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-700 focus:ring focus:ring-lime-700 focus:ring-opacity-50"
                />
              </div>
            </form>
          </div>

          {/* Payment method */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-700 focus:ring focus:ring-lime-700 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-700 focus:ring focus:ring-lime-700 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-700 focus:ring focus:ring-lime-700 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Checkout button */}
        <button className="mt-6 flex items-center justify-center w-full py-3 bg-lime-700 text-white rounded hover:bg-lime-900">
          <FaCartPlus className="mr-2" /> Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
