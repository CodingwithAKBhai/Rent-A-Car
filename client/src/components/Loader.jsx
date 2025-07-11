import React from 'react';

const Loader = () => {
  return (
    // Full screen overlay for the loader
    <div className='fixed inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50'>
      {/* Loading spinner animation */}
      <div 
        className='animate-spin rounded-full h-20 w-20 border-4 border-gray-300 border-t-[var(--color-primary)]' // Larger spinner, primary color border
        role="status"
        aria-label="Loading content" // More descriptive aria-label
      ></div>
      {/* Optional: Add a loading text */}
      <p className="sr-only">Loading...</p>
    </div>
  );
};

export default Loader;
