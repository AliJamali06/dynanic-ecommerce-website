// "use client";
// import { useEffect } from "react"; 
// import { useRouter } from "next/navigation";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
// }

// const ProductPage = async ({ params }: { params: { id: string } }) => {
//   const router = useRouter();

//   try {
//     // Fetch the product data
//     const response = await fetch(`
//       https://fakestoreapi.com/products/${params.id}`,
//       {
//         next: { revalidate: 10 }, // Enable caching
//       }
//     );

//     if (!response.ok) {
//       console.error("Failed to fetch product data:", response.statusText);
//       throw new Error("Failed to fetch product data.");
//     }

//     const product: Product = await response.json();

//     // Handle empty or invalid product data
//     if (!product || Object.keys(product).length === 0) {
//       console.error("Product data is empty or invalid.");
//       throw new Error("Product data is empty or invalid.");
//     }

//     // Add to cart functionality
//     const handleAddToCart = () => {
//       const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//       console.log("Existing Cart Before Add:", existingCart);

//       const updatedCart = [...existingCart];
//       const existingProductIndex = updatedCart.findIndex(
//         (item) => item.id === product.id
//       );

//       if (existingProductIndex > -1) {
//         updatedCart[existingProductIndex].quantity += 1;
//       } else {
//         updatedCart.push({ ...product, quantity: 1 });
//       }

//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       console.log("Updated Cart After Add:", updatedCart);
//       alert(`${product.title} added to cart!`);
//     };

//     return (
//       <div className="container mx-auto p-4">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Product Image */}
//           <div className="col-span-2">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-96 object-cover rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Product Details */}
//           <div className="py-6 px-8 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold">{product.title}</h2>
//             <p className="text-lg text-gray-500 mt-2">{product.description}</p>
//             <div className="mt-6">
//               <p className="text-gray-800 text-4xl font-bold">
//                 ${product.price.toFixed(2)}
//               </p>
//             </div>
//             <div className="mt-6 space-y-4">
//               {/* Add to Cart Button */}
              
//               <button
//                 onClick={handleAddToCart}
//                 className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md"
//               >
//                 Add to Cart
//               </button>
              
//               {/* Go to Cart Button */}
//               <button
//                 onClick={() => router.push("/cart")}
//                 className="w-full px-4 py-2.5 bg-gray-600 hover:bg-gray-700 text-white text-sm font-semibold rounded-md"
//               >
//                 Go to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error("Error loading product details:", error);

//     return (
//       <div className="container mx-auto text-center p-4">
//         <h1 className="text-xl font-bold text-red-500">Error Loading Product</h1>
//         <p className="text-gray-600">{(error as Error).message}</p>
//         <button
//           onClick={() => router.push("/products")}
//           className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Back to Products
//         </button>
//       </div>
//     );
//   }
// };

// export default ProductPage;


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.id}`,
          {
            next: { revalidate: 10 },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch product data. Status: ${response.status}`);
        }

        const data: Product = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading product details:", error);
        setError((error as Error).message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product?.id
    );

    if (existingProductIndex > -1) {
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product?.title} added to cart!`);
  };

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (error) {
    return (
      <div className="container mx-auto text-center p-4">
        <h1 className="text-xl font-bold text-red-500">Error Loading Product</h1>
        <p className="text-gray-600">{error}</p>
        <button
          onClick={() => router.push("/products")}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="py-6 px-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">{product?.title}</h2>
          <p className="text-lg text-gray-500 mt-2">{product?.description}</p>
          <div className="mt-6">
            <p className="text-gray-800 text-4xl font-bold">
              ${product?.price.toFixed(2)}
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md"
            >
              Add to Cart
            </button>
            <button
              onClick={() => router.push("/cart")}
              className="w-full px-4 py-2.5 bg-gray-600 hover:bg-gray-700 text-white text-sm font-semibold rounded-md"
            >
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
