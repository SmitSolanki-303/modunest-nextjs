# ModuNest - Premium Modular Homes & Tiny Living Solutions

ModuNest is a modern, interactive marketing website showcasing premium modular tiny homes and container housing solutions. Built with cutting-edge web technologies, the site emphasizes sustainability, customization, and beautiful design to engage potential customers and showcase innovative housing solutions.

**Live Site:** [https://themodunest.vercel.app](https://themodunest.vercel.app)

---

## 🎯 Project Overview

ModuNest is a Next.js-based marketing platform that highlights:
- Premium modular and tiny home collections
- Sustainable housing solutions
- Interactive product portfolios
- Company values and sustainability initiatives
- Product detail pages with specifications

The website features smooth animations, responsive design, and performance-optimized sections for an excellent user experience.

---

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.5** - React framework with App Router for server-side rendering and static generation
- **React 19** - UI library for component-based architecture
- **Node.js** - JavaScript runtime

### Styling & Animation
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **PostCSS** - CSS transformations and autoprefixing
- **Framer Motion 12** - Advanced animations and interactions
- **Custom Fonts** - Urbanist, Meridiana, and Vaelia for premium typography

### UI & Icons
- **Lucide React** - Lightweight, accessible SVG icon library
- **Custom SVG Components** - Modular house illustrations and graphics

### Development Tools
- **ESLint 9** - JavaScript linting for code quality
- **jsconfig.json** - JavaScript path aliases and project configuration

---

## 📁 Project Structure

```
modunest-nextjs/
├── src/
│   ├── app/                                # Next.js App Router pages
│   │   ├── hero/                           # Hero section landing banner
│   │   ├── svg-page/                       # SVG animations and graphics showcase
│   │   ├── image-mask/                     # Image reveal animations section
│   │   ├── collection/                     # Product collection/catalog pages
│   │   ├── collection-detail/              # Individual product detail pages
│   │   ├── portfolio/                      # Portfolio and gallery showcase
│   │   ├── sustainability/                 # Sustainability features section
│   │   ├── why-choose-modular/             # Value proposition section
│   │   ├── about/                          # About the company
│   │   ├── interior/                       # Interior design showcase
│   │   ├── layout.jsx                      # Root layout with metadata & fonts
│   │   ├── page.jsx                        # Homepage (orchestrates all sections)
│   │   ├── globals.css                     # Global Tailwind styles
│   │   └── favicon.ico                     # Website favicon
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx                  # Top navigation header
│   │   │   ├── Navbar.jsx                  # Responsive navbar with menu
│   │   │   └── Footer.jsx                  # Footer with links and info
│   │   ├── ui/
│   │   │   ├── ModularHouseSvg.jsx         # SVG modular house illustration
│   │   │   └── ScrollMaskSection.jsx       # Image reveal with scroll animations
│   │   └── CollectionDetailClient.jsx      # Client-side product details component
│   │
│   ├── data/
│   │   └── homesData.js                    # Product catalog data (homes, specs, prices)
│   │
│   └── assets/
│       └── fonts/                          # Custom font files
│           ├── Urbanist-Regular.otf
│           ├── Meridiana-Black.otf
│           └── Vaelia.otf
│
├── public/                                 # Static assets
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── manifest.json
│
├── package.json                            # Project dependencies and scripts
├── next.config.mjs                         # Next.js configuration
├── tailwind.config.mjs                     # Tailwind CSS theme customization
├── postcss.config.mjs                      # PostCSS configuration
├── eslint.config.mjs                       # ESLint configuration
├── jsconfig.json                           # JavaScript path aliases
├── .gitignore                              # Git ignore rules
└── README.md                               # This file
```

---

## 🎨 Design System

### Color Scheme
- **Primary Green:** `#2E8B57` - Main brand color
- **Secondary Gold:** `#FFD700` - Accent and highlights
- **Dark Text:** `#222222` - Primary text color
- **Light Background:** `#F8F8F8` - Page backgrounds
- **Brown Palette:** `#484439`, `#211F19`, `#B5A58D` - Earthy tones

### Typography
- **Urbanist** - Regular body text
- **Meridiana Black** - Bold headings and titles
- **Vaelia** - Decorative and special elements

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SmitSolanki-303/modunest-nextjs.git
   cd modunest-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory (optional):
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site. The page auto-updates as you edit files (hot module replacement).

### Production Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Static Export

Generate a static export (for hosting on static platforms):

```bash
npm run export
```

This creates an `out/` directory with static HTML files.

### Code Quality

Run ESLint to check for code issues:

```bash
npm run lint
```

---

## 📄 Key Features

### 1. **Dynamic Page Sections**
- **Hero Section** - Eye-catching landing banner with call-to-action
- **SVG Animations** - Interactive graphics and animations
- **Image Mask Effects** - Scroll-triggered image reveal animations
- **Product Collections** - Browse and filter modular homes
- **Portfolio Gallery** - Showcase of completed projects
- **Sustainability Section** - Environmental initiatives and green building practices
- **Value Proposition** - Why choose ModuNest's modular approach

### 2. **Performance Optimizations**
- **Dynamic Imports** - Lazy-loaded page sections with `next/dynamic`
- **Suspense Boundaries** - Loading states and fallbacks for smooth transitions
- **Font Preloading** - Optimized font loading with `next/font`
- **Image Optimization** - Next.js built-in image optimization
- **Code Splitting** - Automatic code splitting for smaller bundles

### 3. **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Responsive navbar with mobile menu
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

### 4. **SEO Optimization**
- Comprehensive metadata in `layout.jsx`
- Open Graph tags for social sharing
- Twitter Card support
- Structured data for search engines
- XML sitemap support

### 5. **Animations & Interactions**
- Framer Motion for smooth animations
- Scroll-triggered effects
- Hover interactions
- Staggered animations for visual hierarchy

---

## 📊 Homepage Structure

The homepage (`src/app/page.jsx`) orchestrates the user experience by dynamically loading these sections:

```
HomePage
├── Hero Section (dynamic)
├── SVG Page (dynamic) - Graphics and animations
├── Image Mask (dynamic) - Scroll reveal effects
├── Sustainability (dynamic) - Green building features
├── Why Choose Modular (dynamic) - Value proposition
└── Footer (dynamic) - Links and company info
```

Each section uses Suspense with loading fallbacks for optimal performance.

---

## 🗂️ Data Management

### Product Data (`src/data/homesData.js`)
The `homesData.js` file contains:
- Product specifications (dimensions, capacity, materials)
- Pricing information
- Feature lists and amenities
- Images and media
- Categories and filtering options

This data is consumed by:
- Collection pages for displaying product listings
- Collection detail pages for individual product information
- Portfolio pages for project showcases

---

## 🧩 Key Components

### Layout Components
- **Header.jsx** - Top navigation header
- **Navbar.jsx** - Full responsive navbar with mobile menu support
- **Footer.jsx** - Company footer with links, contact info, and social media

### UI Components
- **ModularHouseSvg.jsx** - Custom SVG illustration of a modular house
- **ScrollMaskSection.jsx** - Advanced scroll-triggered image reveal animation
- **CollectionDetailClient.jsx** - Client-side component for product details with interactivity

---

## 🔗 Navigation

Main routes in the application:

- `/` - Homepage (main landing page)
- `/hero` - Hero section detail
- `/svg-page` - SVG animations showcase
- `/image-mask` - Image reveal effects showcase
- `/collection` - Product collection/catalog
- `/collection-detail/:id` - Individual product details
- `/portfolio` - Project portfolio gallery
- `/sustainability` - Sustainability initiatives
- `/why-choose-modular` - Value proposition page
- `/about` - About ModuNest
- `/interior` - Interior design showcase

---

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is to use [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically detects Next.js and configures the build
4. Your site is live at `your-project.vercel.app`

### Environment Variables for Production
In Vercel dashboard, set:
- `NEXT_PUBLIC_SITE_URL` - Your production domain URL

### Other Deployment Options
- **Netlify** - Static export with `npm run export`
- **Docker** - Containerize with a Dockerfile
- **Traditional Server** - Deploy to any Node.js server

---

## 📝 Customization

### Change Brand Colors
Edit `tailwind.config.mjs` to update the color scheme:

```javascript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  // ... other colors
}
```

### Add New Sections
1. Create a new page in `src/app/your-section/page.jsx`
2. Add to the homepage in `src/app/page.jsx` using dynamic imports:
   ```javascript
   const YourSection = dynamic(() => import('@/app/your-section/page'), {
     loading: () => <div className="min-h-screen bg-white animate-pulse" />,
     ssr: true
   });
   ```

### Update Product Data
Edit `src/data/homesData.js` to add, remove, or modify products and their details.

### Modify Fonts
Replace font files in `src/assets/fonts/` and update references in `src/app/layout.jsx`.

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Build Issues
Clear cache and rebuild:
```bash
rm -rf .next
npm run build
```

### Font Loading Issues
Ensure font files exist in `src/assets/fonts/` and paths in `layout.jsx` are correct.

### Styling Not Applied
Clear Tailwind cache:
```bash
rm -rf .next
npm run dev
```

---

## 📚 Learn More

### Next.js Documentation
- [Next.js Docs](https://nextjs.org/docs) - Official Next.js documentation
- [Next.js Tutorial](https://nextjs.org/learn) - Interactive learning guide
- [Next.js GitHub](https://github.com/vercel/next.js) - Source code and issues

### Related Libraries
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - React animation library
- [Lucide React](https://lucide.dev) - Icon library

---

## 📄 License

This project is created by SmitSolanki-303. Please check the repository for license information.

---

## 👤 Author

**Smit Solanki**
- GitHub: [@SmitSolanki-303](https://github.com/SmitSolanki-303)
- Project Repository: [modunest-nextjs](https://github.com/SmitSolanki-303/modunest-nextjs)

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to ModuNest:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support & Contact

For questions, suggestions, or issues, please:
- Open an [Issue](https://github.com/SmitSolanki-303/modunest-nextjs/issues) on GitHub
- Check existing issues for solutions
- Review the [Troubleshooting](#-troubleshooting) section

---

## 🎉 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev)
- Deployed on [Vercel](https://vercel.com)

---

**Last Updated:** 2024
