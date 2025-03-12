'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="header__logo">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-amber-500">ENFTO</span>
                <span className="text-white">MARK</span>
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <form className={`hidden md:flex items-center bg-gray-800 rounded-full px-4 py-2 mx-4 flex-1 max-w-xl ${isSearchOpen ? 'flex' : ''}`}>
            <input
              type="text"
              placeholder="Search items, collections, and creators"
              className="bg-transparent border-none outline-none w-full text-white"
            />
            <button type="button" className="ml-2">
              <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
              </svg>
            </button>
          </form>

          {/* Navigation */}
          <nav className={`hidden lg:flex items-center space-x-6 ml-auto`}>
          <Link href="/" className="font-medium hover:text-amber-500">Home</Link>
          <Link href="/explore" className="font-medium hover:text-amber-500">Explore NFT&apos;s</Link>
          <Link href="/nft-details" className="font-medium hover:text-amber-500">NFT Details</Link>
          <Link href="/wallet-connect" className="font-medium hover:text-amber-500">Wallet Connect</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center ml-4 space-x-4">
            {/* Search Button (Mobile) */}
            <button 
              className="lg:hidden text-white hover:text-amber-500" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
              </svg>
            </button>

            {/* User Profile */}
            <div className="relative group">
              <Link href="#" className="flex items-center">
                <span className="bg-amber-500 rounded-full p-1 mr-2">
                  <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0-6A2,2,0,1,1,10,8,2,2,0,0,1,12,6Zm8.21,13.89l-2.8-2.8a1,1,0,0,0-1.42,1.42l2.8,2.8a1,1,0,0,0,1.42,0A1,1,0,0,0,20.21,19.89Zm-2-10a7.91,7.91,0,0,0-1.73-3.32,8,8,0,0,0-11.32,0A7.91,7.91,0,0,0,3.39,9.89a8,8,0,0,0,.53,8.37,8.06,8.06,0,0,0,6.95,3.44,8,8,0,0,0,5.7-2.18,1,1,0,0,0-1.42-1.42,6,6,0,0,1-8.5,0,6,6,0,0,1-1.23-6.77A5.89,5.89,0,0,1,7.44,7.44a6,6,0,0,1,8.5,0A5.89,5.89,0,0,1,18.06,11.11a6,6,0,0,1-.3,3.64,1,1,0,0,0,.47,1.34,1,1,0,0,0,1.34-.47A7.94,7.94,0,0,0,18.21,9.89Z" />
                  </svg>
                </span>
                <span className="hidden md:inline">Alex Joe</span>
              </Link>
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
                  <svg className="w-4 h-4 inline mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                  </svg>
                  Profile
                </Link>
                <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
                  <svg className="w-4 h-4 inline mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                  </svg>
                  Activity
                </Link>
                <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
                  <svg className="w-4 h-4 inline mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                  </svg>
                  Sign Up
                </Link>
                <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
                  <svg className="w-4 h-4 inline mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
                  </svg>
                  Sign In
                </Link>
                <hr className="border-gray-700 my-1" />
                <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
                  Sign Out
                  <svg className="w-4 h-4 inline ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12Z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Wallet */}
            <Link href="#" className="flex items-center bg-black border border-gray-700 rounded-full px-4 py-2 hover:border-amber-500">
              <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z" />
              </svg>
              <span className="hidden md:inline">234.98ETH</span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex flex-col space-y-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
            <Link href="/" className="py-2 font-medium hover:text-amber-500">Home</Link>
            <Link href="/explore" className="py-2 font-medium hover:text-amber-500">Explore NFT&apos;s</Link>
            <Link href="/nft-details" className="py-2 font-medium hover:text-amber-500">NFT Details</Link>
            <Link href="/wallet-connect" className="py-2 font-medium hover:text-amber-500">Wallet Connect</Link>
            </nav>
          </div>
        )}

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="mt-4 lg:hidden">
            <form className="flex items-center bg-gray-800 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search items, collections, and creators"
                className="bg-transparent border-none outline-none w-full text-white"
              />
              <button type="button" className="ml-2">
                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                </svg>
              </button>
              <button type="button" className="ml-2" onClick={() => setIsSearchOpen(false)}>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;