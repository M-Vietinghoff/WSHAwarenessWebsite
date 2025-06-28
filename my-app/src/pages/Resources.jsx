import React, { useState } from 'react';
import { Phone, MapPin, Clock, Globe, Search, Filter, Heart, Shield, Users, MessageCircle } from 'lucide-react';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', icon: Heart },
    { id: 'emergency', name: 'Emergency Help', icon: Phone },
    { id: 'counseling', name: 'Counseling', icon: MessageCircle },
    { id: 'legal', name: 'Legal Aid', icon: Shield },
    { id: 'shelter', name: 'Shelter', icon: Users },
  ];

  const resources = [
    {
      id: 1,
      category: 'emergency',
      name: 'Nova Scotia Domestic Violence Crisis Line',
      phone: '1-800-565-1113',
      available: '24/7',
      website: 'https://www.gov.ns.ca/coms/families/violence/',
      description: '24-hour crisis line providing immediate support and safety planning',
      services: ['Crisis Support', 'Safety Planning', 'Emotional Support', 'Resource Referrals']
    },
    {
      id: 2,
      category: 'emergency',
      name: 'Emergency Police',
      phone: '911',
      available: '24/7',
      description: 'Call immediately when life or safety is in danger',
      services: ['Emergency Response', 'Crime Reporting', 'On-scene Protection']
    },
    {
      id: 3,
      category: 'counseling',
      name: 'Avalon Sexual Assault Centre',
      phone: '902-422-4240',
      address: 'Halifax, NS',
      available: 'Monday-Friday 9:00 AM - 5:00 PM',
      website: 'https://avaloncentre.ca/',
      description: 'Professional counseling and support services for sexual assault survivors',
      services: ['Individual Counseling', 'Group Therapy', 'Crisis Intervention', 'Court Support']
    },
    {
      id: 4,
      category: 'legal',
      name: 'Nova Scotia Legal Aid',
      phone: '902-420-6583',
      address: 'Multiple locations',
      available: 'Monday-Friday 8:30 AM - 4:30 PM',
      website: 'https://www.nslegalaid.ca/',
      description: 'Free legal services for eligible low-income individuals',
      services: ['Legal Consultation', 'Court Representation', 'Document Assistance', 'Rights Protection']
    },
    {
      id: 5,
      category: 'shelter',
      name: 'Bryony House',
      phone: '902-422-7650',
      address: 'Halifax, NS',
      available: '24/7',
      website: 'https://www.bryonyhouse.ca/',
      description: 'Safe shelter for women and children fleeing domestic violence',
      services: ['Emergency Shelter', 'Safety Planning', 'Children Services', 'Life Skills Training']
    },
    {
      id: 6,
      category: 'counseling',
      name: 'Women\'s Health Centre',
      phone: '902-457-4366',
      address: 'Halifax, NS',
      available: 'Monday-Friday 9:00 AM - 5:00 PM',
      description: 'Focus on women\'s health and mental health services',
      services: ['Mental Health Counseling', 'Health Education', 'Support Groups', 'Resource Connection']
    },
    {
      id: 7,
      category: 'legal',
      name: 'Women\'s Legal Education and Action Fund (LEAF)',
      phone: '902-423-0574',
      address: 'Halifax, NS',
      available: 'Monday-Friday 9:00 AM - 5:00 PM',
      website: 'https://www.leaf.ca/',
      description: 'Legal education and advocacy for women\'s equality rights',
      services: ['Legal Information', 'Rights Education', 'Advocacy Support', 'Court Challenges']
    },
    {
      id: 8,
      category: 'counseling',
      name: 'Mobile Crisis Team',
      phone: '902-429-8167',
      address: 'Halifax Regional Municipality',
      available: '24/7',
      description: 'Crisis intervention and mental health support',
      services: ['Crisis Response', 'Mental Health Assessment', 'Safety Planning', 'Resource Connection']
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    const IconComponent = category?.icon || Heart;
    return <IconComponent className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Support Resources
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support resources for women in Nova Scotia, including emergency help, counseling, legal aid, and shelter services
            </p>
          </div>

          {/* Emergency Notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
              <div>
                <p className="text-red-800 font-semibold">Emergency Contact:</p>
                <p className="text-red-700">
                  <span className="font-bold">911</span> (Police Emergency) | 
                  <span className="font-bold ml-4">1-800-565-1113</span> (Domestic Violence Crisis Line)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources, services, or organization names..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Resources List */}
        <div className="space-y-6">
          {filteredResources.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500 text-lg">No matching resources found</p>
              <p className="text-gray-400 mt-2">Try adjusting your search terms or filter criteria</p>
            </div>
          ) : (
            filteredResources.map(resource => (
              <div key={resource.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                        {getCategoryIcon(resource.category)}
                        {categories.find(cat => cat.id === resource.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {resource.name}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {resource.description}
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    {resource.phone && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <a href={`tel:${resource.phone}`} className="font-semibold text-gray-900 hover:text-gray-700">
                          {resource.phone}
                        </a>
                      </div>
                    )}
                    {resource.address && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span>{resource.address}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    {resource.available && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span>{resource.available}</span>
                      </div>
                    )}
                    {resource.website && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <Globe className="w-4 h-4 text-gray-500" />
                        <a 
                          href={resource.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-gray-700 hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    {resource.services.map((service, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need Additional Help?</h3>
            <p className="text-gray-600 mb-4">
              If you need other types of support or have any questions, don't hesitate to contact the relevant organizations.
              Your safety and well-being are the top priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:211" 
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                Call 211 for Community Resources
              </a>
              <a 
                href="https://www.gov.ns.ca/coms/families/violence/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Visit Government Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}