# Deploy Guide — Radiant Control Systems

Static site built with Vite + vite-react-ssg. The build outputs a plain folder of
HTML/CSS/JS/images — no Node runtime needed on the host. Works on IONOS webspace,
Vercel, Netlify, S3, or any static host.

## 1. Build

```bash
npm install
npm run build        # runs gen-seo, then prerenders all pages
```

Output is in **`dist/`** — one real `.html` per page, plus `robots.txt`,
`sitemap.xml`, `llms.txt`, `404.html`, `.htaccess`, and hashed assets.

Preview locally exactly as production:
```bash
npm run preview      # serves dist/ at http://localhost:4173
```

## 2. Contact form (do this once)

The form emails via **Web3Forms** (no backend). Until a key is set it runs in demo
mode (no email sent).

1. Get a free access key at https://web3forms.com — enter `info@radiantcontrolsystems.com`.
2. Set the env var **before building**:
   - Local/IONOS: create a `.env` file → `VITE_WEB3FORMS_ACCESS_KEY=your_key`
   - Vercel: Project → Settings → Environment Variables → add `VITE_WEB3FORMS_ACCESS_KEY`
3. Rebuild. Submissions now email the info@ inbox.

## 3a. Deploy to IONOS (webspace / FTP)

1. In the IONOS control panel, find your webspace **FTP/SFTP** credentials
   (host, username, password) under Hosting → your package.
2. Connect with an FTP client (FileZilla, Cyberduck) or the IONOS File Manager.
3. Upload the **contents of `dist/`** (not the folder itself) into the web root —
   usually `/` or `htdocs/`. Include the hidden **`.htaccess`** file (enable
   "show hidden files" in your FTP client).
4. Confirm `index.html`, `.htaccess`, `sitemap.xml`, `robots.txt`, `llms.txt`,
   and the `assets/` + `img/` folders are all uploaded.
5. The `.htaccess` handles HTTPS redirect, pretty URLs, caching, and the 404 page.
   (IONOS Apache has mod_rewrite/deflate/expires/headers enabled by default.)

Re-deploy = rebuild and re-upload `dist/`.

## 3b. Point the domain (GoDaddy → IONOS)

The domain is on GoDaddy; hosting is IONOS. Two options:

- **Recommended — move DNS to IONOS or point A record:** In IONOS, find the
  webspace's IP address (or the CNAME target IONOS gives you). In GoDaddy →
  Domain → DNS, set:
  - `A` record `@` → IONOS IP
  - `CNAME` record `www` → your domain (or IONOS host)
- **Or change nameservers:** In GoDaddy, set the nameservers to the ones IONOS
  provides, and manage DNS entirely from IONOS.

DNS changes take up to a few hours. Then enable **SSL** in IONOS (free Let's
Encrypt) so HTTPS works — the `.htaccess` already forces HTTPS.

## 3c. Alternative — Vercel

`vercel.json` is already configured (`outputDirectory: dist`, clean URLs). Push to
GitHub and import the repo, or run `vercel`. Set `VITE_WEB3FORMS_ACCESS_KEY` in the
Vercel env. (Note: `.htaccess` is ignored on Vercel — its own config handles routing.)

## 4. After launch — SEO / get found

1. **Google Search Console** (https://search.google.com/search-console): add the
   property, verify (DNS TXT via GoDaddy is easiest), and submit
   `https://radiantcontrolsystems.com/sitemap.xml`.
2. **Bing Webmaster Tools**: same — add site, submit sitemap.
3. **Google Business Profile** (https://business.google.com): create/claim the
   Duluth, GA listing — biggest driver of local + map traffic and a strong signal
   for "…in Georgia" searches.
4. Verify structured data with the **Rich Results Test**
   (https://search.google.com/test/rich-results) — Organization, LocalBusiness,
   FAQ, and JobPosting should all validate.

## 5. Get surfaced in AI answers (ChatGPT / Claude / Perplexity)

Already built in:
- **`/llms.txt`** — a plain-language company brief for LLM crawlers.
- **`robots.txt`** explicitly allows GPTBot, OAI-SearchBot, ClaudeBot,
  PerplexityBot, Google-Extended, etc.
- **Answer-shaped content** — every service/industry page opens with a one-sentence
  definition and a FAQ block (the format LLMs quote), all in crawlable static HTML.
- **Rich JSON-LD** (Organization, LocalBusiness, Service, FAQ, JobPosting) so models
  resolve the entity and its capabilities confidently.

Ongoing: keep the info consistent everywhere (name, address, phone), earn mentions
on other sites (directories, associations, project references), and add real
project write-ups — AI engines favor corroborated, frequently-cited entities.

## Updating content

- Text, services, industries, projects, clients: edit **`src/data/site.js`** (one
  file drives pages, nav, sitemap, and llms.txt).
- Images: drop files into `public/img/...` at the referenced paths.
- Rebuild and redeploy.
