# Ronde van Praageren - Cycling Race Website

A simple, mobile-friendly website for the Ronde van Praageren cycling race event. Built with Next.js and TailwindCSS.

## Features

- Clean, responsive design optimized for mobile and desktop
- Event details section with date, location, and race information
- Strava route map integration (placeholder ready for your embed code)
- Registration form with Formspree integration
- Dark mode support

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ronde-van-praageren.git
cd ronde-van-praageren
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Customization

### Strava Map Integration

To add your Strava route map:

1. Go to your Strava route
2. Click on the "Share" button
3. Select "Embed" and copy the iframe code
4. Replace the placeholder in `src/app/page.tsx` in the Route Map section with your iframe code

### Form Submission

The form is set up to use Formspree for easy email submissions:

1. Create a free account at [Formspree](https://formspree.io/)
2. Set up a new form and get your endpoint URL
3. Update the form in `src/app/page.tsx` by adding the action attribute with your Formspree endpoint:

```jsx
<form 
  action="https://formspree.io/f/your-form-id" 
  method="POST" 
  className="max-w-lg mx-auto"
>
```

## Deployment

### Static Export

You can export the website as static HTML:

```bash
npm run build
# or
yarn build
```

The static files will be generated in the `out` directory, which you can deploy to any static hosting service like Netlify, Vercel, or GitHub Pages.

### Vercel Deployment

For the easiest deployment, use Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy with a single click

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Formspree](https://formspree.io/)
