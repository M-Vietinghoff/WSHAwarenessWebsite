import React, { useState } from 'react';
import './Resources.css';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'emergency', name: 'Emergency Help' },
    { id: 'counseling', name: 'Counseling' },
    { id: 'legal', name: 'Legal Aid' },
    { id: 'shelter', name: 'Shelter' },
  ];

  const resources = [
    {
      id: 1,
      category: 'emergency',
      name: 'Nova Scotia Domestic Violence Crisis Line',
      phone: '1-800-565-1113',
      available: '24/7',
      website: 'https://www.gov.ns.ca/coms/families/violence/',
      description: '24-hour crisis line providing immediate support and safety planning for women experiencing domestic violence.',
      services: ['Crisis Support', 'Safety Planning', 'Emotional Support', 'Resource Referrals'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Province-wide'
    },
    {
      id: 2,
      category: 'emergency',
      name: 'Emergency Police Services',
      phone: '911',
      available: '24/7',
      description: 'Call immediately when life or safety is in danger. Police emergency response for immediate threats.',
      services: ['Emergency Response', 'Crime Reporting', 'On-scene Protection'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Province-wide'
    },
    {
      id: 3,
      category: 'counseling',
      name: 'Avalon Sexual Assault Centre',
      phone: '902-422-4240',
      address: 'Halifax, NS',
      available: 'Monday-Friday 9:00 AM - 5:00 PM',
      website: 'https://avaloncentre.ca/',
      description: 'Professional counseling and support services for sexual assault survivors with experienced trauma counselors.',
      services: ['Individual Counseling', 'Group Therapy', 'Crisis Intervention', 'Court Support'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Halifax'
    },
    {
      id: 4,
      category: 'legal',
      name: 'Nova Scotia Legal Aid',
      phone: '902-420-6583',
      address: 'Multiple locations',
      available: 'Monday-Friday 8:30 AM - 4:30 PM',
      website: 'https://www.nslegalaid.ca/',
      description: 'Free legal services for eligible low-income individuals including family law and protection orders.',
      services: ['Legal Consultation', 'Court Representation', 'Document Assistance', 'Rights Protection'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Multiple locations'
    },
    {
      id: 5,
      category: 'shelter',
      name: 'Bryony House',
      phone: '902-422-7650',
      address: 'Halifax, NS',
      available: '24/7',
      website: 'https://www.bryonyhouse.ca/',
      description: 'Safe shelter for women and children fleeing domestic violence with comprehensive support services.',
      services: ['Emergency Shelter', 'Safety Planning', 'Children Services', 'Life Skills Training'],
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Halifax'
    },
    {
      id: 6,
      category: 'counseling',
      name: 'Women\'s Health Centre',
      phone: '902-457-4366',
      address: 'Halifax, NS',
      available: 'Monday-Friday 9:00 AM - 5:00 PM',
      description: 'Comprehensive women\'s health and mental health services with focus on trauma-informed care.',
      services: ['Mental Health Counseling', 'Health Education', 'Support Groups', 'Resource Connection'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Halifax'
    },
    {
      id: 7,
      category: 'legal',
      name: 'Women\'s Legal Education and Action Fund',
      phone: '902-423-0574',
      address: 'Halifax, NS',
      available: 'Monday-Friday 9:00 AM - 5:00 PM',
      website: 'https://www.leaf.ca/',
      description: 'Legal education and advocacy for women\'s equality rights with specialized expertise in gender-based issues.',
      services: ['Legal Information', 'Rights Education', 'Advocacy Support', 'Court Challenges'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Halifax'
    },
    {
      id: 8,
      category: 'counseling',
      name: 'Mobile Crisis Team',
      phone: '902-429-8167',
      address: 'Halifax Regional Municipality',
      available: '24/7',
      description: 'Crisis intervention and mental health support with mobile response teams for immediate assistance.',
      services: ['Crisis Response', 'Mental Health Assessment', 'Safety Planning', 'Resource Connection'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Halifax Regional Municipality'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      emergency: '#ef4444',
      counseling: '#3b82f6', 
      legal: '#8b5cf6',
      shelter: '#10b981'
    };
    return colors[category] || '#6b7280';
  };

  return (
    <div className="resources-container">
      <div className="resources-wrapper">
        {/* Header Section */}
        <div className="resources-header">
          <h1 className="resources-title">
            Support Resources
          </h1>
          <p className="resources-subtitle">
            Comprehensive support resources for women in Nova Scotia, including emergency help, counseling, legal aid, and shelter services
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="emergency-notice">
          <div className="emergency-content">
            <svg className="emergency-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <p className="emergency-title">Emergency Contact:</p>
              <p className="emergency-numbers">
                <span className="emergency-number">911</span> (Police Emergency) | 
                <span className="emergency-number">1-800-565-1113</span> (Domestic Violence Crisis Line)
              </p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="search-section">
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search resources, services, or organization names..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-count">
          <p>
            Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="resources-grid">
            {filteredResources.map(resource => (
              <article key={resource.id} className="resource-card">
                {/* Resource Image */}
                <div className="resource-image-container">
                  <img
                    src={resource.image}
                    alt={resource.name}
                    className="resource-image"
                  />
                  <div className="category-badge" style={{backgroundColor: getCategoryColor(resource.category)}}>
                    {categories.find(cat => cat.id === resource.category)?.name}
                  </div>
                </div>

                {/* Resource Content */}
                <div className="resource-content">
                  {/* Availability */}
                  <div className="resource-availability">
                    <span>{resource.available}</span>
                  </div>

                  {/* Title */}
                  <h2 className="resource-title">
                    {resource.name}
                  </h2>

                  {/* Description */}
                  <p className="resource-description">
                    {resource.description}
                  </p>

                  {/* Services Tags */}
                  <div className="resource-services">
                    {resource.services.slice(0, 3).map(service => (
                      <span key={service} className="service-tag">
                        {service}
                      </span>
                    ))}
                    {resource.services.length > 3 && (
                      <span className="service-tag more-services">
                        +{resource.services.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Contact Info */}
                  <div className="resource-footer">
                    <div className="contact-info">
                      <div className="contact-item">
                        <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={`tel:${resource.phone}`} className="contact-link">
                          {resource.phone}
                        </a>
                      </div>
                      <div className="contact-item">
                        <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="location-text">{resource.location}</span>
                      </div>
                    </div>
                    {resource.website && (
                      <a 
                        href={resource.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="website-link"
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="no-results">
            <svg className="no-results-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
            </svg>
            <h3 className="no-results-title">No resources found</h3>
            <p className="no-results-text">
              Try adjusting your search criteria or filter selection.
            </p>
          </div>
        )}

        {/* Additional Help Section */}
        <div className="help-section">
          <h3 className="help-title">
            Need Additional Support?
          </h3>
          <p className="help-description">
            If you need other types of support or have questions, don't hesitate to reach out. Your safety and well-being are our priority.
          </p>
          <div className="help-actions">
            <a href="tel:211" className="help-button primary">
              Call 211 for Community Resources
            </a>
            <a 
              href="https://www.gov.ns.ca/coms/families/violence/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="help-button secondary"
            >
              Visit Government Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}