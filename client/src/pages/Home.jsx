import React from 'react';
import Hero from '../components/Hero.jsx'; // Added .jsx extension
import FeaturedSection from '../components/FeaturedSection.jsx'; // Added .jsx extension
import Banner from '../components/Banner.jsx'; // Added .jsx extension
import Testimonial from '../components/Testimonial.jsx'; // Added .jsx extension
import Newsletter from '../components/Newsletter.jsx'; // Added .jsx extension

const Home = () => {
  return (
    // The main container for the Home page.
    // Added vertical padding (py-8) to give some breathing room around the sections.
    // Using 'container mx-auto' for consistent content width and centering.
    <main className="container mx-auto py-8">
      {/* Renders the Hero section of the homepage */}
      <Hero />
      {/* Renders the Featured Vehicles section. Added margin-top for spacing. */}
      <FeaturedSection className="mt-16" />
      {/* Renders a promotional banner. Added margin-top for spacing. */}
      <Banner className="mt-16" />
      {/* Renders the Testimonial section. Added margin-top for spacing. */}
      <Testimonial className="mt-16" />
      {/* Renders the Newsletter subscription section. Added margin-top for spacing. */}
      <Newsletter className="mt-16" />
    </main>
  );
};

export default Home;
