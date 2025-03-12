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
      <div className="max-w-7xl mx-auto px-4 max-w-6xl">
        <div className="wallet-inner">
          <div className="wallet-title mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">Connect your wallet</h3>
            <p className="text-gray-300">
              Connect with one of available wallet providers or{' '}
              <a href="signup.html" className="text-blue-400 hover:underline">
                create a new wallet
              </a>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {walletOptions.map((wallet) => (
              <div key={wallet.id} className="wallet-item">
                <div className="wallet-item-inner bg-navy-900 rounded-lg p-4 hover:bg-navy-800 transition-colors duration-300 h-full">
                  <div className="wallet-thumb flex items-center justify-center mb-3">
                    <a href="signin.html" className="flex items-center justify-center">
                      <img 
                        src={wallet.imageSrc} 
                        alt={`${wallet.name} wallet`} 
                        className="w-16 h-16 rounded-full"
                      />
                    </a>
                  </div>
                  <div className="wallet-content text-center">
                    <h5 className="text-lg font-medium text-white mb-1">
                      <a href="signin.html" className="hover:text-blue-400 transition-colors">
                        {wallet.name}
                      </a>
                    </h5>
                    <p className="text-gray-400 text-sm">{wallet.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 mb-0 text-gray-400 flex items-center">
            <span className="mr-2 text-blue-400">
              <i className="icofont-bulb-alt"></i>
            </span>
            We do not own your private keys and cannot access your funds without your confirmation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainWalletPageSection;