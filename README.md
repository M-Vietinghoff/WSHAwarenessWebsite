# WSHAwarenessWebsite

## Team Members
**Team Match Stick**

**Tech Team - Full Stack Development**
- Huidong Xu
- Michaela Vietinghoff
- YinNing Zhu
- Zain Abideen

**UI/UX Design & Visual Design**
- Sadia Eva

**Non-Tech Team - Presentation & Documentation**
- Nicole
- Tina

## Problem Tackled

Workplace sexual harassment and assault remain critical issues affecting women and non-binary individuals across Nova Scotia. Many survivors lack immediate access to comprehensive support resources, emergency contacts, and safe reporting mechanisms. The scattered nature of available services makes it difficult for individuals to quickly find appropriate help when needed most.

## Our Solution + Technologies Used

WSH Awareness Website is a comprehensive React-based web application designed to provide support, resources, and information for women and non-binary individuals dealing with workplace sexual harassment and assault. The platform serves as a centralized hub connecting users with essential services across Nova Scotia.

### Key Features

- **Interactive Incident Mapping**: Local map interface allowing users to confidentially record and mark harassment incident locations with quick-exit safety features for immediate navigation away from the page
- **Comprehensive Resource Directory**: Dedicated resources page with extensive database of support organizations categorized by service type (emergency, counseling, legal aid, shelter services)
- **Emergency Response System**: Instant access to 24/7 crisis hotlines and emergency services with prominent contact information
- **Advanced Search & Filtering**: Find relevant resources by location, service type, or keyword across Nova Scotia
- **Educational Blog Platform**: Specialized blog section featuring knowledge articles, awareness content, and emotional support resources
- **Safety-First Design**: Quick-exit functionality and accessibility features designed with user safety and privacy in mind

### Technical Stack

**Frontend Framework**: React 18
- **Language**: JavaScript (ES6+)
- **Styling**: CSS3 with custom properties and Flexbox/Grid
- **State Management**: React Hooks (useState)
- **Responsive Design**: Mobile-first CSS with media queries

**Key Technologies**:
- **React Hooks**: For state management and component lifecycle
- **CSS Modules**: Component-scoped styling
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Semantic HTML**: Accessibility-compliant markup
- **SVG Icons**: Scalable vector graphics for UI elements

## Setup Instructions

```bash
# Open the terminal in VScode
ctrl + ~

# Navigate to the location of app in terminal
cd my-app

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## Architecture Overview

### Project Structure

```
WSHAwarenessWebsite/
├── public/
│   ├── images/          # Resource organization images
│   ├── index.html       # Main HTML template
│   ├── manifest.json    # PWA configuration
│   └── favicon.ico      # App icon
├── src/
│   ├── components/      # Reusable React components
│   │   └── Header.jsx   # Navigation header
│   ├── pages/           # Page-level components
│   │   ├── Blog.jsx     # Educational blog page
│   │   ├── ContactUs.jsx # Contact information page
│   │   ├── Map.jsx      # Interactive incident map page
│   │   └── Resources.jsx # Support resources directory
│   ├── App.js           # Main application component
│   └── index.js         # Application entry point
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

### Future Enhancements

1. **Geographic Mapping**: Interactive map integration for location-based services
2. **Multi-language Support**: French translation for bilingual accessibility
3. **Progressive Web App**: Offline functionality and app-like experience
4. **User Accounts**: Personalized resource favorites and recommendations
5. **Content Management**: Admin panel for resource updates
6. **Analytics Integration**: Usage tracking for service optimization
