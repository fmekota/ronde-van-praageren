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

The website already includes a Strava route map with ID 3199162964264401098. If you want to use a different route:

1. Go to your Strava route
2. Click on the "Share" button
3. Select "Embed" and copy the embed code
4. Replace the existing Strava embed code in `src/app/page.tsx` with your new embed code:

```jsx
<div 
  className="strava-embed-placeholder" 
  data-embed-type="route" 
  data-embed-id="YOUR_ROUTE_ID_HERE" 
  data-style="standard" 
  data-from-embed="false"
></div>
```

The script to load the Strava embed is already included in the page component.

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
  onSubmit={handleSubmit}
>
```

## Deployment

### Deploying to Vercel (Recommended)

This website is optimized for deployment on Vercel. Follow these steps for a seamless deployment:

1. **Create a GitHub Repository**
   - Create a new repository on GitHub
   - Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ronde-van-praageren.git
   git push -u origin main
   ```

2. **Sign Up for Vercel**
   - Go to [Vercel](https://vercel.com/) and sign up for an account
   - You can sign up using your GitHub account for easier integration

3. **Import Your Repository**
   - From the Vercel dashboard, click "Add New..." and select "Project"
   - Select the GitHub repository you created
   - Vercel will automatically detect that it's a Next.js project

4. **Configure Your Project**
   - Project Name: Enter a name for your deployment (e.g., "ronde-van-praageren")
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: Leave as `.` (default)
   - Build and Output Settings: Leave as default

5. **Environment Variables (Optional)**
   - If you're using any API keys or environment variables, add them in the "Environment Variables" section

6. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your website
   - Once complete, you'll receive a URL where your site is live (e.g., https://ronde-van-praageren.vercel.app)

7. **Custom Domain (Optional)**
   - In your project settings on Vercel, go to "Domains"
   - Add your custom domain and follow the instructions to set up DNS

8. **Continuous Deployment**
   - Any changes pushed to your GitHub repository will automatically trigger a new deployment
   - You can configure branch deployments in the project settings

### Alternative Deployment Options

#### Static Export for Other Hosting Services

If you prefer to host on another platform (Netlify, GitHub Pages, etc.):

1. Modify `next.config.ts` to enable static exports:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
```

2. Build the static site:
```bash
npm run build
```

3. The static files will be generated in the `out` directory, which you can deploy to any static hosting service.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Formspree](https://formspree.io/)
- [Vercel](https://vercel.com/)
