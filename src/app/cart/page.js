"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart data from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log("Stored Cart Data in LocalStorage:", storedCart);
    if (Array.isArray(storedCart)) {
      setCartItems(storedCart);
    } else {
      setCartItems([]);
    }
  }, []);

  const handleBuyNow = () => {
    // Add your buy now functionality here
    // alert("Proceeding to buy items...");
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center">Your Cart is Empty</h1>
        <p className="text-center mt-4 text-gray-500">
          Add items to your cart to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b py-4"
        >
          {/* Product Image */}
          <Image
            width={64}
            height={64}             
            src={item.image} // Render product image
            alt={item.title}
            className="w-16 h-16 object-cover rounded"
          />
          {/* Product Info */}
          <div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
          </div>
          {/* Quantity */}
          <p className="text-gray-600">Quantity: {item.quantity}</p>
        </div>
      ))}
      <div className="flex justify-center mt-6">
        <Link href="/checkout">
        <button
          onClick={handleBuyNow}
          className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
        >
          Buy Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
