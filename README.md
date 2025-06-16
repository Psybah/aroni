# Aroni Engineering Services Website

A modern, responsive website for Aroni Engineering Services, showcasing their expertise in hydraulic, pneumatic, and agricultural engineering solutions.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Pages](#pages)
- [Components](#components)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Performance Optimization](#performance-optimization)
- [Deployment](#deployment)
- [License](#license)

## Overview

Aroni Engineering Services website is designed to showcase the company's engineering expertise, services, and projects. The site provides a seamless, responsive user experience across all devices with modern animations, 3D elements, and an intuitive interface to help visitors quickly find the information they need.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop screens
- **Modern UI/UX**: Sleek animations, transitions, and interactive elements powered by Framer Motion
- **3D Elements**: Interactive 3D components using Three.js and React Three Fiber
- **Optimized Performance**: Fast loading times with code splitting and lazy loading
- **Accessibility**: WCAG compliant with proper semantic HTML and focus management
- **SEO Friendly**: Proper metadata, semantic markup, and performance optimizations
- **WhatsApp Integration**: Direct communication channel via WhatsApp button
- **Form Handling**: Contact form with validation using React Hook Form
- **Testimonials**: Dynamic testimonial showcase with client feedback
- **Services Showcase**: Detailed presentation of company services
- **Statistics Display**: Key performance metrics and company achievements

## Technologies Used

- **React**: Front-end library for building user interfaces
- **TypeScript**: Type-safe JavaScript for better code quality
- **Vite**: Fast, modern build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styled components
- **Shadcn UI**: High-quality UI components built with Radix UI and Tailwind
- **Framer Motion**: Animation library for React
- **React Router**: Routing solution for React applications
- **React Three Fiber**: Three.js renderer for React
- **React Hook Form**: Form validation
- **Lucide React**: SVG icon set for React
- **React Query**: Data fetching and state management

## Pages

1. **Home Page**: Company introduction, services overview, testimonials, and stats
2. **About Page**: Company history, mission, values, and team
3. **Services Page**: Detailed information about services offered
4. **Contact Page**: Contact form and information
5. **Not Found (404)**: Custom 404 page for handling invalid routes

## Components

The website is built with a component-based architecture, including:

- **Navigation**: Responsive navbar with mobile menu
- **Hero Section**: Main banner with CTA buttons
- **Services Section**: Services cards and descriptions
- **Stats Section**: Company statistics and achievements
- **Testimonials Section**: Client testimonials carousel
- **CTA Section**: Call-to-action area with contact button
- **Footer**: Site navigation, contact details, and social links
- **WhatsApp Button**: Floating WhatsApp contact button
- **Contact Form**: Form with validation for user inquiries
- **3D Elements**: Interactive 3D visuals on select pages

## Installation

Clone this repository and install dependencies:

```sh
# Clone the repository
git clone https://github.com/Psybah/aroni.git

# Navigate to project directory
cd aroni-engineering-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

After starting the development server, the site will be available at `http://localhost:8080`.

## Customization

### Themes and Colors

The website uses a custom color palette defined in the `tailwind.config.ts` file, with primary brand colors:

- Brand Blue: `#13255e`
- Brand Orange: `#db5e00`
- Brand Gray: `#606060`

To customize these colors, modify the `brand` object in the `tailwind.config.ts` file.

### Content

Most content is defined within component files. To update:

- **Text Content**: Edit the JSX in component files
- **Images**: Replace image URLs or import local images
- **Services**: Update the services data in the ServicesSection component
- **Testimonials**: Modify testimonial data in the TestimonialsSection component

## Performance Optimization

The site implements several performance optimizations:

- **Code Splitting**: Routes are loaded on demand
- **Image Optimization**: Proper sizing and formats
- **Lazy Loading**: Components load as needed
- **Minimal Dependencies**: Carefully selected packages to minimize bundle size

## Deployment

The site can be deployed using any of the following:

- **Netlify/Vercel**: Connect to your repository for automatic deployments
- **GitHub Pages**: Build and deploy static files
- **Custom Hosting**: Upload built files to any web server

To build for production:

```sh
npm run build
```

This generates optimized files in the `dist` directory.
<!-- 
## License

[Specify your license here] -->

