'use client'
import React, { useState, useEffect } from 'react';

interface CategoryItemProps {
  title: string;
  images: string[];
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, images }) => {
  const [imageOrder, setImageOrder] = useState([0, 1, 2]);

  // Rotate images: first → last, last → middle, middle → first
  useEffect(() => {
    const interval = setInterval(() => {
      setImageOrder(prevOrder => {
        // Create new order: [prevOrder[1], prevOrder[2], prevOrder[0]]
        return [prevOrder[1], prevOrder[2], prevOrder[0]];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative border-2 p-4 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
    style={{
      borderImage: 'linear-gradient(125deg, #FFE53B 0%, #FF2525 37%, #fd00ff 100%)',
      borderImageSlice: 1
    }}>
      <div className="relative h-48 overflow-hidden">
        <div className="flex h-full w-full gap-2">
          {imageOrder.map(index => (
            <div key={index} className="w-1/3 h-full flex-shrink-0 transition-all duration-500">
              <img 
                src={images[index]} 
                alt={`${title} category image`} 
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="ps-2 pt-4">
        <h4 className="text-lg font-bold text-white">
          <a href="/explore.html" className="hover:text-purple-500 transition-colors duration-300">
            {title}
          </a>
        </h4>
      </div>
    </div>
  );
};

export default CategoryItem;