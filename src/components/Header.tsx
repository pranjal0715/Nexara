import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/works', label: 'Works' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white backdrop-blur-sm">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          <NavLink to="/" className="text-2xl font-bold text-black">
            Nexara
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    clsx(
                      'text-lg transition-colors',
                      isActive ? 'text-black' : 'text-blue-900 hover:text-white'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="py-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      clsx(
                        'block py-2 text-lg transition-colors',
                        isActive ? 'text-black' : 'text-blue-900 hover:text-white'
                      )
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};