# 🚀 Jeedi Madhukar — AI/ML Engineer Portfolio

A premium, futuristic AI/ML personal-brand portfolio built with **React + Vite**.  
Live, responsive, and production-ready.

---

## 🌐 Live Deployment

### Option 1 — Vercel (Recommended, Free)

1. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [https://vercel.com](https://vercel.com) → Sign in with GitHub  
3. Click **"Add New Project"** → Import your repository  
4. Vercel auto-detects Vite — no config needed  
5. Click **"Deploy"**  
6. Your site is live at: `https://your-project.vercel.app`

> **Custom Domain**: In Vercel dashboard → Settings → Domains → Add your domain.

---

### Option 2 — Netlify (Also Free)

1. Push to GitHub (same steps as above)  
2. Go to [https://app.netlify.com](https://app.netlify.com) → Sign in  
3. Click **"Add new site"** → **"Import an existing project"**  
4. Connect GitHub → Select your repo  
5. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**

> **Custom Domain**: Site settings → Domain management → Add custom domain.

---

### Option 3 — GitHub Pages (Free)

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Add `base` to `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/portfolio/',
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

## ⚙️ Environment Variables (EmailJS)

The contact form uses EmailJS. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Add these same variables in Vercel/Netlify dashboard under **Environment Variables**.

Get your keys at [https://www.emailjs.com](https://www.emailjs.com) → Free plan supports 200 emails/month.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v4 + Vanilla CSS |
| Animations | CSS keyframes, Canvas neural network |
| Contact Form | EmailJS |
| Icons | Lucide React |
| Fonts | Inter, JetBrains Mono |
| Deployment | Vercel / Netlify / GitHub Pages |

---

## 🎯 Design System

- **Background**: Near-black `#04080F` — matched to profile image dark corners
- **Accent Blue**: `#3b82f6` → `#6366f1` → `#a78bfa` gradient
- **Accent Cyan**: `#34d399` (availability badge, orbital glow)
- **Hero Layout**: CSS Grid — `1fr 1.15fr` columns (text | image)
- **Image Blending**: 4-direction gradient overlays (no mask-image)
- **Responsive**: 2-col desktop → stacked mobile

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # Hero with HELLO I'M greeting + profile image
│   ├── Navbar.jsx         # Fixed top navigation
│   ├── About.jsx          # ML workflow pipeline + tech overview
│   ├── Skills.jsx         # Full technical expertise grid
│   ├── Projects.jsx       # 3 live AI/ML project cards
│   ├── Education.jsx      # Academic timeline
│   ├── Certifications.jsx # Grouped certification cards
│   ├── Contact.jsx        # EmailJS contact form
│   └── Footer.jsx         # Footer with links
├── data/
│   ├── profile.js         # Name, bio, image URL, resume link
│   └── socialLinks.js     # LinkedIn, GitHub, Kaggle links
├── index.css              # Design tokens + all CSS animations
└── App.jsx                # Root component + section order
public/
└── assets/                # Profile image + resume PDF
```

---

## 📄 Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | `HELLO, I'M` greeting, name, subtitle, profile image, CTAs |
| 2 | **About** | ML workflow pipeline, Generative AI technologies |
| 3 | **Skills** | 8-category technical expertise grid |
| 4 | **Projects** | Smart Irrigation, Job Recommender, AI Travel Planner |
| 5 | **Education** | Academic background timeline |
| 6 | **Certifications** | AWS, Google, Microsoft, DeepLearning.AI grouped cards |
| 7 | **Contact** | EmailJS contact form + social links |

---

## 🔧 Customization

To update your personal info, edit only these files:

| File | What to change |
|---|---|
| `src/data/profile.js` | Name, bio, phone, location, image, resume URL |
| `src/data/socialLinks.js` | LinkedIn, GitHub, Kaggle URLs |
| `src/components/Projects.jsx` | Project titles, descriptions, live links |
| `src/components/Certifications.jsx` | Certification names and links |

---

## 📝 License

Personal portfolio — all rights reserved © Jeedi Madhukar 2025
