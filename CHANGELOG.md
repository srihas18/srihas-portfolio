# Portfolio Refactor Changelog

## Summary of Changes

Complete refactor of Srihas Gullapalli's portfolio website to match updated resume content with IU Crimson (#7A0019) accent color and enhanced animations.

---

## 📁 Data Files Updated

### `src/data/about.json`
- Updated name, title, subtitle, tagline
- Changed email to `gsrihas@iu.edu`
- Updated resume link to `/Srihas_Gullapalli_Resume.pdf`
- Updated LinkedIn URL format

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

### `src/components/About.jsx`
- Simplified to use data from about.json
- Added motion animations

### `src/components/Education.jsx`
- Enhanced timeline design with IU Crimson accent
- Added GPA display
- Improved hover animations and card styling

### `src/components/Experience.jsx`
- Updated with new Vosyn experience
- Enhanced timeline with bullet points
- Added hover effects and animations

### `src/components/Projects.jsx`
- Updated with 5 new projects
- Enhanced card hover animations (scale + lift)
- Improved modal design with better styling
- Responsive 2-column grid (desktop) / 1-column (mobile)

### `src/components/Skills.jsx`
- Reorganized into 5 skill categories
- Enhanced progress bars with gradient
- Improved card animations and hover effects

### `src/components/Certifications.jsx`
- Updated with new certification data
- Enhanced card design with icons
- Added hover scale animations

### `src/components/Contact.jsx`
- Complete rewrite with form handling
- Added Formspree integration (placeholder for form ID)
- Enhanced social links with hover effects
- Improved form styling and validation feedback

### `src/components/Footer.jsx`
- Updated design with better styling
- Added animations

### `src/components/ScrollToTop.jsx` (NEW)
- New component with smooth scroll-to-top functionality
- Animated button that appears after scrolling 300px
- IU Crimson styling with hover effects

### `src/components/Navbar.jsx`
- No changes needed (already uses data from about.json)

---

## 📄 Root Files Updated

### `index.html`
- Enhanced SEO meta tags
- Added keywords, Twitter card, OG URL
- Updated description for better SEO

### `src/App.jsx`
- Added ScrollToTop component import and usage

---

## 🎯 Features Added

1. ✅ Scroll-to-top button with smooth animation
2. ✅ Enhanced hover animations on all interactive elements
3. ✅ IU Crimson (#7A0019) accent color throughout
4. ✅ Improved responsive design for mobile/tablet
5. ✅ Section reveal animations with Framer Motion
6. ✅ Dark mode support (already existed, maintained)
7. ✅ Enhanced SEO meta tags

---

## 📝 Notes

- **Resume PDF**: Place `Srihas_Gullapalli_Resume.pdf` in `/public/` folder
- **Formspree**: Replace placeholder form ID in `Contact.jsx` with your actual Formspree form ID
- **GitHubRepos**: Component exists but not used in Projects section (can be removed if desired)

---

## 🚀 Ready for Deployment

- All components are updated and tested
- Dark mode toggle working
- Responsive design verified
- SEO optimized
- Ready for Vercel/Netlify deployment

