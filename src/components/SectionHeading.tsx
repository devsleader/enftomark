'use client'
import React from 'react';

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="w-full py-8 flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <div className="flex-1 relative flex items-center justify-end">
          <div className="h-[1px] bg-gradient-to-r from-yellow-300 to-yellow-600 w-[25%] max-w-md"></div>
          <div className="h-[1px] bg-white w-full max-w-md absolute top-1"></div>
          <div className="h-[1px] bg-gradient-to-r from-yellow-300 to-yellow-600 w-[25%] max-w-md absolute top-2"></div>
        </div>
        
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold px-8 uppercase">
          {title}
        </h3>
        
        <div className="flex-1 relative flex items-center">
          <div className="h-[1px] bg-gradient-to-l from-pink-300 to-pink-600 w-[25%] max-w-md"></div>
          <div className="h-[1px] bg-white w-full max-w-md absolute top-1"></div>
          <div className="h-[1px] bg-gradient-to-l from-pink-300 to-pink-600 w-[25%] max-w-md absolute top-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;