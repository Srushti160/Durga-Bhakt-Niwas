import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../ui/SectionTitle';

export default function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Durga Bhak Niwas Hotel"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-right-8 bg-gold rounded-2xl p-6 shadow-xl">
              <p className="font-[Playfair_Display] text-3xl font-bold text-dark-brown">15+</p>
              <p className="text-dark-brown/80 text-sm font-medium">Years of Service</p>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-gold/30 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold text-sm font-semibold tracking-[3px] uppercase">
              About Us
            </span>
            <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold mt-3 mb-6"
                style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
              A Sacred Abode for{' '}
              <span className="text-gradient">Divine Pilgrims</span>
            </h2>
            <div className={`space-y-4 text-lg leading-relaxed ${isDark ? 'text-cream/70' : 'text-dark-brown/70'}`}>
              <p>
                Nestled in the spiritual heart of Tuljapur, Durga Bhak Niwas offers a serene
                retreat for pilgrims visiting the sacred Shri Tulja Bhavani Temple.
              </p>
              <p>
                We understand the needs of devotees and have crafted our accommodations to
                provide maximum comfort during your holy visit. Every detail, from clean
                linens to peaceful ambiance, reflects our commitment to your well-being.
              </p>
              <p>
                With over 15 years of heartfelt hospitality, we have welcomed thousands of
                families who return year after year, trusting us with their sacred journey.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-gold/10 text-gold' : 'bg-maroon/10 text-maroon'}`}>
                <span>✓</span> Clean & Hygienic
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-gold/10 text-gold' : 'bg-maroon/10 text-maroon'}`}>
                <span>✓</span> Near Temple
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-gold/10 text-gold' : 'bg-maroon/10 text-maroon'}`}>
                <span>✓</span> Budget Friendly
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
