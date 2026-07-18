import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../ui/SectionTitle';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const images = [
  { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80', alt: 'Hotel Exterior', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80', alt: 'Deluxe Room', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', alt: 'Standard Room', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80', alt: 'Family Room', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80', alt: 'Reception', span: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80', alt: 'Bathroom', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80', alt: 'Hotel Lobby', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=600&q=80', alt: 'Temple View', span: 'col-span-1 row-span-2' },
];

export default function Gallery() {
  const { isDark } = useTheme();
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const nextImage = () => setLightbox((prev) => (prev + 1) % images.length);
  const prevImage = () => setLightbox((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          subtitle="Gallery"
          title="Explore Our Spaces"
          description="Take a visual tour of our hotel and its beautiful surroundings."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${img.span} relative rounded-xl overflow-hidden cursor-pointer group`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-sm">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
            >
              <FiX size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white/80 hover:text-white z-10"
            >
              <FiChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white/80 hover:text-white z-10"
            >
              <FiChevronRight size={40} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 text-white/70 text-sm">{images[lightbox].alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
