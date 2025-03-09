
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import NavLogo from '../assest/logo.png'
import axios from 'axios';

function Header() {
  const [headerData, setHeaderData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const response = await axios.get('https://api.theplacify.com/api/headers/getAll');
        console.log(response);
        
        if (response.data && response.data.length > 0) {
          setHeaderData(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching header data:', error);
      }
    };

    fetchHeaderData();
  }, []);

  if (!headerData) {
    return (
      <header className="w-full relative z-50">
        <div className="bg-[#00BFB3] text-white py-2 text-center">
          <span>Loading...</span>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full relative z-50 px-0 lg:px-20 bg-[#f1f1f1]">
      {/* Top Bar */}
      <div className="bg-[#00BFB3] text-white py-2">
        <div className="w-[90%] mx-auto flex justify-end items-center space-x-6">
          <div className="flex items-center">
            <span className="text-sm">ContactUs:  +442039899999</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Follow us :</span>
            <div className="flex space-x-3">
              <a
                href='https://www.facebook.com/profile.php?id=61571433044193'
                className="hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={14} />
              </a>
              {/* <a
                href={headerData.socialLinks?.twitter || '#'}
                className="hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={14} />
              </a> */}
              <a
                href='https://www.linkedin.com/in/shubham-raikwar-61a901244'
                className="hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b shadow-sm bg-white " style={{marginBottom:'-25px'}}>
        <div className="w-[90%] mx-auto flex justify-between items-center h-44" style={{marginBottom:'-15px'}}>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={NavLogo}
              alt="SoftStandard Solutions"
              className="h-48 w-52"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-[#00BFB3]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>  
            <Link to="/" className="text-gray-600 hover:text-[#00BFB3] transition-colors">
             Home
            </Link>
            <Link to="/about-us" className="text-gray-600 hover:text-[#00BFB3] transition-colors">
              About us
            </Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-[#00BFB3] transition-colors">
                Services
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 w-48 bg-white shadow-lg rounded-md py-2">
                <Link to="/part-time-jobs" className="block px-4 py-2 text-gray-600 hover:text-[#00BFB3] hover:bg-gray-50">
                 Part-Time Jobs
                </Link>
                <Link to="/full-time-jobs" className="block px-4 py-2 text-gray-600 hover:text-[#00BFB3] hover:bg-gray-50">
                  {/* Business Services */}Full-Stack Jobs
                </Link>
                <Link to="/contract-jobs" className="block px-4 py-2 text-gray-600 hover:text-[#00BFB3] hover:bg-gray-50">
                  Contract Basics
                </Link>
                <Link to="/globalStaffing" className="block px-4 py-2 text-gray-600 hover:text-[#00BFB3] hover:bg-gray-50">
                  Global Staffing
                </Link>
                {/* <Link to="/staffAugmentation" className="block px-4 py-2 text-gray-600 hover:text-[#00BFB3] hover:bg-gray-50">
                  Staff Augmentation
                </Link> */}
              </div>
            </div>
            <Link to="/products" className="text-gray-600 hover:text-[#00BFB3] transition-colors">
              Products
            </Link>
            <Link to="/career" className="text-gray-600 hover:text-[#00BFB3] transition-colors">
              Career
            </Link>
            {/* <Link to="/blog" className="text-gray-600 hover:text-[#00BFB3] transition-colors">
              Blog
            </Link> */}
            <Link to="/contact-us" className="text-gray-600 hover:text-[#00BFB3] transition-colors">
              Contact us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 hover:text-[#00BFB3]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t">
            <div className="w-[90%] mx-auto py-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-600 hover:text-[#00BFB3]">
                  Home
                </Link>
                <Link to="/about-us" className="text-gray-600 hover:text-[#00BFB3]">
                  About us
                </Link>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-left text-gray-600 hover:text-[#00BFB3]"
                >
                  Services
                </button>
                {dropdownOpen && (
                  <div className="pl-4 flex flex-col space-y-2">
                    <Link to="/part-time-jobs" className="text-gray-600 hover:text-[#00BFB3]">
                      Part-Time jobs
                    </Link>
                    <Link to="/full-time-jobs" className="text-gray-600 hover:text-[#00BFB3]">
                     Full-Time Jobs
                    </Link>
                    <Link to="/contract-jobs" className="text-gray-600 hover:text-[#00BFB3]">
                     Contract Jobs
                    </Link>
                    <Link to="/globalStaffing" className="text-gray-600 hover:text-[#00BFB3]">
                      Global Staffing
                    </Link>
                    {/* <Link to="/staffAugmentation" className="text-gray-600 hover:text-[#00BFB3]">
                      Staff Augmentation
                    </Link> */}
                  </div>
                )}
                <Link to="/products" className="text-gray-600 hover:text-[#00BFB3]">
                  Products
                </Link>
                <Link to="/career" className="text-gray-600 hover:text-[#00BFB3]">
                  Career
                </Link>
                {/* <Link to="/blog" className="text-gray-600 hover:text-[#00BFB3]">
                  Blog
                </Link> */}
                <Link to="/contact-us" className="text-gray-600 hover:text-[#00BFB3]">
                  Contact us
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;