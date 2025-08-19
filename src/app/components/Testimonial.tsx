import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Onyedika Igwe",
    role: "Innovator",
    content: "It was the kind of experience I could easily look forward to every year. The event was inclusive and gave me the opportunity to connect with like-minded aspiring youths and noteworthy professionals. ",
    rating: 5,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Kehinde Oyedeji",
    role: "Innovator", 
    content: "It was amazing—from the warm reception to the overall organization. What stood out the most was how inclusive the experience was. Everyone was given a fair chance, and there were no barriers of any kind.",
    rating: 5,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Niyi Omolade",
    role: "Innovator",
    content: "Astonishing and exhilarating! The intellectual engagements during the panel sessions were top-notch—especially the innovation pitch segment, which was truly inspiring.",
    rating: 5,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Ayisat Adama Adamu",
    role: "Innovator",
    content: "In one word: Eye-opening. The committee's ability to bring together brilliant minds, thought leaders, and top personalities to share transformative insights on vital issues was truly remarkable. Their commitment to excellent service was equally commendable in every sense of the word.",
    rating: 5,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Taiwo Damilola Yussuf",
    role: "Innovator",
    content: "I enjoyed the hospitality and the refreshing experience of being in a new environment outside Lagos. It was a great opportunity to network and encounter new perspectives. The quality of the innovations presented was truly impressive.",
    rating: 5,
    color: "from-purple-500 to-pink-500"
  }
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: any, isActive: boolean }) => {
  return (
    <div className={`
      flex-shrink-0 w-96 h-auto mx-4 p-5 transition-all duration-700 transform
      ${isActive ? 'scale-105 opacity-100' : 'scale-95 opacity-70'}
    `}>
      <div className="relative group">
        {/* Floating background glow */}
        
        {/* Main card */}
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 h-full hover:bg-white/15 transition-all duration-500 hover:shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl"></div>
          
          {/* Quote icon with animation */}
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className={`w-14 h-14 bg-gradient-to-r ${testimonial.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
              <Quote className="w-7 h-7 text-white" />
            </div>
            <div className="flex space-x-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-twinkle"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
          
          {/* Testimonial content */}
          <blockquote className="text-gray-100 text-lg leading-relaxed mb-8 relative z-10 font-light">
            <span className="text-2xl text-white/60 font-serif leading-none">"</span>
            {testimonial.content}
            <span className="text-2xl text-white/60 font-serif leading-none">"</span>
          </blockquote>
          
          {/* Author section */}
          <div className="flex items-center space-x-4 relative z-10">
            <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl ring-4 ring-white/20 transform group-hover:scale-110 transition-transform duration-300`}>
              {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold text-xl mb-1">{testimonial.name}</h4>
              <p className={`bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent font-medium text-sm uppercase tracking-wider`}>
                {testimonial.role}
              </p>
            </div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 right-8 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
          <div className="absolute top-1/2 right-12 w-1 h-1 bg-white/60 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-1/3 right-6 w-1.5 h-1.5 bg-white/30 rounded-full animate-float-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default function InnovatorTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Dynamic animated background */}
      <div className="fixed inset-0 -z-20">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-1000 ${
              index === currentIndex ? 'opacity-30 scale-110' : 'opacity-10 scale-90'
            }`}
            style={{
              background: `linear-gradient(45deg, ${testimonials[index].color.replace('from-', '').replace(' to-', ', ')})`,
              top: `${20 + (index * 15)}%`,
              left: `${10 + (index * 20)}%`,
              animationDelay: `${index * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="  px py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl mb-8 shadow-2xl animate-bounce-gentle">
            <Quote className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 tracking-tight">
            Innovator Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-90">
            Experience the transformative journey through the eyes of brilliant innovators who shaped our event
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-shimmer"></div>
          </div>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
          
          {/* Testimonials container */}
          <div className="overflow-hidden mx-">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 416}px)` }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  isActive={index === currentIndex}
                />
              ))}
            </div>
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          {/* Auto-play indicator */}
          <div className="flex justify-center mt-6">
            <div className={`w-1 h-1 rounded-full transition-all duration-300 ${isAutoPlay ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}></div>
            <span className="ml-2 text-xs text-gray-400">            </span>
          </div>
        </div>
        
        {/* Enhanced CTA */}
       
      </div>
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-twinkle { animation: twinkle 2s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite 0.5s; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite 1s; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-shimmer { 
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-up { 
          animation: fade-in-up 1s ease-out forwards 0.5s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}