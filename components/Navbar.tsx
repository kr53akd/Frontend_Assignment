'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Who we are', href: '#who-we-are' },
    { label: 'Technology', href: '#technology' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Newsroom', href: '#newsroom' },
    { label: 'Careers', href: '#careers' },
  ];

  return (
    <header className="bg-black shadow-lg" role="banner">
      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        aria-label="Main navigation"
        role="navigation"
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-white hover:text-white/80 transition duration-300"
              aria-label="Company logo - go to homepage"
            >
              Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul 
            className="hidden md:flex items-center space-x-8"
            role="menubar"
          >
            {menuItems.map((item) => (
              <li key={item.label} role="none">
                <Link
                  href={item.href}
                  className="text-white hover:text-white/80 transition duration-300 font-medium"
                  role="menuitem"
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <button 
              className="px-6 py-2 border-2 border-white bg-transparent text-white rounded-lg hover:bg-white hover:text-black transition duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Get started with our service"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isOpen ? 'rotate-90' : ''
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-gray-50 border-t border-gray-200"
          aria-label="Mobile navigation"
          role="navigation"
        >
          <ul className="px-2 pt-2 pb-3 space-y-1" role="menubar">
            {menuItems.map((item) => (
              <li key={item.label} role="none">
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li role="none">
              <button 
                className="w-full mt-4 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Get started with our service"
              >
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
