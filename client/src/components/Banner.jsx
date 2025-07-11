import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    // Banner container:
    // - flex flex-col md:flex-row: Stacks vertically on small screens, horizontally on medium and up.
    // - md:items-center: Aligns items to the center vertically on medium screens and up.
    // - justify-between: Distributes space between items.
    // - px-8 md:pl-14 pt-10 pb-4 md:pb-0: Responsive padding, ensuring bottom padding on mobile.
    // - bg-gradient-to-r from-[#0558FE] to-[#A9CFFF]: Gradient background for a modern look.
    // - max-w-6xl mx-auto: Controls max width and centers the banner.
    // - rounded-2xl: Rounded corners.
    // - overflow-hidden: Ensures content stays within the rounded borders.
    // - shadow-lg: Adds a subtle shadow for depth.
    <div className='flex flex-col md:flex-row md:items-center justify-between px-8 md:pl-14 pt-10 pb-4 md:pb-0 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg'>
      {/* Text content for the banner */}
      <div className='text-white text-center md:text-left py-4'> {/* Added vertical padding and responsive text alignment */}
        <h2 className='text-3xl sm:text-4xl font-extrabold leading-tight'>Do You Own a Luxury Car?</h2> {/* Larger, bolder title */}
        <p className='mt-3 text-lg opacity-90'>Monetize your vehicle effortlessly by listing it on Rent-A-Car.</p> {/* Slightly larger text, subtle opacity */}
        <p className='max-w-md text-base mt-2 opacity-80 mx-auto md:mx-0'> {/* Adjusted max-w, added mx-auto for mobile centering */}
          We take care of insurance, driver verification and secure payments - so you can earn passive income, stress-free.
        </p>

        {/* Button to list a car */}
        <button className='px-8 py-3 bg-white hover:bg-gray-100 transition-all duration-300 text-[var(--color-primary)] font-semibold rounded-full text-base mt-6 cursor-pointer shadow-md hover:shadow-lg'> {/* Enhanced button styling */}
          List your car
        </button>
      </div>

      {/* Image for the banner */}
      {/* Responsive image sizing and positioning */}
      <img 
        src={assets.banner_car_image} 
        alt="Luxury Car for Rent" 
        className='max-h-[200px] md:max-h-[250px] object-contain mt-6 md:mt-0 md:mr-4 mx-auto md:mx-0' // Increased max-h, responsive margins, centering on mobile
      />
    </div>
  );
};

export default Banner;
