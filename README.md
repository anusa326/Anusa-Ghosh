# Anusa Ghosh — Portfolio

A responsive personal portfolio for **Anusa Ghosh**, Software Engineer &amp; Creative Technologist (BCA Hons scholar at Brainware University).

Built with **React + Vite + Tailwind CSS v4**, styled with a warm "Atelier" museum aesthetic (Playfair Display headings, Inter labels, Plus Jakarta Sans body, Material Symbols icons).

## Features

- Always-solid sticky navigation with active-section tracking
- Sections: Hero, About, Projects, Skills, Internships, Declaration, Contact, Footer
- Optimistic, responsive across all screen sizes (desktop + mobile drawer/bottom bar)
- Animated loading screen
- Contact details obfuscated at runtime to reduce automated harvesting; form protected with a honeypot
- Security headers/meta (CSP, X-Frame-Options, nosniff, Referrer-Policy) and `robots.txt`

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/     # section components
  secure/         # obfuscated contact details
  index.css       # Tailwind theme tokens (warm palette)
App.jsx
index.html
```
# Anusa-Ghosh
