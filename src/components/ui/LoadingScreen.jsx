import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #3D2415 0%, #7A0F1D 50%, #3D2415 100%)' }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-gold/30 border-t-gold flex items-center justify-center"
            >
              <span className="text-4xl">🙏</span>
            </motion.div>
            <h1 className="font-[Playfair_Display] text-4xl font-bold text-gold mb-2">
              Durga Bhak Niwas
            </h1>
            <p className="text-cream/70 text-sm tracking-[3px] uppercase">
              Where Comfort Meets Devotion
            </p>
            <motion.div
              className="mt-8 h-1 bg-gold/20 rounded-full w-48 mx-auto overflow-hidden"
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
