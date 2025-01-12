"use client"
import { notFound } from "next/navigation";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  // Fetch the specific product data
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`,
    {
      next: { revalidate: 10 }, // Enable caching
    }
  );

  if (!response.ok) {
    notFound();
  }

  const product: Product = await response.json();

  // Function to handle Add to Cart
  const handleAddToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, { ...product, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // alert(${product.title} added to cart!);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Image */}
        <div className="col-span-2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="py-6 px-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-lg text-gray-500 mt-2">{product.description}</p>
          <div className="mt-6">
            <p className="text-gray-800 text-4xl font-bold">${product.price}</p>
          </div>
          <div className="mt-6 space-y-4">
           
            {/* Go to Cart Button */}
            <Link href="/cart">
              <button className="w-full px-4 py-2.5 border border-gray-800 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-md">
                Go to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;



