import React, { useState } from 'react';
import { FiSearch, FiBell, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import './Header.css';

const Header = ({ onMenuClick = () => {} }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="dashboard-header">
      <div className="container-fluid">
        {/* Desktop/Tablet Layout */}
        <div className="header-main d-none d-lg-flex justify-content-between align-items-center h-100">
          <div className="d-flex align-items-center gap-4 flex-grow-1">
            <div className="fw-semibold text-white fs-5 header-logo">coursefinder.ai</div>
            <div className="header-search position-relative flex-grow-1">
              <FiSearch className="search-icon-absolute" />
              <input 
                type="text" 
                className="form-control header-search-input" 
                placeholder="Search by student name, ack no."
                aria-label="Search by student name or acknowledgement number"
              />
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 header-actions">
            <div className="d-flex align-items-center gap-2 text-white cursor-pointer">
              <HiSparkles size={18} />
              <span className="whats-new-link">Whats New?</span>
            </div>
            <div className="position-relative">
              <button className="btn btn-link text-white p-1 position-relative notification-btn-squarish" aria-label="Notifications">
                <FiBell size={20} />
                <span className="notification-badge-custom">2</span>
              </button>
            </div>
            <div className="d-flex align-items-center gap-2 text-white cursor-pointer header-profile">
              <span className="profile-initials">DG</span>
              <span>Dikha Goel</span>
              <FiChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="header-mobile d-flex d-lg-none justify-content-between align-items-center h-100 w-100">
          <div className="d-flex align-items-center gap-2">
            <button 
              className="btn btn-link text-white p-1 mobile-menu-btn"
              onClick={onMenuClick}
              aria-label="Toggle menu"
            >
              <FiMenu size={24} />
            </button>
            <div className="fw-semibold text-white header-logo-mobile">coursefinder.ai</div>
          </div>
          
          <div className="d-flex align-items-center gap-2">
            {/* Search Toggle Button */}
            <button 
              className="btn btn-link text-white p-1 mobile-search-toggle"
              onClick={toggleSearch}
              aria-label="Toggle search"
            >
              {isSearchOpen ? <FiX size={20} /> : <FiSearch size={20} />}
            </button>
            
            {/* Notification Bell */}
            <div className="position-relative">
              <button className="btn btn-link text-white p-1 position-relative" aria-label="Notifications">
                <FiBell size={20} />
                <span className="notification-badge-custom">2</span>
              </button>
            </div>
            
            {/* Profile Avatar Only */}
            <div className="cursor-pointer">
              <img 
                src="https://ui-avatars.com/api/?name=Dikha+Goel&background=226CF5&color=fff&size=36" 
                alt="Profile" 
                className="rounded-circle profile-avatar-mobile"
              />
            </div>
          </div>
        </div>

        {/* Mobile Search Bar (Expandable) */}
        {isSearchOpen && (
          <div className="mobile-search-container d-lg-none">
            <div className="position-relative">
              <FiSearch className="search-icon-absolute" />
              <input 
                type="text" 
                className="form-control header-search-input" 
                placeholder="Search by student name, ack no."
                aria-label="Search by student name or acknowledgement number"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

