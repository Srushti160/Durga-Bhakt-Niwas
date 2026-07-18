import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../ui/SectionTitle';
import { FiPhone, FiMapPin, FiMessageCircle, FiNavigation } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

const phones = ['9890024910', '9766808408'];
const address = 'Vishwas Nagar, Shri Kshetra Tuljapur, Dharashiv (Osmanabad), Maharashtra – 413601';
const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60816.08717536098!2d76.05!3d18.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf85a0e1e1e1e1%3A0x1234567890abcdef!2sTuljapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890';

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          subtitle="Get in Touch"
          title="Contact Us"
          description="We're here to help you plan your perfect pilgrimage stay."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className={`p-6 rounded-2xl ${isDark ? 'bg-[#1a1009] border border-gold/10' : 'bg-white border border-gray-100'} shadow-lg`}>
              <h3 className="font-[Playfair_Display] text-2xl font-bold mb-4"
                  style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                Durga Bhak Niwas
              </h3>
              <div className="flex items-start gap-3 mb-4">
                <FiMapPin size={20} className="text-gold mt-0.5 shrink-0" />
                <p className={`text-sm ${isDark ? 'text-cream/70' : 'text-dark-brown/70'}`}>{address}</p>
              </div>

              {phones.map((phone) => (
                <div key={phone} className="flex items-center gap-3 mb-3">
                  <FiPhone size={18} className="text-gold shrink-0" />
                  <a href={`tel:${phone}`}
                     className={`text-sm font-medium ${isDark ? 'text-cream/80 hover:text-gold' : 'text-dark-brown/80 hover:text-maroon'} transition-colors`}>
                    {phone}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="tel:9890024910"
                 className="btn-primary !py-3 !px-6">
                <FiPhone size={18} /> Call Now
              </a>
              <a href="https://wa.me/919890024910?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20room%20availability."
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20BA5C] transition-all duration-300">
                <BsWhatsapp size={20} /> WhatsApp
              </a>
              <a href="https://www.google.com/maps/search/Tuljapur+Maharashtra"
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-maroon/30 text-maroon font-semibold hover:bg-maroon/5 transition-all duration-300">
                <FiNavigation size={18} /> Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl h-[350px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60816.08717536098!2d76.05!3d18.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf85a0e1e1e1e1%3A0x1234567890abcdef!2sTuljapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="100%" style={{ border: 0, minHeight: '350px' }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Durga Bhak Niwas Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
