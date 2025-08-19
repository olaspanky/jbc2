import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
  ChevronDown,
  Clock,
  Users,
  Award,
} from "lucide-react";
import Header from "./Header";

const ProfessionalSummitHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Calculate initial time left
  const targetDate = new Date("2025-11-21T00:00:00").getTime();
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const particles = useRef<
    Array<{
      id: number;
      left: string;
      top: string;
      duration: string;
      delay: number;
      size: number;
    }>
  >([]);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate particles on mount
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          duration: `${4 + Math.random() * 6}s`,
          delay: Math.random() * 2,
          size: 4 + Math.random() * 8,
        });
      }
      particles.current = newParticles;
    };
    generateParticles();
  }, []);

  const GlassCard = ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div
      className={`backdrop-blur-md bg-[#00048f]/5 border border-[#00048f]/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="text-[#00048f]">
      <div className="bg-white/90 border border-[#00048f]/10 rounded-xl p-2 lg:px-6 lg:py-4 text-center shadow-md hover:shadow-lg transition-all duration-200">
        <div className="text-2xl sm:text-3xl 2xl:text-4xl font-bold mb-1 font-mono text-[#00048f]">
          {String(value).padStart(2, "0")}
        </div>
        <div className="text-[8px] sm:text-xs lg:text-sm uppercase tracking-wide text-[#00048f]/80">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <section id="home" className="bg-white relative overflow-hidden">
      <Header />

      {/* Particle Background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.current.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-[#196ee5]/30 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration} infinite ${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-center p-2 lg:px-6 lg:py-12 w-full max-w-7xl mx-auto">
        <div className="space-y-10 pt-8 lg:pt-6 xl:pt-4">
          {/* Event Date and Location */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <GlassCard className="p-4 2xl:p-6 group hover:bg-[#00048f]/10">
              <div className="flex items-center justify-center space-x-3 text-[#00048f] mb-2">
                <svg
                  className="w-6 h-6 text-[#196ee5] group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <div className="text-md md:text-lg 2xl:text-xl font-bold">
                    Friday, November 21
                  </div>
                  <div className="text-[#00048f]/70 text-base">2025</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-4 2xl:p-6 group hover:bg-[#00048f]/10">
              <div className="flex items-center justify-center space-x-3 text-[#00048f] mb-2">
                <svg
                  className="w-6 h-6 text-[#196ee5] group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L12 12m0 0l-5.657 5.657M12 12V3"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                  />
                </svg>
                <div>
                  <div className="text-md md:text-lg 2xl:text-xl font-bold">Ibadan, Nigeria</div>
                  <div className="text-[#00048f]/70 text-base">
                    International Conference Centre, UI
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Countdown Timer */}
          <div
            className="text-center mb-8 flex justify-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="grid grid-cols-4 gap-4 max-w-2xl">
              <CountdownBox value={timeLeft.days} label="Days" />
              <CountdownBox value={timeLeft.hours} label="Hours" />
              <CountdownBox value={timeLeft.minutes} label="Minutes" />
              <CountdownBox value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#register"
              className="group inline-flex items-center justify-center space-x-2 border-2 border-[#00048f]/50 hover:border-[#196ee5] px-8 py-4 rounded-full font-semibold text-[#00048f] hover:bg-[#196ee5]/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Users className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>Register Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* CSS for Particle Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};

export default ProfessionalSummitHero;