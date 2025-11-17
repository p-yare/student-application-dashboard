import React, { useState } from 'react';
import { 
  FiHome, 
  FiUsers, 
  FiFileText, 
  FiSearch, 
  FiCreditCard, 
  FiDollarSign,
  FiGlobe,
  FiBook,
  FiLink,
  FiChevronDown,
  FiChevronLeft,
  FiMessageCircle
} from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = ({ isMobileOpen = false, onMobileClose = () => {}, onCollapseChange = () => {} }) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [alliedServicesOpen, setAlliedServicesOpen] = useState(false);
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleCollapse = () => {
    const newCollapsed = !sidebarCollapsed;
    setSidebarCollapsed(newCollapsed);
    onCollapseChange(newCollapsed);
  };

  const menuItems = [
    { id: 'dashboard', icon: FiHome, label: 'Dashboard' },
    { id: 'students', icon: FiUsers, label: 'Students' },
    { id: 'applications', icon: FiFileText, label: 'Applications' },
    { id: 'search-courses', icon: FiSearch, label: 'Search Courses' },
    { id: 'wallet', icon: FiCreditCard, label: 'Wallet' },
    { id: 'commission-payments', icon: FiDollarSign, label: 'Commission Payments' },
  ];

  return (
    <>
      {isMobileOpen && <div className="sidebar-overlay" onClick={onMobileClose} aria-label="Close sidebar" />}
      <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-header">
        <button 
          className="collapse-btn"
          onClick={handleCollapse}
          aria-label="Toggle sidebar"
        >
          <FiChevronLeft className={sidebarCollapsed ? 'rotated' : ''} />
        </button>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveItem(item.id);
                if (window.innerWidth <= 992) {
                  onMobileClose();
                }
              }}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveItem(item.id);
                  if (window.innerWidth <= 992) {
                    onMobileClose();
                  }
                }
              }}
              aria-label={item.label}
            >
              <Icon className="nav-icon" />
              {!sidebarCollapsed && <span className="nav-label">{item.label}</span>}
            </div>
          );
        })}

        <div 
          className={`nav-item dropdown ${alliedServicesOpen ? 'open' : ''}`}
          onClick={() => setAlliedServicesOpen(!alliedServicesOpen)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setAlliedServicesOpen(!alliedServicesOpen);
            }
          }}
          aria-label="Allied Services"
          aria-expanded={alliedServicesOpen}
        >
          <FiGlobe className="nav-icon" />
          {!sidebarCollapsed && (
            <>
              <span className="nav-label">Allied Services</span>
              <FiChevronDown className={`dropdown-arrow ${alliedServicesOpen ? 'rotated' : ''}`} />
            </>
          )}
        </div>

        <div 
          className={`nav-item dropdown ${quickLinksOpen ? 'open' : ''}`}
          onClick={() => setQuickLinksOpen(!quickLinksOpen)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setQuickLinksOpen(!quickLinksOpen);
            }
          }}
          aria-label="Quick Links"
          aria-expanded={quickLinksOpen}
        >
          <FiLink className="nav-icon" />
          {!sidebarCollapsed && (
            <>
              <span className="nav-label">Quick Links</span>
              <FiChevronDown className={`dropdown-arrow ${quickLinksOpen ? 'rotated' : ''}`} />
            </>
          )}
        </div>

        <div 
          className="nav-item"
          role="button"
          tabIndex={0}
          aria-label="Learning Resources"
        >
          <FiBook className="nav-icon" />
          {!sidebarCollapsed && <span className="nav-label">Learning Resources</span>}
        </div>
      </nav>

      <div className="sidebar-footer">
        <div 
          className="nav-item feedback-item"
          role="button"
          tabIndex={0}
          aria-label="Submit feedback"
        >
          <FiMessageCircle className="nav-icon" />
          {!sidebarCollapsed && <span className="nav-label">Submit feedback</span>}
        </div>
      </div>
      </aside>
    </>
  );
};

export default Sidebar;

