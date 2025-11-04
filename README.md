# Srihas Gullapalli — Data Science Portfolio

Modern, interactive, ATS-aligned portfolio built with React + Vite + TailwindCSS + Framer Motion.

## Features
- Smooth scroll single-page layout with sections: Hero, About, Education, Experience, Projects, Skills, Certifications, Contact
- Dark/Light mode (Tailwind `dark` class) with persistence
- Framer Motion animations (fade/slide)
- Data-driven content via JSON files in `src/data`
- Project cards with tech chips, modal details, optional embeds
- Contact form via Formspree, social links
- SEO meta tags, favicon hook, Open Graph image

## Tech Stack
- React + Vite
- TailwindCSS
- Framer Motion
- Axios (optional for GitHub API / future use)
- React Icons

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:5173

If starting from scratch (optional):
```bash
npm create vite@latest srihas-portfolio -- --template react
cd srihas-portfolio
npm install tailwindcss postcss autoprefixer -D
npm install framer-motion axios react-icons react-router-dom
npx tailwindcss init -p
```

Tailwind config (`tailwind.config.js`):
```js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { accent: '#2563eb' } } },
  plugins: [],
}
```

`src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Project Structure
```
src/
  components/
  data/
  App.jsx
  index.css
  main.jsx
```

## Content Management
Edit JSON files in `src/data/`:
- `about.json`: name, rotating titles, summary, links (GitHub, LinkedIn, resume), email
- `education.json`: degrees, institutions, periods, details
- `experience.json`: roles, companies, periods, highlights
- `projects.json`: title, stack, description, links (github/demo), optional `embed`
- `skills.json`: categories and levels (0–100)
- `certifications.json`: name, issuer, status

## Contact Form
Replace the placeholder Formspree endpoint in `src/components/Contact.jsx`:
```js
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id"
```

## GitHub Repo Cards (optional)
You can add GitHub URLs to your projects in `projects.json`. A simple stats widget can be added later using the GitHub REST API with Axios.

## SEO
- Edit `<title>` and meta tags in `index.html`
- Add `public/favicon.ico` and `public/og-image.png` if desired

## Deployment
### Netlify
- New site from Git, select repository
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages (via GitHub Actions)
- Add the following to `package.json` if using a custom repo path:
```json
{
  "homepage": "https://<username>.github.io/<repo>"
}
```
- Use a Vite GitHub Pages action or deploy `dist/` to `gh-pages` branch.

## License
Personal portfolio—feel free to reuse the structure with attribution.
