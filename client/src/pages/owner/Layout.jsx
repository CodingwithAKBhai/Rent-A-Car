import React from 'react';
import NavbarOwner from '../../components/owner/NavbarOwner.jsx'; // Ensure .jsx extension
import Sidebar from '../../components/owner/Sidebar.jsx'; // Ensure .jsx extension
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    // Main container for the owner dashboard layout
    // flex flex-col min-h-screen: Ensures the layout takes at least the full viewport height
    <div className='flex flex-col min-h-screen bg-gray-100'> {/* Added a subtle background color */}
      {/* Top Navbar for the owner section */}
      <NavbarOwner />
      
      {/* Main content area, structured with a sidebar and a main content outlet */}
      {/* flex flex-1: Allows this div to grow and take remaining vertical space */}
      <div className='flex flex-1'>
        {/* Sidebar for navigation within the owner section */}
        {/* w-64: Fixed width for the sidebar.
            bg-white: White background for the sidebar.
            shadow-md: Adds a subtle shadow for separation.
            border-r border-gray-200: Right border for visual separation from main content.
            hidden md:block: Hides sidebar on small screens, shows on medium and up. */}
        <Sidebar className="w-64 bg-white shadow-md border-r border-gray-200 hidden md:block" />
        
        {/* Main content area where nested routes will be rendered */}
        {/* flex-1: Allows this main content area to grow and take remaining horizontal space.
            px-4 py-6 md:px-8: Responsive padding.
            bg-gray-50: A light background for the content area. */}
        <main className='flex-1 px-4 py-6 md:px-8 bg-gray-50 overflow-auto'> {/* Added overflow-auto for scrollable content */}
          {/* Outlet renders the matched child route component */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
