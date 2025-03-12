'use client'
import React, { useState } from 'react';
import { Copy } from 'lucide-react';

const MainNFTDetailsPageSection = () => {
  const [activeTab, setActiveTab] = useState<'details' | 'bids' | 'history'>('details');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  const handleCopyAddress = () => {
    const cryptoLink = document.getElementById('cryptoLink') as HTMLInputElement;
    if (cryptoLink) {
      cryptoLink.select();
      document.execCommand('copy');
    }
  };

  return (
    <div className="bg-navy-950 text-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - NFT Image and Details */}
          <div className="w-full lg:w-1/2">
            <div className="bg-navy-900 rounded-lg overflow-hidden">
              {/* NFT Image */}
              <div className="relative">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="NFT Item" 
                  className="w-full"
                />
                <div className="absolute bottom-2 right-2 bg-gray-700 rounded-full p-1">
                  <span className="text-xs">+</span>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="p-4">
                <div className="flex border-b border-gray-700 mb-4">
                  <button 
                    className={`pb-2 px-4 ${activeTab === 'details' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('details')}
                  >
                    Details
                  </button>
                  <button 
                    className={`pb-2 px-4 ${activeTab === 'bids' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('bids')}
                  >
                    Bids
                  </button>
                  <button 
                    className={`pb-2 px-4 ${activeTab === 'history' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('history')}
                  >
                    History
                  </button>
                </div>
                
                {/* Tab Content */}
                <div>
                  {activeTab === 'details' && (
                    <div>
                      <p className="text-gray-300 mb-4">
                        This is the second batch of Cybertino Genesis NFTs for early adopters and
                        is 1 of 5. This Genesis NFT will be interactive: hold and wait for future
                        exclusive benefits and early access to new drops!
                      </p>
                      
                      {/* Owner Info */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img 
                            src="/api/placeholder/48/48" 
                            alt="Owner" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Owner</p>
                          <h6 className="font-medium">Alex joe</h6>
                        </div>
                      </div>
                      
                      {/* Additional Info */}
                      <ul className="space-y-4">
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                          <div className="font-medium mb-1 sm:mb-0">Contact Address</div>
                          <div className="flex items-center bg-navy-800 rounded px-2 py-1">
                            <input 
                              id="cryptoLink"
                              value="0x1dDB2C0897daF134545641545462E71fdD2dbDC0eB3a9Ec"
                              readOnly
                              className="bg-transparent text-sm w-40 sm:w-64 truncate pr-2"
                            />
                            <button 
                              onClick={handleCopyAddress}
                              className="text-gray-400 hover:text-white"
                            >
                              <Copy size={16} />
                            </button>
                          </div>
                        </li>
                        
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                          <div className="font-medium mb-1 sm:mb-0">Token ID</div>
                          <div className="text-gray-300">0005515456416</div>
                        </li>
                        
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                          <div className="font-medium mb-1 sm:mb-0">Blockchain</div>
                          <div className="text-gray-300">Ethereum (ETH)</div>
                        </li>
                        
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                          <div className="font-medium mb-1 sm:mb-0">Size</div>
                          <div className="text-gray-300">1000 x 1000 px.VIDEO (19.85MB)</div>
                        </li>
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'bids' && (
                    <div className="text-center py-6">
                      <span className="block text-2xl mb-2">⚖️</span>
                      <p className="text-gray-400">No active bids yet. Be the first to make a bid!</p>
                    </div>
                  )}
                  
                  {activeTab === 'history' && (
                    <ul className="space-y-4">
                      <li className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                        <p className="text-gray-300">Created by <a href="#" className="text-blue-400">@alex joe</a></p>
                        <time className="text-gray-500 text-sm">2021-08-04 23:05:07</time>
                      </li>
                      <li className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                        <p className="text-gray-300">Listed by <a href="#" className="text-blue-400">@alex joe</a></p>
                        <time className="text-gray-500 text-sm">2021-08-04 20:05:07</time>
                      </li>
                      <li className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                        <p className="text-gray-300">Owned by <a href="#" className="text-blue-400">@alex joe</a></p>
                        <time className="text-gray-500 text-sm">2021-08-04 22:05:07</time>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - NFT Details */}
          <div className="w-full lg:w-1/2">
            <div className="bg-navy-900 rounded-lg p-6">
              {/* NFT Title and Share Button */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold">#003 da Silly Cat wid baLoon NFT: size 1/50</h3>
                <button className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a1 1 0 00-1-1h-2V5a1 1 0 00-1-1H9a1 1 0 00-1 1v2H6a1 1 0 00-1 1v2a1 1 0 001 1h2v2a1 1 0 001 1h2a1 1 0 001-1v-2h2a1 1 0 001-1V8z" />
                  </svg>
                </button>
              </div>
              
              {/* Countdown */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">Ends In:</h4>
                <div className="flex space-x-4 text-center">
                  <div className="bg-navy-800 rounded p-3 w-16">
                    <span className="block text-xl font-bold">0</span>
                    <span className="text-xs text-gray-400">Days</span>
                  </div>
                  <div className="bg-navy-800 rounded p-3 w-16">
                    <span className="block text-xl font-bold">0</span>
                    <span className="text-xs text-gray-400">Hours</span>
                  </div>
                  <div className="bg-navy-800 rounded p-3 w-16">
                    <span className="block text-xl font-bold">0</span>
                    <span className="text-xs text-gray-400">Mins</span>
                  </div>
                  <div className="bg-navy-800 rounded p-3 w-16">
                    <span className="block text-xl font-bold">0</span>
                    <span className="text-xs text-gray-400">Secs</span>
                  </div>
                </div>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Price</h4>
                <p className="flex items-center text-xl font-bold">
                  <span className="inline-flex items-center mr-2">
                    <span className="w-6 h-6 bg-blue-600 rounded-full inline-flex items-center justify-center mr-1">Ξ</span>
                    2.29 ETH
                  </span>
                  <span className="text-sm font-normal text-gray-400">($ 6,227.15)</span>
                </p>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded">
                  Buy Now
                </button>
                <button className="border border-gray-600 hover:border-gray-400 text-white font-medium py-3 px-6 rounded">
                  Place a Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNFTDetailsPageSection;