Project Overview

Cyner-Tech is a modern, responsive website showcasing mechanical engineering services and web development solutions. Built with React, Vite, and Tailwind CSS, it provides a professional platform for clients to explore services, view projects, and contact the team.

Features

Fully responsive design for desktop, tablet, and mobile

Hero & Services sections highlighting offerings

Reusable React components for modularity and maintainability

Tailwind CSS utility-first styling for rapid development

Contact form for client inquiries

Tech Stack

Frontend: React + Vite

Styling: Tailwind CSS

Linting: ESLint

Bundler & Dev Server: Vite
installation
# Clone the repository
git clone https://github.com/paulthuku8419-eng/cyner-tech.git
cd cyner-tech/cyner-tech
git clone https://github.com/paulthuku8419-eng/cyner-tech.git
cd cyner-tech/cyner-tech
# Install dependencies
npm install

# Start development server
npm run dev

structure
cyner-tech/
├─ public/           # Static assets
├─ src/              # React components and pages
│  ├─ components/    # Reusable UI components
│  └─ App.jsx
├─ index.html        # Entry HTML file
├─ package.json      # Scripts & dependencies
├─ tailwind.config.js# Tailwind configuration
└─ vite.config.js    # Vite configuration

scripts
npm run dev	Start Vite development server
npm run build	Build production-ready site
npm run preview	Preview production build locally
npm run lint	Run ESLint
