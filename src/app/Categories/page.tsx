
import React from 'react';
import Image from 'next/image';

const Categories = () => {
  return (
    <div className="mt-32 py-10">
      <div className="font-[sans-serif] mx-auto lg:max-w-7xl sm:max-w-full w-full md:max-w-full">
        <h2 className="text-black text-3xl font-bold mb-10 pl-16">
          Explore Our Top Jacket Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-10 lg:px-20">
          {/* Card 1 */}
          <div className="bg-gray-50 overflow-hidden rounded-lg cursor-pointer relative">
            <div className="h-[424px] w-full sm:w-[424px] mx-auto relative">
              <Image
                src="/images1.jpg"
                width={424}
                height={424}
                alt="Winter Collection"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Black background div with opacity */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60">
              <h3 className="text-lg font-bold text-white">Winter Jackets</h3>
              <p className="text-sm text-gray-400">3,584 Products</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 overflow-hidden rounded-lg cursor-pointer relative">
            <div className="h-[424px] w-full sm:w-[424px] mx-auto">
              <Image
                src="/images3.jpeg"
                width={424}
                height={424}
                alt="Outdoor Collection"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Black background div with opacity */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white">
              <h3 className="text-lg font-bold text-white">Outdoor Adventure Jackets</h3>
              <p className="text-sm text-gray-500">157 Products</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 overflow-hidden rounded-lg cursor-pointer relative">
            <div className="h-[424px] w-full sm:w-[424px] mx-auto">
              <Image
                src="/images4.webp"
                width={424}
                height={424}
                alt="Casual Collection"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Black background div with opacity */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white">
              <h3 className="text-lg font-bold text-white">Casual Everyday Jackets</h3>
              <p className="text-sm text-gray-500">154 Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
