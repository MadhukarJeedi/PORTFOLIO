# ⚡ MADHUKAR JEEDI — Professional AI/ML & Data Science Portfolio
## Check in live: https://madhuportfolio-rouge.vercel.app/

A premium, recruiter-ready personal portfolio styled after a custom bold, high-contrast, blocky geometric design system. Built with **React, Vite, Tailwind CSS**, and **Framer Motion** for interactive animations.

---

## 🎨 Design System & Highlights

- **Vibrant Accent Palette**: High-contrast Yellow-Orange (`#F2B822`), Deep Charcoal (`#1C1C1C`), and Light-Grey (`#E5E5E5`) backing.
- **Split Screen Sidebar Layout**: Left fixed fixed sidebar (`Sidebar.jsx`) with custom portrait positioning (`12%` top crop to fully show hair/face), desktop scroll buttons, and mobile drawer.
- **Tactile 3D Buttons**: Prominent pill-shaped (`rounded-full`) action buttons with custom 3D bottom borders (`border-b-4`) that compress on press/click (`active:translate-y-[4px] active:border-b-0`).
- **Comprehensive Skills Grid**: Reorganized About Me slide showing your official resume Professional Summary, followed by a grid of **28 individual technical skills** structured as square capsule pills `[ Icon | Skill Name ]`.
- **Horizontal Project Cards**: Spatially expanded horizontal rows on desktop showing exact resume bullet points formatted with solid circular yellow dot points (`●`).
- **Clean Education Cards**: Center-aligned single-column timeline of academic milestones, free of distracting lines and circles.
- **Interactive Certifications**: Accordion cards (IBM, Kaggle, Cisco, HackerRank, NCVT) that slide open/closed smoothly using Framer Motion animations.
- **Enlarged Contact Form**: Sized up input fields, message area (`rows={8}`), and send buttons for easy touch and typing accessibility.

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg          # Profile photo asset (12% vertical alignment offset)
│   │   └── projects/            # Project mockup screens
│   │       ├── smart_irrigation.png
│   │       ├── job_recommendation.png
│   │       └── travel_planner.png
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Fixed yellow fixed sidebar with mobile support
│   │   ├── RightNavigation.jsx  # Floating dot navigation timeline spy
│   │   ├── Hero.jsx             # Intro greeting, bold headings, and 3D buttons
│   │   ├── About.jsx            # Biography summary + 28 custom skill capsule pills
│   │   ├── Resume.jsx           # Clean centered single-column Education cards
│   │   ├── Projects.jsx         # 1-column large projects cards with custom yellow bullets
│   │   ├── ProjectModal.jsx     # Detail overlay popup modal
│   │   ├── Certifications.jsx  # Interactive accordion cards (Framer Motion)
│   │   ├── Contact.jsx          # Sized up form inputs and EmailJS integration
│   │   └── LinkedInIcon.jsx     # Inline SVG icon helpers
│   ├── data/
│   │   ├── certifications.js    # Verified credentials & Drive links
│   │   ├── profile.js           # Single source of truth for phone, email, and bio
│   │   ├── projects.js          # Detailed descriptions and specs
│   └── index.css                # Global styles, scrollspy margin offsets, and 3D animations
```

---

## ⚙️ Environment Variables (EmailJS Integration)

The contact form is pre-configured with EmailJS, letting visitors email you directly. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_f2g41zb
VITE_EMAILJS_TEMPLATE_ID=template_9bft3w4
VITE_EMAILJS_PUBLIC_KEY=cLb0MmUH4g4Odr1Ak
```

*Note: For production hosts (like Render, Vercel, Netlify), add these same keys inside the hosting panel environment variables.*

---

## 🛠️ Local Development Setup

To run or build the portfolio on your local machine:

```bash
# Install dependencies
npm install

# Start Vite dev server (runs at http://localhost:5173/)
npm run dev

# Compile optimized production assets
npm run build

# Preview the built production assets locally
npm run preview
```

---

## 🔧 Personal Customization Guide

Update your details, links, and projects inside `src/data/`:

| Data File | Instructions |
|---|---|
| [`profile.js`](file:///c:/Madhu/Portfolio/src/data/profile.js) | Edit your name, bio, location, phone, and Google Drive resume link. |
| [`projects.js`](file:///c:/Madhu/Portfolio/src/data/projects.js) | Configure titles, taglines, project steps, approaches, and tech stacks. |
| [`certifications.js`](file:///c:/Madhu/Portfolio/src/data/certifications.js) | Update verified credential titles, issuers, and URLs. |

---

## 📝 License

Personal Brand Portfolio © Jeedi Madhukar 2026. All rights reserved.
