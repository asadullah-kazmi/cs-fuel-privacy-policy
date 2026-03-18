# CS Fuel Privacy Policy Site

Production-ready static Privacy Policy website for **CS Fuel** by **CORDEROSERVICES S.A.S.**, designed to be deployed on Vercel and used as the Privacy Policy URL in Google Play Console.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Vercel static hosting

## Project Files

- `index.html` - full legal policy content and SEO metadata
- `styles.css` - brand-aligned visual system, responsive layout, accessibility, print styles
- `script.js` - sticky navigation interactions, active section state, reveal animation handling

## Local Run Steps

1. Open this folder in VS Code.
2. Choose one of the following methods:

### Option A: VS Code Live Server

1. Install the "Live Server" extension (if needed).
2. Right-click `index.html` and select **Open with Live Server**.

### Option B: Python built-in server

1. In terminal, run:
   ```bash
   python -m http.server 8080
   ```
2. Open `http://localhost:8080`.

## Deploy to Vercel

### Option A: Vercel Dashboard

1. Push this project to a Git repository.
2. Go to Vercel and click **Add New... > Project**.
3. Import the repository.
4. Framework preset: **Other** (static site).
5. Build command: leave empty.
6. Output directory: leave default (root).
7. Deploy.

### Option B: Vercel CLI

1. Install CLI:
   ```bash
   npm i -g vercel
   ```
2. Run from this project folder:
   ```bash
   vercel
   ```
3. For production deployment:
   ```bash
   vercel --prod
   ```

## Placeholders to Replace Before Publishing

Replace these tokens in `index.html`:

- `SUPPORT_EMAIL`
- `COMPANY_ADDRESS`
- `JURISDICTION`
- `EFFECTIVE_DATE`
- `PRIVACY_CONTACT_URL` (optional)
- `PRIVACY_POLICY_DOMAIN` (canonical/OG/Twitter URLs)

Also replace favicon/image placeholders if available:

- `/favicon.ico`
- `/favicon.svg`
- `/apple-touch-icon.png`
- `og-image-placeholder.png`

## Ready for Google Play Privacy Policy URL

Use this checklist before adding the URL to Play Console:

- [ ] Placeholder tokens replaced with final business/legal values.
- [ ] Last Updated (`EFFECTIVE_DATE`) verified.
- [ ] Contact email and address are valid and monitored.
- [ ] Canonical URL and OG/Twitter URLs point to production domain.
- [ ] Policy text reviewed by legal/compliance contact for your jurisdiction.
- [ ] Public URL is reachable without login.
- [ ] Page is mobile responsive and keyboard-accessible.
- [ ] Print preview looks clean for legal export.
- [ ] No statement claims selling personal data.
- [ ] Optional analytics/crash sections are updated if those tools are enabled.

## Notes

- Policy version is set to **1.0**.
- The policy is tailored to CS Fuel's current local-storage behavior and includes clearly marked placeholders for future analytics/crash integrations.
