# Exeter Circular Business Network — Next.js / TSX

The same website, rebuilt with Next.js App Router, React and TypeScript. All page sections are real TSX components. React state controls the mobile menu, enquiry form, information dialogs and searchable member directory.

## Open the code

- `src/app/page.tsx` — assembles the homepage
- `src/app/layout.tsx` — page metadata and root layout
- `src/app/globals.css` — all styling and mobile layouts
- `src/components/Hero.tsx` — homepage headline and free membership promise
- `src/components/Membership.tsx` — membership benefits and certificate preview
- `src/components/HowItWorks.tsx` — exchange process and example conversation
- `src/components/MemberDirectory.tsx` — member cards, search and logo strip
- `src/components/EnquiryDialog.tsx` — membership/general enquiry form
- `src/components/Dialog.tsx` — accessible native dialog wrapper
- `src/components/NetworkProvider.tsx` — shared React state for opening dialogs
- `src/data/network.ts` — email, membership year, members and results
- `src/lib/types.ts` — member/configuration TypeScript interfaces
- `src/lib/enquiries.ts` — typed email draft and safe URL helpers
- `public/members/` — approved business logo files

## Requirements and local development

Use a supported Node.js LTS version, such as Node 22 or 24. The framework's minimum is Node 20.9.

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Stop with Ctrl+C.

```bash
npm run typecheck
npm run build
npm start
```

The package includes a lockfile. Use `npm ci` for a reproducible clean installation.

## Replace your existing HTML project safely

Keep the downloaded `exeter-circular-nextjs` folder separate from your existing `exeter-circular` folder. If both are in Downloads on your Mac:

```bash
node ~/Downloads/exeter-circular-nextjs/scripts/migrate.mjs ~/Downloads/exeter-circular
cd ~/Downloads/exeter-circular
npm install
npm run dev
```

The migration requires the existing folder to contain `.git`. It backs up files before copying the new source, preserves the Git remote and any existing ignore rules, and retires only the old `public/index.html`, `public/app.js`, `public/style.css` and `public/content.json`. Backups are saved under `.migration-backups/` and ignored by Git. Existing additional public assets remain available. Do not copy or delete your `.git` folder.

If you have made your own changes, review the backups and merge those changes before publishing.

Once you have checked the local site, stop the dev server and run:

```bash
git status
git add .
git commit -m "Convert website to Next.js and TypeScript"
git push origin main
```

## Vercel: change the old static build settings

Before pushing this migration, open the existing Vercel project's Settings > Build and Deployment. Change:

- Framework Preset: **Next.js**
- Root Directory: leave empty / repository root
- Output Directory: **turn off the override**; do not leave it as `public`
- Build Command: default (`npm run build`)
- Install Command: default / `npm ci`

The included `vercel.json` selects Next.js and the build/install commands. It no longer contains a static output directory. The next GitHub push triggers the Vercel deployment. After a successful deployment, open the production URL and test the enquiry dialog. There is no need for a new GitHub repository or Vercel project.

For a new Vercel project, import this repository and use the Next.js preset with default settings.

## Website behaviour retained

- Independent nonprofit student initiative; completely free membership now and always.
- Member communication channels are described without displaying any group invitation.
- Email enquiries addressed to `exetercircular@gmail.com`.
- Membership certificate preview with the wording “We are part of the Exeter Circular Business Network for Sustainability.”
- Member counts, directory and logo strip appear when real approved member data is added.

The enquiry form prepares an email draft. Visitors review and send it using their own email app; it does not automatically send emails or save submissions to a database. No backend, secrets or environment variables are required. The certificate is a visual preview; automated issuing is not included.

## Add a confirmed member

Edit the `members` array in `src/data/network.ts`. Example (replace with real approved details):

```ts
{
  id: "business-slug",
  name: "Business name",
  sector: "Retail",
  description: "Approved description.",
  membership: "Founding member",
  website: "https://example.com",
  logo: "/members/business-logo.png",
  confirmed: true,
  publishPermission: true,
  logoPermission: true,
}
```

A member is listed only when both `confirmed` and `publishPermission` are true. Logos appear only with `logoPermission`. Do not put private contact information in this public configuration. Update `impact.confirmedExchanges` only with completed recorded exchanges. Commit and push to publish updates.

## References

https://nextjs.org/docs/app/getting-started/installation
https://nextjs.org/docs/app/getting-started/deploying
https://vercel.com/docs/builds/configure-a-build
