
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function Checkout() {
  const [cartItems, setCartItems] = useState([]); // Define state for cart items
  const [subtotal, setSubtotal] = useState(0);
  const [shipping] = useState(10); // Flat shipping rate
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("credit");

  useEffect(() => {
    // Fetch cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);

    // Calculate order summary
    const subtotal = storedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(subtotal.toFixed(2));

    const tax = subtotal * 0.1; // Assume 10% tax
    setTax(tax.toFixed(2));

    const total = subtotal + shipping + tax;
    setTotal(total.toFixed(2));
  }, [shipping]);

  return (
    <div className="font-[sans-serif] bg-gray-900 text-white min-h-screen py-8">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>

        {/* Cart Items List */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Your Items</h3>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="text-gray-200 font-medium">{item.title}</p>
                  <p className="text-gray-400 text-sm">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="text-gray-300">${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Method Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4">Payment Method</h3>
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setPaymentMethod("credit")}
                className={`py-3 px-6 rounded-lg font-medium ${
                  paymentMethod === "credit"
                    ? "bg-gray-700 border border-orange-500"
                    : "bg-gray-600"
                }`}
              >
                Credit Card
              </button>
              <button
                onClick={() => setPaymentMethod("paypal")}
                className={`py-3 px-6 rounded-lg font-medium ${
                  paymentMethod === "paypal"
                    ? "bg-gray-700 border border-orange-500"
                    : "bg-gray-600"
                }`}
              >
                PayPal
              </button>
              <button
                onClick={() => setPaymentMethod("apple")}
                className={`py-3 px-6 rounded-lg font-medium ${
                  paymentMethod === "apple"
                    ? "bg-gray-700 border border-orange-500"
                    : "bg-gray-600"
                }`}
              >
                Apple Pay
              </button>
            </div>

            {/* Payment Forms */}
            {paymentMethod === "credit" && (
              <form className="space-y-4">
                <h3 className="text-lg font-bold mb-4">Credit Card Details</h3>
                <input
                  type="text"
                  placeholder="Name on Card"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Expiry Date (MM/YY)"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </form>
            )}

            {paymentMethod === "paypal" && (
              <form className="space-y-4">
                <h3 className="text-lg font-bold mb-4">PayPal Details</h3>
                <input
                  type="email"
                  placeholder="PayPal Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <p className="text-sm text-gray-400">
                  You will be redirected to PayPal to complete your purchase.
                </p>
              </form>
            )}

            {paymentMethod === "apple" && (
              <form className="space-y-4">
                <h3 className="text-lg font-bold mb-4">Apple Pay</h3>
                <p className="text-sm text-gray-400">
                  Use your Apple Pay account to securely complete your purchase.
                </p>
                <button
                  type="button"
                  className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-200"
                >
                  Use Apple Pay
                </button>
              </form>
            )}
          </div>

          {/* Order Summary Section */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </li>
              <li className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </li>
              <li className="flex justify-between">
                <span>Tax</span>
                <span>${tax}</span>
              </li>
              <li className="border-t border-gray-600 mt-4 pt-4 flex justify-between font-bold text-white">
                <span>Total</span>
                <span>${total}</span>
              </li>
            </ul>
            <Link href="/success">
              <button className="mt-6 w-full py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600">
                Complete Purchase
              </button>
            </Link>
            <p className="text-xs text-gray-400 text-center mt-2">
              By completing your purchase you agree to our{" "}
              <a href="#" className="text-orange-500 underline">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
