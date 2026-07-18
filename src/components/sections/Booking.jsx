import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../ui/SectionTitle';
import { FiCheck } from 'react-icons/fi';

const roomTypes = ['Standard Room', 'Deluxe Room', 'Family Room'];

const initialForm = {
  name: '', mobile: '', checkIn: '', checkOut: '',
  adults: '2', children: '0', roomType: '', request: '',
};

export default function Booking() {
  const { isDark } = useTheme();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^[6-9]\d{9}$/.test(form.mobile)) newErrors.mobile = 'Enter valid 10-digit number';
    if (!form.checkIn) newErrors.checkIn = 'Check-in date required';
    if (!form.checkOut) newErrors.checkOut = 'Check-out date required';
    if (form.checkIn && form.checkOut && new Date(form.checkOut) <= new Date(form.checkIn))
      newErrors.checkOut = 'Check-out must be after check-in';
    if (!form.roomType) newErrors.roomType = 'Select a room type';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 4000);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 text-sm ${
    isDark
      ? 'bg-[#1a1009] border border-gold/20 text-cream/90 focus:border-gold/50 placeholder:text-cream/30'
      : 'bg-white border border-maroon/20 text-dark-brown focus:border-maroon/50 placeholder:text-dark-brown/30'
  }`;

  return (
    <section id="booking" className="section-padding" style={{ background: isDark ? 'rgba(122,15,29,0.06)' : 'rgba(122,15,29,0.03)' }}>
      <div className="container-custom">
        <SectionTitle
          subtitle="Reserve Now"
          title="Book Your Stay"
          description="Secure your peaceful accommodation near the sacred Tulja Bhavani Temple."
        />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`p-12 rounded-2xl text-center ${
                  isDark ? 'bg-[#1a1009] border border-gold/20' : 'bg-white border border-maroon/10'
                } shadow-xl`}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <FiCheck size={40} className="text-green-600" />
                </div>
                <h3 className="font-[Playfair_Display] text-2xl font-bold mb-2"
                    style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                  Booking Request Received!
                </h3>
                <p className={isDark ? 'text-cream/60' : 'text-dark-brown/60'}>
                  Thank you! We will contact you shortly to confirm your reservation.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className={`p-8 md:p-10 rounded-2xl ${
                  isDark ? 'bg-[#1a1009] border border-gold/20' : 'bg-white border border-maroon/10'
                } shadow-xl`}
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5"
                           style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                      Full Name *
                    </label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="Your full name" className={inputClass}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5"
                           style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                      Mobile Number *
                    </label>
                    <input
                      type="tel" name="mobile" value={form.mobile} onChange={handleChange}
                      placeholder="10-digit mobile number" className={inputClass}
                    />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5"
                           style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                      Check-In Date *
                    </label>
                    <input
                      type="date" name="checkIn" value={form.checkIn} onChange={handleChange}
                      className={inputClass}
                    />
                    {errors.checkIn && <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5"
                           style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                      Check-Out Date *
                    </label>
                    <input
                      type="date" name="checkOut" value={form.checkOut} onChange={handleChange}
                      className={inputClass}
                    />
                    {errors.checkOut && <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5"
                           style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                      Adults
                    </label>
                    <select name="adults" value={form.adults} onChange={handleChange} className={inputClass}>
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5"
                           style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                      Children
                    </label>
                    <select name="children" value={form.children} onChange={handleChange} className={inputClass}>
                      {[0,1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1.5"
                           style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                      Room Type *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {roomTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => { setForm(prev => ({ ...prev, roomType: type })); setErrors(prev => ({ ...prev, roomType: '' })); }}
                          className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
                            form.roomType === type
                              ? 'bg-maroon text-gold border-maroon shadow-lg'
                              : isDark
                                ? 'bg-transparent border-gold/20 text-cream/70 hover:border-gold/40'
                                : 'bg-transparent border-maroon/20 text-dark-brown/70 hover:border-maroon/40'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    {errors.roomType && <p className="text-red-500 text-xs mt-1">{errors.roomType}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1.5"
                           style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                      Special Request
                    </label>
                    <textarea
                      name="request" value={form.request} onChange={handleChange}
                      rows={3} placeholder="Any special requirements..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
                <button type="submit" className="w-full mt-6 btn-secondary justify-center text-base py-4">
                  Book Now
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
