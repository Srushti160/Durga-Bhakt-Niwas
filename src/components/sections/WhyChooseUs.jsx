import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../ui/SectionTitle';
import {
  FiWifi, FiDroplet, FiHome, FiSmile, FiDollarSign,
  FiMapPin, FiHeart, FiShield, FiTruck, FiClock,
  FiEye, FiStar, FiCheckCircle, FiThermometer
} from 'react-icons/fi';

const features = [
  { icon: FiHome, title: 'Comfortable & Hygienic Rooms', desc: 'Spacious, well-maintained rooms for a restful stay' },
  { icon: FiDroplet, title: 'Attached Bathrooms', desc: 'Private bathrooms with all modern amenities' },
  { icon: FiThermometer, title: '24-Hour Hot Water', desc: 'Round-the-clock hot water supply for your comfort' },
  { icon: FiSmile, title: 'Peaceful Family Environment', desc: 'A calm and safe space for families and children' },
  { icon: FiDollarSign, title: 'Budget-Friendly Accommodation', desc: 'Premium quality at prices that respect your budget' },
  { icon: FiMapPin, title: 'Near Tulja Bhavani Temple', desc: 'Walking distance to the sacred temple premises' },
  { icon: FiHeart, title: 'Friendly Hospitality', desc: 'Warm, caring service that treats you like family' },
];

export default function WhyChooseUs() {
  const { isDark } = useTheme();

  return (
    <section className="section-padding" style={{ background: isDark ? 'rgba(122,15,29,0.08)' : 'rgba(122,15,29,0.04)' }}>
      <div className="container-custom">
        <SectionTitle
          subtitle="Why Choose Us"
          title="What Makes Us Special"
          description="We go beyond accommodation — we offer an experience rooted in devotion, comfort, and care."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-6 rounded-2xl card-hover ${
                isDark
                  ? 'bg-[#1a1009] border border-gold/10 hover:border-gold/30'
                  : 'bg-white border border-maroon/10 hover:border-maroon/30'
              } shadow-lg hover:shadow-xl`}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-maroon to-maroon-dark flex items-center justify-center mb-4 shadow-lg">
                <feature.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-[Playfair_Display] text-lg font-bold mb-2"
                  style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                {feature.title}
              </h3>
              <p className={`text-sm ${isDark ? 'text-cream/60' : 'text-dark-brown/60'}`}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
