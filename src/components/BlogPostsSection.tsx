'use client'
import React from 'react';
import SectionHeading from './SectionHeading';

interface BlogPosts {
    id: number;
    title: string;
    image: string;
    date: string;
    author: string;
  }

const BlogPostsSection = () => {
  const blogPosts: BlogPosts[] = [
    {
      id: 1,
      title: 'The Rise of the Non Fungible Tokens (NFTs)',
      image: '/images/nft-item/blog/02.jpg',
      date: 'July 20 2022',
      author: 'Jhon doe'
    },
    {
      id: 2,
      title: 'Top 5 Most Popular NFT Games in 2022',
      image: '/images/nft-item/blog/03.jpg',
      date: 'July 20 2022',
      author: 'Rassel H.'
    },
    {
      id: 3,
      title: 'Best NFT Selling Marketplace website',
      image: '/images/nft-item/blog/01.jpg',
      date: 'July 20 2022',
      author: 'Alex zym'
    }
  ];

  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <SectionHeading title="OUR BLOG POSTS" />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="relative border-2 p-4 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              style={{
                borderImage: 'linear-gradient(125deg, #FFE53B 0%, #FF2525 37%, #fd00ff 100%)',
                borderImageSlice: 1
              }}
            >
              <div className="relative">
                {/* Blog Image */}
                <div className="h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Area */}
                <div className="py-4 bg-black">
                  <h4 className="text-lg font-semibold mb-2 hover:text-yellow-400 transition-colors">
                    <a href="blog-single.html">{post.title}</a>
                  </h4>

                  {/* Meta Info */}
                  <div className="flex items-center text-sm text-gray-400 space-x-4">
                    <p className="flex items-center">
                      <span className="text-yellow-500 mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      {post.date}
                    </p>
                    <p className="flex items-center">
                      <span className="text-yellow-500 mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      {post.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostsSection;