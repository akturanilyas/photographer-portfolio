'use client';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

const pages = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-2' 
          : 'bg-transparent py-4'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Desktop */}
          <a 
            href="#home"
            className="hidden md:block text-2xl font-bold text-white hover:text-primary transition-colors duration-300"
          >
            PHOTOGRAPHER
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors duration-300"
          >
            <MenuIcon />
          </button>

          {/* Logo - Mobile */}
          <a 
            href="#home"
            className="md:hidden text-xl font-bold text-white hover:text-primary transition-colors duration-300"
          >
            PHOTOGRAPHER
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-2">
            {pages.map((page) => (
              <a
                key={page.name}
                href={page.href}
                className="px-6 py-2 text-white hover:text-primary transition-colors duration-300 relative group"
              >
                {page.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Mobile menu panel */}
          <div 
            className={`
              fixed inset-0 bg-black/95 backdrop-blur-md transition-all duration-500 md:hidden
              ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4">
                <a 
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-bold text-white hover:text-primary transition-colors duration-300"
                >
                  PHOTOGRAPHER
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white hover:text-primary transition-colors duration-300"
                >
                  <CloseIcon />
                </button>
              </div>
              
              <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
                {pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl text-white hover:text-primary transition-colors duration-300"
                  >
                    {page.name}
                  </a>
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
