// components/FooterSection.tsx
interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

export const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="text-white font-bold mb-4 text-lg">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-emerald-400 transition-colors text-sm">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};