"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Success() {
  const router = useRouter();

  const handleTrackOrder = () => {
    router.push("/track-order"); // Navigate to track order page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Payment Successful!</h1>
      <p className="text-lg mb-4">Thank you for your purchase. Your payment has been successfully processed.</p>
     <Link href="/order-tracking">
      <button
        onClick={handleTrackOrder}
        className="px-6 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800"
      >
        Track Your Order
      </button>
      </Link>
    </div>
  );
}

export default Success;
