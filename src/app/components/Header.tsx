// components/HeroSection.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Define the shape of slider images
interface SliderImage {
  url: string;
  alt: string;
}

// Array of 5 live image URLs (using Unsplash for high-quality, royalty-free images)
const sliderImages: SliderImage[] = [
  {
    url: '/images/j1.jpg',
    alt: 'Beautiful Beach',
  },
  {
    url: '/images/j2.jpg',
    alt: 'Mountain Landscape',
  },
  {
    url: '/images/j3.jpg',
    alt: 'Forest Path',
  },
  {
    url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e206',
    alt: 'City Skyline',
  },
  {
    url: 'https://images.unsplash.com/photo-1447752875217-9b3c8f6d27b3',
    alt: 'Desert Sunset',
  },
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1); // Explicitly type direction as number

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  // Animation variants for the slider
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      } as Transition,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      } as Transition,
    }),
  };

  // Animation variants for text content
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' } as Transition,
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Slider Background */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={sliderImages[currentIndex].url}
            alt={sliderImages[currentIndex].alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Darker overlay for text contrast */}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-20"
        onClick={handlePrev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-gray-800" />
      </motion.button>
      <motion.button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-20"
        onClick={handleNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-gray-800" />
      </motion.button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {sliderImages.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Jericho Businessmen
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">
                Club
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Premier business club connecting Ibadan professionals for economic
              development and community transformation
            </p>
          </div>

         

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-800">500+</div>
              <div className="text-blue-100">Active Members</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-800">19+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-800">₦50M+</div>
              <div className="text-blue-100">Community Investment</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;