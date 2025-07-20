# Portfolio Project Installation Guide

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn

## Installation Steps

### 1. Install Core Dependencies
```bash
npm install react react-dom
```

### 2. Install UI Component Library (shadcn/ui)
```bash
npm install @radix-ui/react-slot @radix-ui/react-tabs @radix-ui/react-toast class-variance-authority clsx tailwind-merge
```

### 3. Install Icon Library
```bash
npm install lucide-react
```

### 4. Install Animation Library
```bash
npm install framer-motion
```

### 5. Install CSS Framework
```bash
npm install tailwindcss @tailwindcss/typography autoprefixer postcss
```

### 6. Install Development Dependencies
```bash
npm install -D @types/node
```

### 7. Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

### 8. Create Missing UI Components
You'll need to create the missing UI components that are being imported. These should be created in `src/components/ui/`:

- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/tabs.tsx`
- `src/hooks/use-toast.ts`

### 9. Run the Development Server
```bash
npm run dev
```

## Missing Files to Create

### 1. Tailwind Configuration
Create `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        geometric: {
          dark: "hsl(var(--geometric-dark))",
          primary: "hsl(var(--geometric-primary))",
          secondary: "hsl(var(--geometric-secondary))",
          accent: "hsl(var(--geometric-accent))",
          light: "hsl(var(--geometric-light))",
        },
        background: {
          light: "hsl(var(--background-light))",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
}
```

### 2. PostCSS Configuration
Create `postcss.config.js`:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## Common Issues and Solutions

1. **Module not found errors**: Make sure all dependencies are installed
2. **Path alias errors**: The TypeScript and Vite configurations have been updated to support `@/` imports
3. **CSS not loading**: Ensure Tailwind CSS is properly configured
4. **Component import errors**: Create the missing UI components in the `src/components/ui/` directory

## Next Steps

After installation:
1. Create the missing UI components
2. Set up your CSS variables in `src/index.css`
3. Configure your portfolio content in `src/pages/Page.tsx`
4. Test the application with `npm run dev` 