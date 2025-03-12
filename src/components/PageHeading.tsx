'use clients'
import React from 'react';
import Link from 'next/link';

interface PageHeadingProps {
  title: string;
  pageName: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, pageName }) => {
  return (
    <div className="w-full bg-black py-16 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-white text-3xl font-bold mb-1">{title}</h2>
        <div className="text-white flex items-center justify-center gap-2 text-sm">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <span className="text-white">-</span>
          <span className="text-white">{pageName}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;