'use client'; // Ensure client-side rendering for animations

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Define props interface for type safety
interface WhoWeAreProps {}

const WhoWeAre: React.FC<WhoWeAreProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by mounting animations client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Who We Are | Jericho Businessmen Club</title>
        <meta
          name="description"
          content="Learn about the Jericho Businessmen Club, dedicated to transforming Ibadan land through economic development, professional networking, and impactful public policy discourse."
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('/patterns/hero-pattern.svg')]" aria-hidden="true"></div>

          {/* Floating Elements */}
          {isMounted && (
            <>
              <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl motion-safe:animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-400/10 rounded-full blur-2xl motion-safe:animate-pulse delay-1000"></div>
            </>
          )}

          <div className="relative container mx-auto px-6 py-20 text-center">
            <div className="transform hover:scale-105 transition-all duration-500">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-lg motion-safe:animate-pulse"></div>
                <Image
                  src="/images/college-logo.png" // Ensure this path exists in /public
                  alt="Jericho Businessmen Club Official Logo"
                  width={160}
                  height={160}
                  className="relative mx-auto rounded-full ring-4 ring-white/20 shadow-2xl"
                  priority // Optimize for above-the-fold content
                  onError={() => (
                    <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500">Logo Failed to Load</span>
                    </div>
                  )}
                />
              </div>
            </div>

            {isMounted && (
              <div className="space-y-6 animate-[fadeInUp_1s_ease-out]">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
                  Who We Are
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
                <p className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-100 leading-relaxed font-light">
                  Jericho Businessmen Club is dedicated to transforming Ibadan land through
                  <span className="text-yellow-300 font-medium"> economic development</span>,
                  <span className="text-yellow-300 font-medium"> professional networking</span>, and
                  <span className="text-yellow-300 font-medium"> impactful public policy discourse</span>.
                </p>
              </div>
            )}
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="fill-slate-50"
              ></path>
            </svg>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-6 py-20 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Aim, Vision, Mission */}
            <div className="space-y-12">
              {/* Aim */}
              <div className="group transform hover:-translate-y-1 transition-all duration-300">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">🎯</span>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                      Our Aim
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To network with like-minded professionals of Ibadan extraction for the purpose of
                    mutual economic development and impacting public policy discourse for the benefit
                    of our people in Ibadan.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="group transform hover:-translate-y-1 transition-all duration-300">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-indigo-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">👁️</span>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To be the club of first choice for Ibadan sons committed to transforming
                    Ibadan land into the epitome of development in Nigeria.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="group transform hover:-translate-y-1 transition-all duration-300">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-purple-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">🚀</span>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To attract high-quality professionals and business persons and leverage their
                    collective social and economic capital to mobilize resources for both the
                    development of Ibadan land and members of the club.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Core Values, Vow */}
            <div className="space-y-12">
              {/* Core Values */}
              <div className="group transform hover:-translate-y-1 transition-all duration-300">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-emerald-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">💎</span>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                      Core Values
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Public Spiritedness',
                      'Passion for Ibadan land',
                      'Service-mindedness',
                      'Integrity',
                      'Discipline',
                      'Team Spirit',
                    ].map((value) => (
                      <div
                        key={value}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 group/item"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-700 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Our Vow */}
              <div className="group transform hover:-translate-y-1 transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl border-2 border-orange-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-600"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">🤝</span>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
                      Our Vow
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Jericho Businessmen Club has vowed to continue to live by its objective now and
                    in the foreseeable future, with greater efforts being devoted to the upliftment
                    of the economic, social, and political landscape of Ibadan land.
                  </p>
                  <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent text-center italic">
                      Ibadan a gbe wa o. Amin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Decorative Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0 opacity-20 bg-[url('/patterns/footer-pattern.svg')]" aria-hidden="true"></div>
          <div className="relative text-center">
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8 rounded-full"></div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Be part of the transformation of Ibadan land through professional excellence and community impact.
            </p>
            <Link
              href="/join"
              className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
              role="button"
              tabIndex={0}
            >
              Join Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhoWeAre;