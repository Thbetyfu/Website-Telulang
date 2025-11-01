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

### 3D Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Useful helpers for React Three Fiber

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

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 16.x
- **npm** or **yarn** package manager
- **Git** for version control

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

### UI Components Library (60+ components)
All components from shadcn/ui including:
- Form components (Input, Textarea, Select, etc.)
- Layout (Card, Accordion, Tabs, etc.)
- Feedback (Alert, Toast, Dialog, etc.)
- Navigation (Dropdown, Menubar, etc.)
- And many more...

## 🎨 Customization

### Theming
The project uses Tailwind CSS for styling. Customize the theme by editing:
- `tailwind.config.js` - Tailwind configuration
- `src/styles/globals.css` - Global styles
- `src/index.css` - Component styles

### Configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## 📝 Attributions

### Component Library
- [shadcn/ui](https://ui.shadcn.com/) - Component library (MIT License)

### Design Resources
- [Unsplash](https://unsplash.com) - Stock photos (Unsplash License)

### Design Reference
- Original Figma design: [Premium Portfolio Case Study Layout](https://www.figma.com/design/mEUOyCkS4H46tOiYohHPok/Premium-Portfolio-Case-Study-Layout)

For detailed attributions, see [Attributions.md](./src/Attributions.md)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, please open an issue on the GitHub repository: [Website-Telulang Issues](https://github.com/Thbetyfu/Website-Telulang/issues)

---

**Made with ❤️ by Telulang Team**
