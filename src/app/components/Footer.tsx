// components/Footer.tsx
import logo from "../../../public/logo.png"
import { SocialLinks } from './SocialLinks';
import { FooterSection } from './FooterSection';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinks {
  about: FooterLink[];
  initiatives: FooterLink[];
  resources: FooterLink[];
}

interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin';
  href: string;
}

interface FooterProps {
  description: string;
  socialLinks: SocialLink[];
  footerLinks: FooterLinks;
  organizationName?: string;
}

export const Footer = ({ 
  description, 
  socialLinks, 
  footerLinks,
  organizationName = "Jericho Businessmen Club Ibadan"
}: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="mb-6">
          <img src={logo.src} alt="JBC Logo" className="h-10 w-auto" />
              <div className="text-white font-bold mt-2">JBC Ibadan</div>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              {description}
            </p>
            <SocialLinks links={socialLinks} />
          </div>

          {/* Footer Sections */}
          <FooterSection title="About Us" links={footerLinks.about} />
          <FooterSection title="Our Initiatives" links={footerLinks.initiatives} />
          <FooterSection title="Resources" links={footerLinks.resources} />
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {organizationName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};