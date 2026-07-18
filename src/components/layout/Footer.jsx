import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FiPhone, FiMapPin, FiMail, FiArrowUp } from 'react-icons/fi';
import { BsWhatsapp, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';


const quickLinks = ['Home', 'About', 'Rooms', 'Facilities', 'Gallery', 'Reviews', 'Contact'];
const facilityLinks = ['Free WiFi', 'Hot Water', 'Parking', 'CCTV', 'Family Rooms', 'Room Service'];

export default function Footer() {
  const { isDark } = useTheme();

  const scrollTo = (id) => {
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative" style={{ background: 'linear-gradient(180deg, #3D2415, #1a0f08)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-3xl">🙏</span>
              <div>
                <h2 className="font-[Playfair_Display] text-xl font-bold text-gold">Durga Bhak Niwas</h2>
                <p className="text-[10px] tracking-[2px] text-gold/50 uppercase">Tuljapur, Maharashtra</p>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-5">
              A sacred abode for divine pilgrims, offering comfort, cleanliness, and convenience near the holy Shri Tulja Bhavani Temple.
            </p>
            <div className="flex gap-3">
              {[BsFacebook, BsInstagram, BsTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-[Playfair_Display] text-lg font-bold text-gold mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button onClick={() => scrollTo(link)}
                    className="text-cream/60 text-sm hover:text-gold transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[Playfair_Display] text-lg font-bold text-gold mb-5">Facilities</h3>
            <ul className="space-y-2.5">
              {facilityLinks.map((link) => (
                <li key={link}>
                  <span className="text-cream/60 text-sm">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[Playfair_Display] text-lg font-bold text-gold mb-5">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FiMapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <p className="text-cream/60 text-sm">Vishwas Nagar, Shri Kshetra Tuljapur, Dharashiv, Maharashtra – 413601</p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone size={16} className="text-gold shrink-0" />
                <a href="tel:9890024910" className="text-cream/60 text-sm hover:text-gold transition-colors">9890024910</a>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone size={16} className="text-gold shrink-0" />
                <a href="tel:9766808408" className="text-cream/60 text-sm hover:text-gold transition-colors">9766808408</a>
              </div>
              <div className="flex items-center gap-3">
                <BsWhatsapp size={16} className="text-gold shrink-0" />
                <a href="https://wa.me/919890024910" target="_blank" rel="noopener noreferrer"
                   className="text-cream/60 text-sm hover:text-gold transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-sm text-center md:text-left">
            © 2026 Durga Bhak Niwas. All Rights Reserved.
          </p>
          <p className="text-cream/40 text-xs">
            Made with ❤️ for devotees of Goddess Tulja Bhavani
          </p>
        </div>
      </div>
    </footer>
  );
}
