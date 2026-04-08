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
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube';
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
              {/* <p className="text-sm mb-6 leading-relaxed">
              {description}
            </p> */}

            <div className="text-sm space-y-2 mb-6">
              <p>
                <span className="text-white font-medium">Location:</span><br />
                NIHORT Road, Jericho, Ibadan, Oyo State, Nigeria
              </p>

              <p>
                <span className="text-white font-medium">Email:</span><br />
                <a href="mailto:info@jbcibadan.org" className="hover:text-white transition">
                  info@jbcibadan.org
                </a>
              </p>

              <p>
                <span className="text-white font-medium">Phone:</span><br />
                <a href="tel:+2348020548591" className="hover:text-white transition">
                  +2348020548591
                </a>
              </p>
          </div>

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