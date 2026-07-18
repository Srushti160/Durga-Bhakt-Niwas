import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../ui/SectionTitle';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Rajesh Patil',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'Absolutely wonderful stay! The rooms were spotless and the staff was incredibly warm. Walking distance to the temple made it perfect for our pilgrimage.',
    avatar: 'RP',
  },
  {
    name: 'Sunita Deshmukh',
    location: 'Nagpur, Maharashtra',
    rating: 5,
    text: 'We visited with our entire family. The family room was spacious and comfortable. The hot water facility and clean bathrooms were a great blessing.',
    avatar: 'SD',
  },
  {
    name: 'Anil Jadhav',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'Best budget hotel near Tulja Bhavani Temple. The hospitality is world-class. We have been coming here for 5 years now and never disappointed.',
    avatar: 'AJ',
  },
  {
    name: 'Priya Kulkarni',
    location: 'Solapur, Maharashtra',
    rating: 5,
    text: 'Very peaceful and clean environment. Perfect for families visiting the temple. The WiFi worked great and the rooms were very well maintained.',
    avatar: 'PK',
  },
  {
    name: 'Mohan Shirke',
    location: 'Satara, Maharashtra',
    rating: 5,
    text: 'Exceptional service at an affordable price. The location is unbeatable - right near the temple. Will definitely recommend to all pilgrims.',
    avatar: 'MS',
  },
  {
    name: 'Kavita Bhosale',
    location: 'Kolhapur, Maharashtra',
    rating: 5,
    text: 'A home away from home. The staff treats you like family. Clean beds, working AC, hot water - everything you need for a peaceful stay.',
    avatar: 'KB',
  },
];

export default function Reviews() {
  const { isDark } = useTheme();
  const swiperRef = useRef(null);

  return (
    <section id="reviews" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Guests Say"
          description="Hear from families who have experienced our hospitality."
        />

        <div className="relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`h-full p-6 rounded-2xl ${
                    isDark ? 'bg-[#1a1009] border border-gold/10' : 'bg-white border border-gray-100'
                  } shadow-lg`}
                >
                  <FiStar size={32} className="text-gold/30 mb-4" />
                  <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-cream/70' : 'text-dark-brown/70'}`}>
                    {review.text}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <FiStar key={j} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-maroon to-maroon-dark flex items-center justify-center text-gold font-bold text-sm">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm"
                         style={{ color: isDark ? '#FFF8EE' : '#3D2415' }}>
                        {review.name}
                      </p>
                      <p className={`text-xs ${isDark ? 'text-cream/50' : 'text-dark-brown/50'}`}>
                        {review.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-5 -right-5 justify-between pointer-events-none">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="pointer-events-auto w-11 h-11 rounded-full bg-maroon text-gold flex items-center justify-center shadow-lg hover:bg-maroon-light transition-colors"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="pointer-events-auto w-11 h-11 rounded-full bg-maroon text-gold flex items-center justify-center shadow-lg hover:bg-maroon-light transition-colors"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
