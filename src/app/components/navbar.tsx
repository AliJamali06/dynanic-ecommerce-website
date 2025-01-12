'use client';

import { IoCartOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-200 bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-white transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <button
          onClick={closeMobileMenu}
          className="absolute top-4 right-4 p-2 text-gray-600 text-2xl"
        >
          &times; {/* Cross button */}
        </button>
        <ul className="flex flex-col space-y-8 p-10 text-gray-800">
          <li className="text-xl font-semibold">
            <Link href="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="text-xl font-semibold">
            <Link href="/products" onClick={closeMobileMenu}>
              Shop
            </Link>
          </li>
          <li className="text-xl font-semibold">
            <Link href="/About" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="text-xl font-semibold">
            <Link href="/contact-us" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Navbar */}
      <section className="flex justify-between items-center py-4 px-4 sm:px-10 lg:px-16 bg-white shadow-lg z-20 relative">
        <div className="flex items-center">
          <button onClick={toggleMobileMenu} className="sm:hidden text-black text-2xl mr-4">
            <FaBars />
          </button>
          <Image src="/logo2.png" alt="Jacket Logo" width={40} height={40} />
        </div>

        <ul className="hidden sm:flex space-x-6 text-black">
          <li className="text-sm font-semibold hover:text-gray-400">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm font-semibold hover:text-gray-400">
            <Link href="/products">Shop</Link>
          </li>
          <li className="text-sm font-semibold hover:text-gray-400">
            <Link href="/About">About</Link>
          </li>
          <li className="text-sm font-semibold hover:text-gray-400">
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-black flex items-center relative">
            <IoCartOutline className="text-2xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
