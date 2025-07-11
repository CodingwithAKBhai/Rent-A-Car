import React, { useState } from 'react';
import { assets, cityList } from '../assets/assets'; // Assuming assets and cityList are correctly defined here

const Hero = () => {
  // State for the selected pickup location
  const [pickupLocation, setPickupLocation] = useState('');
  // State for the selected pickup date, initialized to today's date
  const [pickupDate, setPickupDate] = useState(new Date().toISOString().split('T')[0]);
  // State for the selected return date, initialized to today's date
  const [returnDate, setReturnDate] = useState(new Date().toISOString().split('T')[0]);

  // Function to handle form submission (currently prevents default)
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the search logic here,
    // e.g., navigate to a search results page with these parameters.
    console.log('Search submitted with:', { pickupLocation, pickupDate, returnDate });
  };

  return (
    // Hero section container:
    // - min-h-screen: Ensures it takes at least the full viewport height.
    // - flex flex-col items-center justify-center: Centers content vertically and horizontally.
    // - gap-14: Provides spacing between elements.
    // - bg-gradient-to-br from-light to-white: A subtle gradient background for a modern look.
    // - text-center: Centers text within the section.
    // - py-20: Adds vertical padding to ensure content isn't too close to the edges.
    <div className='min-h-screen flex flex-col items-center justify-center gap-14 bg-gradient-to-br from-gray-50 to-white text-center px-4'>
      {/* Main title for the hero section */}
      {/* Responsive font sizing for impact: text-4xl on small screens, 6xl on large screens. */}
      {/* Added tracking-tight for a slightly condensed look and leading-tight for line height. */}
      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight'>
        Experience Luxury on Wheels
      </h1>
      <p className='text-lg sm:text-xl text-gray-600 max-w-2xl'>
        Rent premium cars for your next adventure, business trip, or special occasion.
      </p>
        
      {/* Search form for car rental */}
      <form 
        onSubmit={handleSubmit} // Handles form submission
        // Form styling:
        // - flex flex-col md:flex-row: Stacks vertically on small screens, horizontally on medium and up.
        // - items-center justify-between: Aligns items and distributes space.
        // - p-6 sm:p-8: Responsive padding.
        // - rounded-2xl: More pronounced rounded corners.
        // - w-full max-w-xs sm:max-w-xl lg:max-w-4xl: Responsive width control.
        // - bg-white: White background.
        // - shadow-xl: A more prominent shadow for a "floating" effect.
        // - border border-gray-200: Subtle border.
        className='flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 rounded-2xl w-full max-w-xs sm:max-w-xl lg:max-w-4xl bg-white shadow-xl border border-gray-200'
      >
        {/* Input fields container */}
        {/* Responsive gap and margin for spacing between input groups */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 w-full md:w-auto'>
          {/* Pickup Location selection */}
          <div className='flex flex-col items-start w-full md:w-auto'>
            <label htmlFor="pickup-location-select" className="text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
            <select 
              id="pickup-location-select" // ID for label association
              required 
              value={pickupLocation} 
              onChange={(e) => setPickupLocation(e.target.value)}
              // Input styling:
              // - w-full: Takes full width of its parent.
              // - px-4 py-2: Padding inside the input.
              // - border border-gray-300: Default border.
              // - rounded-lg: Rounded corners.
              // - text-gray-800: Text color.
              // - focus:ring-2 focus:ring-primary focus:border-transparent: Focus state styling.
              // - appearance-none: Removes default select arrow for custom styling (if desired with background image).
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            >
              <option value="" disabled>Select Location</option> {/* Disabled default option */}
              {cityList.map((city) => <option key={city} value={city}>{city}</option>)}
            </select>
          </div>

          {/* Pickup Date input */}
          <div className='flex flex-col items-start w-full md:w-auto'>
            <label htmlFor="pickup-date" className="text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
            <input 
              type="date" 
              id="pickup-date" 
              min={new Date().toISOString().split('T')[0]} // Sets minimum date to today
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent' 
              required
            />
          </div>

          {/* Return Date input */}
          <div className='flex flex-col items-start w-full md:w-auto'>
            <label htmlFor='return-date' className="text-sm font-medium text-gray-700 mb-1">Return Date</label>
            <input 
              type="date" 
              id="return-date" 
              min={pickupDate} // Sets minimum return date to pickup date
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent' 
              required
            />
          </div>
        </div>

        {/* Search button */}
        {/* Button styling:
            - px-8 py-3: Padding.
            - bg-primary hover:bg-primary-dull: Background color with hover effect.
            - text-white: White text.
            - rounded-full: Fully rounded button.
            - cursor-pointer: Indicates interactivity.
            - shadow-md hover:shadow-lg: Subtle shadow with hover effect.
            - transition-all duration-300: Smooth transition for hover effects.
            - max-sm:mt-6: Margin top on small screens.
        */}
        <button className='flex items-center justify-center gap-2 px-8 py-3 max-sm:mt-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] text-white rounded-full cursor-pointer shadow-md hover:shadow-lg transition-all duration-300'>
          {/* Search icon: filter invert ensures it's white */}
          <img src={assets.search_icon} alt="search" className='w-5 h-5 filter invert' /> 
          Search Cars
        </button>
      </form>

      {/* Main car image */}
      {/* Responsive sizing: max-h-72 on small screens, max-h-96 on medium screens, max-w-full to prevent overflow. */}
      {/* Added object-contain for better image scaling. */}
      <img src={assets.main_car} alt="Luxury Car" className='max-h-72 md:max-h-96 max-w-full object-contain mt-8' />
    </div>
  );
};

export default Hero;
