'use client'
import React from 'react';

interface WalletOption {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
}

const MainWalletPageSection = () => {
  const walletOptions: WalletOption[] = [
    {
      id: 'metamask',
      name: 'Meta Mask',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      imageSrc: '/images/wallet/06.png',
    },
    {
      id: 'binance',
      name: 'Binance',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      imageSrc: '/images/wallet/07.png',
    },
    {
      id: 'formatic',
      name: 'Formatic',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      imageSrc: '/images/wallet/08.png',
    },
    {
      id: 'autherum',
      name: 'Autherum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      imageSrc: '/images/wallet/01.png',
    },
    {
      id: 'bitski',
      name: 'Bitski',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      imageSrc: '/images/wallet/02.png',
    },
    {
      id: 'coinbase',
      name: 'Coinbase',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      imageSrc: '/images/wallet/03.png',
    },
    {
      id: 'dapper',
      name: 'Dapper',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      imageSrc: '/images/wallet/04.png',
    },
    {
      id: 'portis',
      name: 'Portis',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      imageSrc: '/images/wallet/05.png',
    },
  ];

  return (
    <section className="w-full py-12 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4">
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Connect your wallet</h3>
            <p className="text-gray-300 text-sm">
              Connect with one of available wallet 
              providers or <a href="#" className="text-blue-500 hover:underline">create a new wallet</a>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {walletOptions.map((wallet) => (
              <div key={wallet.id} className="wallet-item">
                <div className="bg-navy-900 rounded-lg p-6 hover:bg-navy-800 transition-colors duration-300 h-full">
                  <div className="flex items-start mb-3">
                    <img 
                      src={wallet.imageSrc} 
                      alt={`${wallet.name} wallet`} 
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="text-left">
                    <h5 className="text-base font-medium text-white mb-1">
                      {wallet.name}
                    </h5>
                    <p className="text-gray-400 text-xs">{wallet.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-sm text-gray-400 flex items-center">
            <span className="mr-2 text-blue-500 text-lg">
              ⓘ
            </span>
            We do not own your private keys and cannot access your funds without your confirmation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainWalletPageSection;