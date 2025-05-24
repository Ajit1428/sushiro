'use client';

import Link from 'next/link';
import { FaHome, FaUser, FaBriefcase, FaSignOutAlt } from 'react-icons/fa';
import { GiSushis } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Header = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Check both cookie and localStorage
    const cookieUserInfo = Cookies.get('userInfo');
    const storedUserInfo = localStorage.getItem('userInfo');
    
    try {
      const userInfo = cookieUserInfo || storedUserInfo;
      if (userInfo) {
        const parsedUserInfo = JSON.parse(userInfo);
        setUserEmail(parsedUserInfo.email || null);
      }
    } catch (error) {
      console.error('Error parsing userInfo:', error);
      // Clear invalid data
      Cookies.remove('userInfo');
      localStorage.removeItem('userInfo');
      setUserEmail(null);
    }
  }, []);

  const handleLogout = () => {
    // Clear both cookie and localStorage
    Cookies.remove('userInfo');
    localStorage.removeItem('userInfo');
    setUserEmail(null);
    setShowDropdown(false);
    // Redirect to home page
    window.location.href = '/';
  };

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
            {userEmail && (
              <Link href="/job-application" className="text-white text-2xl hover:bg-red-700 p-2 rounded-lg">
                <FaBriefcase />
              </Link>
            )}
            <div className="relative">
              {userEmail ? (
                <>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="text-white text-2xl hover:bg-red-700 p-2 rounded-lg flex items-center"
                  >
                    <FaUser />
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        {userEmail}
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <FaSignOutAlt className="mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link href="/login" className="text-white text-2xl hover:bg-red-700 p-2 rounded-lg">
                  <FaUser />
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 