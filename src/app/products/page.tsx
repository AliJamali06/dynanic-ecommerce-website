"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(8);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.status} - ${response.statusText}`
          );
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        const errorMsg =
          error instanceof Error ? error.message : "An unknown error occurred";
        setError(`Failed to fetch products. Error: ${errorMsg}`);
      }
    };

    fetchProducts();
  }, []);

  const showMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <div className="px-10 mt-8">
      <div className="font-[sans-serif] mx-auto lg:max-w-7xl sm:max-w-full w-full md:max-w-full">
        <h2 className="text-black text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 sm:ml-4 mx-4">
          All Products
        </h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative w-full h-[300px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover rounded-t-lg w-full h-full"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-[#007580]">
                  {product.title}
                </h3>
                <h4 className="text-lg text-black font-bold mt-2">
                  ${product.price}
                </h4>
                <Link href={`/product/${product.id}`}>
                  <button className="mt-4 w-full py-2 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition">
                    moreDetails
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < products.length && (
          <div className="text-center mt-6">
            <button
              onClick={showMoreProducts}
              className="py-2 my-8 px-4 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
