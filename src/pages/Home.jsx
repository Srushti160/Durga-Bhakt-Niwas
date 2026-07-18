import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Rooms from '../components/sections/Rooms';
import Facilities from '../components/sections/Facilities';
import Gallery from '../components/sections/Gallery';
import NearbyAttractions from '../components/sections/NearbyAttractions';
import Reviews from '../components/sections/Reviews';
import Statistics from '../components/sections/Statistics';
import Booking from '../components/sections/Booking';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Rooms />
      <Facilities />
      <Gallery />
      <NearbyAttractions />
      <Statistics />
      <Reviews />
      <Booking />
      <Contact />
    </>
  );
}
