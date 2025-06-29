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
    { id: 'victim-services', name: 'Victim Services' },
    { id: 'health', name: 'Health Services' }
  ];

  const resources = [
    // Emergency Resources
    {
      id: 1,
      category: 'emergency',
      name: 'Nova Scotia Domestic Violence Center',
      phone: '1-855-225-0220',
      available: '24/7',
      website: 'https://women.novascotia.ca/domestic-violence-resource-centre',
      description: '24-hour provincial crisis line providing immediate support, safety planning, and emergency assistance for women experiencing domestic violence.',
      services: ['Crisis Support', 'Safety Planning', 'Emergency Response', 'Resource Referrals'],
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Province-wide',
      lat: 45.0,
      lng: -63.0
    },
    {
      id: 2,
      category: 'emergency',
      name: 'Emergency Police Services',
      phone: '911',
      available: '24/7',
      description: 'Immediate emergency response when life or safety is in immediate danger. Call for urgent police intervention and protection.',
      services: ['Emergency Response', 'Immediate Protection', 'Crime Reporting', 'Safety Intervention'],
      image: 'https://images.unsplash.com/photo-1608095476825-d4e0f916372f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Province-wide',
      lat: 45.0,
      lng: -63.0
    },
    {
      id: 7,
      category: 'emergency',
      name: 'Survivors of Abuse Recovering',
      phone: '1-877-679-7627',
      available: '24/7',
      website: 'https://survivorsofabuserecovering.ca',
      description: '24-hour crisis line providing immediate emotional support, crisis intervention, and resource connections for survivors of sexual violence.',
      services: ['Crisis Support', 'Emotional Support', 'Safety Planning', 'Resource Referrals'],
      image: '/images/r7.png',
      location: 'Province-wide',
      lat: 45.0,
      lng: -63.0
    },
    // Counseling Services
    {
      id: 3,
      category: 'counseling',
      name: 'Avalon Sexual Assault Centre',
      phone: '902-422-4240',
      address: 'Halifax, NS',
      available: 'Monday-Friday 9:00 AM - 5:00 PM',
      website: 'https://avaloncentre.ca',
      description: 'Specialized counseling and trauma therapy for sexual assault survivors with experienced trauma-informed counselors and comprehensive support services.',
      services: ['Trauma Counseling', 'Individual Therapy', 'Crisis Intervention', 'Court Support'],
      image: '/images/r3.png',
      location: 'Halifax',
      lat: 44.6486,
      lng: -63.5806
    },
    {
      id: 6,
      category: 'counseling',
      name: 'Women\'s Health Centre',
      phone: '902-457-4366',
      address: 'Halifax, NS',
      available: 'Monday-Friday 9:00 AM - 5:00 PM',
      website: 'https://novawomenshealth.ca/',
      description: 'Comprehensive women\'s mental health services with trauma-informed care, focusing on healing and empowerment for women.',
      services: ['Mental Health Counseling', 'Trauma Therapy', 'Support Groups', 'Wellness Programs'],
      image: 'https://images.unsplash.com/photo-1608979827489-2b855e79debe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Halifax',
      lat: 44.6486,
      lng: -63.5806
    },
    {
      id: 10,
      category: 'counseling',
      name: 'Antigonish Women\'s Resource Centre & SASA',
      phone: '902-863-6221',
      available: 'Monday-Friday 9:00 AM - 5:00 PM',
      website: 'https://awrcsasa.ca',
      description: 'Community-based support services for women in Antigonish County, providing counseling, advocacy, and survivor support services.',
      services: ['Individual Counseling', 'Support Groups', 'Advocacy', 'Crisis Intervention'],
      image: '/images/r10.png',
      location: 'Antigonish',
      lat: 45.6196,
      lng: -61.9981
    },
    {
      id: 11,
      category: 'counseling',
      name: 'Every Woman\'s Centre (Sydney)',
      phone: '902-567-1212',
      available: 'Monday-Friday 9:00 AM - 5:00 PM',
      website: 'https://everywomanscentre.com',
      description: 'Support center serving Cape Breton women with professional counseling, peer support, and community advocacy services.',
      services: ['Professional Counseling', 'Peer Support', 'Group Therapy', 'Community Advocacy'],
      image: '/images/r11.png',
      location: 'Sydney',
      lat: 46.1368,
      lng: -60.1942
    },
    {
      id: 12,
      category: 'counseling',
      name: 'Tri-County Women\'s Centre (Yarmouth)',
      phone: '902-742-0085',
      available: 'Monday-Friday 9:00 AM - 5:00 PM',
      website: 'https://tricountywomenscentre.org',
      description: 'Regional women\'s resource center serving Yarmouth and tri-county area with counseling, support groups, and empowerment programs.',
      services: ['Individual Counseling', 'Support Groups', 'Life Skills Training', 'Educational Programs'],
      image: '/images/r12.jpg',
      location: 'Yarmouth',
      lat: 43.8375,
      lng: -66.1204
    },
    {
      id: 15,
      category: 'counseling',
      name: 'Mental Health Mobile Crisis Team',
      phone: '1-888-429-8167',
      address: 'Halifax Regional Municipality',
      available: '24/7',
      description: 'Mobile mental health crisis intervention team providing immediate on-site assessment, crisis support, and mental health stabilization services.',
      services: ['Crisis Assessment', 'Mobile Response', 'Mental Health Support', 'Safety Planning'],
      image: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Halifax Regional Municipality',
      lat: 44.6488,
      lng: -63.5752
    },
    // Legal Services
    {
      id: 4,
      category: 'legal',
      name: 'Nova Scotia Legal Aid',
      phone: '902-420-6583',
      address: 'Multiple locations',
      available: 'Monday-Friday 8:30 AM - 4:30 PM',
      website: 'https://www.nslegalaid.ca/',
      description: 'Free legal representation and advice for eligible low-income individuals, specializing in family law, protection orders, and victim rights.',
      services: ['Legal Representation', 'Protection Orders', 'Family Law', 'Victim Rights'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Multiple locations',
      lat: 44.6488,
      lng: -63.5752
    },
    {
      id: 8,
      category: 'legal',
      name: 'NS Human Rights Commission',
      phone: '1-877-269-7699',
      available: 'Monday-Friday 8:30 AM - 4:30 PM',
      website: 'https://humanrights.novascotia.ca',
      description: 'Provincial agency protecting human rights and addressing discrimination complaints, including gender-based discrimination and harassment.',
      services: ['Discrimination Complaints', 'Human Rights Education', 'Legal Information', 'Advocacy Support'],
      image: 'https://humanrights.novascotia.ca/sites/all/themes/rs_sass/logo.png',
      location: 'Halifax',
      lat: 44.6514,
      lng: -63.5851
    },
    {
      id: 14,
      category: 'legal',
      name: 'Women\'s Legal Education and Action Fund',
      phone: '902-423-0574',
      address: 'Halifax, NS',
      available: 'Monday-Friday 9:00 AM - 5:00 PM',
      website: 'https://www.leaf.ca/',
      description: 'Legal advocacy organization focused on advancing women\'s equality rights through strategic litigation and legal education.',
      services: ['Legal Advocacy', 'Equality Rights', 'Court Challenges', 'Legal Education'],
      image: 'https://www.leaf.ca/wp-content/uploads/2025/02/iStock-1357804868-1-1536x1024.jpg.webp',
      location: 'Halifax',
      lat: 44.6514,
      lng: -63.5851
    },
    // Shelter Services
    {
      id: 5,
      category: 'shelter',
      name: 'Bryony House',
      phone: '902-422-7650',
      address: 'Halifax, NS',
      available: '24/7',
      website: 'https://www.bryonyhouse.ca/',
      description: 'Safe emergency shelter for women and children fleeing domestic violence, providing secure accommodation and comprehensive support services.',
      services: ['Emergency Shelter', 'Safe Housing', 'Children Programs', 'Transition Support'],
      image: '/images/r5.png',
      location: 'Halifax',
      lat: 44.6486,
      lng: -63.5806
    },
    // Victim Services
    {
      id: 9,
      category: 'victim-services',
      name: 'Halifax Police – Victim Services',
      phone: '902-490-5300',
      available: 'Monday-Friday 8:30 AM - 4:30 PM',
      website: 'https://halifax.ca/safety-security/police',
      description: 'Specialized victim support unit providing assistance to crime victims through the justice process, including court accompaniment and emotional support.',
      services: ['Victim Advocacy', 'Court Accompaniment', 'Justice Support', 'Resource Connection'],
      image: 'https://i.cbc.ca/1.4903015.1695300264!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/halifax-police-headquarters-building.jpg?im=',
      location: 'Halifax',
      lat: 44.6488,
      lng: -63.5752
    },
    // Health Services
    {
      id: 13,
      category: 'health',
      name: 'VON SANE Response',
      phone: '1-833-757-7263',
      available: '24/7',
      website: 'https://www.nshealth.ca/sane',
      description: 'Sexual Assault Nurse Examiner program providing specialized medical care, evidence collection, and trauma-informed healthcare for survivors.',
      services: ['Medical Examination', 'Evidence Collection', 'Trauma-Informed Care', 'Health Support'],
      image: 'https://www.nshealth.ca/themes/custom/nsh/logo.png',
      location: 'Province-wide',
      lat: 45.365,
      lng: -63.286
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
      legal: '#6a95c2',
      shelter: '#10b981',
      'victim-services': '#f59e0b',
      'health': '#06b6d4'
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
                <span className="emergency-number">1-800-565-1113</span> (Domestic Violence Crisis Line) |
                <span className="emergency-number">1-888-429-8167</span> (Sexual Violence NS)
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