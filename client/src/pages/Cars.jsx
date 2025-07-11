import React, { useState } from 'react';
import Title from '../components/Title.jsx'; // Ensure .jsx extension for imports
import { assets, dummyCarData } from '../assets/assets';
import CarCard from '../components/CarCard.jsx'; // Ensure .jsx extension for imports

const Cars = () => {
  // State for the search input
  const [search, setSearch] = useState('');

  // Filter cars based on the search input across multiple fields
  const filteredCars = dummyCarData.filter(car =>
    (car.brand + car.model + car.category + car.fuel_type + car.location)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen"> {/* Ensure the page takes at least full height */}
      {/* Header Section */}
      <div className='flex flex-col items-center py-16 sm:py-20 bg-gray-50 max-md:px-4 shadow-sm'> {/* Adjusted padding, softer background, added shadow */}
        <Title
          title='Available Cars'
          subTitle='Browse our extensive selection of premium vehicles available for your next adventure. Find the perfect car for every occasion.'
        />

        {/* Search Bar */}
        <div className='flex items-center bg-white px-5 mt-8 max-w-2xl w-full h-14 rounded-full shadow-lg border border-gray-200 focus-within:ring-2 focus-within:ring-[var(--color-primary)] transition-all duration-300'> {/* Increased height, padding, shadow, border, and focus style */}
          <img src={assets.search_icon} alt="search" className='w-5 h-5 mr-3 opacity-70' /> {/* Larger icon, subtle opacity */}
          <input
            type="text"
            placeholder='Search by make, model, category, fuel type, or location...' // More descriptive placeholder
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full h-full outline-none text-gray-700 placeholder:text-gray-400 text-base bg-transparent' // Adjusted text color, placeholder color, and font size
          />
          <img src={assets.filter_icon} alt="filter" className='w-5 h-5 ml-3 opacity-70 cursor-pointer' /> {/* Larger icon, subtle opacity, cursor pointer */}
        </div>
      </div>

      {/* Car List Section */}
      <div className='px-4 md:px-8 lg:px-16 xl:px-24 mt-12 pb-20 max-w-7xl mx-auto'> {/* Adjusted padding, increased top margin, max-width and centering */}
        <p className='text-gray-600 text-lg mb-6'> {/* Darker text, larger font, increased bottom margin */}
          Showing <span className="font-semibold text-gray-800">{filteredCars.length}</span> {filteredCars.length === 1 ? 'Car' : 'Cars'}
        </p>

        {filteredCars.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'> {/* Adjusted gap */}
            {filteredCars.map((car, index) => (
              <CarCard key={car._id || index} car={car} /> 
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">No cars found matching your search criteria.</p>
            <p className="text-md text-gray-400 mt-2">Try adjusting your search or explore other options.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cars;
