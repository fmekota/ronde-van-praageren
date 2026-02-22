# Ronde van Praageren

A cycling race event website built with Next.js 15, React 19, and TailwindCSS 4. Features a registration system with email verification, public startlist, and admin dashboard.

## Features

- Responsive landing page with event details
- Strava route map integration
- **Registration system with email verification**
- **Public startlist showing verified participants**
- **Admin dashboard with CSV export**
- Archive pages for past events
- Dark mode support

## Quick Start (Mock Mode)

Run the development server without any external services:

```bash
cd ronde-van-praageren
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

**Mock mode features:**
- In-memory database (data resets on server restart)
- Verification links printed to terminal instead of sent via email
- No external service accounts needed

## Prerequisites

- Node.js 18+
- npm or yarn

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── register/             # Registration form
│   ├── verify/               # Email verification status
│   ├── startlist/            # Public participant list
│   ├── admin/                # Admin dashboard
│   │   └── login/            # Admin authentication
│   ├── api/
│   │   ├── verify/           # Email verification endpoint
│   │   └── admin/            # Admin auth endpoints
│   └── archive/              # Historical event pages
├── components/
│   ├── registration/         # Form components
│   └── ...                   # UI components
├── lib/
│   ├── db/                   # Database operations (Redis + mock)
│   ├── email/                # Email service (Resend + mock)
│   ├── actions/              # Server actions
│   └── schemas/              # Zod validation schemas
└── config/
    ├── event.ts              # Event configuration
    └── registration.ts       # Registration settings
```

## Testing the Registration Flow

### 1. Submit Registration

Go to http://localhost:3000/register and fill out the form:
- First name, last name, email
- Optional: club, Strava profile URL
- Emergency contact information
- Accept terms and conditions

### 2. Verify Email

**In mock mode:** Check your terminal for output like:

```
============================================================
[Mock Email] VERIFICATION EMAIL
============================================================
To: your@email.com
Subject: Verify your Ronde van Praageren 2026 registration
------------------------------------------------------------
Click this link to verify your email:

  http://localhost:3000/api/verify?token=abc123...

This link expires in 24 hours.
============================================================
```

Click the verification link or copy it to your browser.

### 3. View Startlist

After verification, your name appears on the public startlist:
http://localhost:3000/startlist

### 4. Admin Dashboard

Access the admin panel at http://localhost:3000/admin

**Default password:** `local-dev-password`

Features:
- View all registrations (verified and pending)
- See registration statistics
- Export to CSV

## Environment Variables

Create a `.env.local` file in the project root:

```bash
# Copy from .env.example
cp .env.example .env.local
```

### Required Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ADMIN_SECRET` | Password for admin dashboard | Yes |
| `NEXT_PUBLIC_BASE_URL` | Site URL for email links | Yes |
| `KV_REST_API_URL` | Upstash Redis REST URL | No* |
| `KV_REST_API_TOKEN` | Upstash Redis REST token | No* |
| `RESEND_API_KEY` | Resend API key | No* |

*Mock implementations are used when these are not set.

### Example `.env.local`

```bash
# Required
ADMIN_SECRET=local-dev-password
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Optional - for real services
KV_REST_API_URL=https://your-db.upstash.io
KV_REST_API_TOKEN=your-token
RESEND_API_KEY=re_your_api_key

# Force mock mode even with credentials set
# USE_MOCK_DB=true
# USE_MOCK_EMAIL=true
```

## Setting Up Real Services

### Upstash Redis (Database)

1. Create a free account at https://console.upstash.com
2. Click "Create Database"
3. Select a region close to your deployment
4. Copy the REST URL and token from the dashboard
5. Add to `.env.local`:
   ```
   KV_REST_API_URL=https://your-db.upstash.io
   KV_REST_API_TOKEN=your-token
   ```

### Resend (Email)

1. Create a free account at https://resend.com
2. Go to API Keys in the dashboard
3. Create a new API key
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key
   ```

**Free tier limits:**
- 100 emails/day
- 3,000 emails/month

**Note:** In development, emails to unverified domains appear in your Resend dashboard instead of being delivered.

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Registration Configuration

Edit `src/config/registration.ts` to customize:

```typescript
export const REGISTRATION_CONFIG = {
  maxParticipants: 800,              // Capacity limit
  registrationOpens: "2024-01-01",   // When registration opens
  registrationCloses: "2026-06-14",  // When registration closes
  tokenExpiryMs: 24 * 60 * 60 * 1000, // Verification link expiry (24h)
  rateLimits: {
    registrationsPerIp: 5,           // Rate limit per IP
    windowMs: 60 * 60 * 1000,        // Rate limit window (1 hour)
  },
  email: {
    from: "Ronde van Praageren <noreply@rondevanpraageren.com>",
    replyTo: "info@rondevanpraageren.com",
  },
};
```

## Strava Map Integration

The website includes a Strava route map. To use a different route:

1. Go to your Strava route
2. Click on the "Share" button
3. Select "Embed" and copy the route ID
4. Update the embed code in `src/app/page.tsx`:

```jsx
<div
  className="strava-embed-placeholder"
  data-embed-type="route"
  data-embed-id="YOUR_ROUTE_ID_HERE"
  data-style="standard"
  data-from-embed="false"
></div>
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables in project settings:
   ```
   KV_REST_API_URL=https://your-db.upstash.io
   KV_REST_API_TOKEN=your-production-token
   RESEND_API_KEY=re_your_production_key
   ADMIN_SECRET=your-secure-admin-password
   NEXT_PUBLIC_BASE_URL=https://your-domain.com
   ```
4. Deploy

### Setting Up Services for Production

#### Upstash Redis via Vercel Integration

1. In Vercel, go to your project's "Storage" tab
2. Click "Create Database" → "Upstash Redis"
3. Environment variables are automatically added

#### Resend

1. Get a production API key from Resend dashboard
2. Verify your sending domain for better deliverability
3. Add the API key to Vercel environment variables

## Security Features

- **Email verification:** Required before appearing on startlist
- **Rate limiting:** 5 registrations per IP per hour
- **Honeypot field:** Catches automated bot submissions
- **Token expiry:** Verification links expire in 24 hours
- **Admin auth:** Password-protected dashboard with HTTP-only cookies

## Troubleshooting

### "Missing environment variables" error

The app runs in mock mode without Redis/Resend credentials. If you see this error during build, it's expected - the mock will be used at runtime.

### Verification link not working

- Check the token hasn't expired (24 hours)
- Ensure `NEXT_PUBLIC_BASE_URL` matches your actual URL
- In mock mode, verify the full link was copied from terminal

### Admin login not working

- Default password is `local-dev-password`
- Check `ADMIN_SECRET` in `.env.local`
- Clear cookies and try again

### Data not persisting

In mock mode, data is stored in memory and resets when the server restarts. Use Upstash Redis for persistent storage.

### Build fails with Redis/Resend errors

The app uses lazy initialization so it should build without credentials. If you see errors:
1. Check that you're using the latest code
2. Try `rm -rf .next && npm run build`

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TailwindCSS 4](https://tailwindcss.com/) - Styling
- [Upstash Redis](https://upstash.com/) - Serverless database
- [Resend](https://resend.com/) - Email service
- [Zod](https://zod.dev/) - Schema validation

## License

MIT
