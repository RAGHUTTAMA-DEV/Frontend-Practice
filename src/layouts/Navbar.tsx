
import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { ChevronDown } from "lucide-react";
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white p-4 m-3 border border-gray-200 rounded-full h-16 shadow-sm">
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
      
      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center flex-shrink-0">
        <NavItem label="AI Tools" hasDropdown />
        <NavItem label="Categories" hasDropdown />
        <NavItem label="Compare" />
        <NavItem label="Blog" />
        <NavItem label="Submit" />
        <NavItem label="Promote" />
        
        {/* Login Button */}
        <Button 
          variant="default" 
          className="ml-4 px-6 py-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          Login
        </Button>
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg rounded-lg mt-2 p-4 z-50">
          <div className="flex flex-col space-y-3">
            <MobileNavItem label="AI Tools" hasDropdown />
            <MobileNavItem label="Categories" hasDropdown />
            <MobileNavItem label="Compare" />
            <MobileNavItem label="Blog" />
            <MobileNavItem label="Submit" />
            <MobileNavItem label="Promote" />
            <Button 
              variant="default" 
              className="w-full rounded-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

interface NavItemProps {
  label: string;
  hasDropdown?: boolean;
}

const NavItem = ({ label, hasDropdown = false }: NavItemProps) => (
  <div className={cn("flex items-center font-medium px-3", 
    label === "AI Tools" ? "text-blue-500" : ""
  )}>
    <span>{label}</span>
    {hasDropdown && (
      <ChevronDown className="ml-1 w-4 h-4" />
    )}
  </div>
);

const MobileNavItem = ({ label, hasDropdown = false }: NavItemProps) => (
  <div className={cn("flex items-center justify-between font-medium py-2", 
    label === "AI Tools" ? "text-blue-500" : ""
  )}>
    <span>{label}</span>
    {hasDropdown && (
      <ChevronDown className="w-4 h-4" />
    )}
  </div>
);

export default Navbar;