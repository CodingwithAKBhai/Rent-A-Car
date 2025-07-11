import React, { useState } from 'react';
import Title from '../../components/owner/Title.jsx'; // Ensure .jsx extension
import { assets } from '../../assets/assets'; // Assuming assets includes upload_icon, tick_icon

const AddCar = () => {
  // Get currency symbol from environment variables
  const currency = import.meta.env.VITE_CURRENCY;

  // State to hold the selected image file for upload preview
  const [image, setImage] = useState(null);
  // State to hold all the car details from the form inputs
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: '',
    pricePerDay: '',
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: '',
    location: '',
    description: '',
  });

  // Handler for form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // In a real application, you would send this 'car' data and 'image' to a backend API
    console.log('Car data submitted:', car);
    console.log('Car image:', image);
    // For demonstration, show a success message (in a real app, use a modal/toast)
    alert('Car added successfully!');
    // Optionally, reset the form after submission
    setCar({
      brand: '',
      model: '',
      year: '',
      pricePerDay: '',
      category: '',
      transmission: '',
      fuel_type: '',
      seating_capacity: '',
      location: '',
      description: '',
    });
    setImage(null);
  };

  return (
    // Main container with responsive padding and bottom padding
    <div className='px-4 py-8 md:px-8 flex-1 pb-20'>
      {/* Title component for the Add New Car page */}
      <div className="mb-8"> {/* Added margin-bottom for spacing */}
        <Title
          title="Add New Car"
          subTitle="Fill in details to list a new car for booking, including pricing, availability, and car specifications."
        />
      </div>

      {/* Form for adding car details */}
      <form
        onSubmit={onSubmitHandler}
        className='flex flex-col gap-6 text-gray-700 text-sm mt-6 max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100'
      >
        {/* Car Image Upload Section */}
        <div className='flex flex-col items-center gap-3 w-full'>
          <label htmlFor="car-image-upload" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt={image ? "Car preview" : "Upload icon"}
              className='h-24 w-24 object-cover rounded-lg border-2 border-dashed border-gray-300 p-2 hover:border-[var(--color-primary)] transition-colors duration-200'
            />
            <input
              type="file"
              id="car-image-upload"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
              required // Make image upload required
            />
          </label>
          <p className='text-sm text-gray-600 font-medium'>Upload a picture of your car</p>
          {image && <p className="text-xs text-gray-500">{image.name}</p>} {/* Display file name */}
        </div>

        {/* Brand & Model Inputs */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col'>
            <label htmlFor="car-brand" className="font-medium mb-1">Brand</label>
            <input
              type="text"
              id="car-brand"
              placeholder='e.g. BMW, Mercedes, Audi...'
              required
              className='px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200'
              value={car.brand}
              onChange={e => setCar({ ...car, brand: e.target.value })}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="car-model" className="font-medium mb-1">Model</label>
            <input
              type="text"
              id="car-model"
              placeholder='e.g. X5, E-Class, M4...'
              required
              className='px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200'
              value={car.model}
              onChange={e => setCar({ ...car, model: e.target.value })}
            />
          </div>
        </div>

        {/* Year, Price, Category Inputs */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col'>
            <label htmlFor="car-year" className="font-medium mb-1">Year</label>
            <input
              type="number"
              id="car-year"
              placeholder="2025"
              required
              min="1900" // Sensible minimum year
              max={new Date().getFullYear() + 1} // Max year is current year + 1
              className='px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200'
              value={car.year}
              onChange={e => setCar({ ...car, year: e.target.value })}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="car-price" className="font-medium mb-1">Daily Price ({currency})</label>
            <input
              type="number"
              id="car-price"
              placeholder="e.g. 5000"
              required
              min="0" // Price cannot be negative
              className='px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200'
              value={car.pricePerDay}
              onChange={e => setCar({ ...car, pricePerDay: e.target.value })}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="car-category" className="font-medium mb-1">Category</label>
            <select
              id="car-category"
              required
              value={car.category}
              onChange={e => setCar({ ...car, category: e.target.value })}
              className='px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 appearance-none bg-white' // appearance-none for custom arrow if needed
            >
              <option value="" disabled>Select a category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
              <option value="Sports Car">Sports Car</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
        </div>

        {/* Transmission, Fuel Type, Seating Capacity Inputs */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col'>
            <label htmlFor="car-transmission" className="font-medium mb-1">Transmission</label>
            <select
              id="car-transmission"
              required
              value={car.transmission}
              onChange={e => setCar({ ...car, transmission: e.target.value })}
              className='px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 appearance-none bg-white'
            >
              <option value="" disabled>Select a transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="car-fuel-type" className="font-medium mb-1">Fuel Type</label>
            <select
              id="car-fuel-type"
              required
              value={car.fuel_type}
              onChange={e => setCar({ ...car, fuel_type: e.target.value })}
              className='px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 appearance-none bg-white'
            >
              <option value="" disabled>Select a fuel type</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="car-seating-capacity" className="font-medium mb-1">Seating Capacity</label>
            <input
              type="number"
              id="car-seating-capacity"
              placeholder="4"
              required
              min="1" // Minimum seating capacity
              className='px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200'
              value={car.seating_capacity}
              onChange={e => setCar({ ...car, seating_capacity: e.target.value })}
            />
          </div>
        </div>

        {/* Location Input */}
        <div className='flex flex-col'>
          <label htmlFor="car-location" className="font-medium mb-1">Location</label>
          <select
            id="car-location"
            required
            value={car.location}
            onChange={e => setCar({ ...car, location: e.target.value })}
            className='px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 appearance-none bg-white'
          >
            <option value="" disabled>Select a Location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Houston">Houston</option>
            <option value="Chicago">Chicago</option>
            <option value="Miami">Miami</option>
            <option value="San Francisco">San Francisco</option>
          </select>
        </div>

        {/* Description Textarea */}
        <div className='flex flex-col'>
          <label htmlFor="car-description" className="font-medium mb-1">Description</label>
          <textarea
            id="car-description"
            rows={5}
            required
            placeholder='e.g. A luxurious SUV with a spacious interior and a powerful engine. Equipped with advanced safety features and a panoramic sunroof.'
            className='px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 resize-y' // resize-y allows vertical resizing
            value={car.description}
            onChange={e => setCar({ ...car, description: e.target.value })}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className='flex items-center justify-center gap-2 px-8 py-3 mt-4 bg-[var(--color-primary)] text-white rounded-full font-semibold w-max cursor-pointer hover:bg-[var(--color-primary-dull)] transition-all duration-300 shadow-md hover:shadow-lg'
        >
          <img src={assets.tick_icon} alt="Tick icon" className="w-5 h-5 filter invert" /> {/* Invert tick icon to white */}
          List Your Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
