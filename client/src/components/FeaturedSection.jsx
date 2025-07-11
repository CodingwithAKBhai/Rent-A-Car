import React from 'react';
import Title from './Title.jsx'; // Ensure .jsx extension for imports
import { assets, dummyCarData } from '../assets/assets';
import CarCard from './CarCard.jsx'; // Ensure .jsx extension for imports
import { useNavigate } from 'react-router-dom';

const FeaturedSection = () => {
  // Hook to programmatically navigate
  const navigate = useNavigate();

  return (
    // Section container with responsive padding and centering
    <div className='flex flex-col items-center py-16 sm:py-24 px-4 md:px-8 lg:px-16 xl:px-24'>
      {/* Title component for the section */}
      <div className="mb-12"> {/* Added margin-bottom for spacing */}
        <Title 
          title='Featured Vehicles' 
          subTitle='Explore our handpicked selection of premium vehicles available for your next adventure. Each car is meticulously maintained for your comfort and safety.' 
        />
      </div>        

      {/* Grid to display featured car cards */}
      {/* Responsive grid columns with increased gap for better visual separation */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 w-full max-w-7xl'>
        {/* Map through a slice of dummyCarData to display up to 6 cars */}
        {
          dummyCarData.slice(0,6).map((car) => (
            // Added a div for consistent spacing and to ensure CarCard takes full width
            <div key={car._id} className="w-full">
              <CarCard car={car} />
            </div>
          ))
        }
      </div>

      {/* Button to navigate to the all cars page */}
      <button 
        onClick={() => {
          navigate('/cars'); 
          window.scrollTo(0,0); // Scrolls to the top of the page after navigation
        }}
        // Enhanced button styling for a more professional look
        className='flex items-center justify-center gap-2 px-8 py-3 border border-[var(--color-borderColor)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white rounded-full mt-16 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md'
      >
        Explore all cars <img src={assets.arrow_icon} alt="arrow" className="h-4 w-4 ml-1 filter brightness-0 transition-all duration-300 group-hover:filter-none" /> {/* Added icon styling for hover */}
      </button>
    </div>
  );
};

export default FeaturedSection;
