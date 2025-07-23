import React from 'react';
import { testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className="mx-4 lg:mx-32 py-10">
      {/* Title */}
      <h1 className="text-center text-2xl lg:text-3xl xl:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5">
        Customer Testimonials
      </h1 >

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((item, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-xl text-center">
            <p className="text-3xl text-gray-400 mb-2">“</p>
            <p className="text-gray-700 italic mb-4"> {item.text} </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={item.image}
                alt={item.author}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold">{item.author}</p>
                <p className="text-sm text-gray-500">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
