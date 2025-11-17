import React, { useState } from 'react';
import { FiMaximize2, FiChevronUp, FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './ApplicationsTable.css';

const ApplicationsTable = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const applications = [
    {
      ackNo: '117110/22-23',
      studentName: 'Rishi Joshi',
      email: 'rishijoshi@gmail.com',
      university: 'Sheffield Hallam University',
      program: 'Msc International Business',
      pendingSince: '1 Day',
      date: '12 Dec 202'
    },
    {
      ackNo: '117111/22-23',
      studentName: 'Tushar Joshi',
      email: 'tusharjoshi@gmail.com',
      university: 'University of Manchester',
      program: 'MBA',
      pendingSince: '2 Days',
      date: '11 Dec 202'
    },
    {
      ackNo: '117112/22-23',
      studentName: 'Priya Sharma',
      email: 'priyasharma@gmail.com',
      university: 'London School of Economics',
      program: 'MSc Economics',
      pendingSince: '3 Days',
      date: '10 Dec 202'
    },
    {
      ackNo: '117113/22-23',
      studentName: 'Amit Patel',
      email: 'amitpatel@gmail.com',
      university: 'University of Oxford',
      program: 'MSc Computer Science',
      pendingSince: '4 Days',
      date: '9 Dec 202'
    },
    {
      ackNo: '117114/22-23',
      studentName: 'Neha Gupta',
      email: 'nehagupta@gmail.com',
      university: 'Cambridge University',
      program: 'MBA',
      pendingSince: '5 Days',
      date: '8 Dec 202'
    },
    {
      ackNo: '117115/22-23',
      studentName: 'Rahul Kumar',
      email: 'rahulkumar@gmail.com',
      university: 'Imperial College London',
      program: 'MSc Data Science',
      pendingSince: '6 Days',
      date: '7 Dec 202'
    },
    {
      ackNo: '117116/22-23',
      studentName: 'Anjali Singh',
      email: 'anjalisingh@gmail.com',
      university: 'University of Edinburgh',
      program: 'MSc Finance',
      pendingSince: '7 Days',
      date: '6 Dec 202'
    },
    {
      ackNo: '117117/22-23',
      studentName: 'Vikram Rao',
      email: 'vikramrao@gmail.com',
      university: 'University of Bristol',
      program: 'MSc Engineering',
      pendingSince: '8 Days',
      date: '5 Dec 202'
    },
    {
      ackNo: '117118/22-23',
      studentName: 'Pooja Reddy',
      email: 'poojareddy@gmail.com',
      university: 'King\'s College London',
      program: 'MSc Psychology',
      pendingSince: '9 Days',
      date: '4 Dec 202'
    },
    {
      ackNo: '117119/22-23',
      studentName: 'Arjun Mehta',
      email: 'arjunmehta@gmail.com',
      university: 'University of Warwick',
      program: 'MSc Business Analytics',
      pendingSince: '10 Days',
      date: '3 Dec 202'
    },
    {
      ackNo: '117120/22-23',
      studentName: 'Divya Nair',
      email: 'divyanair@gmail.com',
      university: 'Durham University',
      program: 'MSc Marketing',
      pendingSince: '11 Days',
      date: '2 Dec 202'
    },
    {
      ackNo: '117121/22-23',
      studentName: 'Karan Kapoor',
      email: 'karankapoor@gmail.com',
      university: 'University of Glasgow',
      program: 'MBA',
      pendingSince: '12 Days',
      date: '1 Dec 202'
    },
    {
      ackNo: '117122/22-23',
      studentName: 'Shreya Iyer',
      email: 'shreyaiyer@gmail.com',
      university: 'University of Birmingham',
      program: 'MSc Management',
      pendingSince: '13 Days',
      date: '30 Nov 202'
    },
    {
      ackNo: '117123/22-23',
      studentName: 'Rohan Desai',
      email: 'rohandesai@gmail.com',
      university: 'University of Leeds',
      program: 'MSc Software Engineering',
      pendingSince: '14 Days',
      date: '29 Nov 202'
    },
    {
      ackNo: '117124/22-23',
      studentName: 'Meera Shah',
      email: 'meerashah@gmail.com',
      university: 'University of Nottingham',
      program: 'MSc AI',
      pendingSince: '15 Days',
      date: '28 Nov 202'
    }
  ];

  const tabs = [
    { id: 'pending', label: 'Pending On Me', count: 15 },
    { id: 'lorem1', label: 'Lorem Ipsum', count: 12 },
    { id: 'lorem2', label: 'Lorem Ipsum', count: 18 }
  ];

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedApplications = [...applications].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    if (sortConfig.key === 'ackNo' || sortConfig.key === 'studentName' || 
        sortConfig.key === 'university' || sortConfig.key === 'program') {
      return sortConfig.direction === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    if (sortConfig.key === 'pendingSince') {
      // Extract number from strings like "1 Day", "2 Days", etc.
      const aDays = parseInt(aValue) || 0;
      const bDays = parseInt(bValue) || 0;
      return sortConfig.direction === 'asc' ? aDays - bDays : bDays - aDays;
    }
    
    return 0;
  });

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      // Show both up and down arrows (double sorting icons) when inactive
      return (
        <div className="sort-icons-double">
          <FiChevronUp className="sort-icon inactive" />
          <FiChevronDown className="sort-icon inactive" />
        </div>
      );
    }
    return sortConfig.direction === 'asc' 
      ? <FiChevronUp className="sort-icon active" />
      : <FiChevronDown className="sort-icon active" />;
  };

  const totalPages = Math.ceil(applications.length / 5);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0 fw-semibold">Applications</h2>
          <button className="btn btn-link text-muted p-0" aria-label="Expand table">
            <FiMaximize2 size={18} />
          </button>
        </div>

        <div className="applications-table-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`applications-table-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              aria-label={`${tab.label} tab, ${tab.count} items`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

      <div className="table-wrapper">
        <table className="applications-table" role="table">
          <thead>
            <tr>
                            <th 
                onClick={() => handleSort('ackNo')}
                className="sortable th-ack-no"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSort('ackNo');
                  }
                }}
                aria-sort={sortConfig.key === 'ackNo' ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
              >
                <div className="th-inner">
                  <span>ACK. NO.</span>
                  {getSortIcon('ackNo')}
                </div>
              </th>
              <th 
                onClick={() => handleSort('studentName')}
                className="sortable"
                role="columnheader"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSort('studentName');
                  }
                }}
                aria-sort={sortConfig.key === 'studentName' ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
              >
                <div className="th-inner">
                  <span>STUDENT NAME</span>
                  {getSortIcon('studentName')}
                </div>
              </th>
              <th 
                onClick={() => handleSort('university')}
                className="sortable"
                role="columnheader"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSort('university');
                  }
                }}
                aria-sort={sortConfig.key === 'university' ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
              >
                <div className="th-inner">
                  <span>UNIVERSITY</span>
                  {getSortIcon('university')}
                </div>
              </th>
              <th 
                onClick={() => handleSort('program')}
                className="sortable"
                role="columnheader"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSort('program');
                  }
                }}
                aria-sort={sortConfig.key === 'program' ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
              >
                <div className="th-inner">
                  <span>PROGRAM</span>
                  {getSortIcon('program')}
                </div>
              </th>
              <th 
                onClick={() => handleSort('pendingSince')}
                className="sortable"
                role="columnheader"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSort('pendingSince');
                  }
                }}
                aria-sort={sortConfig.key === 'pendingSince' ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
              >
                <div className="th-inner">
                  <span>PENDING SINCE</span>
                  {getSortIcon('pendingSince')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedApplications.map((app, index) => (
              <tr key={app.ackNo}>
                <td>
                  <a href="#" className="ack-link" aria-label={`View details for ${app.ackNo}`}>
                    {app.ackNo}
                  </a>
                </td>
                <td>
                  <div className="student-info">
                    <div className="student-name">{app.studentName}</div>
                    <div className="student-email">{app.email}</div>
                  </div>
                </td>
                <td className="text-truncate">{app.university}</td>
                <td className="text-truncate">{app.program}</td>
                <td>
                  <div className="pending-info">
                    <div className="pending-time">{app.pendingSince}</div>
                    <div className="pending-date">{app.date}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center mb-0">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button 
                className="page-link"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <FiChevronLeft />
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button 
                className="page-link"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                <FiChevronRight />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ApplicationsTable;

