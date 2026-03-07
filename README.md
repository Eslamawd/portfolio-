# 🚀 Eslam's Portfolio

> A complete, modern portfolio website showcasing my full-stack development & AI/ML projects.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0080?logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

## ✨ Features

- 🎨 **Dark theme** with blue/purple (Tokyo Night inspired) accents
- 🌊 **Framer Motion** scroll animations & typing effect
- 📱 **Fully responsive** — mobile-first design
- 🌙 **Dark/Light mode** toggle
- 🧭 **Sticky navbar** with mobile hamburger menu & smooth scroll
- 💼 **6 real projects** showcased with links
- 📬 **Contact form** UI

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | TailwindCSS 3 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Language | JavaScript |
| Deployment | Vercel |

## 📁 Project Structure

```
portfolio-/
├── app/
│   ├── layout.js        # Root layout & metadata
│   ├── page.js          # Main page
│   └── globals.css      # Global styles & Tailwind directives
├── components/
│   ├── Navbar.jsx       # Sticky nav with dark/light mode
│   ├── Hero.jsx         # Animated hero with typing effect
│   ├── About.jsx        # About me section
│   ├── Skills.jsx       # Tech stack grid
│   ├── Projects.jsx     # 6 project cards with links
│   ├── Contact.jsx      # Contact form + GitHub link
│   └── Footer.jsx       # Footer
├── public/
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
├── jsconfig.json
└── package.json
```

## 🚀 Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Eslamawd/portfolio-.git
cd portfolio-

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## ☁️ Deploy to Vercel

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new):

1. Push this repo to GitHub
2. Import the project on [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site is live! 🎉

Or use the CLI:

```bash
npm i -g vercel
vercel --prod
```

## 👤 Author

**Eslam** — Full-Stack Developer  
🔗 [github.com/Eslamawd](https://github.com/Eslamawd)

---

> Built with ❤️ using Next.js & TailwindCSS