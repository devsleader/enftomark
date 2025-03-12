'use client'
import React, { useState } from 'react';

interface NFTItem {
  id: string;
  title: string;
  author: string;
  price: string;
  likes: number;
  image: string;
  authorImages: string[];
}

const MainExplorePageSection = () => {
  const [category, setCategory] = useState('All Category');
  const [sortBy, setSortBy] = useState('Newest');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample NFT data
  const nftItems: NFTItem[] = [
    {
      id: '1',
      title: 'EUPHORIA de',
      author: 'Gucci Lucas',
      price: '0.34 ETH',
      likes: 230,
      image: '/api/placeholder/240/300',
      authorImages: ['/api/placeholder/40/40']
    },
    {
      id: '2',
      title: 'Mewao com de',
      author: 'Ecalo jers',
      price: '0.34 ETH',
      likes: 278,
      image: '/api/placeholder/240/300',
      authorImages: ['/api/placeholder/40/40', '/api/placeholder/40/40', '/api/placeholder/40/40']
    },
    {
      id: '3',
      title: 'pet mice rio',
      author: 'Hola moc',
      price: '0.34 ETH',
      likes: 340,
      image: '/api/placeholder/240/300',
      authorImages: ['/api/placeholder/40/40', '/api/placeholder/40/40', '/api/placeholder/40/40']
    },
    {
      id: '4',
      title: 'Logical Impact',
      author: 'Logicto pen',
      price: '0.34 ETH',
      likes: 330,
      image: '/api/placeholder/240/300',
      authorImages: ['/api/placeholder/40/40', '/api/placeholder/40/40']
    },
    {
      id: '5',
      title: 'Fly on high',
      author: 'unique lo',
      price: '0.34 ETH',
      likes: 355,
      image: '/api/placeholder/240/300',
      authorImages: ['/api/placeholder/40/40', '/api/placeholder/40/40', '/api/placeholder/40/40']
    },
    {
      id: '6',
      title: 'kiara rodri de',
      author: 'Monica bel',
      price: '0.34 ETH',
      likes: 60,
      image: '/api/placeholder/240/300',
      authorImages: ['/api/placeholder/40/40']
    },
    {
      id: '7',
      title: 'EUPHORIA de',
      author: 'Gucci Lucas',
      price: '0.34 ETH',
      likes: 230,
      image: '/api/placeholder/240/300',
      authorImages: ['/api/placeholder/40/40', '/api/placeholder/40/40']
    },
    {
      id: '8',
      title: 'Homies wall',
      author: 'pixtrax',
      price: '0.34 ETH',
      likes: 530,
      image: '/api/placeholder/240/300',
      authorImages: ['/api/placeholder/40/40', '/api/placeholder/40/40', '/api/placeholder/40/40']
    }
  ];

  const categories = ['All Category', 'Art', 'Music', 'Video', 'Digital Anime'];
  const sortOptions = ['Newest', 'Trending', 'Most Viewed', 'Less Viewed', 'Ending Soon', 'Recently Sold', 'Recently Created', 'Recently Viewed'];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          {/* Filter and Sort */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="relative">
              <select
                className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3 w-56 appearance-none cursor-pointer"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <label className="absolute text-xs text-gray-400 left-4 top-1">Select a Category</label>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select
                className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3 w-56 appearance-none cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <label className="absolute text-xs text-gray-400 left-4 top-1">Sort By</label>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Search */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3 w-full"
                placeholder="Search NFT"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <label className="absolute text-xs text-gray-400 left-4 top-1">Search NFT</label>
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 15.5L11.5 11.5M13.5 7C13.5 10.5899 10.5899 13.5 7 13.5C3.41015 13.5 0.5 10.5899 0.5 7C0.5 3.41015 3.41015 0.5 7 0.5C10.5899 0.5 13.5 3.41015 13.5 7Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nftItems.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-4">
                {/* NFT Top */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {item.authorImages.map((img, index) => (
                        <div key={index} className="relative">
                          <img 
                            src={img} 
                            alt="author" 
                            className="w-8 h-8 rounded-full border-2 border-gray-800"
                          />
                          {index === item.authorImages.length - 1 && (
                            <div className="absolute -right-1 -bottom-1 bg-blue-500 rounded-full w-3 h-3 border-2 border-gray-800"></div>
                          )}
                        </div>
                      ))}
                    </div>
                    <h6 className="ml-2 text-sm font-medium">{item.author}</h6>
                  </div>
                  <div className="cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 3.5C7.17157 3.5 6.5 2.82843 6.5 2C6.5 1.17157 7.17157 0.5 8 0.5C8.82843 0.5 9.5 1.17157 9.5 2C9.5 2.82843 8.82843 3.5 8 3.5Z" fill="white"/>
                      <path d="M8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5Z" fill="white"/>
                      <path d="M8 15.5C7.17157 15.5 6.5 14.8284 6.5 14C6.5 13.1716 7.17157 12.5 8 12.5C8.82843 12.5 9.5 13.1716 9.5 14C9.5 14.8284 8.82843 15.5 8 15.5Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                
                {/* NFT Image */}
                <div className="mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                
                {/* NFT Content */}
                <div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">
                      Price: <span className="text-yellow-400">{item.price}</span>
                    </p>
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-red-500 mr-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      {item.likes}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition duration-300">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainExplorePageSection;