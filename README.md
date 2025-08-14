# Satvik's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design inspired by modern portfolio websites with animated LaTeX equations in the background.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scroll animations and hover effects
- **Math Background**: Animated LaTeX equations floating in the background
- **Sections**: Hero, Projects, Skills, About, and Contact sections
- **Performance**: Optimized with Vite for fast development and builds

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Math Rendering**: KaTeX for LaTeX equations
- **Fonts**: Inter, JetBrains Mono, Kalam (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/sections/Hero.tsx` - Update name, title, and description
- `src/sections/Projects.tsx` - Add your projects
- `src/sections/Skills.tsx` - Update skills list
- `src/sections/About.tsx` - Update about content and experience
- `src/sections/Contact.tsx` - Update contact information and social links

### Styling
- Colors: Update the color palette in `tailwind.config.js`
- Fonts: Modify font families in `tailwind.config.js`
- Animations: Customize animations in `src/styles/index.css`

### Math Equations
Add or modify LaTeX equations in `src/components/MathBackground.tsx`:
```typescript
const equations = [
  '\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\epsilon_0}',
  '\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}',
  // Add more equations here
]
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service (Vercel, Netlify, etc.)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 