#            MADHUKAR JEEDI 
## AI/ML Engineer & Data Science Aspirant Portfolio
## Check in live: https://madhuportfolio-rouge.vercel.app/

A premium, recruiter-friendly personal portfolio built using **React, Vite, and Tailwind CSS v4**. Deployed with responsive canvas-based interactive elements, custom project dashboard mockups, and end-to-end contact mechanisms.

---

## 🌐 Live Deployment & Projects

This portfolio displays three live, production-deployed AI/ML applications:

1. **Smart Irrigation Need Predictor** (Deployed on Render): ML classification pipeline predicting agricultural watering cycles.
2. **Job Recommendation System** (Deployed on Streamlit Cloud): Cosine similarity matching tool based on TF-IDF skill indexing.
3. **AI Travel Planner Agent** (Deployed on Streamlit Cloud + FastAPI Backend on Render): Groq-hosted LLM agent orchestrating live routing, weather, and locations APIs.

---

## 🎨 Premium Dark Theme Design System

- **Background Palette**: Deep dark navy (`#030712`) alternating with midnight blue (`#080e1a`) to establish clear section blocks.
- **Hero Profile Blending**: The profile picture's boundaries are faded using responsive 4-edge linear gradient overlays that merge with the dark background canvas.
- **Text & Accent Styling**: High-contrast off-white/light-slate text values matched with selective neon-colored highlights (emerald, blue, and purple) corresponding to distinct technical layers.
- **Breathing Space Layout**: Enhanced section padding of `py-32 sm:py-36` to provide elegant vertical margins and readability.
- **Ambient Visuals**: Real-time neural network canvas animation (`requestAnimationFrame`) floating behind the Hero contents.

---

## ⚙️ Environment Variables (EmailJS Integration)

The contact form is powered by EmailJS, allowing visitors to send messages directly to your inbox. Set up a `.env` file in the project root folder for local testing:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **EmailJS Deployment Notes**: When deploying to platforms like Vercel, Netlify, or AWS, remember to register these same keys inside the host environment variable configurations.

---

## 🛠️ Local Development Setup

To download dependencies, spin up the development socket, or run compiled production outputs locally:

```bash
# Install dependencies
npm install

# Start Vite dev server (runs at http://localhost:5173/)
npm run dev

# Compile production assets
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg          # Profile photo asset
│   │   └── projects/            # Project mockup screens
│   │       ├── smart_irrigation.png
│   │       ├── job_recommendation.png
│   │       └── travel_planner.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Fixed-position header glass panel
│   │   ├── Hero.jsx             # Intro greeting, photo, canvas loops, and location badges
│   │   ├── About.jsx            # ML pipeline step-by-step detailing + GenAI chips
│   │   ├── Skills.jsx           # Technical filter grid layout
│   │   ├── Projects.jsx         # Live deployed project cards with scale transitions
│   │   ├── ProjectModal.jsx     # Project detail overlay popup
│   │   ├── Education.jsx        # Academic node timeline
│   │   ├── Certifications.jsx  # AWS, Deeplearning.AI credentials cards
│   │   ├── ResumeCTA.jsx        # Pre-footer call-to-action
│   │   ├── Contact.jsx          # Sleek inputs and EmailJS form
│   │   └── Footer.jsx           # Anchor links and copyright footer
│   ├── data/
│   │   ├── certifications.js    # Verified course URLs and credentials
│   │   ├── profile.js           # Single-truth bio, phone, and resume links
│   │   ├── projects.js          # Project features, approaches, and tech stacks
│   │   └── socialLinks.js       # GitHub, LinkedIn, and Kaggle URLs
│   ├── index.css                # Global Tailwind directives and animation classes
│   ├── main.jsx                 # Vite mounting file
│   └── App.jsx                  # Main page section ordering
├── package.json                 # Node modules manifest
└── vite.config.js               # React/Vite compilation presets
```

---

## 🔧 Personal Customization Guide

You can customize the text, links, and certifications inside `src/data/`:

| Data File | Update Instructions |
|---|---|
| [`profile.js`](file:///c:/Madhu/Portfolio/src/data/profile.js) | Adjust name, bio, location details, phone, and Google Drive resume link. |
| [`projects.js`](file:///c:/Madhu/Portfolio/src/data/projects.js) | Configure titles, taglines, project steps, approaches, and API descriptions. |
| [`certifications.js`](file:///c:/Madhu/Portfolio/src/data/certifications.js) | Register or update verified credentials, issuers, and direct links. |
| [`socialLinks.js`](file:///c:/Madhu/Portfolio/src/data/socialLinks.js) | Put your custom GitHub, LinkedIn, or Kaggle URLs. |

---

## 📝 License

Personal brand portfolio — all rights reserved © Jeedi Madhukar 2026
