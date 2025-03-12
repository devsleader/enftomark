'use client'
import React from 'react';
import SectionHeading from './SectionHeading';

interface WalletOption {
  id: string;
  name: string;
  image: string;
}

const WalletSection = () => {
  const walletOptions: WalletOption[] = [
    {
      id: '1',
      name: 'Meta Mask',
      image: '/images/wallet/06.png',
    },
    {
      id: '2',
      name: 'Binance',
      image: '/images/wallet/07.png',
    },
    {
      id: '3',
      name: 'Formatic',
      image: '/images/wallet/08.png',
    },
    {
      id: '4',
      name: 'Autherum',
      image: '/images/wallet/01.png',
    },
    {
      id: '5',
      name: 'Coinbase',
      image: '/images/wallet/03.png',
    },
    {
      id: '6',
      name: 'Portis',
      image: '/images/wallet/05.png',
    },
  ];

  return (
    <section className="py-16 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <SectionHeading title="ALL WALLET OPTIONS" />
        

        {/* Wallet Options Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {walletOptions.map((wallet) => (
            <div key={wallet.id} className="wallet-item">
              <div className="rounded-lg bg-black border border-gray-800 hover:border-yellow-500 transition-all p-4 text-center">
                <div className="wallet-thumb mb-4">
                  <a href="signin.html" className="block">
                    <div className="w-16 h-16 mx-auto">
                      <img 
                        src={wallet.image} 
                        alt={`${wallet.name} wallet`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                </div>
                <div className="wallet-content">
                  <h5 className="text-white text-lg font-medium">
                    <a href="signin.html" className="hover:text-yellow-500 transition-colors">
                      {wallet.name}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WalletSection;