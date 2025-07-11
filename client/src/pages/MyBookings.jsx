import React, { useEffect, useState } from 'react';
import { assets, dummyMyBookingsData } from '../assets/assets'; // Assuming assets includes dummyMyBookingsData
import Title from '../components/Title.jsx'; // Ensure this path is correct

const MyBookings = () => {
  // State to store the list of bookings
  const [bookings, setBookings] = useState([]);
  // Get currency symbol from environment variables
  const currency = import.meta.env.VITE_CURRENCY;

  // Function to simulate fetching booking data
  // In a real application, this would fetch data from a backend API
  const fetchMyBookings = async () => {
    // Currently, it sets dummy data for demonstration
    setBookings(dummyMyBookingsData);
  };

  // Helper function to format dates
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // useEffect hook to fetch bookings when the component mounts
  useEffect(() => {
    fetchMyBookings();
  }, []); // Empty dependency array means this runs once on mount

  return (
    // Main container with responsive padding, max-width, and bottom padding
    <div className='px-4 md:px-8 lg:px-16 xl:px-24 mt-10 max-w-7xl mx-auto pb-20'>
      {/* Title component for the My Bookings page */}
      <div className="mb-8"> {/* Added margin-bottom for spacing */}
        <Title title='My Bookings' subTitle='View and manage all your car bookings' align="left" />
      </div>

      {/* Conditional rendering for bookings list or "no bookings" message */}
      {bookings.length > 0 ? (
        <div className="space-y-6"> {/* Added space-y for consistent vertical spacing between cards */}
          {/* Map through the bookings array and render each booking */}
          {bookings.map((booking, index) => ( // Added index for fallback key
            <div
              key={booking._id || index} // Unique key for each booking item, fallback to index
              // Card styling:
              // - grid grid-cols-1 md:grid-cols-4: Responsive grid layout.
              // - gap-6: Spacing between grid items.
              // - p-6: Padding inside the card.
              // - border border-gray-200: Subtle border.
              // - rounded-xl: Rounded corners.
              // - shadow-md: Subtle shadow.
              // - bg-white: White background.
              className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-gray-200 rounded-xl shadow-md bg-white'
            >
              {/* Car Image and Basic Info Section */}
              <div className='md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left'>
                <div className='rounded-lg overflow-hidden mb-3 w-full max-w-[250px] md:max-w-none'> {/* More rounded image, max-width for mobile */}
                  <img
                    src={booking.car.image}
                    alt={`${booking.car.brand} ${booking.car.model}`}
                    className='w-full h-auto aspect-video object-cover'
                  />
                </div>
                <p className='text-lg font-semibold text-gray-900 mt-2'>{booking.car.brand} {booking.car.model}</p> {/* Bolder text */}
                <p className='text-gray-600 text-sm'>{booking.car.year} • {booking.car.category} • {booking.car.location}</p> {/* Darker text */}
              </div>

              {/* Booking Details Section */}
              <div className='md:col-span-2 flex flex-col justify-between md:border-l md:border-gray-100 md:pl-6'> {/* Added left border for separation */}
                <div>
                  {/* Booking Number and Status */}
                  <div className='flex flex-wrap items-center gap-3 mb-4'> {/* Increased gap, allow wrapping */}
                    <p className='px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full font-medium text-sm'>Booking #{booking._id || (index + 1)}</p> {/* Use _id if available, fallback to index */}
                    <p className={`px-4 py-1.5 text-sm font-medium rounded-full capitalize ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {booking.status}
                    </p>
                  </div>

                  {/* Rental Period */}
                  <div className='flex items-start gap-3 mt-4'> {/* Increased gap */}
                    <img src={assets.calendar_icon_colored} alt="calendar" className='w-5 h-5 mt-0.5 opacity-80' /> {/* Larger icon */}
                    <div>
                      <p className='text-gray-500 text-sm'>Rent-A-Car Period</p>
                      <p className='text-gray-800 font-medium'>{formatDate(booking.pickupDate)} to {formatDate(booking.returnDate)}</p> {/* Formatted dates */}
                    </div>
                  </div>

                  {/* Pick-up Location */}
                  <div className='flex items-start gap-3 mt-4'> {/* Increased gap */}
                    <img src={assets.location_icon_colored} alt="location" className='w-5 h-5 mt-0.5 opacity-80' /> {/* Larger icon */}
                    <div>
                      <p className='text-gray-500 text-sm'>Pick-up Location</p>
                      <p className='text-gray-800 font-medium'>{booking.car.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Info Section */}
              <div className='md:col-span-1 flex flex-col justify-between items-center md:items-end text-center md:text-right gap-4 md:border-l md:border-gray-100 md:pl-6'> {/* Added left border for separation */}
                <div className='text-gray-600'>
                  <p className="text-sm">Total Price</p>
                  <h1 className='text-3xl font-extrabold text-[var(--color-primary)] mt-1'>{currency}{booking.price}</h1> {/* Larger, bolder price */}
                  <p className='text-sm text-gray-500 mt-1'>Booked on {formatDate(booking.createdAt)}</p> {/* Formatted date */}
                </div>
                {/* Action button (e.g., View Details, Cancel) */}
                <button className="px-6 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Message when no bookings are found
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">You don't have any active bookings yet.</p>
          <p className="text-md text-gray-400 mt-2">Start by exploring our amazing cars!</p>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              window.location.href = '/cars'; // Direct navigation to avoid React Router Link issues with external URL
            }}
            className="mt-6 px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Explore Cars
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
