import React, { useEffect, useState } from 'react';
import { assets, dummyMyBookingsData } from '../../assets/assets'; // Assuming assets includes dummyMyBookingsData
import Title from '../../components/owner/Title.jsx'; // Ensure this path is correct

const ManageBookings = () => {
  // Get currency symbol from environment variables
  const currency = import.meta.env.VITE_CURRENCY;
  // State to store the list of bookings
  const [bookings, setBookings] = useState([]);

  // Function to simulate fetching owner's booking data
  // In a real application, this would fetch data from a backend API
  const fetchOwnerBookings = async () => {
    // Currently, it sets dummy data for demonstration
    setBookings(dummyMyBookingsData);
  };

  // Function to handle status change for a booking
  const handleStatusChange = (bookingId, newStatus) => {
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking._id === bookingId ? { ...booking, status: newStatus } : booking
      )
    );
    console.log(`Booking ID: ${bookingId} status changed to: ${newStatus}`);
    // In a real application, you would send an update request to your backend here
  };

  // Helper function to format dates
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // useEffect hook to fetch bookings when the component mounts
  useEffect(() => {
    fetchOwnerBookings();
  }, []); // Empty dependency array means this runs once on mount

  return (
    // Main container with responsive padding and bottom padding
    <div className='px-4 py-8 md:px-8 w-full pb-20'>
      {/* Title component for the Manage Bookings page */}
      <div className="mb-8"> {/* Added margin-bottom for spacing */}
        <Title
          title="Manage Bookings"
          subTitle="Track all customer bookings, approve or cancel requests, and manage booking statuses."
          align="left" // Explicitly setting align to left as per the provided Title component's default
        />
      </div>

      {/* Table container for managing bookings */}
      <div className='max-w-full overflow-x-auto rounded-xl shadow-lg border border-gray-100 bg-white'> {/* Added overflow-x-auto for responsiveness, larger shadow, rounded-xl */}
        <table className='w-full border-collapse text-left text-sm text-gray-700'> {/* Darker text color */}
          {/* Table Header */}
          <thead className='bg-gray-50 text-gray-600 uppercase text-xs font-semibold'> {/* Lighter background, darker text, uppercase, smaller font */}
            <tr>
              <th className='p-4 font-medium rounded-tl-xl'>Car</th> {/* Increased padding, rounded corner */}
              <th className='p-4 font-medium max-md:hidden'>Date Range</th>
              <th className='p-4 font-medium'>Price</th>
              <th className='p-4 font-medium max-md:hidden'>Payment</th>
              <th className='p-4 font-medium rounded-tr-xl'>Status / Actions</th> {/* Combined header for clarity */}
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-8 text-center text-gray-500 text-lg">No bookings to manage.</td> {/* Larger text, more padding */}
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking._id} className='border-t border-gray-200 hover:bg-gray-50 transition-colors duration-150'> {/* Softer border, hover effect */}
                  {/* Car Image and Details */}
                  <td className='p-4 flex items-center gap-3'> {/* Increased padding */}
                    <img
                      src={booking.car.image}
                      alt={`${booking.car.brand} ${booking.car.model}`}
                      className='h-14 w-14 aspect-square rounded-lg object-cover border border-gray-100' // Larger image, rounded-lg, subtle border
                    />
                    <div>
                      <p className='font-semibold text-gray-900'>{booking.car.brand} {booking.car.model}</p> {/* Bolder, darker text */}
                      <p className='text-xs text-gray-500 mt-0.5'>{booking.car.year} • {booking.car.location}</p> {/* Added year, more space */}
                    </div>
                  </td>

                  {/* Date Range */}
                  <td className='p-4 max-md:hidden'>
                    <span className="text-gray-800 font-medium">{formatDate(booking.pickupDate)}</span> to <span className="text-gray-800 font-medium">{formatDate(booking.returnDate)}</span>
                  </td>

                  {/* Price */}
                  <td className='p-4'>
                    <span className="font-semibold text-gray-800">{currency}{booking.price}</span>
                  </td>

                  {/* Payment Status */}
                  <td className='p-4 max-md:hidden'>
                    <span className='bg-gray-100 px-4 py-1.5 rounded-full text-xs font-medium text-gray-600 capitalize'>
                      {booking.paymentStatus || 'offline'} {/* Assuming paymentStatus field might exist or default to 'offline' */}
                    </span>
                  </td>

                  {/* Actions (Status Change) */}
                  <td className='p-4'>
                    {booking.status === 'pending' ? (
                      <select
                        value={booking.status}
                        onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                        className='px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 text-gray-700 text-sm bg-white' // Enhanced select styling
                      >
                        <option value="pending">Pending</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="confirmed">Confirmed</option>
                      </select>
                    ) : (
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize ${
                          booking.status === 'confirmed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {booking.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
