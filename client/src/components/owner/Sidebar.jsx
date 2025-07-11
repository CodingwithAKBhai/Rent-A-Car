import React, { useState } from 'react';
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  // Using dummy user data for demonstration purposes
  const user = dummyUserData;
  // Get current location to highlight active navigation link
  const location = useLocation();
  // State to temporarily hold the selected image file before "saving"
  const [image, setImage] = useState(null);

  // Function to simulate updating the user's image
  // In a real application, this would involve uploading to a server and updating persistent user data.
  const updateImage = async () => {
    if (image) {
      // For dummy data, we directly update the image property of the user object.
      // Note: This modifies the imported dummyUserData directly for the current session.
      // In a real app, you'd update state or call an API.
      user.image = URL.createObjectURL(image); 
      // Clear the local image state to reflect the "saved" image from user.image
      setImage(null); 
    }
  };

  return (
    // Sidebar container:
    // - relative min-h-screen: Ensures it takes at least full height and allows absolute positioning of save button.
    // - hidden md:flex: Hides on small screens, shows as flex column on medium and up.
    // - flex-col items-center: Centers content horizontally.
    // - p-6: Padding.
    // - w-full max-w-[60px] md:max-w-64: Responsive width.
    // - border-r border-gray-200: Right border.
    // - bg-white shadow-md: White background with shadow.
    // - text-gray-700 text-sm: Default text color and size.
    <div className='relative min-h-screen hidden md:flex flex-col items-center p-6 w-full max-w-[60px] md:max-w-64 border-r border-gray-200 bg-white shadow-md text-gray-700 text-sm'>
      {/* Profile image section */}
      <div className='group relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0'> {/* Fixed size container, flex-shrink-0 */}
        <label htmlFor="image-upload" className="block w-full h-full cursor-pointer">
          <img 
            src={image ? URL.createObjectURL(image) : user?.image || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300"} 
            alt="User Profile"
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' // Scale on hover
          />
          <input 
            type="file" 
            id='image-upload'
            accept="image/*" 
            hidden 
            onChange={e => setImage(e.target.files[0])}
          />

          {/* Overlay for edit icon on hover */}
          <div className='absolute inset-0 bg-black/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <img src={assets.edit_icon} alt="Edit Icon" className="w-6 h-6 filter invert" /> {/* Larger icon, invert for white */}
          </div>
        </label>
      </div>

      {/* Save button for image upload, shown when an image is selected */}
      {image && (
        <button 
          onClick={updateImage} 
          className='absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-[var(--color-primary)] text-white cursor-pointer rounded-full text-xs font-semibold shadow-md hover:bg-[var(--color-primary-dull)] transition-all duration-200 z-10' // Enhanced styling, z-index
        > 
          Save <img src={assets.check_icon} className="w-3 h-3 filter invert" alt="Check Icon" /> {/* Smaller icon, invert for white */}
        </button>
      )}
      
      {/* User name */}
      <p className='mt-4 text-lg font-semibold text-gray-900'>{user?.name || "Owner"}</p> {/* Larger, bolder name */}
      <p className='text-sm text-gray-500'>Admin</p> {/* Role text */}

      {/* Navigation links */}
      <div className='w-full mt-8 space-y-2'> {/* Increased top margin and vertical spacing */}
        {ownerMenuLinks.map((link, index) => (
          <NavLink 
            key={index} 
            to={link.path} 
            className={({ isActive }) => 
              `relative flex items-center gap-3 w-full py-3 pl-4 rounded-lg transition-colors duration-200 
              ${isActive ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-semibold' : 'text-gray-700 hover:bg-gray-100'}`
            }
          >
            <img 
              src={location.pathname === link.path ? link.coloredIcon : link.icon} 
              alt={`${link.name} icon`}
              className="w-5 h-5 opacity-80" // Consistent icon sizing
            />
            <span className='max-md:hidden'>{link.name}</span>
            {/* Active indicator bar */}
            <div className={`${location.pathname === link.path ? 'bg-[var(--color-primary)]' : ''} w-1.5 h-full rounded-r-md absolute left-0 top-0`}> {/* Full height, rounded right, left aligned */}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
