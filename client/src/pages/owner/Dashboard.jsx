import React, { useEffect, useState } from 'react';
import { assets, dummyDashboardData } from '../../assets/assets';
import Title from '../../components/owner/Title.jsx'; // Ensure .jsx extension

const Dashboard = () => {
  // Get currency symbol from environment variables
  const currency = import.meta.env.VITE_CURRENCY;

  // State to hold dashboard data, initialized with default values
  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completeBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  // Array of data for the dashboard statistics cards
  const dashboardCards = [
    { title: "Total Cars", value: data.totalCars, icon: assets.carIconColored },
    { title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored },
    { title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored },
    { title: "Confirmed", value: data.completeBookings, icon: assets.listIconColored },
  ];

  // useEffect hook to load dummy data when the component mounts
  useEffect(() => {
    setData(dummyDashboardData);
  }, []); // Empty dependency array ensures this runs once on mount

  // Helper function to format dates for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    // Main dashboard container with responsive padding and bottom padding
    <div className='px-4 pt-6 md:px-8 flex-1 pb-20'> {/* Adjusted top padding */}
      {/* Title component for the dashboard */}
      <div className="mb-8"> {/* Added margin-bottom for spacing */}
        <Title
          title="Admin Dashboard"
          subTitle="Monitor overall platform performance including total cars, booking revenue, and recent activities at a glance."
        />
      </div>

      {/* Stats Cards Section */}
      {/* Responsive grid for cards, with improved gap and max-width */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8'>
        {dashboardCards.map((card, index) => (
          <div 
            key={index} 
            className='flex items-center justify-between p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300'
          > {/* Enhanced card styling */}
            <div>
              <h1 className='text-sm text-gray-600 font-medium'>{card.title}</h1> {/* Darker text, medium font weight */}
              <p className='text-2xl font-bold text-gray-900 mt-1'>{card.value}</p> {/* Larger, bolder value */}
            </div>
            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)]/10'> {/* Larger icon background, primary color */}
              <img src={card.icon} alt={card.title} className='h-6 w-6 opacity-80' /> {/* Larger icon, subtle opacity */}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings and Monthly Revenue Section */}
      {/* flex-wrap for responsiveness, gap-6 for spacing, max-w-full for full width */}
      <div className='flex flex-wrap items-start gap-6 mb-8 w-full'>
        
        {/* Recent Bookings Card */}
        <div className='p-6 border border-gray-200 rounded-xl shadow-md bg-white flex-1 min-w-[300px]'> {/* Enhanced card styling, flex-1 for growth, min-width */}
          <h1 className='text-xl font-semibold text-gray-800'>Recent Bookings</h1> {/* Bolder title */}
          <p className='text-gray-600 text-sm mt-1'>Latest customer bookings on the platform</p> {/* Darker text */}

          {/* Conditional rendering for no recent bookings */}
          {data.recentBookings.length === 0 ? (
            <p className='text-md text-gray-500 mt-6 text-center py-4'>No recent bookings available.</p>
          ) : (
            // Map through recent bookings to display them
            <div className="mt-6 space-y-4"> {/* Added space-y for consistent spacing */}
              {data.recentBookings.map((booking, index) => (
                <div key={index} className='flex items-center justify-between border-b border-gray-100 pb-4 last:border-b-0 last:pb-0'> {/* Bottom border for separation */}
                  <div className='flex items-center gap-3'>
                    {/* Icon for booking */}
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex-shrink-0'> {/* Consistent icon styling */}
                      <img src={assets.listIconColored} alt="booking-icon" className='h-5 w-5 opacity-80' />
                    </div>
                    <div>
                      <p className='font-medium text-gray-800'>{booking.car.brand} {booking.car.model}</p>
                      <p className='text-sm text-gray-500'>{formatDate(booking.createdAt)}</p> {/* Formatted date */}
                    </div>
                  </div>
                  <div className='flex items-center gap-3 font-medium flex-shrink-0'>
                    <p className='text-base text-gray-700'>{currency}{booking.price}</p> {/* Darker text */}
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full capitalize ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}> {/* Enhanced status badge */}
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Monthly Revenue Card */}
        <div className='p-6 border border-gray-200 rounded-xl shadow-md bg-white w-full md:max-w-xs flex flex-col justify-between'> {/* Enhanced card styling, explicit width */}
          <div>
            <h1 className='text-xl font-semibold text-gray-800'>Monthly Revenue</h1> {/* Bolder title */}
            <p className='text-gray-600 text-sm mt-1'>Revenue for the current month</p> {/* Darker text */}
          </div>
          <p className='text-4xl mt-6 font-extrabold text-[var(--color-primary)]'> {/* Larger, bolder, primary color text */}
            {currency}{data.monthlyRevenue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
