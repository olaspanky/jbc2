// components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button = ({ children, onClick, variant = 'primary', fullWidth = false }: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`bg-gradient-to-r from-[#0d4dcc] to-[#0d4dcc] text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-medium ${fullWidth ? 'w-full' : ''}`}
    >
      {children}
    </button>
  );
};