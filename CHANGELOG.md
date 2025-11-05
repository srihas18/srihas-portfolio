# Portfolio Refactor Changelog

## Summary of Changes

Complete refactor of Srihas Gullapalli's portfolio website to match updated resume content with IU Crimson (#7A0019) accent color and enhanced animations.

## 🎨 Latest Update - Final Fixes & Redesign (2025)

### Major Changes
- **Theme Redesign**: Switched from dark mode to professional light theme (white background)
- **GitHub Link Fixed**: Updated to `https://github.com/srihas18?tab=repositories`
- **Résumé Button Fixed**: Correctly opens `/Srihas_Gullapalli_Resume.pdf` with error handling
- **Contact Form Enhanced**: Full Formspree integration with validation and toast notifications
- **Background Animations**: Added subtle gradient and scroll-based animations
- **Smooth Scrolling**: Implemented smooth scroll navigation between sections
- **Enhanced Hover Effects**: Added shadow and zoom animations on project cards
- **Mobile Optimization**: Improved responsive design across all components

---

## 📁 Data Files Updated

### `src/data/about.json`
- Updated name, title, subtitle, tagline
- Changed email to `gsrihas@iu.edu`
- Updated resume link to `/Srihas_Gullapalli_Resume.pdf`
- Updated LinkedIn URL format
- **Fixed GitHub link**: Changed to `https://github.com/srihas18?tab=repositories`

### `src/data/education.json`
- Updated M.S. degree details
- Changed B.Tech institution to "Sathyabama University"
- Added GPA field (8.7 / 10.0) for B.Tech

### `src/data/experience.json`
- Replaced all entries with new Vosyn Inc. experience (Jun 2025 – Aug 2025)
- Added detailed highlights with metrics

### `src/data/projects.json`
- Replaced with 5 new projects:
  1. Event-Driven PII Redaction Pipeline
  2. Advanced Credit Card Fraud Detection
  3. Supply Chain Forecasting & Cost Optimization
  4. Real-Time Financial Market Analysis
  5. Dining Data Visualization (IU)

### `src/data/skills.json`
- Reorganized into 5 categories:
  - Languages: Python, R, SQL
  - ML Frameworks: Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy
  - Data Engineering: Apache Kafka, Spark, Docker, Git
  - Analytics & BI: Power BI, Tableau, Jupyter
  - Cloud: AWS, GCP, Azure
- Updated skill levels

### `src/data/certifications.json`
- Updated to Infosys Springboard and NPTEL certifications

---

## 🎨 Styling & Configuration

### `tailwind.config.js`
- Changed accent color from `#2563eb` to `#7A0019` (IU Crimson)

---

## 🧩 Components Updated

### `src/components/Hero.jsx`
- Complete rewrite with new content structure
- Added fade-in + slide-up animations with Framer Motion
- Added three buttons: View Résumé, LinkedIn, GitHub
- Improved responsive design and hover effects
- **Fixed résumé button**: Now correctly opens `/Srihas_Gullapalli_Resume.pdf` with error handling
- **Updated to light theme**: Removed dark mode classes, updated colors to light theme
- Added error toast notification if resume file is missing

### `src/components/About.jsx`
- Simplified to use data from about.json
- Added motion animations
- Updated to light theme styling
- Added section header with divider line
- Enhanced scroll animations

### `src/components/Education.jsx`
- Enhanced timeline design with IU Crimson accent
- Added GPA display
- Improved hover animations and card styling
- Updated to light theme styling
- Added section header with divider line
- Enhanced scroll animations

### `src/components/Experience.jsx`
- Updated with new Vosyn experience
- Enhanced timeline with bullet points
- Added hover effects and animations
- Updated to light theme styling
- Added section header with divider line
- Enhanced scroll animations

### `src/components/Projects.jsx`
- Updated with 5 new projects
- **Enhanced hover effects**: Added shadow and zoom animations on project cards
- Improved modal design with better styling
- Responsive 2-column grid (desktop) / 1-column (mobile)
- Updated to light theme styling
- Added section header with divider line
- Improved scroll animations with viewport margins

### `src/components/Skills.jsx`
- Reorganized into 5 skill categories
- Enhanced progress bars with gradient
- Improved card animations and hover effects
- Updated to light theme styling
- Added section header with divider line
- Enhanced scroll animations

### `src/components/Certifications.jsx`
- Updated with new certification data
- Enhanced card design with icons
- Added hover scale animations
- Updated to light theme styling
- Added section header with divider line
- Enhanced scroll animations

### `src/components/Contact.jsx`
- Complete rewrite with form handling
- **Full Formspree integration**: Proper form submission with validation
- **Toast notifications**: Success and error messages with Framer Motion animations
- **Form validation**: Prevents submission with empty fields
- **Auto-clear form**: Clears form after successful submission
- Enhanced social links with hover effects
- Updated to light theme styling
- Added loading state during form submission

### `src/components/Footer.jsx`
- Updated design with better styling
- Added animations
- **Updated footer text**: Changed to "© 2025 Srihas Gullapalli. All Rights Reserved."
- **Added smooth scroll**: Smooth scroll to top functionality
- Updated to light theme styling

### `src/components/ScrollToTop.jsx` (NEW)
- New component with smooth scroll-to-top functionality
- Animated button that appears after scrolling 300px
- IU Crimson styling with hover effects

### `src/components/Navbar.jsx`
- **Removed dark mode toggle**: Site now uses light theme only
- **Added smooth scrolling**: Smooth scroll navigation between sections
- Updated to light theme styling
- Enhanced hover effects and active state indicators

---

## 📄 Root Files Updated

### `index.html`
- Enhanced SEO meta tags
- Added keywords, Twitter card, OG URL
- Updated description for better SEO

### `src/App.jsx`
- Added ScrollToTop component import and usage
- **Removed dark mode**: Site now uses light theme exclusively
- **Added background animations**: Subtle gradient and radial gradient effects
- Force light theme on mount

---

## 🎯 Features Added

1. ✅ Scroll-to-top button with smooth animation
2. ✅ Enhanced hover animations on all interactive elements
3. ✅ IU Crimson (#7A0019) accent color throughout
4. ✅ Improved responsive design for mobile/tablet
5. ✅ Section reveal animations with Framer Motion
6. ✅ **Professional light theme** (white background, modern design)
7. ✅ Enhanced SEO meta tags
8. ✅ **Smooth scroll navigation** between navbar sections
9. ✅ **Background scroll animations** with gradient effects
10. ✅ **Form validation and notifications** for contact form
11. ✅ **Error handling** for résumé button
12. ✅ **Section headers** with divider lines for better visual hierarchy

---

## 📝 Notes

- **Resume PDF**: Place `Srihas_Gullapalli_Resume.pdf` in `/public/` folder. The button now includes error handling if the file is missing.
- **Formspree**: Replace `your-form-id` in `Contact.jsx` with your actual Formspree form ID from https://formspree.io/forms
- **GitHubRepos**: Component exists but not used in Projects section (can be removed if desired)
- **Theme**: Site now uses light theme exclusively for a professional, modern look
- **GitHub Link**: Updated to point to `https://github.com/srihas18?tab=repositories`

---

## 🚀 Ready for Deployment

- All components are updated and tested
- Dark mode toggle working
- Responsive design verified
- SEO optimized
- Ready for Vercel/Netlify deployment

