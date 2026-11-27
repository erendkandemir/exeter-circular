# Exeter Circular Business Network — Vercel edition

This is the complete website, ready to deploy as a static site. It includes the latest copy: nonprofit student initiative, completely free membership now and always, member communication channels, enquiry-only joining, and the membership certificate preview.

## Deploy from your terminal

You need Node.js with npm/npx installed and a Vercel account.

1. Extract Exeter_Circular_Vercel.zip. Open Terminal in the extracted `exeter-circular` folder (the one containing `vercel.json`).
2. Check Node and npm:

   node -v
   npm -v

3. Sign in:

   npx vercel@latest login

   Follow the browser instructions and return to Terminal.

4. Publish:

   npx vercel@latest --prod

   If prompted, approve installing the official Vercel CLI. Choose your Vercel account/team, create a new project, name it `exeter-circular-business-network`, and use `./` as the source directory. Keep the configuration provided in vercel.json. If asked to choose a framework, use Other. No build or install command is needed. Output directory is public.

5. Open the production URL Vercel prints. Check the home page and membership enquiry flow.

## Website files

- public/index.html: page content and certificate preview
- public/style.css: layout, branding and responsive styling
- public/app.js: enquiry modal, FAQs, directory rendering and draft preparation
- public/content.json: organiser email, approved members and confirmed exchange counts
- public/icon.svg: browser icon
- vercel.json: static-site deployment configuration

## Enquiries

The email is exetercircular@gmail.com. The form prepares a message and provides an Open email draft link. Visitors review and send using their own email app. This is not a server-side form or database, and the website does not send email automatically. A direct email link is also available. No public group invitation is included.

## Add confirmed member businesses

Edit public/content.json. Member businesses appear only when both confirmed and publishPermission are true. Logos appear only when logoPermission is also true. Count distinct businesses, not individual people. Do not add private contact details to this public file.

Example structure (replace with a real consenting member; this example is not preloaded):

{
  "name": "Business name",
  "sector": "Retail",
  "description": "A short approved business description.",
  "membership": "Founding member",
  "website": "https://example.com",
  "confirmed": true,
  "publishPermission": true,
  "logo": "members/business-logo.png",
  "logoPermission": true
}

Put approved logo files in public/members/. The website displays member counts, member cards and a horizontally scrollable logo strip when data is added. Only update confirmedExchanges with completed, recorded exchanges. The certificate is a visual preview; there is no automated certificate-issuing system.

## Publish changes later

From this same folder run:

   npx vercel@latest --prod

Vercel keeps the project connection in the local .vercel folder after the first deployment.

## Custom domain

After deployment, open your project's Settings > Domains in Vercel. Add the domain you own and follow the DNS instructions Vercel supplies. Domain purchase and DNS changes are separate from this package.

## Local preview

Use a local HTTP server so content.json loads. If Python 3 is installed:

   python3 -m http.server 8000 --directory public

Then visit http://localhost:8000. Press Ctrl+C to stop.

## Sources

https://vercel.com/docs/cli/login
https://vercel.com/docs/cli/deploy
https://vercel.com/docs/builds/configure-a-build
