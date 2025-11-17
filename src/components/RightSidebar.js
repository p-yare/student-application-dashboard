import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiFileText, FiMapPin, FiUser } from 'react-icons/fi';
import './RightSidebar.css';

const RightSidebar = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [currentNews, setCurrentNews] = useState(0);

  const newsItems = [
    {
      title: 'Indian student tops harward!',
      description: 'An Indian student has achieved top honors at Harvard University, showcasing exceptional academic excellence and dedication to learning.',
      link: '#'
    }
  ];

  const events = [
    {
      title: 'Event Name Goes here',
      date: '7 Jan 2023',
      time: '4:30 PM',
      location: 'University of New York',
      organizer: 'By Kishori Gupta',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop'
    }
  ];

  const quickLinks = [
    { label: 'Learning Resourses', link: '#' },
    { label: 'Learning Resourses', link: '#' },
    { label: 'Learning Resourses', link: '#' },
    { label: 'Learning Resourses', link: '#' },
    { label: 'Learning Resourses', link: '#' }
  ];

  const contacts = [
    {
      name: 'Santosh Sharma',
      phone: '+91 9876543210',
      location: 'Hyderabad',
      email: 'sshatmal123@kcoverseas.com',
      image: 'https://ui-avatars.com/api/?name=Santosh+Sharma&background=226CF5&color=fff&size=60'
    },
    {
      name: 'Santosh Sharma',
      phone: '+91 9876543210',
      location: 'Hyderabad',
      email: 'sshatmal123@kcoverseas.com',
      image: 'https://ui-avatars.com/api/?name=Santosh+Sharma&background=226CF5&color=fff&size=60'
    },
    {
      name: 'Santosh Sharma',
      phone: '+91 9876543210',
      location: 'Hyderabad',
      email: 'sshatmal123@kcoverseas.com',
      image: 'https://ui-avatars.com/api/?name=Santosh+Sharma&background=226CF5&color=fff&size=60'
    }
  ];

  return (
    <aside className="right-sidebar">
      {/* Action Buttons */}
      <div className="d-flex justify-content-end gap-2 mb-3">
        <button className="btn btn-outline-primary action-btn">Refresh Dashboard</button>
        <button className="btn btn-primary action-btn">Register Student</button>
      </div>
      {/* News Bulletin */}
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <h5 className="card-title mb-0 fw-bold section-title">
              News Bulletin
            </h5>
          </div>
          <div className="d-flex gap-3 mb-3">
            <FiFileText className="mt-1 news-icon" size={22} />
            <div>
              <h6 className="fw-bold mb-2 news-title">{newsItems[currentNews].title}</h6>
              <p className="mb-2 news-description">
                {newsItems[currentNews].description}{' '}
                <a href={newsItems[currentNews].link} className="text-decoration-none fw-medium news-link">
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-1 news-pagination">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`btn btn-sm p-0 border-0 news-dot ${currentNews === index ? 'active' : ''}`}
                onClick={() => setCurrentNews(index)}
                aria-label={`Go to news item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title mb-0 fw-bold section-title">Upcoming Events</h5>
            <div className="d-flex gap-2">
              <button 
                className="btn btn-sm event-nav-btn"
                onClick={() => setCurrentEvent(prev => Math.max(0, prev - 1))}
                aria-label="Previous event"
                disabled={currentEvent === 0}
              >
                <FiChevronLeft size={18} />
              </button>
              <button 
                className="btn btn-sm event-nav-btn"
                onClick={() => setCurrentEvent(prev => Math.min(events.length - 1, prev + 1))}
                aria-label="Next event"
                disabled={currentEvent === events.length - 1}
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
              alt={events[currentEvent].title}
              className="img-fluid mb-3 event-image"
            />
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 className="fw-bold mb-1 event-title">{events[currentEvent].title}</h6>
                <div className="event-date">
                  {events[currentEvent].date}
                </div>
              </div>
              <div className="text-center event-time-badge">
                <div className="event-time-hour">
                  {events[currentEvent].time.split(' ')[0]}
                </div>
                <div className="event-time-period">
                  {events[currentEvent].time.split(' ')[1]}
                </div>
              </div>
            </div>
            <div className="event-details mb-2">
              <div className="d-flex align-items-center mb-1">
                <FiMapPin size={14} className="me-1 event-detail-icon" />
                <span>{events[currentEvent].location}</span>
              </div>
              <div className="d-flex align-items-center">
                <FiUser size={14} className="me-1 event-detail-icon" />
                <span>{events[currentEvent].organizer}</span>
              </div>
            </div>
            <button className="btn w-100 mt-2 event-register-btn">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-3">
        <h5 className="mb-3 fw-bold section-title">Quick Links</h5>
        <div className="d-flex flex-column gap-3">
          {quickLinks.map((link, index) => (
            <div key={index} className="card shadow-sm">
              <div className="card-body py-3 px-3">
                <a href={link.link} className="text-decoration-none d-flex justify-content-between align-items-center quick-link">
                  <span className="quick-link-text">{link.label}</span>
                  <FiExternalLink size={18} className="quick-link-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Regional Manager */}
      <div className="mb-3">
        <h5 className="mb-3 fw-bold section-title">Contact Regional Manager</h5>
        <div className="d-flex flex-column gap-3">
          {contacts.map((contact, index) => (
            <div key={index} className="card shadow-sm">
              <div className="card-body p-3">
                <div className="d-flex align-items-start gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces"
                    alt={contact.name}
                    className="contact-avatar"
                  />
                  <div className="flex-grow-1">
                    <div className="fw-bold mb-2 contact-name">{contact.name}</div>
                    <div className="mb-2 contact-info">
                      {contact.phone} <span className="contact-separator">|</span> {contact.location}
                    </div>
                    <div className="contact-email">{contact.email}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;

