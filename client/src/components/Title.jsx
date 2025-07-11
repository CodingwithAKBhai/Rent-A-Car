import React from 'react';

const Title = ({ title, subTitle, align = "center" }) => {
  // Determine if the alignment should be left-aligned on medium screens and up
  const isLeftAligned = align === 'left';

  return (
    <div
      className={`flex flex-col justify-center 
        ${isLeftAligned ? 'items-start text-left' : 'items-center text-center'} 
        max-w-3xl mx-auto`} // Added max-w and mx-auto for better control over width and centering
    >
      {/* Main title styling: Larger font, bolder, and responsive */}
      <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight">
        {title}
      </h1>
      {/* Subtitle styling: Slightly smaller, muted text, with improved max-width for readability */}
      <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-prose leading-relaxed">
        {subTitle}
      </p> 
    </div>
  );
};

export default Title;
