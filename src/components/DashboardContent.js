import React, { useState } from 'react';
import { FiCalendar, FiGlobe } from 'react-icons/fi';
import SummaryCards from './SummaryCards';
import ApplicationsTable from './ApplicationsTable';
import AlliedServicesBanner from './AlliedServicesBanner';
import RightSidebar from './RightSidebar';
import './DashboardContent.css';

const DashboardContent = () => {
  const [filters, setFilters] = useState({
    year: '',
    dateCreated: '',
    intake: '',
    countries: ''
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleApplyFilters = () => {
    console.log('Applying filters:', filters);
    // Filter logic here
  };

  return (
    <div className="dashboard-content">
      <div className="content-wrapper">
        <main className="main-content">
          {/* Greeting Section */}
          <div className="d-flex align-items-center mb-4 flex-wrap gap-3">
            <h1 className="mb-0 fw-normal">
              Hey, Good Morning <span className="fw-bold">Dikha!</span>
            </h1>
          </div>

          {/* Filters Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex gap-3 align-items-center flex-wrap filter-row-fix">
                <div className="position-relative filter-wrapper filter-year">
                  <FiCalendar className="position-absolute top-50 start-0 translate-middle-y ms-3 filter-icon" />
                  <select 
                    className="form-select filter-select-fix ps-5 pe-5"
                    value={filters.year}
                    onChange={(e) => handleFilterChange('year', e.target.value)}
                    aria-label="Select Year"
                  >
                    <option value="">Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                  <span className="select-chevron-fix">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8L10 12L14 8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
                <div className="position-relative filter-wrapper filter-date-created">
                  <FiCalendar className="position-absolute top-50 start-0 translate-middle-y ms-3 filter-icon" />
                  <select 
                    className="form-select filter-select-fix ps-5 pe-5"
                    value={filters.dateCreated}
                    onChange={(e) => handleFilterChange('dateCreated', e.target.value)}
                    aria-label="Select Date Created"
                  >
                    <option value="">Date Created</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                  </select>
                  <span className="select-chevron-fix">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8L10 12L14 8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
                <div className="position-relative filter-wrapper filter-intake">
                  <FiCalendar className="position-absolute top-50 start-0 translate-middle-y ms-3 filter-icon" />
                  <select 
                    className="form-select filter-select-fix ps-5 pe-5"
                    value={filters.intake}
                    onChange={(e) => handleFilterChange('intake', e.target.value)}
                    aria-label="Select Intake"
                  >
                    <option value="">Select intake</option>
                    <option value="fall">Fall</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                  </select>
                  <span className="select-chevron-fix">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8L10 12L14 8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
                <div className="position-relative filter-wrapper filter-countries">
                  <FiGlobe className="position-absolute top-50 start-0 translate-middle-y ms-3 filter-icon" />
                  <select 
                    className="form-select filter-select-fix ps-5 pe-5"
                    value={filters.countries}
                    onChange={(e) => handleFilterChange('countries', e.target.value)}
                    aria-label="Select Countries"
                  >
                    <option value="">Countries</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                  </select>
                  <span className="select-chevron-fix">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8L10 12L14 8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
                <div className="filter-button-wrapper">
                  <button className="btn btn-outline-primary w-100 filter-btn-fix" onClick={handleApplyFilters}>
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <SummaryCards />

          {/* Applications Table */}
          <ApplicationsTable />

          {/* Allied Services Banner */}
          <AlliedServicesBanner />
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default DashboardContent;

