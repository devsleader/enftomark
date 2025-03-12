'use client'
import React from 'react';
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
  }

const ExclusiveNFTDrops = () => {
  // NFT data
  const nftItems: NFTItem[] = [
    {
      id: 1,
      title: "EUPHORIA de",
      price: "0.34 ETH",
      likes: 230,
      image: "/images/nft-item/01.gif",
      author: "Gucci Lucas",
      authorImg: "/images/seller/04.png",
      coAuthors: []
    },
    {
      id: 2,
      title: "Mewao com de",
      price: "0.34 ETH",
      likes: 278,
      image: "/images/nft-item/02.jpg",
      author: "Ecalo jers",
      authorImg: "/images/seller/02.png",
      coAuthors: [
        { img: "/images/seller/01.png" },
        { img: "/images/seller/01.gif" }
      ]
    },
    {
      id: 3,
      title: "pet mice rio",
      price: "0.34 ETH",
      likes: 340,
      image: "/images/nft-item/03.jpg",
      author: "Hola moc",
      authorImg: "/images/seller/04.png",
      coAuthors: [
        { img: "/images/seller/02.png" },
        { img: "/images/seller/05.png" }
      ]
    },
    {
      id: 4,
      title: "Logical Impact",
      price: "0.34 ETH",
      likes: 330,
      image: "/images/nft-item/06.gif",
      author: "Logicto pen",
      authorImg: "/images/seller/05.gif",
      coAuthors: [
        { img: "/images/seller/06.png" }
      ]
    },
    {
      id: 5,
      title: "Fly on high",
      price: "0.34 ETH",
      likes: 355,
      image: "/images/nft-item/09.jpg",
      author: "unique lo",
      authorImg: "/images/seller/09.png",
      coAuthors: [
        { img: "/images/seller/06.png" },
        { img: "/images/seller/07.gif" }
      ]
    },
    {
      id: 6,
      title: "kiara rodri de",
      price: "0.34 ETH",
      likes: 60,
      image: "/images/nft-item/06.jpg",
      author: "Monica bel",
      authorImg: "/images/seller/05.gif",
      coAuthors: []
    },
    {
      id: 7,
      title: "EUPHORIA de",
      price: "0.34 ETH",
      likes: 230,
      image: "/images/nft-item/04.gif",
      author: "Gucci L.",
      authorImg: "/images/seller/11.png",
      coAuthors: [
        { img: "/images/seller/08.gif" },
        { img: "/images/seller/01.png" }
      ]
    },
    {
      id: 8,
      title: "Homies wall",
      price: "0.34 ETH",
      likes: 930,
      image: "/images/nft-item/08.jpg",
      author: "ptrax elm.",
      authorImg: "/images/seller/09.png",
      coAuthors: [
        { img: "/images/seller/01.png" },
        { img: "/images/seller/07.png" }
      ]
    }
  ];

  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <SectionHeading title="Exclusive aNFT Drops" />

        
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
                <div className="mb-3 rounded overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full" />
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

export default ExclusiveNFTDrops;