// "use client";
// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, Variants, TargetAndTransition } from 'framer-motion';
// import g1 from "../../../public/images/q1.png";
// import g7 from "../../../public/images/q2.png";
// import g3 from "../../../public/images/q3.png";
// import g4 from "../../../public/images/q4.png";
// import g5 from "../../../public/images/q5.png";
// import g6 from "../../../public/images/q6.png";
// import g8 from "../../../public/images/q7.png";
// import g2 from "../../../public/images/q8.png";
// import g9 from "../../../public/images/q9.png";
// import g10 from "../../../public/images/q10.png";

// interface GalleryImage {
//   src: string;
//   alt: string;
// }

// const images: GalleryImage[] = [
//   { src: g4.src, alt: 'Gallery image 1' },
//   { src: g5.src, alt: 'Gallery image 2' },
//   { src: g6.src, alt: 'Gallery image 3' },
//   { src: g3.src, alt: 'Gallery image 4' },
//   { src: g2.src, alt: 'Gallery image 5' },
//   { src: g9.src, alt: 'Gallery image 6' },
//   { src: g1.src, alt: 'Gallery image 7' },
//   { src: g8.src, alt: 'Gallery image 8' },
//   { src: g10.src, alt: 'Gallery image 9' },
// ];

// // Animation variants for images
// const imageVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number): TargetAndTransition => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.5,
//       ease: 'easeOut',
//     },
//   }),
//   hover: {
//     scale: 1.1,
//     boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
//     transition: { duration: 0.3 },
//   },
// };

// const Gallery: React.FC = () => {
//   const [loading, setLoading] = useState<boolean[]>(new Array(images.length).fill(true));

//   const handleLoadingComplete = (index: number) => {
//     setLoading((prevState) => {
//       const updatedLoading = [...prevState];
//       updatedLoading[index] = false;
//       return updatedLoading;
//     });
//   };

//   return (
//     <div>
//       <section className="w-full px-4 py-12 bg-transparent">
//         <h2 className="text-center text-4xl font-bold mb-12 mt-8 text-gray-800">
//          A peak back in time
//         </h2>

//         {/* Image Gallery */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//           {images.map((image, index) => (
//             <motion.div
//               key={index}
//               className="relative group overflow-hidden rounded-xl shadow-lg"
//               variants={imageVariants}
//               initial="hidden"
//               animate="visible"
//               whileHover="hover"
//               custom={index}
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={500} // Adjust based on your image dimensions
//                 height={300} // Adjust based on your image dimensions
//                 className={`w-full h-auto object-cover transition-transform ${
//                   loading[index] ? 'blur-sm' : 'blur-0'
//                 }`}
//                 onLoadingComplete={() => handleLoadingComplete(index)}
//                 onError={() => handleLoadingComplete(index)}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                 <span className="text-white text-lg font-semibold">{image.alt}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Gallery;

"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, Variants, TargetAndTransition } from 'framer-motion';
import g1 from "../../../public/images/q1.png";
import g7 from "../../../public/images/q2.png";
import g3 from "../../../public/images/q3.png";
import g4 from "../../../public/images/q4.png";
import g5 from "../../../public/images/q5.png";
import g6 from "../../../public/images/q6.png";
import g8 from "../../../public/images/q7.png";
import g2 from "../../../public/images/q8.png";
import g9 from "../../../public/images/q9.png";
import g10 from "../../../public/images/q10.png";

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: g4.src, alt: '' },
  { src: g5.src, alt: '' },
  { src: g6.src, alt: '' },
  { src: g3.src, alt: '' },
  { src: g2.src, alt: '' },
  { src: g9.src, alt: '' },
  { src: g1.src, alt: '' },
  { src: g8.src, alt: '' },
  { src: g10.src, alt: '' },
];

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
  hover: {
    scale: 1.1,
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 },
  },
};

const Gallery: React.FC = () => {
  // Use useRef to persist loading state across re-renders
  const initialLoading = useRef<boolean[]>(new Array(images.length).fill(true));
  const [loading, setLoading] = useState<boolean[]>(initialLoading.current);

  const handleLoadingComplete = (index: number) => {
    setLoading((prevState) => {
      const updatedLoading = [...prevState];
      updatedLoading[index] = false;
      initialLoading.current = updatedLoading; // Update ref to persist
      return updatedLoading;
    });
  };

  return (
    <section className="w-full px-4 py-12 bg-transparent">
      <h2 className="text-center text-4xl font-bold mb-12 mt-8 text-white">
        2024 Innovation summit
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            custom={index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              priority // Preload images to reduce loading flicker
              className={`w-full h-auto object-cover transition-transform ${
                loading[index] ? 'blur-sm' : 'blur-0'
              }`}
              onLoadingComplete={() => handleLoadingComplete(index)}
              onError={() => handleLoadingComplete(index)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-lg font-semibold"></span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;