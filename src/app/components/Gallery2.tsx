"use client";

import React, { useState } from "react";

/* ================= TYPES ================= */
type GalleryImage = {
  src: string;
  title: string;
  description: string;
  tag: string;
};

type SectionType = "mixed" | "2025" | "2024" | "earlier";

/* ================= HELPERS ================= */
const generateImages = (
  folder: "bc25" | "bcimg" | "jbc25",
  count: number,
  tag: string
): GalleryImage[] => {
  return Array.from({ length: count }, (_, i) => ({
    src: `/${folder}/img${i + 1}.jpg`,
    title: `Image ${i + 1}`,
    description: "Captured moment in time",
    tag,
  }));
};

const shuffleArray = (images: GalleryImage[]): GalleryImage[] => {
  return [...images].sort(() => Math.random() - 0.5);
};

/* ================= DATA ================= */
const jbc25Images = generateImages("jbc25", 30, "2025");
const bc25Images = generateImages("bc25", 60, "2024");
const bcImgImages = generateImages("bcimg", 32, "Earlier Years");
const mixedImages = shuffleArray([...jbc25Images, ...bc25Images, ...bcImgImages]).slice(0, 40);

/* ================= GRID COMPONENT ================= */
type GalleryGridProps = {
  images: GalleryImage[];
  onSelect: (image: GalleryImage) => void;
};

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          onClick={() => onSelect(image)}
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-500"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
            <h3 className="text-xl font-semibold text-white">{image.title}</h3>
            <p className="text-sm text-slate-300">{image.description}</p>
            <span className="mt-3 inline-block w-fit px-4 py-1 text-xs rounded-full bg-indigo-500/40 border border-indigo-500/50 text-white">
              {image.tag}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeSection, setActiveSection] = useState<SectionType>("mixed");

  const sectionMap: Record<SectionType, GalleryImage[]> = {
    mixed: mixedImages,
    "2025": jbc25Images,
    "2024": bc25Images,
    earlier: bcImgImages,
  };

  const sectionTitleMap: Record<SectionType, string> = {
    mixed: "Featured Moments",
    "2025": "2025 Gallery",
    "2024": "2024 Gallery",
    earlier: "Earlier Years",
  };

  return (
    <>
      {/* Fullscreen Fixed Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/jbg.jpg")`,
          backgroundAttachment: "fixed", // Makes background truly static on scroll
        }}
      />

      {/* Dark Overlay - Behind Content */}
      <div className="fixed inset-0 -z-10 bg-indigo-900/90" />

      {/* Main Content - Above Everything */}
      <div className="relative min-h-screen text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Section Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {(["mixed", "2025", "2024", "earlier"] as SectionType[]).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 text-sm md:text-base
                  ${
                    activeSection === section
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/30"
                      : "border-white/50 text-white hover:border-indigo-400 hover:bg-white/10"
                  }
                `}
              >
                {sectionTitleMap[section]}
              </button>
            ))}
          </div>

          {/* Gallery Section */}
          <section className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center drop-shadow-lg">
              {sectionTitleMap[activeSection]}
            </h2>

            <GalleryGrid
              images={sectionMap[activeSection]}
              onSelect={setSelectedImage}
            />
          </section>
        </div>

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-5xl w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGallery;