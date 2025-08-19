import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define the shape of each value
interface Value {
  title: string;
  description: string;
  color: string; // Tailwind color class for background gradient
}

// Define the values data
const values: Value[] = [
  {
    title: 'Aim',
    description:
      'To empower Ibadan professionals to drive sustainable economic growth and community transformation through collaboration and innovation.',
    color: 'from-blue-600 to-blue-900',
  },
  {
    title: 'Vision',
    description:
      'To be the leading business club in Ibadan, fostering a vibrant ecosystem of professionals dedicated to excellence and positive change.',
    color: 'from-purple-600 to-purple-900',
  },
  {
    title: 'Mission',
    description:
      'To connect, inspire, and support Ibadans professionals through networking, resources, and impactful initiatives for community development.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    title: 'Vow',
    description:
      'We pledge to uphold integrity, inclusivity, and innovation in all our endeavors, transforming Ibadan for generations to come.',
    color: 'from-green-600 to-teal-900',
  },
];

const ValuesCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [viewedValues, setViewedValues] = useState<boolean[]>(Array(values.length).fill(false));

  // Track viewed values
  useEffect(() => {
    setViewedValues((prev) => {
      const newViewed = [...prev];
      newViewed[currentIndex] = true;
      return newViewed;
    });
  }, [currentIndex]);

  // Handle manual navigation
  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? values.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % values.length);
  };

  const allViewed = viewedValues.every((viewed) => viewed);

  return (
    <section className="relative min-h-screen flex bg-white items-center justify-center  overflow-hidden">
      {/* Full-screen Background Effect */}
     
      {/* Card */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-black mb-8">
          Our Core Values
        </h2>

        <div className="relative">
          <div
            className={`relative bg-gradient-to-br ${values[currentIndex].color} rounded-3xl shadow-2xl p-8 md:p-12 w-full text-black overflow-hidden min-h-[500px] flex items-center justify-center transition-all duration-500 ease-out`}
          >
            {/* Decorative Background Pattern */}
            <div 
              className="absolute inset-0 bg-black/20" 
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15), transparent)'
              }}
            />

            {/* Content */}
            <div className="relative z-10 text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-500">
                {values[currentIndex].title}
              </h3>
              <p className="text-lg md:text-xl max-w-2xl mx-auto transform transition-all duration-500">
                {values[currentIndex].description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-20 hover:scale-110"
              onClick={handlePrevious}
              aria-label="Previous value"
            >
              <ChevronLeft size={28} className="text-gray-800" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-20 hover:scale-110"
              onClick={handleNext}
              aria-label="Next value"
            >
              <ChevronRight size={28} className="text-gray-800" />
            </button>
          </div>
        </div>

        {/* Tabs for Manual Selection */}
        <div className="flex justify-center space-x-4 mt-6">
          {values.map((value, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 ${
                currentIndex === index
                  ? 'bg-white text-gray-900'
                  : 'bg-white/20 text-black hover:bg-white/40'
              }`}
              onClick={() => handleSelect(index)}
              aria-label={`View ${value.title}`}
            >
              {value.title}
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {values.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  viewedValues[index] ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Message to explore all values */}
      {!allViewed && (
        <div className="absolute bottom-8 left-0 right-0 text-center text-black/80 text-lg">
          Explore all values to continue
        </div>
      )}
    </section>
  );
};

export default ValuesCard;