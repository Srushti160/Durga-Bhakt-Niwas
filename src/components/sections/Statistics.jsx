import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useCountUp } from '../../hooks/useCountUp';
import { FiUsers, FiAward, FiDroplet, FiCheckCircle } from 'react-icons/fi';

const stats = [
  { icon: FiUsers, end: 1000, suffix: '+', label: 'Happy Guests' },
  { icon: FiAward, end: 15, suffix: '+', label: 'Years of Service' },
  { icon: FiDroplet, end: 24, suffix: '×7', label: 'Hot Water' },
  { icon: FiCheckCircle, end: 100, suffix: '%', label: 'Clean Rooms' },
];

function StatItem({ icon: Icon, end, suffix, label }) {
  const [ref, count] = useCountUp(end, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-6"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/10 flex items-center justify-center">
        <Icon size={28} className="text-gold" />
      </div>
      <div className="font-[Playfair_Display] text-4xl md:text-5xl font-bold text-gold mb-1">
        {count}{suffix}
      </div>
      <p className="text-cream/70 text-sm tracking-wide uppercase">{label}</p>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="py-16" style={{ background: 'linear-gradient(135deg, #3D2415 0%, #7A0F1D 50%, #3D2415 100%)' }}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
