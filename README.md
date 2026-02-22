# DUYLANG Portfolio

A modern, responsive portfolio website built with Next.js 15, shadcn/ui, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js latest version App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion and custom
- **TypeScript**: Full type safety
- **Icons**: Lucide React
- **Package Manager**: pnpm

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: css interactions
- **Modern UI**: mordern design
- **SEO Optimized**: Next.js optimization features
- **Fast Loading**: Turbopack for development and optimized builds
- **Type Safe**: Full TypeScript implementation

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd myportfolio

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── common/             # common resuable
│   ├── layout/             # Layout components
│   │   └── navigation.tsx  # Navigation bar
│   └── sections/           # Page sections
│       ├── hero-section.tsx
│       ├── experience-section.tsx
│       ├── skills-section.tsx
│       └── contact-section.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── assets/                 # Static assets
```

## 🎨 Customization

### Colors

The portfolio uses a neutral color scheme that can be customized in `globals.css`:

### Content

Update your personal information

## 🚀 Deployment

This portfolio is optimized for deployment on:

- **Vercel** (Recommended): Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Build and deploy to gh-pages branch

### Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
# Example
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📱 Sections Overview

declarative with name of sections

## 🛠 Development

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/layout/navigation.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

Built with ❤️ by DUYLANG
