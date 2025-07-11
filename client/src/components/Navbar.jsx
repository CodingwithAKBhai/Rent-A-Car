import React, { useState } from 'react';
import { assets, menuLinks } from '../assets/assets'; // Assuming assets includes menuLinks
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  // Get current location to apply conditional styling
  const location = useLocation();
  // State to manage the open/close status of the mobile navigation menu
  const [open, setOpen] = useState(false);
  // Hook for programmatic navigation
  const navigate = useNavigate();

  return (
    // Navbar container:
    // - flex items-center justify-between: Aligns items and distributes space.
    // - px-6 md:px-16 lg:px-24 xl:px-32: Responsive horizontal padding.
    // - py-4: Vertical padding.
    // - text-gray-600: Default text color.
    // - border-b border-gray-200: Subtle bottom border.
    // - relative: For positioning mobile menu.
    // - transition-all: Smooth transitions for background change.
    // - Conditional background: bg-gray-50 on homepage, bg-white otherwise.
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-gray-200 relative transition-all duration-300 ${location.pathname === "/" ? "bg-gray-50" : "bg-white"}`}>
      {/* Logo and link to the home page */}
      <Link to='/' className="flex-shrink-0"> {/* flex-shrink-0 to prevent logo from shrinking */}
        <img src={assets.logo} alt="Rent-A-Car logo" className='h-8 sm:h-9' /> {/* Increased logo size, responsive */}
      </Link>

      {/* Navigation links and search/login/dashboard buttons */}
      <div 
        // Mobile menu styling:
        // - max-sm:fixed max-sm:h-screen max-sm:w-full: Full screen overlay on small screens.
        // - max-sm:top-16: Positions below the fixed navbar.
        // - max-sm:border-t border-gray-200: Top border for mobile menu.
        // - right-0: Aligns to the right.
        // - flex flex-col sm:flex-row: Stacks vertically on mobile, horizontally on desktop.
        // - items-start sm:items-center: Aligns items.
        // - gap-4 sm:gap-8: Responsive spacing between links.
        // - max-sm:p-6: Increased padding on mobile.
        // - transition-all duration-300: Smooth slide-in/out.
        // - z-40: Ensures it's below the modal but above other content.
        // - Conditional background: bg-gray-50 on homepage, bg-white otherwise.
        // - Conditional transform: Slides in/out based on 'open' state.
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-gray-200 right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-6 transition-all duration-300 z-40 ${location.pathname === "/" ? "bg-gray-50" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {/* Map through menu links to create navigation items */}
        {menuLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.path} 
            onClick={() => setOpen(false)}
            // Link styling:
            // - text-gray-700: Darker text for better contrast.
            // - hover:text-[var(--color-primary)]: Primary color on hover.
            // - font-medium: Medium font weight.
            // - transition-colors duration-200: Smooth color transition.
            // - Conditional active state: Underline and primary color if active.
            className={`text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors duration-200 ${location.pathname === link.path ? 'text-[var(--color-primary)] underline underline-offset-4' : ''}`}
          >
            {link.name}
          </Link>
        ))}

        {/* Search bar, visible only on large screens */}
        <div className='hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-4 py-2 rounded-full max-w-64 shadow-sm focus-within:ring-2 focus-within:ring-[var(--color-primary)] transition-all duration-200'> {/* Increased max-w, padding, shadow, border, focus style */}
          <input 
            type="text" 
            className="w-full bg-transparent outline-none placeholder-gray-500 text-gray-700" 
            placeholder="Search cars..." // More descriptive placeholder
          />
          <img src={assets.search_icon} alt="Search icon" className='w-4 h-4 opacity-70' /> {/* Subtle opacity */}
        </div>
          
        {/* Dashboard and Login buttons */}
        <div className='flex max-sm:flex-col items-start sm:items-center gap-6 mt-4 sm:mt-0'> {/* Responsive margin-top */}
          <button 
            onClick={() => { navigate('/owner'); setOpen(false); }} 
            className='cursor-pointer text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors duration-200'
          >
            Dashboard
          </button>
          <button 
            onClick={() => { setShowLogin(true); setOpen(false); }} 
            className="cursor-pointer px-8 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] transition-all duration-300 text-white rounded-full font-semibold shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile menu toggle button */}
      <button 
        className='sm:hidden cursor-pointer z-50 p-2' // Increased padding, z-index to be above mobile menu
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open} 
        onClick={() => setOpen(!open)}
      >
        <img src={open ? assets.close_icon : assets.menu_icon} alt={open ? "Close menu icon" : "Menu icon"} className="w-6 h-6" /> {/* Larger icon */}
      </button>
    </div>
  );
};

export default Navbar;
