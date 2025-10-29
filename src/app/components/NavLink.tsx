// components/NavLink.tsx
'use client';

import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

export const NavLink = ({ href, children, mobile = false, onClick }: NavLinkProps) => {
  const baseClasses = "text-gray-700 hover:text-[#0d4dcc] transition-colors";
  const mobileClasses = mobile ? "py-2" : "font-medium";

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${mobileClasses}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};