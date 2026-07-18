import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'glass-dark shadow-lg shadow-black/20'
              : 'glass-light shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <img src={logo} alt="Durga Bhak Niwas Logo" className="w-10 h-10 rounded-full object-contain" />
              <div>
                <h1 className="font-[Playfair_Display] text-xl font-bold text-gold leading-tight">
                  Durga Bhak
                </h1>
                <p className="text-[10px] tracking-[2px] text-gold/70 uppercase -mt-0.5">Niwas</p>
              </div>
            </motion.a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-maroon/10 ${
                    isDark ? 'text-cream/80 hover:text-gold' : 'text-dark-brown/80 hover:text-maroon'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className={`ml-3 p-2.5 rounded-full transition-all duration-300 ${
                  isDark
                    ? 'bg-gold/10 text-gold hover:bg-gold/20'
                    : 'bg-maroon/10 text-maroon hover:bg-maroon/20'
                }`}
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
              <a
                href="#booking"
                onClick={(e) => { e.preventDefault(); handleNavClick('#booking'); }}
                className="ml-2 btn-primary text-sm !py-2.5 !px-6"
              >
                Book Now
              </a>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDark ? 'text-gold' : 'text-maroon'}`}
              >
                {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 ${isDark ? 'text-cream' : 'text-dark-brown'}`}
              >
                {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-[99] pt-20 ${
              isDark ? 'bg-[#0f0a06]' : 'bg-cream'
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`text-2xl font-[Playfair_Display] font-semibold ${
                    isDark ? 'text-cream hover:text-gold' : 'text-dark-brown hover:text-maroon'
                  } transition-colors`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                onClick={(e) => { e.preventDefault(); handleNavClick('#booking'); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="btn-primary mt-4"
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
