'use client'
import React, { useState, useEffect } from 'react';
import NFTSlider from './NFTSlider';

const NFTCard = ({ author, imgSrc, title, price, likes, isGif = false }: {
  author: { name: string, img: string },
  imgSrc: string,
  title: string,
  price: string,
  likes: number,
  isGif?: boolean
}) => {
  return (
    <div className="nft-item bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="nft-inner p-3">
        {/* NFT top part */}
        <div className="nft-item-top flex justify-between items-center mb-3">
          <div className="author-part">
            <div className="flex items-center">
              <div className="single-author flex items-center">
                <a href="#" className="relative mr-2">
                  <img 
                    src={author.img} 
                    alt="author-img" 
                    className="w-8 h-8 rounded-full border-2 border-blue-500"
                  />
                  <span className="absolute -right-0.5 -bottom-0.5 w-3 h-3 bg-blue-500 rounded-full border border-white"></span>
                </a>
                <h6 className="text-sm font-semibold"><a href="#">{author.name}</a></h6>
              </div>
            </div>
          </div>
          <div className="more-part">
            <div className="dropdown relative">
              <button className="text-gray-500 hover:text-gray-700">
                <i className="icofont-flikr text-lg">⋮</i>
              </button>
            </div>
          </div>
        </div>
        
        {/* NFT bottom part */}
        <div className="nft-item-bottom">
          <div className="nft-thumb mb-3">
            <img 
              src={imgSrc} 
              alt="nft-img" 
              className="w-full h-40 object-cover rounded-lg" 
            />
          </div>
          <div className="nft-content">
            <h4 className="text-lg font-bold mb-2"><a href="#">{title}</a></h4>
            <div className="price-like flex justify-between items-center">
              <p className="nft-price text-sm">
                Price: <span className="text-yellow-500 font-semibold">{price} ETH</span>
              </p>
              <a href="#" className="nft-like flex items-center text-sm text-gray-500">
                <i className="icofont-heart mr-1">❤️</i> {likes}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NFTMarketplaceHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nftSlides = [
    {
      author: { name: 'rasselmrh', img: '/images/seller/04.png' },
      imgSrc: '/images/banner/01.gif',
      title: 'Black Cat',
      price: '0.34',
      likes: 230,
      isGif: true
    },
    {
      author: { name: 'Gucci Lucas', img: '/images/seller/04.png' },
      imgSrc: '/images/banner/06.jpg',
      title: 'EUPHORIA de',
      price: '0.34',
      likes: 230
    },
    {
      author: { name: 'Imo35 ucas', img: '/images/seller/03.png' },
      imgSrc: '/images/banner/05.jpg',
      title: 'Future Rocket',
      price: '0.34',
      likes: 230
    },
    {
      author: { name: 'lcus x3', img: '/images/seller/04.png' },
      imgSrc: '/images/banner/02.gif',
      title: 'Silly C4T de',
      price: '0.34',
      likes: 230,
      isGif: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % nftSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + nftSlides.length) % nftSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

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