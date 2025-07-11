import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    // Footer container:
    // - px-6 md:px-16 lg:px-24 xl:px-32: Responsive horizontal padding.
    // - mt-20: Top margin for spacing from content.
    // - py-10: Vertical padding.
    // - text-sm text-gray-600: Default text size and color.
    // - bg-gray-900 text-white: Dark background with white text for a premium feel.
    <footer className='px-6 md:px-16 lg:px-24 xl:px-32 py-10 mt-20 text-sm text-gray-600 bg-gray-900 text-white'>
      {/* Top section of the footer with logo, description, and social links */}
      <div className='flex flex-wrap justify-between items-start gap-8 pb-8 border-gray-700 border-b'> {/* Darker border color */}
        {/* Logo and Company Description */}
        <div className="flex-1 min-w-[250px] max-w-md"> {/* flex-1 for responsiveness, min-width, max-width */}
          <img src={assets.logo} alt="Rent-A-Car logo" className='h-9 mb-4 filter invert' /> {/* Larger logo, invert filter for white logo on dark background */}
          <p className='text-gray-300 leading-relaxed'> {/* Lighter gray text, improved line height */}
            Premium Rent-A-Car service with a wide selection of luxury and everyday vehicles for all your driving needs. Experience seamless rentals and exceptional service.
          </p>
          {/* Social Media Links */}
          <div className='flex items-center gap-4 mt-6'> {/* Increased gap */}
            <a href="#" aria-label="Facebook" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"> 
              <img src={assets.facebook_logo} className='w-5 h-5 filter invert' alt="Facebook" /> {/* Invert for white icon */}
            </a>
            <a href="#" aria-label="Instagram" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"> 
              <img src={assets.instagram_logo} className='w-5 h-5 filter invert' alt="Instagram" /> {/* Invert for white icon */}
            </a>
            <a href="#" aria-label="Twitter" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"> 
              <img src={assets.twitter_logo} className='w-5 h-5 filter invert' alt="Twitter" /> {/* Invert for white icon */}
            </a>
            <a href="#" aria-label="Gmail" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"> 
              <img src={assets.gmail_logo} className='w-5 h-5 filter invert' alt="Gmail" /> {/* Invert for white icon */}
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1 min-w-[150px]"> {/* flex-1 for responsiveness, min-width */}
          <h2 className='text-base font-semibold text-white uppercase mb-4'>Quick Links</h2> {/* Bolder, white text, increased margin-bottom */}
          <ul className='flex flex-col gap-2'> {/* Increased gap */}
            <li><a href="#" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200">Browse Cars</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200">List Your Car</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200">About Us</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="flex-1 min-w-[150px]"> {/* flex-1 for responsiveness, min-width */}
          <h2 className='text-base font-semibold text-white uppercase mb-4'>Resources</h2>
          <ul className='flex flex-col gap-2'>
            <li><a href="#" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200">Help Center</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200">Terms of Service</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200">Insurance</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex-1 min-w-[200px]"> {/* flex-1 for responsiveness, min-width */}
          <h2 className='text-base font-semibold text-white uppercase mb-4'>Contact</h2>
          <ul className='flex flex-col gap-2'>
            <li className="text-gray-300">1234 Luxury Drive</li>
            <li className="text-gray-300">Gujarat, GJ 94107</li>
            <li className="text-gray-300">+1 (234) 567-8910</li>
            <li className="text-gray-300">ak@gmail.com</li>
          </ul>
        </div>
      </div>
          
      {/* Bottom section of the footer with copyright and legal links */}
      <div className='flex flex-col md:flex-row gap-3 items-center justify-between py-5 text-gray-400'> {/* Increased gap, lighter gray text */}
        <p className="text-center md:text-left">© {new Date().getFullYear()} Rent-A-Car. All rights reserved.</p> {/* Dynamic copyright year, responsive text alignment */}
        <ul className='flex items-center gap-4'>
          <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors duration-200">Privacy</a></li>
          <li className="text-gray-500">|</li> {/* Muted separator */}
          <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors duration-200">Terms</a></li>
          <li className="text-gray-500">|</li>
          <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors duration-200">Sitemap</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
