import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const CarCard = ({ car }) => {
  // Get currency from environment variables
  const currency = import.meta.env.VITE_CURRENCY;
  // Hook for navigation
  const navigate = useNavigate();

  return (
    // Main card container:
    // - group: Enables group-hover utilities for nested elements.
    // - rounded-xl: More pronounced rounded corners.
    // - overflow-hidden: Ensures content stays within rounded borders.
    // - shadow-lg hover:shadow-xl: Enhanced shadow for depth, with a subtle lift on hover.
    // - hover:-translate-y-1: Slight upward translation on hover for interactivity.
    // - transition-all duration-300: Smooth transitions for all hover effects.
    // - cursor-pointer: Indicates the card is clickable.
    // - border border-gray-100: Subtle border for definition.
    <div 
      onClick={() => {
        navigate(`/car-details/${car._id}`); 
        window.scrollTo(0, 0); // Scrolls to the top of the page after navigation
      }} 
      className='group rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 bg-white'
    >
      {/* Image container with relative positioning for overlays */}
      <div className='relative h-48 sm:h-56 overflow-hidden'>
        <img 
          src={car.image} 
          alt={`${car.brand} ${car.model}`} // More descriptive alt text
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
        />
        
        {/* Display "Available Now" tag if car is available */}
        {car.isAvailable && (
          <p className='absolute top-4 left-4 bg-[var(--color-primary)] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md'>
            Available Now
          </p>
        )}

        {/* Display price per day */}
        <div className='absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-baseline gap-1'>
          <span className='font-bold text-lg'>{currency}{car.pricePerDay}</span>
          <span className='text-sm text-gray-300'>/ day</span>
        </div>
      </div>

      {/* Card content area */}
      <div className='p-4 sm:p-5'>
        <div className='flex justify-between items-start mb-3'> {/* Increased margin-bottom */}
          <div>
            <h3 className='text-xl font-semibold text-gray-900'>{car.brand} {car.model}</h3> {/* Bolder and larger title */}
            <p className='text-gray-500 text-sm mt-1'>{car.category} • {car.year}</p> 
          </div>
        </div>

        {/* Car specifications grid */}
        <div className='mt-4 grid grid-cols-2 gap-y-3 text-gray-600'> {/* Increased gap-y */}
          {/* Individual specification item */}
          <div className='flex items-center text-sm text-gray-700'> {/* Darker text for better contrast */}
            <img src={assets.users_icon} alt="User Icon" className='h-4 w-4 mr-2 opacity-75'/> {/* Consistent icon sizing and subtle opacity */}
            <span>{car.seating_capacity} Seats</span>
          </div>
          <div className='flex items-center text-sm text-gray-700'>
            <img src={assets.fuel_icon} alt="Fuel Icon" className='h-4 w-4 mr-2 opacity-75'/>
            <span>{car.fuel_type}</span>
          </div>
          <div className='flex items-center text-sm text-gray-700'>
            <img src={assets.car_icon} alt="Car Icon" className='h-4 w-4 mr-2 opacity-75'/>
            <span>{car.transmission}</span>
          </div>
          <div className='flex items-center text-sm text-gray-700'>
            <img src={assets.location_icon} alt="Location Icon" className='h-4 w-4 mr-2 opacity-75'/>
            <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
