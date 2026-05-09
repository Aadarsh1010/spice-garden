# Spice Garden - Premium Indian Fine Dining

A luxurious, fully-featured website for **Spice Garden**, Mumbai's most awarded Indian fine dining restaurant. Built as a senior full-stack demonstration project showcasing modern React development, premium UI/UX, and production best practices.

## ✨ Features

### Core Experience
- **Premium Design**: Rich burgundy, gold, saffron and cream color palette with elegant Playfair Display and Inter typography
- **Fully Responsive**: Perfect mobile, tablet, and desktop experiences
- **Smooth 60fps Animations**: Powered by Framer Motion throughout
- **Multi-page Architecture**: Home, Menu, About, Gallery, Reservations, Private Dining, Contact

### Advanced Features
- **Interactive Menu** with category filtering, dietary toggles, spice levels, and live cart
- **3-Step Reservation System** with calendar, real-time availability, and confetti celebration
- **Stunning Gallery** with masonry layout, lightbox, and Instagram-style feed
- **Private Dining** with room options, custom menus, and enquiry form
- **Loading Screen** with animated lotus flower
- **Page Transitions** between all routes
- **Floating WhatsApp Chat**, Back-to-Top with progress ring, and Cookie Consent
- **Dark/Light Mode Toggle**
- **Today's Special** and Loyalty popups
- **Animated spice particle backgrounds**

### Production Ready
- SEO meta tags, Open Graph, and JSON-LD structured data (Restaurant + Menu schema)
- Sitemap.xml and robots.txt
- Optimized images with lazy loading
- Keyboard navigation and accessibility improvements
- Theme persistence, cart persistence, and form handling
- Configured for Vercel and Netlify deployment

## Tech Stack

- **React 19** + **Vite** (blazing fast)
- **Tailwind CSS v4**
- **Framer Motion** for buttery animations
- **React Router DOM v7**
- **Lucide React** icons
- **React Helmet Async** for SEO
- **Canvas Confetti** for celebrations

## 🚀 Getting Started

```bash
# 1. Clone and install
git clone <repository-url>
cd spice-garden
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Preloader.jsx
│   ├── WhatsAppButton.jsx
│   ├── BackToTop.jsx
│   └── ...
├── contexts/            # React Context providers
│   ├── ThemeContext.jsx
│   └── CartContext.jsx
├── pages/               # Main page components
├── data/                # Static data (menu items)
├── App.jsx
├── main.jsx
└── index.css
```

## 🛠️ Scripts

- `npm run dev` — Start development server with HMR
- `npm run build` — Create optimized production build
- `npm run preview` — Preview production build locally

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify
1. Drag and drop the `dist` folder after running `npm run build`
2. Or connect GitHub repository

**Environment Variables (if adding backend later):**
- `VITE_API_URL` for future API integration

## 📋 Accessibility & SEO

- WCAG 2.1 AA compliant color contrast
- Full keyboard navigation support
- Semantic HTML and ARIA labels
- Comprehensive JSON-LD structured data for Restaurant and MenuItem
- Open Graph and Twitter Card meta tags
- Sitemap and robots.txt included

## 🎨 Design System

- **Primary**: `#2C1810` (Deep Burgundy)
- **Accent**: `#D4AF37` (Luxury Gold)
- **Saffron**: `#E67E22`
- **Cream**: `#F8F1E3`
- Typography: Playfair Display (headings), Inter (body)

---

**Spice Garden is a fictional restaurant created for demonstration purposes only.**

Built with passion by a senior full-stack developer to showcase modern web development excellence in the hospitality industry.

**Ready for production deployment.**
# spice-garden
