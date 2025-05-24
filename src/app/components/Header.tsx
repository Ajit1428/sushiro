'use client';

import Link from 'next/link';
import { FaHome, FaUser, FaBriefcase } from 'react-icons/fa';
import { GiSushis } from 'react-icons/gi';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-red-600 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section - Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-white text-4xl">
              <GiSushis />
            </Link>
          </div>

          {/* Center section - Navigation */}
          <nav className="flex items-center justify-end space-x-6 w-full">
            <Link href="/" className="text-white text-2xl hover:bg-red-700 p-2 rounded-lg">
              <FaHome />
            </Link>
            <Link href="/jobs" className="text-white text-2xl hover:bg-red-700 p-2 rounded-lg">
              <FaBriefcase />
            </Link>
            <Link href="/login" className="text-white text-2xl hover:bg-red-700 p-2 rounded-lg">
              <FaUser />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 