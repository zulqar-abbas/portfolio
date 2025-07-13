# Zulqarnain Abbas - Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and React Icons. Features a clean design with smooth animations and a comprehensive showcase of skills, experience, and projects.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode Ready**: Built with dark mode support
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Optimized for speed and performance
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Technology Icons**: Visual representation of skills with proper icons
- **Project Showcase**: Comprehensive display of work and experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Font Awesome, Simple Icons, Remix Icons)
- **Deployment**: Netlify (Static Export)

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── page.js            # Home page
│   ├── about/page.js      # About page
│   ├── experience/page.js # Experience page
│   ├── projects/page.js   # Projects page
│   └── contact/page.js    # Contact page
├── components/            # Reusable components
│   ├── Navbar.js         # Navigation component
│   ├── Footer.js         # Footer component
│   └── ContactForm.js    # Contact form component
├── lib/                  # Utility functions
│   ├── data.js          # Data loading utilities
│   └── techIcons.js     # Technology icon mappings
├── profileData.json     # Portfolio data
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Updating Content

Edit `profileData.json` to update your personal information:

- Personal details (name, title, location, email)
- Skills and technologies
- Work experience
- Projects (including AI/LLM projects)
- Contact information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Animations in `globals.css`
- Component styles in individual files

### Adding New Pages

1. Create a new page in the `app/` directory
2. Add navigation links in `components/Navbar.js`
3. Update the footer links in `components/Footer.js`

## 🌐 Deployment

### Deploy to Netlify

#### Option 1: Deploy via Git (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Click "New site from Git"
4. Choose your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

#### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy to Netlify:
```bash
netlify deploy --prod --dir=out
```

### Build Configuration

The project is configured for static export with:

- `next.config.mjs`: Static export configuration
- `netlify.toml`: Netlify-specific settings
- Proper redirects for client-side routing

## 📱 Pages

- **Home**: Introduction and overview
- **About**: Detailed information about skills and background
- **Experience**: Professional work history and competencies
- **Projects**: Portfolio of projects with filtering (including AI/LLM projects)
- **Contact**: Contact form and information

## 🎨 Design Features

- **Gradient Backgrounds**: Modern gradient overlays
- **Floating Animations**: Subtle floating elements
- **Hover Effects**: Interactive hover states
- **Technology Icons**: Visual skill representation
- **Card-based Layout**: Clean, organized content presentation
- **Smooth Transitions**: CSS transitions and animations

## 🔧 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ by Zulqarnain Abbas**
