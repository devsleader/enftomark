'use client'
import React from 'react';
import { Twitter, Facebook, MessageSquare, Instagram, Dribbble } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full text-white">
      {/* Footer Top Section with Background Image */}
      <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/images/footer/bg-4.jpg)' }}>
        {/* Newsletter Section */}
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center">
              {/* Newsletter Form */}
              <div className="w-full lg:w-1/2">
                <div>
                  <div className="mb-4">
                    <h4 className="text-xl font-bold">Get The Latest Rarible Updates</h4>
                  </div>
                  <form className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      placeholder="Your Mail Address"
                      className="bg-gray-800 px-4 py-3 rounded-md sm:rounded-r-none mb-2 sm:mb-0 w-[70%]"
                    />
                    <button
                      type="submit"
                      className="bg-yellow-500 hover:bg-yellow-600 px-4 py-3 rounded-md sm:rounded-l-none font-medium text-black"
                    >
                      Subscribe now
                    </button>
                  </form>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="w-full lg:w-1/2">
                <div className=" lg:pl-5 mt-6 lg:mt-0">
                  <div className=" mb-4">
                    <h4 className="text-xl font-bold">Join the Community</h4>
                  </div>
                  <ul className="flex flex-wrap items-center mb-0 gap-3">
                    {[
                      { name: 'twitter', icon: <Twitter size={20} /> },
                      { name: 'discord', icon: <Facebook size={20} /> },
                      { name: 'reddit', icon: <MessageSquare size={20} /> },
                      { name: 'instagram', icon: <Instagram size={20} /> },
                      { name: 'dribbble', icon: <Dribbble size={20} /> }
                    ].map((platform) => (
                      <li key={platform.name} className="">
                        <a 
                          href="#" 
                          className="bg-yellow-500 w-10 h-10 hover:rounded-full flex items-center justify-center text-black"
                        >
                          {platform.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Links Section */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {/* About Column */}
              <div>
                <div className="">
                  <h5 className="text-lg font-bold mb-4">About</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Explore</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">How it works</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Support</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Become a partner</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* NFT Marketplace Column 1 */}
              <div>
                <div className="">
                  <h5 className="text-lg font-bold mb-4">NFT Marketplace</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Sell your assets</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">FAQ</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Support</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Privacy/Policy</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Your purchases</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Company Column */}
              <div>
                <div className="">
                  <h5 className="text-lg font-bold mb-4">Company</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">About</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Mission & Team</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Our Blog</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Services</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">We&apos;re Hiring</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* NFT Marketplace Column 2 */}
              <div>
                <div className="">
                  <h5 className="text-lg font-bold mb-4">NFT Marketplace</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Sell your assets</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">FAQ</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Support</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Privacy/Policy</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Your purchases</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Community Column */}
              <div>
                <div className="">
                  <h5 className="text-lg font-bold mb-4">Community</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">NFT Token</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Discussion</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Voting</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Suggest Feature</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2  rounded-full mr-2 border border-yellow-500"></span>
                      <a href="#" className="hover:text-yellow-500 transition-colors">Language</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="footer-bottom bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center py-4 mb-0">
            All rights reserved © Enftomark || Design By:{' '}
            <a href="#" className="text-yellow-500 hover:underline">
              codexcoder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;