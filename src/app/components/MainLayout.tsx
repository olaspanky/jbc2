// components/layouts/MainLayout.tsx
'use client';

import { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { siteConfig } from '../config/site.config';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinClick = () => {
    console.log('Join button clicked');
    // Add your join logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation 
        navItems={siteConfig.navItems} 
        onJoinClick={handleJoinClick}
        scrolled={scrolled}
      />
      
      <main className="flex-grow pt-20">
        {children}
      </main>
      
      <Footer
        description={siteConfig.description}
        socialLinks={siteConfig.socialLinks}
        footerLinks={siteConfig.footerLinks}
      />
    </div>
  );
};