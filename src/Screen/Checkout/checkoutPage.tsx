import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Header } from '../../component/Header/Header';

const navigation = [{ name: 'Home', href: '/' }];

const CheckoutPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method is 'card'

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <div className="p-4 bg-lime-100 min-h-screen">
      <Header navigation={navigation} />
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mt-32">
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
              {/* Card Payment */}
              <div>
                <input
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => handlePaymentMethodChange('card')}
                  className="mr-2"
                />
                <label
                  htmlFor="card"
                  className="text-sm font-medium text-gray-700"
                >
                  Credit/Debit Card
                </label>
                {paymentMethod === 'card' && (
                  <div className="mt-2">
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
                    {/* Additional fields for card payment */}
                    {/* Expiry Date, CVV, etc. */}
                  </div>
                )}
              </div>

              {/* UPI Payment */}
              <div>
                <input
                  type="radio"
                  id="upi"
                  name="paymentMethod"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={() => handlePaymentMethodChange('upi')}
                  className="mr-2"
                />
                <label
                  htmlFor="upi"
                  className="text-sm font-medium text-gray-700"
                >
                  UPI (Unified Payments Interface)
                </label>
                {paymentMethod === 'upi' && (
                  <div className="mt-2">
                    <label
                      htmlFor="upiId"
                      className="block text-sm font-medium text-gray-700"
                    >
                      UPI ID
                    </label>
                    <input
                      type="text"
                      id="upiId"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-lime-700 focus:ring focus:ring-lime-700 focus:ring-opacity-50"
                    />
                    {/* Additional fields for UPI payment */}
                  </div>
                )}
              </div>

              {/* Razorpay Integration */}
              <div>
                <input
                  type="radio"
                  id="razorpay"
                  name="paymentMethod"
                  value="razorpay"
                  checked={paymentMethod === 'razorpay'}
                  onChange={() => handlePaymentMethodChange('razorpay')}
                  className="mr-2"
                />
                <label
                  htmlFor="razorpay"
                  className="text-sm font-medium text-gray-700"
                >
                  Razorpay
                </label>
                {paymentMethod === 'razorpay' && (
                  <div className="mt-2">
                    <p className="text-gray-600">
                      You will be redirected to complete the payment using
                      Razorpay.
                    </p>
                    {/* Additional instructions or fields for Razorpay integration */}
                  </div>
                )}
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
