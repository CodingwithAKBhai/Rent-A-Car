import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Cars from './pages/Cars';
import MyBookings from './pages/MyBookings';
import Footer from './components/Footer';
import Layout from './pages/owner/Layout';
import Dashboard from './pages/owner/Dashboard';
import AddCar from './pages/owner/AddCar';
import ManageCars from './pages/owner/ManageCars';
import ManageBookings from './pages/owner/ManageBookings';
import Login from './components/Login';

const App = () => {
  // State to control the visibility of the Login modal
  const [showLogin, setShowLogin] = useState(false);
  // Get the current location to determine if it's an owner path
  const isOwnerPath = useLocation().pathname.startsWith('/owner');

  return (
    // Main container for the entire application, ensuring full height and flex layout
    // This helps in pushing the footer to the bottom on non-owner pages
    <div className="flex flex-col min-h-screen">
      {/* Conditionally render the Login modal.
          It's positioned fixed to overlay the entire screen when active. */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Login setShowLogin={setShowLogin} />
        </div>
      )}
        
      {/* Conditionally render the Navbar component for public-facing pages */}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      {/* Main content area, takes up available space and centers content */}
      {/* The 'flex-grow' class ensures this div expands to fill available vertical space */}
      <main className="flex-grow">
        {/* Define all application routes using React Router DOM */}
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<Home/>}/>
          <Route path='/car-details/:id' element={<CarDetails />} />
          <Route path='/cars' element={<Cars />}/>
          <Route path='/my-bookings' element={<MyBookings />}/>
          
          {/* Owner-specific routes, nested under the /owner path */}
          {/* The Layout component will be rendered for all /owner paths, providing a consistent owner dashboard layout */}
          <Route path='/owner' element={<Layout />}>
            {/* Dashboard is the default route for /owner (e.g., /owner) */}
            <Route index element={<Dashboard />} /> 
            {/* Route for adding a new car: /owner/add-car */}
            <Route path='add-car' element={<AddCar />} /> 
            {/* Route for managing existing cars: /owner/manage-cars */}
            <Route path='manage-cars' element={<ManageCars />} /> 
            {/* Route for managing bookings: /owner/manage-bookings */}
            <Route path='manage-bookings' element={<ManageBookings />} />
          </Route>
        </Routes>
      </main>

      {/* Conditionally render the Footer component for public-facing pages */}
      {!isOwnerPath && <Footer /> }
    </div>
  );
};

export default App;
