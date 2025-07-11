import React, { useEffect, useState } from 'react';
import { assets, dummyCarData } from '../../assets/assets';
import Title from '../../components/owner/Title.jsx'; // Ensure this path is correct based on your project structure

const ManageCars = () => {
  // Get currency symbol from environment variables
  const currency = import.meta.env.VITE_CURRENCY;
  // State to store the list of cars managed by the owner
  const [cars, setCars] = useState([]);

  // Function to fetch owner's car data
  // In a real application, this would fetch data from an API specific to the owner
  const fetchOwnerCars = async () => {
    // Currently, it sets dummy data for demonstration
    setCars(dummyCarData);
  };

  // Function to toggle the availability status of a car
  const toggleCarAvailability = (carId) => {
    setCars(prevCars => 
      prevCars.map(car => 
        car._id === carId ? { ...car, isAvailable: !car.isAvailable } : car
      )
    );
    console.log(`Toggled availability for car ID: ${carId}`);
    // In a real application, you would send an update request to your backend here
  };

  // Function to delete a car
  const deleteCar = (carId) => {
    // Implement a confirmation dialog (not alert) in a real app
    if (window.confirm("Are you sure you want to delete this car?")) { // Using window.confirm for demonstration, replace with custom modal
      setCars(prevCars => prevCars.filter(car => car._id !== carId));
      console.log(`Deleted car with ID: ${carId}`);
      // In a real application, you would send a delete request to your backend here
    }
  };

  // useEffect hook to fetch cars when the component mounts
  useEffect(() => {
    fetchOwnerCars();
  }, []); // Empty dependency array means this runs once on mount

  return (
    // Main container with responsive padding and bottom padding
    <div className='px-4 py-8 md:px-8 w-full pb-20'>
      {/* Title component for the Manage Cars page */}
      <div className="mb-8"> {/* Added margin-bottom for spacing */}
        <Title
          title="Manage Cars"
          subTitle="View all listed cars, update their details, or remove them from the booking platform."
          align="left" // Explicitly setting align to left as per the provided Title component's default
        />
      </div>

      {/* Table container for listed cars */}
      <div className='max-w-full overflow-x-auto rounded-xl shadow-lg border border-gray-100 bg-white'> {/* Added overflow-x-auto for responsiveness, larger shadow, rounded-xl */}
        <table className='w-full border-collapse text-left text-sm text-gray-700'> {/* Darker text color */}
          {/* Table Header */}
          <thead className='bg-gray-50 text-gray-600 uppercase text-xs font-semibold'> {/* Lighter background, darker text, uppercase, smaller font */}
            <tr>
              <th className='p-4 font-medium rounded-tl-xl'>Car</th> {/* Increased padding, rounded corner */}
              <th className='p-4 font-medium max-md:hidden'>Category</th>
              <th className='p-4 font-medium'>Price</th>
              <th className='p-4 font-medium max-md:hidden'>Status</th>
              <th className='p-4 font-medium rounded-tr-xl'>Actions</th> {/* Rounded corner */}
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {cars.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-8 text-center text-gray-500 text-lg">No cars listed yet. Start by adding a new car!</td> {/* Larger text, more padding */}
              </tr>
            ) : (
              cars.map((car) => (
                <tr key={car._id} className='border-t border-gray-200 hover:bg-gray-50 transition-colors duration-150'> {/* Softer border, hover effect */}
                  {/* Car Image and Details */}
                  <td className='p-4 flex items-center gap-3'> {/* Increased padding */}
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className='h-14 w-14 aspect-square rounded-lg object-cover border border-gray-100' // Larger image, rounded-lg, subtle border
                    />
                    <div>
                      <p className='font-semibold text-gray-900'>{car.brand} {car.model}</p> {/* Bolder, darker text */}
                      <p className='text-xs text-gray-500 mt-0.5'>{car.year} • {car.transmission}</p> {/* Added year, slightly more space */}
                    </div>
                  </td>

                  {/* Category */}
                  <td className='p-4 max-md:hidden'>{car.category}</td>
                  {/* Price */}
                  <td className='p-4'>
                    <span className="font-semibold text-gray-800">{currency}{car.pricePerDay}</span><span className="text-xs text-gray-500">/day</span>
                  </td>

                  {/* Status (Available/Unavailable) */}
                  <td className='p-4 max-md:hidden'>
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize ${
                        car.isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {car.isAvailable ? 'Available' : 'Unavailable'}
                    </span>
                  </td>

                  {/* Actions (Toggle Visibility, Delete) */}
                  <td className='flex items-center gap-4 p-4'> {/* Increased gap */}
                    <button 
                      onClick={() => toggleCarAvailability(car._id)} 
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-150"
                      title={car.isAvailable ? "Mark Unavailable" : "Mark Available"}
                    >
                      <img
                        src={car.isAvailable ? assets.eye_close_icon : assets.eye_icon}
                        alt={car.isAvailable ? "Mark Unavailable" : "Mark Available"}
                        className='w-5 h-5 opacity-70'
                      />
                    </button>
                    <button 
                      onClick={() => deleteCar(car._id)} 
                      className="p-2 rounded-full bg-red-50 hover:bg-red-100 transition-colors duration-150"
                      title="Delete Car"
                    >
                      <img
                        src={assets.delete_icon}
                        alt="Delete Car"
                        className='w-5 h-5 opacity-70'
                      />
                    </button>
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

export default ManageCars;
