'use client'
import React from 'react';
import NFTSlider from './NFTSlider';



const NFTMarketplaceHero = () => {
  return (
    <section className="banner-section bg-black relative overflow-hidden py-12 md:py-16 lg:py-20" style={{backgroundImage: "url(/images/banner/bg-4.jpg)"}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="banner-wrapper">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side - Text content */}
            <div className="lg:w-7/12 w-full">
              <div className="banner-content text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  <span className="text-yellow-500">Create</span>, Collect And <br />
                  <span className="text-yellow-500">Sell</span> Digital Items.
                </h1>
                <p className="text-gray-200 mb-6 max-w-xl mx-auto lg:mx-0">
                  Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens.
                  Buy, Sell, And Discover Exclusive Digital Assets.
                </p>
                <div className="banner-btns flex flex-wrap justify-center lg:justify-start gap-4">
                  <a href="#" className="bg-yellow-500 relative overflow-hidden text-white hover:text-black font-semibold py-3 px-6 rounded-full transition duration-300 group">
                    <span className="relative z-10">Explore</span>
                    <span className="absolute bottom-0 left-0 w-full h-0 bg-white transition-all duration-300 group-hover:h-full"></span>
                  </a>
                  <a href="#" className="bg-transparent relative overflow-hidden text-white hover:text-black border border-white font-semibold py-3 px-6 rounded-full transition duration-300 group">
                    <span className="relative z-10">Create</span>
                    <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right side - NFT Slider */}
            <div className="lg:w-5/12 w-full">
            < NFTSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTMarketplaceHero;