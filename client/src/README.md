# Client Source Directory

This directory contains all the source code for the Little Rose Foundation React application.

## Structure

```
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── Toast.tsx
├── constants/       # Application constants
├── hooks/           # Custom React hooks
│   ├── useToast.ts
│   └── useScrollEffects.ts
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Programs.tsx
│   ├── News.tsx
│   ├── Finance.tsx
│   ├── Contact.tsx
│   └── Donate.tsx
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── App.tsx          # Main App component with routing
├── main.tsx         # Application entry point
└── index.css        # Global styles with Tailwind directives
```

## Key Files

- **App.tsx**: Contains React Router configuration and main app structure
- **main.tsx**: React application entry point with StrictMode
- **index.css**: Tailwind v4 configuration with custom theme and dark mode
- **Layout.tsx**: Common layout wrapper with Header and Footer
- **Toast.tsx**: Toast notification component for user feedback
- **useToast.ts**: Custom hook for managing toast notifications
- **useScrollEffects.ts**: Custom hook for scroll-based animations

## Features

- ✅ React 19.2.0 with TypeScript
- ✅ Tailwind CSS v4 with custom theme
- ✅ Dark mode support
- ✅ React Router for navigation
- ✅ Toast notifications
- ✅ Scroll animations
- ✅ Responsive design
- ✅ Material Icons integration
