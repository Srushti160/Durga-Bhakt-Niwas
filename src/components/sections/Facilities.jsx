import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../ui/SectionTitle';
import {
  FiWifi, FiDroplet, FiHome, FiTruck, FiUsers,
  FiEye, FiShield, FiClock, FiCoffee, FiMapPin,
  FiCheckCircle, FiStar
} from 'react-icons/fi';

const facilities = [
  { icon: FiWifi, title: 'Free WiFi' },
  { icon: FiDroplet, title: '24-Hour Hot Water' },
  { icon: FiHome, title: 'Attached Bathrooms' },
  { icon: FiTruck, title: 'Parking' },
  { icon: FiUsers, title: 'Family Rooms' },
  { icon: FiEye, title: 'CCTV Security' },
  { icon: FiCheckCircle, title: 'Clean Beds' },
  { icon: FiClock, title: '24×7 Service' },
  { icon: FiCoffee, title: 'Nearby Hotel & Restaurant' },
  { icon: FiMapPin, title: 'Walking Distance to Temple' },
];

export default function Facilities() {
  const { isDark } = useTheme();

  return (
    <section id="facilities" className="section-padding"
      style={{ background: isDark ? 'rgba(61,36,21,0.15)' : 'rgba(61,36,21,0.03)' }}>
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Facilities"
          title="Everything You Need"
          description="We provide all essential amenities to make your stay comfortable and hassle-free."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {facilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className={`group p-5 rounded-2xl text-center cursor-default transition-all duration-300 ${
                isDark
                  ? 'bg-[#1a1009] border border-gold/10 hover:border-gold/40 hover:bg-[#23170e]'
                  : 'bg-white border border-maroon/5 hover:border-maroon/30 hover:shadow-lg'
              }`}
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br from-maroon to-maroon-dark flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                <item.icon size={24} className="text-gold" />
              </div>
              <p className={`text-sm font-medium ${isDark ? 'text-cream/80' : 'text-dark-brown/80'}`}>
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
