// components/Navigation.tsx
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../../public/logo.png"
import { NavLink } from './NavLink';
import { Dropdown } from './Dropdown';
import { Button } from './Button';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

interface NavigationProps {
  navItems: NavItem[];
  onJoinClick?: () => void;
  scrolled?: boolean;
}

export const Navigation = ({ navItems, onJoinClick, scrolled = false }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img src={logo.src} alt="JBC Logo" className="h-10 w-auto" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <Dropdown 
                  key={item.label}
                  label={item.label}
                  items={item.dropdown}
                />
              ) : (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              )
            ))}
            <Button onClick={onJoinClick}>Join Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#0d4dcc]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                item.dropdown ? (
                  <Dropdown 
                    key={item.label}
                    label={item.label}
                    items={item.dropdown}
                    mobile
                    onItemClick={handleMobileNavClick}
                  />
                ) : (
                  <NavLink 
                    key={item.href} 
                    href={item.href} 
                    mobile
                    onClick={handleMobileNavClick}
                  >
                    {item.label}
                  </NavLink>
                )
              ))}
              <Button onClick={() => {
                handleMobileNavClick();
                onJoinClick?.();
              }} fullWidth>
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};