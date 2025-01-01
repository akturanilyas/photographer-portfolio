'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const pages = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 border-b border-black/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Desktop */}
          <h1 
            onClick={() => handleScroll('#home')}
            className="hidden md:block text-xl font-bold cursor-pointer bg-gradient-primary bg-clip-text text-transparent"
          >
            PHOTOGRAPHER
          </h1>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <MenuIcon />
            </button>
          </div>

          {/* Logo - Mobile */}
          <h1 
            onClick={() => handleScroll('#home')}
            className="md:hidden text-xl font-bold cursor-pointer bg-gradient-primary bg-clip-text text-transparent"
          >
            PHOTOGRAPHER
          </h1>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-4">
            {pages.map((page) => (
              <button
                key={page.name}
                onClick={() => handleScroll(page.href)}
                className="px-4 py-2 text-gray-700 hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent transition-colors duration-300"
              >
                {page.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu panel */}
          <div className={`
            md:hidden 
            fixed inset-0 
            bg-white 
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  PHOTOGRAPHER
                </h1>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                {pages.map((page) => (
                  <button
                    key={page.name}
                    onClick={() => handleScroll(page.href)}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-left"
                  >
                    {page.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Empty div for layout balance on mobile */}
          <div className="w-10 md:hidden"></div>
        </div>
      </div>
    </header>
  );
}
