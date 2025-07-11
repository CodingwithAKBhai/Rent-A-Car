import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets, dummyCarData } from '../assets/assets';
import Loader from '../components/Loader.jsx'; // Ensure .jsx extension for imports

const CarDetails = () => {
  // Get car ID from URL parameters
  const { id } = useParams();
  // Hook for navigation
  const navigate = useNavigate();
  // State to store the selected car details
  const [car, setCar] = useState(null);
  // State for pickup date, initialized to today's date
  const [pickupDate, setPickupDate] = useState(new Date().toISOString().split('T')[0]);
  // State for return date, initialized to today's date
  const [returnDate, setReturnDate] = useState(new Date().toISOString().split('T')[0]);

  // Get currency from environment variables
  const currency = import.meta.env.VITE_CURRENCY;

  // Handle form submission for booking
  const handleSubmit = async (e) => {
    e.preventDefault();
    // In a real application, you would handle the booking logic here
    console.log('Booking submitted with:', { car, pickupDate, returnDate });
    // Example: You might navigate to a confirmation page or show a success message
    // For demonstration, let's just show an alert (in a real app, use a modal/toast)
    alert(`Booking for ${car.brand} ${car.model} from ${pickupDate} to ${returnDate} confirmed!`);
  };

  // Effect to find and set the car details when the component mounts or ID changes
  useEffect(() => {
    const selectedCar = dummyCarData.find(car => car._id === id);
    setCar(selectedCar);
    // If car is not found, you might want to redirect to a 404 page or cars list
    if (!selectedCar) {
      console.warn(`Car with ID ${id} not found.`);
      // navigate('/cars'); // Uncomment to redirect if car not found
    }
  }, [id, navigate]); // Added navigate to dependency array for best practice

  // Effect to update returnDate if pickupDate changes and returnDate is earlier
  useEffect(() => {
    if (pickupDate && returnDate && new Date(returnDate) < new Date(pickupDate)) {
      setReturnDate(pickupDate);
    }
  }, [pickupDate, returnDate]);

  // Show loader while car data is being fetched
  if (!car) {
    return <Loader />;
  }

  return (
    // Main container with responsive padding and bottom padding
    <div className='px-4 md:px-8 lg:px-16 xl:px-24 mt-10 pb-20 max-w-7xl mx-auto'>
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)} 
        className='flex items-center gap-2 mb-8 text-gray-600 hover:text-[var(--color-primary)] transition-colors duration-200 cursor-pointer text-base font-medium'
      >
        <img src={assets.arrow_icon} alt="back" className='rotate-180 w-4 h-4 opacity-75' />
        Back to all cars
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
        {/* Left: Car Details Section */}
        <div className='lg:col-span-2'>
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className='w-full h-auto max-h-[500px] object-cover rounded-xl mb-8 shadow-xl border border-gray-100'
          />

          <div className='space-y-8'> {/* Increased space-y */}
            {/* Car Name and Category */}
            <div>
              <h1 className='text-3xl sm:text-4xl font-extrabold text-gray-900'>{car.brand} {car.model}</h1>
              <p className='text-gray-600 text-lg mt-1'>{car.category} • {car.year}</p>
            </div>

            <hr className='border-gray-200 my-6' /> {/* Softer border color */}

            {/* Car Specifications Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {[
                { icon: assets.users_icon, text: `${car.seating_capacity} Seats` },
                { icon: assets.fuel_icon, text: car.fuel_type },
                { icon: assets.car_icon, text: car.transmission },
                { icon: assets.location_icon, text: car.location },
              ].map(({ icon, text }) => (
                <div 
                  key={text} 
                  className='flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200'
                >
                  <img src={icon} alt={text} className='h-6 w-6 mb-2 opacity-75' /> {/* Larger icons */}
                  <span className='text-sm font-medium text-gray-700'>{text}</span> {/* Stronger text */}
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>Description</h2>
              <p className='text-gray-700 leading-relaxed'>{car.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>Features</h2>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3'> {/* Increased gap */}
                {[
                  "360 Camera",
                  "Bluetooth Connectivity", // More descriptive
                  "Integrated GPS Navigation", // More descriptive
                  "Heated Leather Seats", // More descriptive
                  "Automatic Rear View Mirror Dimming" // More descriptive
                ].map((item) => (
                  <li key={item} className='flex items-center text-gray-700 text-base'> {/* Darker text, larger font */}
                    <img src={assets.check_icon} className='h-5 w-5 mr-3 opacity-80' alt="check icon" /> {/* Larger icon, more space */}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Booking Form Section */}
        <form 
          onSubmit={handleSubmit} 
          // Form styling:
          // - shadow-xl: More prominent shadow.
          // - sticky top-28: Adjusted sticky top for better positioning.
          // - rounded-xl: Rounded corners.
          // - p-8: Increased padding.
          // - space-y-6: Vertical spacing between elements.
          // - bg-white border border-gray-100: White background with subtle border.
          className='shadow-xl h-max sticky top-28 rounded-xl p-8 space-y-6 text-gray-600 bg-white border border-gray-100'
        >
          {/* Price per day */}
          <p className='flex items-center justify-between text-3xl text-gray-900 font-extrabold'> {/* Larger, bolder price */}
            {currency}{car.pricePerDay}
            <span className='text-lg text-gray-500 font-medium'>per day</span> {/* Larger, medium weight "per day" */}
          </p>

          <hr className='border-gray-200 my-6' /> {/* Softer border color */}

          {/* Pickup Date input */}
          <div className='flex flex-col gap-2'>
            <label htmlFor="pickup-date" className="font-medium text-gray-700">Pickup Date</label>
            <input
              type="date"
              id='pickup-date'
              required
              value={pickupDate} // Controlled component
              onChange={(e) => setPickupDate(e.target.value)} // Update state on change
              min={new Date().toISOString().split('T')[0]} // Minimum date is today
              // Input styling:
              // - border border-gray-300 px-4 py-2.5 rounded-lg: Standard input styling.
              // - focus:ring-2 focus:ring-primary focus:border-transparent: Focus state.
              className='border border-gray-300 px-4 py-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent'
            />
          </div>

          {/* Return Date input */}
          <div className='flex flex-col gap-2'>
            <label htmlFor="return-date" className="font-medium text-gray-700">Return Date</label>
            <input
              type="date"
              id='return-date'
              required
              value={returnDate} // Controlled component
              onChange={(e) => setReturnDate(e.target.value)} // Update state on change
              min={pickupDate} // Minimum return date is pickup date
              className='border border-gray-300 px-4 py-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent'
            />
          </div>

          {/* Book Now button */}
          <button 
            type="submit" 
            className='w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] transition-all py-3.5 font-semibold text-white rounded-xl cursor-pointer shadow-md hover:shadow-lg'
          >
            Book Now
          </button>

          <p className='text-center text-sm text-gray-500'>No credit card required to reserve</p>
        </form>
      </div>
    </div>
  );
};

export default CarDetails;
