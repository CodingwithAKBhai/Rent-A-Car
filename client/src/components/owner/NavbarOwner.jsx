import React from 'react';
import { assets, dummyUserData } from '../../assets/assets';
import { Link } from 'react-router-dom';

const NavbarOwner = () => {
  // Using dummy user data for demonstration purposes
  const user = dummyUserData;

  return (
    // Navbar container:
    // - flex items-center justify-between: Aligns items and distributes space.
    // - px-6 md:px-10 py-4: Responsive padding.
    // - text-gray-600: Default text color.
    // - border-b border-gray-200: Subtle bottom border.
    // - bg-white shadow-sm: White background with a subtle shadow.
    // - z-30: Ensures it stays on top of content below it.
    <div className='flex items-center justify-between px-6 md:px-10 py-4 text-gray-600 border-b border-gray-200 relative bg-white shadow-sm z-30'>
      {/* Link to the home page with the logo */}
      <Link to='/' className="flex-shrink-0"> {/* flex-shrink-0 to prevent logo from shrinking */}
        <img src={assets.logo} alt="Rent-A-Car Logo" className='h-8 sm:h-9' /> {/* Increased logo size, responsive */}
      </Link>
      {/* Welcome message for the user */}
      <p className="text-base font-medium text-gray-800">
        Welcome, <span className="text-[var(--color-primary)]">{user.name || "Owner"}</span>
      </p>
    </div>
  );
};

export default NavbarOwner;
