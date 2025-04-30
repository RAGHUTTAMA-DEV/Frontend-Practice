import { useState } from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Input } from '../components/ui/input';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white p-4 m-3 border border-black-400 rounded-4xl h-16">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <div className="flex items-center text-xl font-bold">
          <span className="bg-blue-500 text-white p-1 rounded mr-1">AI</span>
          <span>ToolBook</span>
        </div>
      </div>
      
      {/* Search Box */}
      <div className="relative mx-6 w-64 flex-shrink-0">
        <Input
          type="search"
          placeholder="Search"
          className="pl-8 pr-4 py-1 h-10 w-full rounded-full border border-gray-300 bg-gray-50"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="16"
          height="16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
          />
        </svg>
      </div>
      
      {/* Navigation Links */}
      <div className="flex items-center flex-shrink-0">
        <div className="flex items-center text-blue-500 font-medium px-3">
          <span>AI Tools</span>
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        
        <div className="flex items-center font-medium px-3">
          <span>Categories</span>
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        
        <Link href="#" underline="none" className="font-medium px-3">
          Compare
        </Link>
        
        <Link href="#" underline="none" className="font-medium px-3">
          Blog
        </Link>
        
        <Link href="#" underline="none" className="font-medium px-3">
          Submit
        </Link>
        
        <Link href="#" underline="none" className="font-medium px-3">
          Promote
        </Link>
        
        {/* Login Button */}
        <Button 
          variant="contained" 
          className="ml-4 px-6 py-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          Login
        </Button>
      </div>
    </div>
  );
}