import React from 'react';
import Title from './Title.jsx'; // Ensure .jsx extension for imports
import { assets } from '../assets/assets';

const Testimonial = () => {
  // Array of testimonial data
  const testimonials = [
    {
      name: 'Emma Rodriguez',
      location: 'Barcelona, Spain',
      image: assets.testimonial_image_1,
      testimonial: 'I\'ve rented cars from various companies, but the experience with Rent-A-Car was exceptional. The process was smooth, and the car was immaculate. Highly recommend!',
    },
    {
      name: 'John Smith',
      location: 'New York, USA',
      image: assets.testimonial_image_2,
      testimonial: 'Rent-A-Car made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic. A truly hassle-free luxury rental experience.',
    },
    {
      name: 'Ava Johnson',
      location: 'Sydney, Australia',
      image: assets.testimonial_image_3, // Ideally different image, but using provided asset
      testimonial: 'I highly recommend Rent-A-Car! Their fleet is amazing, and I always feel like I\'m getting the best deal with excellent service. Will definitely use them again.',
    },
  ];

  return (
    // Section container with responsive padding and centering
    <div className="py-16 sm:py-24 px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Title component for the testimonial section */}
      <div className="mb-12"> {/* Added margin-bottom for spacing */}
        <Title
          title="What Our Customers Say"
          subTitle="Discover why discerning travelers and car enthusiasts consistently choose Rent-A-Car for their premium vehicle experiences."
        />
      </div>

      {/* Grid to display testimonials */}
      {/* Responsive grid columns with increased gap and max-width for better layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            // Card styling:
            // - bg-white p-6 rounded-xl: White background, padding, rounded corners.
            // - shadow-lg hover:shadow-xl: Enhanced shadow with lift on hover.
            // - hover:-translate-y-1: Subtle upward movement on hover.
            // - transition-all duration-300: Smooth transitions.
            // - border border-gray-100: Subtle border.
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
          >
            {/* Testimonial author's profile */}
            <div className="flex items-center gap-4 mb-4"> {/* Increased gap and margin-bottom */}
              <img
                className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-primary)] p-0.5" // Larger image, border for emphasis
                src={testimonial.image}
                alt={`Profile of ${testimonial.name}`}
              />
              <div>
                <p className="text-xl font-semibold text-gray-900">{testimonial.name}</p> {/* Bolder name */}
                <p className="text-gray-600 text-sm">{testimonial.location}</p> {/* Slightly darker location text */}
              </div>
            </div>

            {/* Star rating */}
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={assets.star_icon}
                    alt="Star rating"
                    className="w-5 h-5" // Slightly larger stars
                  />
                ))}
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 text-base max-w-sm mt-4 font-normal leading-relaxed"> {/* Darker text, normal weight, improved line height */}
              “{testimonial.testimonial}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
