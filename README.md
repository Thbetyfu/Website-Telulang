# Website Telulang - Premium Portfolio Case Study Layout

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A modern, interactive premium portfolio website built with React, TypeScript, and Three.js. This project features 3D animations, responsive design, and beautiful UI components from shadcn/ui.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Components](#components)
- [Attributions](#attributions)

## 🎯 Overview

Website Telulang is a premium portfolio case study layout showcasing modern web development practices.

This project demonstrates:
- Interactive 3D graphics with Three.js
- Responsive design for all devices
- Accessible UI components
- Modern React patterns with TypeScript
- Beautiful animations and transitions

## ✨ Features

- **3D Graphics**: Interactive 3D scenes and animations using Three.js and React Three Fiber
  - 3D Model Viewer with OBJ model loading and interactive rotation
  - Professional lighting setup with ambient, directional, and point lights
- **PixelBlast Effect**: Advanced interactive pixel-based visual effect
  - Real-time GLSL shader-based rendering
  - Interactive ripple effects on pointer events
  - Customizable color, pixel size, and pattern density
  - Liquid effect with FBM noise warping
  - Smooth animation with configurable speed
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Component Library**: Rich set of UI components from shadcn/ui (Accordion, Dialog, Dropdown, etc.)
- **Form Handling**: Built-in form validation and management with React Hook Form
- **Data Visualization**: Charts and graphs using Recharts
- **Theme Support**: Dark/light mode switching with next-themes
- **Accessibility**: WCAG compliant with Radix UI components
- **Type Safety**: Full TypeScript support throughout

## 🛠 Tech Stack

### Core
- **React** 18.3.1 - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### 3D Graphics & Effects
- **Three.js** 0.181.0 - 3D graphics library
- **React Three Fiber** 8.17.6 - React renderer for Three.js
- **Drei** 9.112.0 - Useful helpers for React Three Fiber
- **postprocessing** 6.37.8 - Post-processing effects library (used for PixelBlast effect)

### UI Components & Forms
- **shadcn/ui** - High-quality React components
- **Radix UI** - Unstyled, accessible components
- **React Hook Form** - Efficient form management
- **Sonner** - Toast notifications

### Data & Visualization
- **Recharts** - React charting library
- **Embla Carousel** - Lightweight carousel library
- **React Day Picker** - Calendar component

### Utilities
- **Lucide React** - Beautiful icon library
- **next-themes** - Theme management
- **clsx/tailwind-merge** - Class name utilities
- **Motion** - Animation library for smooth transitions

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 16.x
- **npm** or **yarn** package manager
- **Git** for version control

### System Requirements & Setup

This project requires several dependencies to run properly. Make sure your system meets these requirements:

#### Required Global Installation (Optional but Recommended)
```bash
# Node.js and npm (required)
# Download from https://nodejs.org/ (LTS version recommended)
node --version  # Verify installation
npm --version   # Verify npm
```

#### Key Dependencies Overview

The project uses the following critical libraries:

| Library | Version | Purpose |
|---------|---------|---------|
| React | 18.3.1 | UI framework |
| TypeScript | Latest | Type safety |
| Three.js | 0.181.0 | 3D graphics engine |
| Vite | 6.3.5 | Build tool and dev server |
| Tailwind CSS | Latest | Utility-first CSS |
| postprocessing | 6.37.8 | Advanced visual effects (PixelBlast) |
| React Three Fiber | 8.17.6 | React renderer for Three.js |
| shadcn/ui | Latest | Component library |

#### Special Notes on Dependencies

**postprocessing Library**: This project uses the `postprocessing` library which has specific peer dependencies. When installing, you may see peer dependency warnings. If you encounter issues, use the `--legacy-peer-deps` flag:

```bash
npm install --legacy-peer-deps
```

This is necessary because `postprocessing@6.37.8` requires Three.js `>= 0.157.0 < 0.181.0`, but the project uses Three.js `0.181.0` for better features and performance.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Thbetyfu/Website-Telulang.git
   cd Website-Telulang
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Or if using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Or with yarn:
   ```bash
   yarn dev
   ```

   The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── 3d/                      # 3D graphics components
│   │   ├── FloatingGeometry.tsx
│   │   ├── Simple3DDemo.tsx
│   │   └── ThreeScene.tsx
│   ├── figma/                   # Figma-based components
│   │   └── ImageWithFallback.tsx
│   ├── sections/                # Page sections
│   │   ├── AchievementsSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Innovation3DSection.tsx
│   │   ├── IntroSection.tsx
│   │   ├── MetadataSection.tsx
│   │   ├── TeamSection.tsx
│   │   └── TestimonialSection.tsx
│   ├── shared/                  # Reusable components
│   │   ├── AchievementsGallery.tsx
│   │   └── TeamMemberCard.tsx
│   └── ui/                      # UI component library (shadcn/ui)
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ... (40+ components)
├── guidelines/
│   └── Guidelines.md            # AI development guidelines
├── styles/
│   ├── globals.css
│   └── index.css
├── types/
│   └── three-fiber.d.ts         # Type definitions
├── App.tsx                      # Root component
├── main.tsx                     # Entry point
└── Attributions.md              # Credits and licenses

public/
├── index.html
└── base.obj                     # 3D model file
```

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm install` | Install dependencies |

## 🧩 Components

### Page Sections
- **HeroSection** - Landing section with call-to-action
- **IntroSection** - Introduction content
- **FeaturesSection** - Showcase of features
- **Innovation3DSection** - 3D interactive section
- **AchievementsSection** - Achievements and statistics
- **TeamSection** - Team member profiles
- **TestimonialSection** - Customer testimonials
- **CTASection** - Call-to-action section
- **MetadataSection** - Metadata and footer information

### 3D Components
- **ThreeScene** - Main 3D scene setup
- **FloatingGeometry** - Animated geometric shapes
- **Simple3DDemo** - Basic 3D demonstration
- **OBJModelViewer** - Advanced 3D model viewer for OBJ files with professional lighting and rotation

### Visual Effects Components
- **PixelBlast** - Interactive pixel-based visual effect component
  - GLSL shader-based rendering with Perlin noise
  - Multiple effect variants: square, circle, triangle, diamond
  - Features: Bayer dithering, ripple effects, liquid effects, noise overlay
  - Interactive ripple effects triggered by pointer clicks
  - Fully customizable with props: color, pixelSize, patternScale, patternDensity, speed, etc.

### UI Components Library (60+ components)
All components from shadcn/ui including:
- Form components (Input, Textarea, Select, etc.)
- Layout (Card, Accordion, Tabs, etc.)
- Feedback (Alert, Toast, Dialog, etc.)
- Navigation (Dropdown, Menubar, etc.)
- And many more...

## 🔧 Customization

### Theming
The project uses Tailwind CSS for styling. Customize the theme by editing:
- `tailwind.config.js` - Tailwind configuration
- `src/styles/globals.css` - Global styles
- `src/index.css` - Component styles

### Configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## ⚙️ Troubleshooting & Common Issues

### Dependency Installation Issues

**Issue**: `npm install` fails with peer dependency warnings
```bash
# Solution: Use the --legacy-peer-deps flag
npm install --legacy-peer-deps
```

**Issue**: postprocessing library conflicts
```bash
# The postprocessing library@6.37.8 is compatible with Three.js versions < 0.181.0
# But this project uses Three.js 0.181.0 for enhanced features
# Use --legacy-peer-deps to override this check
npm install --legacy-peer-deps
```

### Build Issues

**Issue**: Build fails with module errors
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install --legacy-peer-deps
npm run build
```

**Issue**: Out of memory during build
```bash
# Increase Node.js memory limit
set NODE_OPTIONS=--max-old-space-size=4096
npm run build
```

### Development Server Issues

**Issue**: Dev server won't start
```bash
# Make sure port 5173 is available, or restart the dev server
npm run dev
```

**Issue**: Hot Module Replacement (HMR) not working
- Try refreshing the browser manually
- Check browser console for errors
- Restart the dev server

### 3D Model Loading Issues

**Issue**: `base.obj` model not loading
- Make sure `base.obj` exists in the `public/` directory
- Check browser console for 404 errors
- Verify the file path in `OBJModelViewer.tsx` matches the actual file location

### PixelBlast Effect Issues

**Issue**: PixelBlast effect not rendering
- Ensure `postprocessing` library is properly installed
- Check browser console for WebGL errors
- Verify GPU supports WebGL 2.0
- Try clearing browser cache and rebuilding: `npm run build`

## 📦 Project Assets

### Required Files
- `public/base.obj` - 3D model file for the OBJModelViewer component
- `public/index.html` - HTML entry point

### Image Assets
Located in `src/Images/`:
- Team photos and promotional images
- Background images and logos
- Achievement/gallery images

## 🚀 Performance Optimization

### Build Optimization
The Vite configuration includes manual chunk optimization:
```typescript
// vite.config.ts
manualChunks: {
  'three': ['three'],
  'react-vendor': ['react', 'react-dom']
}
```

This ensures:
- Three.js code is bundled separately for better caching
- React core is isolated for vendor updates
- Faster initial page load

### Runtime Performance
- Three.js scenes use efficient lighting calculations
- PixelBlast uses optimized GLSL shaders
- Tailwind CSS purges unused styles in production
- Code splitting with dynamic imports

## 📝 Attributions

### Component Library
- [shadcn/ui](https://ui.shadcn.com/) - Component library (MIT License)
- [Three.js](https://threejs.org/) - 3D graphics library (MIT License)
- [postprocessing](https://github.com/vanruesc/postprocessing) - Post-processing effects library (Zlib License)
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives (MIT License)

### Design Resources
- [Unsplash](https://unsplash.com) - Stock photos (Unsplash License)

### Design Reference
- Original Figma design: [Premium Portfolio Case Study Layout](https://www.figma.com/design/mEUOyCkS4H46tOiYohHPok/Premium-Portfolio-Case-Study-Layout)

### Shader & Effects
- PixelBlast component uses advanced GLSL shaders with Perlin noise (fbm2) for realistic pixel effects
- Built with postprocessing library for performance-optimized visual effects

For detailed attributions, see [Attributions.md](./src/Attributions.md)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, please open an issue on the GitHub repository: [Website-Telulang Issues](https://github.com/Thbetyfu/Website-Telulang/issues)

---

**Made with ❤️ by Telulang Team**
