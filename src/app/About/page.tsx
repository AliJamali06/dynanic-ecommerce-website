'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { TbTruckDelivery, TbRecycle } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { BiPurchaseTagAlt } from 'react-icons/bi';

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      {/* About Us Section */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          About Our Jackets
        </h2>
        <p className="text-gray-600 mb-6">
          Our jackets are crafted with the finest materials and meticulous attention to detail, combining style and functionality to keep you warm and fashionable in all seasons.
        </p>
        <Image
          src="/images3.jpeg"
          alt="Jacket Collection"
          width={1200}
          height={600}
          className="rounded-lg mx-auto"
        />
      </section>

      {/* Our Values Section */}
      <section className="mt-16">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          What Sets Us Apart
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Value 1 */}
          <div className="text-center bg-white p-6 rounded-lg shadow">
            <TbTruckDelivery className="text-indigo-600 w-12 h-12 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-800 mb-2">
              Fast Delivery
            </h4>
            <p className="text-gray-600">
              Receive your jackets with next-day delivery on all orders placed before 3 PM.
            </p>
          </div>

          {/* Value 2 */}
          <div className="text-center bg-white p-6 rounded-lg shadow">
            <IoIosCheckmarkCircleOutline className="text-indigo-600 w-12 h-12 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-800 mb-2">
              Superior Craftsmanship
            </h4>
            <p className="text-gray-600">
              Our jackets are handcrafted by skilled artisans, ensuring quality and durability.
            </p>
          </div>

          {/* Value 3 */}
          <div className="text-center bg-white p-6 rounded-lg shadow">
            <BiPurchaseTagAlt className="text-indigo-600 w-12 h-12 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-800 mb-2">
              Affordable Prices
            </h4>
            <p className="text-gray-600">
              Enjoy premium quality jackets at prices that won’t break the bank.
            </p>
          </div>

          {/* Value 4 */}
          <div className="text-center bg-white p-6 rounded-lg shadow">
            <TbRecycle className="text-indigo-600 w-12 h-12 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-800 mb-2">
              Eco-Friendly Practices
            </h4>
            <p className="text-gray-600">
              We are committed to sustainability, using recycled materials in our packaging.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Experience the Best in Outerwear
        </h3>
        <p className="text-gray-600 mb-6">
          Browse our collection and find the perfect jacket for your style and needs.
        </p>
        <Link href="/products">
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Shop Now
        </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
