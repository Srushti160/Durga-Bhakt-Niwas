import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../ui/SectionTitle';
import { FiMapPin } from 'react-icons/fi';

const attractions = [
  {
    name: 'Shri Tulja Bhavani Temple',
    desc: 'One of the 51 Shakti Peethas, a sacred temple dedicated to Goddess Tulja Bhavani.',
    image: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=600&q=80',
    distance: 'Walking Distance',
  },
  {
    name: 'Temple Entrance',
    desc: 'The grand entrance of the ancient temple with intricate stone carvings and architecture.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
    distance: '5 min walk',
  },
  {
    name: 'Prasad Centre',
    desc: 'Traditional prasad distribution centre near the temple for divine offerings.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
    distance: '5 min walk',
  },
  {
    name: 'Shopping Market',
    desc: 'Vibrant local market with religious items, handicrafts, and traditional Maharashtrian goods.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
    distance: '3 min walk',
  },
  {
    name: 'Tuljapur Bus Stand',
    desc: 'Well-connected bus stand for easy travel to and from Tuljapur.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
    distance: '10 min walk',
  },
];

export default function NearbyAttractions() {
  const { isDark } = useTheme();

  return (
    <section className="section-padding" style={{ background: isDark ? 'rgba(122,15,29,0.06)' : 'rgba(122,15,29,0.03)' }}>
      <div className="container-custom">
        <SectionTitle
          subtitle="Explore Nearby"
          title="Nearby Attractions"
          description="Discover the sacred landmarks and vibrant life around our hotel."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl overflow-hidden group ${
                isDark ? 'bg-[#1a1009] border border-gold/10' : 'bg-white border border-gray-100'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-maroon/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <FiMapPin size={12} /> {item.distance}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-[Playfair_Display] text-xl font-bold mb-2"
                    style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                  {item.name}
                </h3>
                <p className={`text-sm ${isDark ? 'text-cream/60' : 'text-dark-brown/60'}`}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
