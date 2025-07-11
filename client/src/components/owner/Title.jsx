import React from 'react';

const Title = ({ title, subTitle, align = 'left' }) => {
  // Determine alignment classes based on the 'align' prop
  const alignmentClass = align === 'center'
    ? 'text-center mx-auto'
    : align === 'right'
      ? 'text-right ml-auto'
      : 'text-left';

  return (
    // Container for the title and subtitle
    // mb-6: Margin bottom for spacing from content.
    // max-w-4xl: Controls max width for readability.
    // Added responsive alignment for smaller screens to default to center if not explicitly left/right.
    <div className={`${alignmentClass} mb-6 max-w-4xl px-2 sm:px-0`}>
      {/* Main title styling: Larger font, bolder, and responsive */}
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight'>
        {title}
      </h1>
      {/* Subtitle, rendered only if provided */}
      {subTitle && (
        <p className='text-gray-600 mt-2 text-sm sm:text-base leading-relaxed max-w-2xl'> {/* Darker text, improved line height, controlled max-width */}
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Title;
