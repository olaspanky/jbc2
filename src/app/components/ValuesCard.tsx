import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

// Define the shape of each value
interface Value {
  title: string;
  description: string;
  icon: string;
  accent: string;
}

// Define the values data with professional styling
const values: Value[] = [
  {
    title: 'Aim',
    description: 'To empower Ibadan professionals to drive sustainable economic growth and community transformation through collaboration and innovation.',
    icon: '🎯',
    accent: 'from-slate-600 to-slate-800'
  },
  {
    title: 'Vision',
    description: 'To be the leading business club in Ibadan, fostering a vibrant ecosystem of professionals dedicated to excellence and positive change.',
    icon: '👁️',
    accent: 'from-blue-600 to-blue-800'
  },
  {
    title: 'Mission',
    description: 'To connect, inspire, and support Ibadan professionals through networking, resources, and impactful initiatives for community development.',
    icon: '🚀',
    accent: 'from-emerald-600 to-emerald-800'
  },
  {
    title: 'Vow',
    description: 'We pledge to uphold integrity, inclusivity, and innovation in all our endeavors, transforming Ibadan for generations to come.',
    icon: '🤝',
    accent: 'from-amber-600 to-amber-800'
  },
];

const ValuesCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [viewedValues, setViewedValues] = useState<boolean[]>(Array(values.length).fill(false));
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Track viewed values
  useEffect(() => {
    setViewedValues((prev) => {
      const newViewed = [...prev];
      newViewed[currentIndex] = true;
      return newViewed;
    });
  }, [currentIndex]);

  // Auto-switch to the next value every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        const newIndex = (currentIndex + 1) % values.length;
        handleTransition(newIndex);
      }
    }, 5000); // 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [currentIndex, isTransitioning]);

  const handleTransition = (newIndex: number) => {
    if (newIndex === currentIndex || isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? values.length - 1 : currentIndex - 1;
    handleTransition(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % values.length;
    handleTransition(newIndex);
  };

  const allViewed = viewedValues.every((viewed) => viewed);
  const currentValue = values[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full mb-6 shadow-lg">
            <div className="text-2xl text-white">⭐</div>
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-slate-800 mb-4 tracking-tight">
            Our Core Values
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto rounded-full"></div>
        </div>
        <div className="flex justify-center mt-12">
          <div className="inline-flex bg-slate-100 rounded-full p-2 shadow-lg">
            {values.map((value, index) => (
              <button
                key={index}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-600 ${
                  currentIndex === index
                    ? 'bg-white text-slate-800 shadow-md'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
                }`}
                onClick={() => handleTransition(index)}
                aria-label={`View ${value.title}`}
              >
                <span className="flex items-center space-x-2">
                  <span>{value.title}</span>
                  {viewedValues[index] && (
                    <CheckCircle size={16} className="text-green-600" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Card Container */}
        <div className="relative">
          {/* Background Card */}
          <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl transform rotate-1 opacity-20"></div>
          <div className="absolute inset-0 bg-white rounded-3xl shadow-xl transform -rotate-1 opacity-30"></div>

          {/* Main Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50">
            {/* Accent Bar */}
            <div className={`h-2 bg-gradient-to-r ${currentValue.accent}`}></div>

            {/* Content Container */}
            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Content */}
              <div
                className={`text-center transition-all duration-300 ${
                  isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                }`}
              >
                {/* Icon */}
                <div className="text-6xl md:text-7xl mb-8 opacity-80">{currentValue.icon}</div>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-light text-slate-800 mb-8 tracking-wide">
                  {currentValue.title}
                </h2>

                {/* Description */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                    {currentValue.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      

        {/* Completion Status */}
       
      </div>
    </div>
  );
};

// Add custom styles for animations
const styles = `
  @keyframes fade-in {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }

  /* Custom scrollbar for better aesthetics */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  ::-webkit-scrollbar-thumb {
    background: #64748b;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #475569;
  }
`;

// Inject styles into the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default ValuesCard;