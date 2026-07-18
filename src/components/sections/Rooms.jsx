import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../ui/SectionTitle';
import { FiWifi, FiDroplet, FiWind, FiTv, FiCoffee, FiCheck } from 'react-icons/fi';

const rooms = [
  {
    name: 'Standard Room',
    price: '₹800',
    period: '/night',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    features: ['Comfortable Double Bed', 'Attached Bathroom', '24-Hour Hot Water', 'Free WiFi', 'Clean Linens', 'Fan & Light'],
    color: 'from-maroon to-maroon-dark',
  },
  {
    name: 'Deluxe Room',
    price: '₹1200',
    period: '/night',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80',
    features: ['King Size Bed', 'Attached Bathroom', '24-Hour Hot Water', 'Free WiFi', 'AC & Heater', 'TV & Wardrobe', 'Room Service'],
    color: 'from-gold-dark to-gold',
    popular: true,
  },
  {
    name: 'Family Room',
    price: '₹1800',
    period: '/night',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
    features: ['Twin/Double Beds', 'Spacious Layout', 'Attached Bathroom', '24-Hour Hot Water', 'Free WiFi', 'AC & TV', 'Extra Mattress', 'Ideal for 4 Guests'],
    color: 'from-dark-brown to-dark-brown-light',
  },
];

const roomIcons = [FiWifi, FiDroplet, FiWind, FiTv, FiCoffee];

export default function Rooms() {
  const { isDark } = useTheme();

  return (
    <section id="rooms" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Rooms"
          title="Comfortable & Elegant Stay"
          description="Choose from our range of well-appointed rooms designed for pilgrims seeking comfort and tranquility."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl overflow-hidden group ${
                isDark ? 'bg-[#1a1009] border border-gold/10' : 'bg-white border border-gray-100'
              } shadow-xl hover:shadow-2xl transition-all duration-500`}
            >
              {room.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gold text-dark-brown px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-[Playfair_Display] text-2xl font-bold text-white">
                    {room.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="font-[Playfair_Display] text-3xl font-bold text-gold">{room.price}</span>
                  <span className={`text-sm ${isDark ? 'text-cream/50' : 'text-dark-brown/50'}`}>{room.period}</span>
                </div>

                <div className="space-y-3 mb-6">
                  {room.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-maroon/10 flex items-center justify-center">
                        <FiCheck size={12} className="text-maroon" />
                      </div>
                      <span className={`text-sm ${isDark ? 'text-cream/70' : 'text-dark-brown/70'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#booking"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 block ${
                    room.popular
                      ? 'bg-gradient-to-r from-gold to-gold-light text-dark-brown hover:shadow-lg hover:shadow-gold/30'
                      : 'bg-gradient-to-r from-maroon to-maroon-dark text-white hover:shadow-lg hover:shadow-maroon/30'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
