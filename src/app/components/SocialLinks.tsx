// components/SocialLinks.tsx
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface SocialLink {
  // platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin';
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube';
  href: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube
};

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="flex space-x-4">
      {links.map((link) => {
        const Icon = iconMap[link.platform];
        return (
          <a 
            key={link.platform}
            href={link.href} 
            className="bg-gray-800 p-2 rounded-lg hover:bg-[#0d4dcc] transition-colors"
            aria-label={link.platform}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};