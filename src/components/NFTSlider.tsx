'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Autoplay } from 'swiper/modules';

// NFT data array
const nftData = [
  {
    id: 1,
    author: "rasselmrh",
    authorImg: "/images/seller/04.png",
    nftImg: "/images/banner/01.gif",
    title: "Black Cat",
    price: "0.34 ETH",
    likes: 230
  },
  {
    id: 2,
    author: "Gucci Lucas",
    authorImg: "/images/seller/04.png",
    nftImg: "/images/banner/06.jpg",
    title: "EUPHORIA de",
    price: "0.34 ETH",
    likes: 230
  },
  {
    id: 3,
    author: "Imo35 ucas",
    authorImg: "/images/seller/03.png",
    nftImg: "/images/banner/05.jpg",
    title: "Future Rocket",
    price: "0.34 ETH",
    likes: 230
  },
  {
    id: 4,
    author: "lcus x3",
    authorImg: "/images/seller/04.png",
    nftImg: "/images/banner/02.gif",
    title: "Silly C4T de",
    price: "0.34 ETH",
    likes: 230
  }
];

const NFTSlider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {nftData.map((nft) => (
          <SwiperSlide key={nft.id}>
            <div className="relative">
              {/* 3D stacked card effect with multiple layers */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-black rounded-xl border-2 transform rotate-2"
                style={{
                  borderImage: 'linear-gradient(125deg, #FFE53B 0%, #FF2525 37%, #fd00ff 100%)',
                  borderImageSlice: 1,
                  zIndex: 1
                }}
              ></div>
              <div className="absolute -bottom-2 -right-2 w-full h-full bg-black rounded-xl border-2 transform rotate-1"
                style={{
                  borderImage: 'linear-gradient(125deg, #FFE53B 0%, #FF2525 37%, #fd00ff 100%)',
                  borderImageSlice: 1,
                  zIndex: 2
                }}
              ></div>
              
              {/* Main card */}
              <div className="bg-black rounded-xl border-2 p-4 overflow-hidden relative z-10"
                style={{
                  borderImage: 'linear-gradient(125deg, #FFE53B 0%, #FF2525 37%, #fd00ff 100%)',
                  borderImageSlice: 1
                }}
              >
                <div className="flex justify-between items-center pb-4">
                  <div className="flex items-center gap-2">
                    <img src={nft.authorImg} alt="author" className="w-8 h-8 rounded-full" />
                    <span className="text-white font-medium">{nft.author}</span>
                    <span className="text-white bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">✓</span>
                  </div>
                  <div className="text-white">••</div>
                </div>
                <div className="w-full overflow-hidden">
                  <img src={nft.nftImg} alt="NFT" className="w-full h-full" />
                </div>
                <div className="p-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{nft.title}</h3>
                  <div className="flex justify-between items-center">
                    <div>Price: <span className="text-teal-400">{nft.price}</span></div>
                    <div className='flex items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      {nft.likes}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NFTSlider;