import React from 'react';

const Newsletter = () => {
  // Function to handle form submission (currently prevents default)
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle newsletter subscription logic here
    console.log('Newsletter subscribed!');
    // Optionally, clear the input field or show a success message
    e.target.reset(); 
  };

  return (
    // Newsletter section container:
    // - flex flex-col items-center justify-center: Centers content.
    // - text-center: Centers text.
    // - space-y-4: Increased vertical spacing.
    // - py-16 px-4: Responsive padding.
    // - bg-gradient-to-br from-gray-50 to-white: Subtle background.
    // - rounded-2xl shadow-lg: Rounded corners and shadow.
    // - max-w-4xl mx-auto: Controls max width and centers the section.
    // - my-20: Vertical margin for spacing from other sections.
    <div className="flex flex-col items-center justify-center text-center space-y-4 py-16 px-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg max-w-4xl mx-auto my-20">
      {/* Newsletter title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">Never Miss a Deal!</h1>
      {/* Newsletter subtitle/description */}
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts directly in your inbox.
      </p>

      {/* Newsletter subscription form */}
      <form
        onSubmit={handleSubmit}
        // Form styling:
        // - flex items-center: Aligns input and button.
        // - max-w-xl w-full: Responsive width.
        // - h-14: Increased height for better touch target.
        // - mt-6: Top margin.
        className="flex items-center max-w-xl w-full h-14 mt-6"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email Address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Enter your email address" // More descriptive placeholder
          required
          // Input styling:
          // - flex-grow: Takes up available space.
          // - border border-gray-300: Default border.
          // - rounded-l-full: Rounded left side.
          // - px-5: Horizontal padding.
          // - text-gray-700: Text color.
          // - focus:ring-2 focus:ring-primary focus:border-transparent: Focus state.
          className="flex-grow border border-gray-300 rounded-l-full h-full outline-none px-5 text-gray-700 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
          aria-label="Email address for newsletter subscription" // More descriptive aria-label
        />
        <button
          type="submit"
          // Button styling:
          // - px-8: Horizontal padding.
          // - h-full: Takes full height of parent.
          // - text-white bg-primary hover:bg-primary-dull: Colors with hover effect.
          // - rounded-r-full: Rounded right side.
          // - font-semibold: Bolder text.
          // - shadow-md hover:shadow-lg: Shadow effects.
          // - transition-all duration-300: Smooth transitions.
          className="px-8 h-full text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] transition-all duration-300 cursor-pointer rounded-r-full font-semibold shadow-md hover:shadow-lg"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
