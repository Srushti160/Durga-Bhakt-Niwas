import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '9890024910';
  const whatsappNumber = '9890024910';

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
          <motion.a
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={`tel:${phoneNumber}`}
            className="w-14 h-14 rounded-full bg-maroon text-gold flex items-center justify-center shadow-lg hover:bg-maroon-light transition-all"
            aria-label="Call Now"
          >
            <FiPhone size={22} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={`https://wa.me/91${whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Durga%20Bhakt%20Niwas.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#20BA5C] transition-all"
            aria-label="WhatsApp"
          >
            <FiMessageCircle size={22} />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
