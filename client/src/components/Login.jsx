import React from 'react';
import { assets } from '../assets/assets'; // Assuming assets includes a close_icon

const Login = ({ setShowLogin }) => {
  // State to manage whether the form is in "login" or "register" mode
  const [state, setState] = React.useState("login");
  // States for form inputs
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handler for form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    // In a real application, you would send this data to an authentication API
    console.log("Form submitted:", { state, name, email, password });
    // For demonstration, close the modal after submission
    setShowLogin(false);
    // Optionally, clear form fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    // Overlay div to close the modal when clicked outside the form
    // fixed inset-0: Covers the entire viewport.
    // z-50: Ensures it's on top.
    // flex items-center justify-center: Centers the modal content.
    // bg-black/60: Dark, semi-transparent background.
    <div onClick={() => setShowLogin(false)} className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>
      {/* Login/Signup Form */}
      {/* relative: For positioning the close button.
          flex flex-col gap-5: Vertical flex layout with spacing.
          p-8 sm:p-10: Responsive padding.
          w-full max-w-sm: Responsive width.
          rounded-xl: More pronounced rounded corners.
          shadow-2xl: Stronger shadow for a floating effect.
          border border-gray-200: Subtle border.
          bg-white: White background.
          onClick={(e) => e.stopPropagation()}: Prevents modal from closing when clicking inside the form. */}
      <form onSubmit={onSubmit} onClick={(e) => e.stopPropagation()} className="relative flex flex-col gap-5 p-8 sm:p-10 w-full max-w-sm rounded-xl shadow-2xl border border-gray-200 bg-white">
        {/* Close button for the modal */}
        <button 
          type="button" // Important to set type="button" to prevent form submission
          onClick={() => setShowLogin(false)} 
          className="absolute top-4 right-4 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close login form" // Accessibility improvement
        >
          <img src={assets.close_icon} alt="Close" className="w-5 h-5 opacity-70" /> {/* Added opacity */}
        </button>

        {/* Title of the form */}
        <p className="text-3xl font-extrabold text-center text-gray-900 mb-2"> {/* Larger, bolder, centered title */}
          <span className="text-[var(--color-primary)]">User</span> {state === "login" ? "Login" : "Sign Up"}
        </p>

        {/* Name input (only for registration) */}
        {state === "register" && (
          <div className="w-full">
            <label htmlFor="name-input" className="text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              id="name-input"
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              placeholder="Your Full Name" // More descriptive placeholder
              className="border border-gray-300 rounded-lg w-full px-4 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 text-gray-800"
              type="text" 
              required 
            />
          </div>
        )}

        {/* Email input */}
        <div className="w-full">
          <label htmlFor="email-input" className="text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            id="email-input"
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            placeholder="your.email@example.com" // More descriptive placeholder
            className="border border-gray-300 rounded-lg w-full px-4 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 text-gray-800"
            type="email" 
            required 
          />
        </div>

        {/* Password input */}
        <div className="w-full">
          <label htmlFor="password-input" className="text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            id="password-input"
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            placeholder="Minimum 6 characters" // More descriptive placeholder
            className="border border-gray-300 rounded-lg w-full px-4 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 text-gray-800"
            type="password" 
            required 
          />
        </div>

        {/* Submit button */}
        <button 
          type="submit" 
          className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] transition-all duration-300 text-white w-full py-3 rounded-lg cursor-pointer font-semibold mt-4 shadow-md hover:shadow-lg"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>

        {/* Toggle between Login and Register */}
        {state === "register" ? (
          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account? <span onClick={() => setState("login")} className="text-[var(--color-primary)] cursor-pointer font-medium hover:underline">Login here</span>
          </p>
        ) : (
          <p className="text-center text-sm text-gray-600 mt-2">
            Don't have an account? <span onClick={() => setState("register")} className="text-[var(--color-primary)] cursor-pointer font-medium hover:underline">Sign Up here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
