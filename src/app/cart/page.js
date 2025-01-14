
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CartPage = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart data on load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log("Fetched Cart Data on Load:", storedCart);
    setCartItems(storedCart);

    // Calculate totals
    calculateTotals(storedCart);
  }, []);

  const calculateTotals = (cart) => {
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalItems(totalQuantity);
    setTotalPrice(totalCost.toFixed(2));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotals(updatedCart);
    console.log("Updated Cart After Removal:", updatedCart);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto text-center mt-8">
        <h1 className="text-xl font-bold">Your Cart is Empty</h1>
        <Link href="/products">
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Go Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {/* Total Items and Price */}
      <div className="mb-4">
        <p className="text-lg font-semibold">Total Items: {totalItems}</p>
        <p className="text-lg font-semibold">Total Price: ${totalPrice}</p>
      </div>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div className="flex items-center">
            {/* Product Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="object-cover rounded"
            />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
          </div>
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Checkout Button */}
      <div className="text-center mt-6">
        <Link href="/checkout">
          <button className="bg-green-500 text-white py-2 px-4 rounded">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const CartPage = () => {
//   // Define cartItems and setCartItems using useState
//   const [cartItems, setCartItems] = useState([]); // Correctly initialize state
//   const [totalItems, setTotalItems] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Fetch cart data on load
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     console.log("Fetched Cart Data on Load:", storedCart);
//     setCartItems(storedCart); // Correctly use setCartItems

//     // Calculate totals
//     calculateTotals(storedCart);
//   }, []);

//   const calculateTotals = (cart) => {
//     const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
//     const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     setTotalItems(totalQuantity);
//     setTotalPrice(totalCost.toFixed(2));
//   };

//   const handleRemoveItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart); // Update the state with the new cart array
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
//     calculateTotals(updatedCart);
//     console.log("Updated Cart After Removal:", updatedCart);
//   };

//   if (cartItems.length === 0) {
//     return (
//       <div className="container mx-auto text-center mt-8">
//         <h1 className="text-xl font-bold">Your Cart is Empty</h1>
//         <Link href="/products">
//           <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
//             Go Shopping
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

//       {/* Total Items and Price */}
//       <div className="mb-4">
//         <p className="text-lg font-semibold">Total Items: {totalItems}</p>
//         <p className="text-lg font-semibold">Total Price: ${totalPrice}</p>
//       </div>

//       {/* Cart Items */}
//       {cartItems.map((item) => (
//         <div
//           key={item.id}
//           className="flex justify-between items-center border-b py-4"
//         >
//           <div className="flex items-center">
//             {/* Product Image */}
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={80}
//               height={80}
//               className="object-cover rounded"
//             />
//             <div className="ml-4">
//               <h2 className="text-lg font-semibold">{item.title}</h2>
//               <p className="text-gray-600">${item.price.toFixed(2)}</p>
//               <p className="text-gray-600">Quantity: {item.quantity}</p>
//             </div>
//           </div>
//           <button
//             onClick={() => handleRemoveItem(item.id)}
//             className="bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Remove
//           </button>
//         </div>
//       ))}

//       {/* Checkout Button */}
//       <div className="text-center mt-6">
//         <Link href="/checkout">
//           <button className="bg-green-500 text-white py-2 px-4 rounded">
//             Checkout
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
