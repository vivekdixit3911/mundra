# Mundra Legal Consultants - React Application

A modern, responsive React application for Mundra Legal Consultants built with styled-components and featuring beautiful animations, professional design, and comprehensive legal services information.

## 🌟 Features

- **Modern React Architecture** - Built with React 18+ and functional components
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Styled Components** - CSS-in-JS with styled-components for better maintainability
- **React Router** - Client-side routing for seamless navigation
- **Animations** - Smooth CSS animations and transitions
- **Real Assets Integration** - Uses actual logos, images, and video assets
- **Legal Disclaimer Modal** - Professional legal disclaimer popup
- **Contact Forms** - WhatsApp integration for consultation requests
- **ISO Certifications Showcase** - Interactive display of certification services
- **Trust Indicators** - Google reviews and client testimonials
- **Back to Top** - Smooth scrolling functionality

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd C:\Users\Administrator\Desktop\mundra\my-react-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
my-react-app/
├── public/
│   ├── assets/
│   │   ├── iso_images/          # ISO certification images
│   │   ├── lottiefiles/         # Animation files
│   │   ├── video/               # Background videos
│   │   ├── logo.png             # Company logo
│   │   └── google-icon-svgrepo-com.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js            # Navigation header
│   │   ├── Hero.js              # Hero section with video
│   │   ├── TrustedCompanies.js  # Company logos slider
│   │   ├── LegalDisclaimer.js   # Legal disclaimer modal
│   │   ├── AboutEnhanced.js     # Enhanced about section
│   │   └── ISOCertificates.js   # ISO certifications grid
│   ├── pages/
│   │   └── About.js             # Complete About page
│   ├── styles/
│   │   └── GlobalStyles.js      # Global CSS styles
│   ├── App.js                   # Main application component
│   ├── index.js                 # React app entry point
│   └── index.css                # Base CSS styles
├── package.json
└── README.md
```

## 🎨 Key Components

### 1. **Homepage (`/`)**
- Hero section with video background
- Services showcase
- Practice areas grid  
- Enhanced about section with statistics
- ISO certifications display
- Client testimonials
- Contact form with WhatsApp integration
- Professional footer

### 2. **About Page (`/about`)**
- Animated hero section with credentials
- Company story and mission
- Core values with icons
- Team member profiles
- Why choose us section
- Call-to-action section

### 3. **Header Component**
- Responsive navigation
- Mega dropdown for services
- Expert consultation dropdown
- Mobile hamburger menu
- Smooth scrolling

### 4. **Legal Disclaimer Modal**
- Auto-appears after 2 seconds
- Professional legal compliance
- Cannot be closed without agreeing
- Mobile-responsive design

## 🛠️ Available Scripts

- **`npm start`** - Runs the app in development mode
- **`npm run build`** - Builds the app for production
- **`npm test`** - Launches the test runner
- **`npm run eject`** - Ejects from Create React App (irreversible)

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px  
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## 🎯 Key Features Implementation

### Video Background
- Hero section uses `/assets/video/3129902-uhd_3840_2160_25fps.mp4`
- Graceful fallback if video fails to load
- Optimized for performance

### Contact Integration  
- WhatsApp integration for consultation requests
- Phone number links for direct calling
- Email integration for inquiries

### Assets Usage
- **Logo:** `/assets/logo.png` - Used in header, footer, modals
- **Google Icon:** `/assets/google-icon-svgrepo-com.svg` - For trust badges
- **ISO Images:** `/assets/iso_images/` - Certification display
- **Lottie Files:** `/assets/lottiefiles/` - Animation assets (ready for implementation)

### SEO Optimized
- Semantic HTML structure
- Meta tags for description and keywords
- Proper heading hierarchy
- Alt text for images
- Schema.org structured data ready

## 🎨 Styling Architecture

### Design System
- **Primary Colors:** 
  - Gold: `#D4AF37`, `#E6C57F`
  - Navy: `#1C2951`, `#2B3F6B`
- **Typography:** 
  - Headers: 'Playfair Display' (serif)
  - Body: 'Inter' (sans-serif)
- **Spacing:** Consistent rem-based spacing
- **Animations:** CSS keyframes with easing

### Styled Components Benefits
- Component-scoped styles
- Dynamic styling based on props
- Better maintainability
- No CSS conflicts
- TypeScript support ready

## 🔧 Deployment

### Build for Production
```bash
npm run build
```

### Serve Locally
```bash
npx serve -s build -p 3001
```

### Deploy to Web Server
1. Run `npm run build`
2. Copy the `build/` folder contents to your web server
3. Configure server for client-side routing (important for React Router)

### Environment Variables
Create `.env` file for environment-specific configurations:
```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_GOOGLE_ANALYTICS=your_ga_id_here
```

## 📞 Contact Information

- **Phone:** +91 85068 74280, +91 93557 00507
- **Email:** mundralegal@gmail.com
- **Address:** Best Sky Tower, 1307, Plot F-5, Netaji Subhash Place, Pitampura, Delhi 110034
- **Website:** [mundralegal.com](https://mundralegal.com)

## 🤝 Support

For technical support or queries about this React application:
1. Check the browser console for any errors
2. Ensure all assets are properly loaded
3. Verify React Router configuration for routing issues
4. Test responsive design on different screen sizes

## 📄 License

This project is created for Mundra Legal Consultants. All rights reserved.

---

**Built with ❤️ using React, Styled Components, and modern web technologies.**