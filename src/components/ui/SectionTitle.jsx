import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function SectionTitle({ subtitle, title, description, center = true }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className="text-gold text-sm font-semibold tracking-[3px] uppercase block mb-3">
          {subtitle}
        </span>
      )}
      <h2
        className="font-[Playfair_Display] text-4xl md:text-5xl font-bold mb-4"
        style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-lg ${center ? 'mx-auto' : ''} ${isDark ? 'text-cream/70' : 'text-dark-brown/70'}`}>
          {description}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-2">
        <div className="w-12 h-1 bg-maroon rounded-full" />
        <div className="w-3 h-3 bg-gold rounded-full" />
        <div className="w-12 h-1 bg-maroon rounded-full" />
      </div>
    </motion.div>
  );
}
