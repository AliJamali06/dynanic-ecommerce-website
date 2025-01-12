import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-4 sm:px-20 py-1 max-w-[1740px] h-auto">
      {/* Main Hero Section */}
      <section className="bg-white text-black">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 px-6">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              Winter Jackets Collection
            </h1>
            <p className="text-lg">
              Discover the perfect jackets to keep you warm and stylish this
              winter. Crafted for comfort, designed for elegance.
            </p>
            <Link href="/products">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-4 md:mt-6">
                Shop Now
              </button>
            </Link>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src="/images5.webp" // Replace with your image path
              alt="Winter Jacket"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
