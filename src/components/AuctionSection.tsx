'use client'
import React from 'react';
import { useEffect } from 'react';
import SectionHeading from './SectionHeading';

interface NFTItem {
    id: number;
    title: string;
    image: string;
    price: string;
    likes: number;
    author: string;
    authorImg: string;
    coAuthors: { img: string }[];
    endTime?: Date;
}

const AuctionSection = () => {
  // NFT data
  const nftItems = React.useMemo<NFTItem[]>(() => [
    {
      id: 1,
      title: "Walking On Air",
      price: "0.34 ETH",
      likes: 230,
      image: "/images/nft-item/04.gif",
      author: "Jhon Doe",
      authorImg: "/images/seller/01.gif",
      coAuthors: [
        { img: "/images/seller/01.png" }
      ],
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000)
    },
    {
      id: 2,
      title: "EUPHORIA de",
      price: "0.34 ETH",
      likes: 230,
      image: "/images/nft-item/03.jpg",
      author: "Gucci L.",
      authorImg: "/images/seller/02.png",
      coAuthors: [
        { img: "/images/seller/01.png" },
        { img: "/images/seller/02.gif" }
      ],
      endTime: new Date(Date.now() + 48 * 60 * 60 * 1000)
    },
    {
      id: 3,
      title: "Futuristic cols",
      price: "0.34 ETH",
      likes: 130,
      image: "/images/nft-item/04.jpg",
      author: "Rassel mrh",
      authorImg: "/images/seller/04.png",
      coAuthors: [],
      endTime: new Date(Date.now() + 36 * 60 * 60 * 1000)
    },
    {
      id: 4,
      title: "Space Crafts",
      price: "0.34 ETH",
      likes: 230,
      image: "/images/nft-item/05.gif",
      author: "Blexa z",
      authorImg: "/images/seller/04.gif",
      coAuthors: [
        { img: "/images/seller/04.png" },
        { img: "/images/seller/05.png" }
      ],
      endTime: new Date(Date.now() + 72 * 60 * 60 * 1000)
    },
  ], []);

  // Add countdown state and effect
  const [timeLeft, setTimeLeft] = React.useState<{[key: number]: {days: number, hours: number, minutes: number, seconds: number}}>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      
      const newTimeLeft = nftItems.reduce((acc, item) => {
        if (item.endTime) {
          const difference = item.endTime.getTime() - now;
          
          if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            acc[item.id] = { days, hours, minutes, seconds };
          }
        }
        return acc;
      }, {} as {[key: number]: {days: number, hours: number, minutes: number, seconds: number}});
      
      setTimeLeft(newTimeLeft);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [nftItems]);

  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <SectionHeading title="Live Auctions" />
        
        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nftItems.map((item) => (
            <div key={item.id} className="relative border-2 p-4 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            style={{
              borderImage: 'linear-gradient(125deg, #FFE53B 0%, #FF2525 37%, #fd00ff 100%)',
              borderImageSlice: 1
            }}
            >
              <div className="">
                {/* NFT Top Part */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {item.coAuthors && item.coAuthors.map((coAuthor, idx) => (
                        <div key={idx} className="h-8 w-8 rounded-full border-2 border-gray-800 overflow-hidden">
                          <img src={coAuthor.img} alt="author" className="w-full h-full object-cover" />
                        </div>
                      ))}
                      <div className="flex items-center h-8">
                        <div className="h-8 w-8 rounded-full border-2 border-gray-800 overflow-hidden">
                          <img src={item.authorImg} alt="author" className="w-full h-full object-cover" />
                        </div>
                        <span className="ml-2 text-sm truncate max-w-24">{item.author}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
                
                {/* NFT Image */}
                <div className="mb-3 rounded overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full" />
                  
                  {/* Countdown Timer */}
                  {timeLeft[item.id] && (
                    <div className="absolute bottom-4 left-0 right-0 mx-auto w-[80%]">
                      <div className="bg-indigo-600 text-white rounded-full py-2 px-4 flex justify-center items-center space-x-2">
                        <div className="text-center">
                          <span className="font-bold">{timeLeft[item.id].days.toString().padStart(2, '0')}</span>
                          <span className="font-bold">D</span>
                        </div>
                        <div className="text-center">
                          <span className="font-bold">{timeLeft[item.id].hours.toString().padStart(2, '0')}</span>
                          <span className="font-bold">H</span>
                        </div>
                        <div className="text-center">
                          <span className="font-bold">{timeLeft[item.id].minutes.toString().padStart(2, '0')}</span>
                          <span className="font-bold">M</span>
                        </div>
                        <div className="text-center">
                          <span className="font-bold">{timeLeft[item.id].seconds.toString().padStart(2, '0')}</span>
                          <span className="font-bold">S</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* NFT Content */}
                <div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">
                      Price: <span className="text-yellow-400">{item.price}</span>
                    </p>
                    <div className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      {item.likes}
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

export default AuctionSection;