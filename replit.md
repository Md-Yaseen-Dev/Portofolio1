# Personal Portfolio Website

## Overview

This is a modern, responsive personal portfolio website built with React, showcasing the work and skills of Shaik Mohammad Yaseen, a Frontend Developer. The application features a single-page design with smooth scrolling navigation, animated sections, and a contact form. The design uses a high-end, dark-mode futuristic aesthetic with vibrant neon accents and glassmorphism effects for a bold, modern, and luxurious feel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: React Query for server state, local React state for UI
- **Animations**: Custom scroll-triggered animations using Intersection Observer API

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Build Tool**: Vite for development and bundling
- **TypeScript**: Full TypeScript support across client and server
- **API**: RESTful API endpoints for contact form handling

### Development Environment
- **Bundler**: Vite with React plugin
- **Package Manager**: npm
- **Development Server**: Express with Vite middleware in development
- **Hot Module Replacement**: Vite HMR for fast development

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero Section**: Animated landing section with call-to-action buttons
3. **About Section**: Personal introduction with profile image
4. **Experience Section**: Timeline-based work experience display
5. **Skills Section**: Grid layout showcasing technical skills with icons
6. **Projects Section**: Portfolio projects with code snippets
7. **Education Section**: Timeline-based educational background
8. **Blog Section**: Featured blog posts with preview cards
9. **Contact Section**: Interactive contact form with validation

### UI System
- **Design System**: Shadcn/ui components with high-end futuristic theming
- **Theme**: High-end dark-mode futuristic theme with Midnight Navy background (#0F0F1C), Platinum White text (#F4F4F4), and vibrant neon accents
- **Color Palette**: 
  - Background: Midnight Navy (#0F0F1C)
  - Text: Platinum White (#F4F4F4)
  - Cards: Space Gray (#1C1C28)
  - Primary: Neon Mint (#32FFC4)
  - Accent: Electric Purple (#A162F7)
  - Highlight: Royal Gold (#FFD56B)
  - Borders: Graphite Gray (#2E2E3A)
  - Muted Text: Cool Gray (#A1A1AA)
- **Typography**: Inter font family for modern appearance with clear hierarchy
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Design Philosophy**: Bold futuristic aesthetics, glassmorphism effects, glowing accents, micro-interactions, and premium luxury feel
- **Visual Effects**: Glassmorphism for cards/navigation, glowing shadows for interactive elements, animated gradient backgrounds

### Backend Services
- **Contact API**: POST `/api/contact` for form submissions
- **Error Handling**: Centralized error middleware
- **Logging**: Request/response logging for API endpoints

## Data Flow

1. **Static Content**: All portfolio content is hardcoded in components
2. **Contact Form**: Client-side validation → API submission → success/error feedback
3. **Animations**: Intersection Observer triggers CSS animations on scroll
4. **Navigation**: Smooth scroll to sections using native `scrollIntoView`

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Forms**: React Hook Form with Hookform Resolvers
- **Animations**: Embla Carousel for potential future use
- **Date Handling**: date-fns for date utilities

### Development Dependencies
- **Build Tools**: Vite, ESBuild for production builds
- **TypeScript**: Full type safety across the stack
- **PostCSS**: CSS processing with Tailwind

### Database & Storage
- **Current**: In-memory storage for basic user schema (placeholder)
- **Configured**: Drizzle ORM with PostgreSQL support (ready for future expansion)
- **Database Provider**: Neon Database serverless PostgreSQL

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: ESBuild bundles server code to `dist/index.js`
3. **Production Mode**: Serves static files with Express

### Development Workflow
- **Development**: `npm run dev` runs Express with Vite middleware
- **Type Checking**: `npm run check` for TypeScript validation
- **Database**: `npm run db:push` for schema migrations (when needed)

### Production Deployment
- **Start Command**: `npm start` runs the production build
- **Environment**: Node.js with environment variable configuration
- **Static Assets**: Served from `dist/public` directory

### Replit Integration
- **Development Banner**: Automatic Replit development banner
- **Error Overlay**: Runtime error modal for development
- **Code Cartographer**: Replit's code navigation tool integration

The application is designed to be easily deployable to various platforms while maintaining a clean separation between development and production concerns.