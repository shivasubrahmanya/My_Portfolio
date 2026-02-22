# Shivasubrahmanya K C - Portfolio Website

A modern, responsive portfolio website showcasing expertise in Data Science and Machine Learning Engineering. Built with React, TypeScript, and modern web technologies.

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)


## 📖 About

This portfolio website represents Shivasubrahmanya K C, a passionate Data Science & Machine Learning Engineer currently pursuing CSE-AIML at Sahyadri College. The website showcases projects, skills, experience, and educational background in an interactive and visually appealing format.

## ✨ Features

- **Responsive Design** - Optimized for all device sizes
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Dynamic sections with hover effects and transitions
- **SEO Optimized** - Meta tags and structured data for better search visibility
- **Fast Loading** - Optimized build with Vite for superior performance
- **Accessible** - WCAG compliant with proper ARIA labels
- **Dark/Light Theme** - Theme switching capability (if implemented)

## 🛠 Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development experience
- **Vite** - Next-generation frontend build tool

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icon library

### State Management & Routing
- **React Router DOM** - Client-side routing
- **TanStack React Query** - Server state management
- **React Hook Form** - Performant forms with easy validation

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing and optimization

## 📁 Project Structure

```
My_Portfolio/
├── public/                     # Static assets
│   ├── favicon.ico            # Website favicon
│   ├── placeholder.svg        # Placeholder images
│   └── robots.txt            # SEO robots file
├── src/                       # Source code
│   ├── assets/               # Static assets (images, etc.)
│   │   └── profile-photo.jpg # Profile image
│   ├── components/           # React components
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toaster.tsx
│   │   │   └── tooltip.tsx
│   │   ├── Contact.tsx       # Contact section component
│   │   ├── Education.tsx     # Education section component
│   │   ├── Experience.tsx    # Experience section component
│   │   ├── Hero.tsx         # Hero/landing section component
│   │   ├── Navigation.tsx    # Navigation bar component
│   │   ├── Projects.tsx     # Projects showcase component
│   │   └── Skills.tsx       # Skills section component
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx   # Mobile detection hook
│   │   └── use-toast.ts     # Toast notification hook
│   ├── lib/                 # Utility libraries
│   │   └── utils.ts         # Common utility functions
│   ├── pages/               # Page components
│   │   ├── Index.tsx        # Main portfolio page
│   │   └── NotFound.tsx     # 404 error page
│   ├── App.tsx              # Main App component
│   ├── index.css            # Global CSS styles
│   └── main.tsx             # Application entry point
├── images/                   # Additional images
│   └── profile.png          # Profile image
├── .gitignore               # Git ignore rules
├── components.json          # shadcn/ui configuration
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # App-specific TypeScript config
├── tsconfig.node.json       # Node-specific TypeScript config
└── vite.config.ts           # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd My_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Builds the app for production |
| `npm run build:dev` | Builds the app in development mode |
| `npm run lint` | Runs ESLint to check for code issues |
| `npm run preview` | Previews the production build locally |

### Development Workflow

```bash
# Start development
npm run dev

# Check for linting issues
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deployment Options

1. **Netlify** - Drag and drop the `dist` folder
2. **Vercel** - Connect your GitHub repository
3. **GitHub Pages** - Use GitHub Actions for automated deployment
4. **Traditional Hosting** - Upload `dist` folder contents to your web server

### Environment Variables

If you need to add environment variables:

1. Create a `.env` file in the root directory
2. Add variables with `VITE_` prefix:
   ```
   VITE_API_URL=your_api_url
   VITE_CONTACT_EMAIL=your_email
   ```

## 🎨 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/pages/Index.tsx`
3. Update navigation in `src/components/Navigation.tsx`

### Styling

- **Global styles**: Edit `src/index.css`
- **Component styles**: Use Tailwind classes
- **Theme customization**: Modify `tailwind.config.ts`

### Adding New UI Components

```bash
# Add shadcn/ui components
npx shadcn-ui@latest add [component-name]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this portfolio helpful, please give it a star!
