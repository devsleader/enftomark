'use client'
import React from 'react';
import SectionHeading from './SectionHeading';

interface Seller {
    id: string;
    name: string;
    price: string;
    nftImage: string;
    authorImage: string;
    bgColor: string;
}
const TopSellersSection = () => {
  const sellers: Seller[] = [
    {
      id: '01',
      name: 'Gihan Fernindo',
      price: '$23,002.98',
      nftImage: '/images/nft-item/style-2/01.jpg',
      authorImage: '/images/seller/04.png',
      bgColor: 'border-pink-600'
    },
    {
      id: '02',
      name: 'liao 5er',
      price: '$23,002.98',
      nftImage: '/images/nft-item/style-2/02.jpg',
      authorImage: '/images/seller/02.gif',
      bgColor: 'border-blue-500'
    },
    {
      id: '03',
      name: 'xox3 nindo',
      price: '$23,002.98',
      nftImage: '/images/nft-item/style-2/03.jpg',
      authorImage: '/images/seller/03.png',
      bgColor: 'border-orange-500'
    },
    {
      id: '04',
      name: 'raxel mrh',
      price: '$23,002.98',
      nftImage: '/images/nft-item/style-2/04.jpg',
      authorImage: '/images/seller/05.gif',
      bgColor: 'border-purple-500'
    },
    {
      id: '05',
      name: 'lsr 33xr',
      price: '$23,002.98',
      nftImage: '/images/nft-item/style-2/05.jpg',
      authorImage: '/images/seller/02.png',
      bgColor: 'border-green-500'
    },
    {
      id: '06',
      name: 'Gihan Fernindo',
      price: '$23,002.98',
      nftImage: '/images/nft-item/style-2/06.jpg',
      authorImage: '/images/seller/07.gif',
      bgColor: 'border-pink-600'
    },
    {
      id: '07',
      name: 'xihan f3rd',
      price: '$23,002.98',
      nftImage: '/images/nft-item/style-2/07.jpg',
      authorImage: '/images/seller/05.png',
      bgColor: 'border-blue-500'
    },
    {
      id: '08',
      name: 'Leo F3s',
      price: '$23,002.98',
      nftImage: '/images/nft-item/style-2/08.jpg',
      authorImage: '/images/seller/04.gif',
      bgColor: 'border-pink-300'
    }
  ];

  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <SectionHeading title="TOP SELLERS" /> 
        

        {/* Section Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sellers.map((seller) => (
            <div 
              key={seller.id} 
              className="relative border-2 p-4 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              style={{
                borderImage: 'linear-gradient(125deg, #FFE53B 0%, #FF2525 37%, #fd00ff 100%)',
                borderImageSlice: 1
              }}
            >
              <div className="relative">
                {/* NFT Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={seller.nftImage} 
                    alt={`NFT by ${seller.name}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Area */}
                <div className="ps-2 bg-black">
                  <div className="flex items-center gap-4">
                    {/* Author Avatar with Verification Badge */}
                    <div className="relative z-10 -mt-10">
                      <div className="border-4 border-black rounded-full w-14 h-14 overflow-hidden bg-gray-800">
                        <img 
                          src={seller.authorImage} 
                          alt={`${seller.name} avatar`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                    
                    {/* Seller Details */}
                    <div className="flex items-center gap-3 pt-2">
                      {/* Rank Number */}
                      <div className="text-3xl font-bold">
                        {seller.id}
                      </div>
                      
                      {/* Author Info */}
                      <div>
                        <h5 className="font-medium text-white">
                          {seller.name}
                        </h5>
                        <p className="text-yellow-400 font-medium text-sm">
                          {seller.price}
                        </p>
                      </div>
                    </div>
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

export default TopSellersSection;