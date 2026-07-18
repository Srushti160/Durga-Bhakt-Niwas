import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/logo.png';

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=1920&q=80')`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(61,36,21,0.85) 0%, rgba(122,15,29,0.75) 50%, rgba(61,36,21,0.85) 100%)',
        }}
      />

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <img src={logo} alt="Durga Bhak Niwas" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-contain mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gold text-sm md:text-base tracking-[4px] uppercase mb-4"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-[Playfair_Display] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Durga Bhak
          <span className="block text-gradient">Niwas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="font-[Playfair_Display] text-xl md:text-2xl text-gold/90 mb-8 italic"
        >
          Where Comfort Meets Devotion
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-cream/80 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Located in the holy city of Tuljapur, Durga Bhak Niwas is dedicated to providing
          a relaxing and affordable stay for devotees of Goddess Tulja Bhavani. Our rooms
          are designed to offer comfort, cleanliness, and convenience, making your pilgrimage
          peaceful and enjoyable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-secondary text-base group"
          >
            Book Your Stay
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="tel:9890024910"
            className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-gold/50 text-gold hover:bg-gold/10 transition-all duration-300 font-semibold"
          >
            <FiPhone size={18} />
            Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
