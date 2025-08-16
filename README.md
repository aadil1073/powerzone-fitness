# PowerZone Fitness Website

##  Project Overview

**PowerZone Fitness** is a modern, responsive one-page **gym and fitness** website built using **React.js** and **Material UI (MUI)**.
The website is designed to give visitors a clear insight into the gym’s services, trainers, and mission while encouraging them to take action through a bold **Call to Action** section.

The site is optimized for both **desktop and mobile** users, with smooth scrolling navigation and a clean, minimal design.

---

## Features

* Responsive **one-page** layout
* Smooth scroll navigation with offset for sticky navbar
* **About** section with gym details
* **Trainer** showcase with images and bios
* Eye-catching **Call to Action** section

---

##  Technology Stack

* **React.js** – Component-based UI development
* **Material UI (MUI)** – Pre-built UI components & styling
* **React Router DOM** – Routing & navigation
* **JavaScript (ES6)** – Application logic

---

## 📂 Project Structure

```

│
├── public/
│   ├── index.html
│   └── assets/
│       ├── gym.jpg
│       ├── trainer1.jpg
│       ├── trainer2.jpg
│       └── trainer3.jpg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── TrainerSection.jsx
│   │   ├── CallToActionSection.jsx
│   │   ├── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
└── README.md
```

---

##  Development Process

### Initial Setup

* Created React project.
* Installed dependencies:

  ```bash
  npm install @mui/material @mui/icons-material react-router-dom
  ```
* Configured **`BrowserRouter`** in `index.js` for routing.

### Base Layout Creation

* Built **Navbar** with navigation links.
* Created placeholder pages for all sections.

### Section Development

* Developed reusable components for:

  * `HeroSection`
  * `AboutSection`
  * `TrainerSection`
  * `CallToActionSection`
  * `Footer`
* Added images and responsive design.

### One-Page Conversion

* Merged all sections into `Home.jsx` using `<section>` tags with unique IDs.
* Updated navigation to smooth scroll instead of using multiple pages.

### Smooth Scroll Implementation

* Added custom scroll function with offset for sticky navbar:

  ```javascript
  const scrollToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const offset = 70;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  };
  ```

### Styling & Responsiveness

* Applied Material UI breakpoints for mobile & desktop views.
* Added hover effects and consistent brand colors:

* Used `objectFit: "cover"` for uniform image display.

---

## Challenges Faced & Solutions

### 1. Routing Issues (Blank Pages)

**Issue:** Incorrect component imports and missing `BrowserRouter` wrapper.
**Solution:** Wrapped entire app with `BrowserRouter` and verified all routes.

### 2. Sticky Navbar Covering Section Titles

**Issue:** Default `scrollIntoView` behavior ignored navbar height.
**Solution:** Implemented offset scroll calculation.

### 3. Image Loading Problems

**Issue:** Incorrect file paths and image stretching.
**Solution:** Corrected imports and used `objectFit: "cover"`.

---

## Installation & Usage

```bash
# Clone repository
git clone https://github.com/yourusername/powerzone-fitness.git

# Navigate into project folder
cd my-gym-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.


---

