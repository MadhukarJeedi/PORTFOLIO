# Content Update Guide — Jeedi Madhukar Portfolio

> **You do NOT need to touch any React component to update content.**  
> All content lives in `src/data/`. Edit a data file → save → the UI updates automatically.

---

## 1. Update Profile Info (name, email, phone, location, bio)

**File:** `src/data/profile.js`

```js
export const profile = {
  name: "Jeedi Madhukar",
  title: "AI/ML Engineer | Data Science | Generative AI",
  location: "Hyderabad, India",
  email: "iammadhukarjeedi@gmail.com",
  phone: "+91 9398636219",           // update here
  phoneHref: "tel:+919398636219",    // keep in sync (no spaces, + sign, country code)
  profileImage: "/images/profile.jpg",
  resumeUrl: "/Jeedi_Madhukar_Resume.pdf",
  tagline: "Building Intelligent, Data-Driven Applications",
  bio: "AI/ML Engineer...",
  availabilityBadge: "Open to AI/ML & Data Science Opportunities",
};
```

---

## 2. Change Profile Image

1. Place your new image in `public/images/`
2. Name it `profile.jpg` (or another name)
3. In `src/data/profile.js`, update:
   ```js
   profileImage: "/images/your-new-image.jpg",
   ```
4. Recommended: Use a **portrait crop (3:4 ratio)**, minimum **800x1067px**, with a **dark or plain background** for best blending.

---

## 3. Update Resume

1. Place your new PDF in `public/`
2. In `src/data/profile.js`, update:
   ```js
   resumeUrl: "/Your_New_Resume_Name.pdf",
   ```

---

## 4. Update LinkedIn / GitHub / Kaggle

**File:** `src/data/socialLinks.js`

```js
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/madhukarjeedi/",
  github:   "https://github.com/MadhukarJeedi",
  kaggle:   "https://www.kaggle.com/madhukarjeedi",
};
```

Change only the URL values. Icons, labels, and aria-labels all update automatically.

---

## 5. Add a New Project

**File:** `src/data/projects.js`

Add a new object to the `projects` array:

```js
{
  id: 4,
  title: "My New Project",
  tagline: "Short catchy line",
  category: "NLP",
  tags: ["RAG", "LangChain"],
  accentColor: "purple",
  accentHex: "#8b5cf6",
  accentBg: "rgba(139,92,246,0.08)",
  accentBorder: "rgba(139,92,246,0.3)",
  featured: false,
  description: "One paragraph description.",
  problem: "What problem does it solve?",
  solution: "How does your solution work?",
  liveUrl: "https://your-live-project.com",
  githubUrl: null,       // null = button hidden
  platform: "Streamlit Cloud",
  metric: null,          // or { label: "Accuracy", value: "92%" }
  techStack: ["Python", "LangChain"],
  approach: ["Step 1", "Step 2"],
  deployment: "How it is deployed.",
  learnings: ["Learning 1", "Learning 2"],
  ctaLabel: "Launch Project",
}
```

The project card appears **automatically** — no component editing needed.

---

## 6. Add a New Skill

**File:** `src/data/skills.js`

Find the category and add to `items`:

```js
{ name: "My New Skill", level: "advanced" },
```

Or add a new category:

```js
{
  category: "My New Category",
  icon: "🧠",
  items: [
    { name: "Skill A", level: "advanced" },
  ],
},
```

---

## 7. Add a New Certification

**File:** `src/data/certifications.js`

Add to a group's `certificates` array:

```js
{
  name: "My New Certificate",
  year: "2024",
  credentialUrl: "https://link.com",  // null = button hidden
},
```

---

## 8. Add New Education

Edit the education data inside `src/components/Education.jsx` (the inline education array).

---

## 9. Running Locally

```bash
npm run dev
```

Opens at: **http://localhost:5173**

---

## File Map

| What to update | File |
|---|---|
| Name, email, phone, bio | `src/data/profile.js` |
| Profile photo | `public/images/profile.jpg` |
| Resume PDF | `public/Jeedi_Madhukar_Resume.pdf` |
| LinkedIn / GitHub / Kaggle | `src/data/socialLinks.js` |
| Projects | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Certifications | `src/data/certifications.js` |
| Education | `src/components/Education.jsx` |
| Page title / meta description | `index.html` |
