# SEO and content review notes — The Clarity Space with Monika

This is an SEO-readiness implementation, not a ranking guarantee. Blog functionality is intentionally excluded.

## Before publishing (required)
1. Replace every `YOUR-DOMAIN-HERE` value in canonical URLs, Open Graph URLs, JSON-LD URLs, `robots.txt` and `sitemap.xml` with the final verified domain. Choose either www or non-www and use it consistently.
2. Confirm the final public brand spelling and whether Monika wants her full professional name displayed. The current pages use “Monika” only because a full professional name was not confirmed for public use.
3. [Completed] Replaced the portrait placeholders with the authentic instructor photo (`assets/instructor.webp`) and descriptive alt text on the homepage and about page.
4. Confirm whether NLP coaching and self-relaxation guidance are online, in person, or both. These formats are intentionally not asserted.
5. Confirm the face-to-face Reiki city/area and the practical session location. Do not publish a private home address unless Monika explicitly wants it public.
6. The homepage currently displays a general session fee of **€25 per session**, as requested. Monika should confirm that this fee applies to all four services and clarify whether session duration differs by service. Confirm languages, availability and how a first enquiry works.
7. Confirm exact qualification names, issuing organisations and dates if Monika wants credentials expanded. Current public wording is limited to “Certified NLP Coach” and “Life Coach”, as previously confirmed.
8. Add a privacy notice and legal notice/imprint appropriate to the country where the practice operates, especially if operating in Germany. Obtain appropriate legal review.
9. Verify email, phone, WhatsApp and Instagram details before launch.

## Content Monika should add to improve service-page usefulness
- NLP Coaching: her own explanation of what an appointment looks like, topics she is comfortable supporting, session format and relevant training details.
- Self-Relaxation: which techniques or exercises she guides, how sessions work and who may find them useful. Avoid treatment claims.
- Life Coaching: her coaching approach, typical topics, session format, languages and time-zone arrangements. Online worldwide availability is retained from the source site.
- Reiki Healing: city/area, venue arrangements and session duration. Keep the supplied disclaimer: “Reiki does not cure illness or replace medical treatment.” Do not claim Reiki Master status, teaching, or a Reiki level.

## SEO implementation included
- Separate service landing pages for NLP Coaching, Self-Relaxation Guidance, Life Coaching and Reiki Healing.
- Unique page titles and meta descriptions.
- Canonical URL tags (domain placeholder must be replaced).
- Open Graph and Twitter metadata.
- JSON-LD for WebSite, AboutPage, ContactPage, CollectionPage and Service pages.
- `robots.txt` allows public crawling and OAI-SearchBot.
- `sitemap.xml` lists all current public pages (domain placeholder must be replaced).
- Semantic headings, descriptive internal links, skip link and responsive layout retained.

## Search setup after deployment
1. Verify the final domain in Google Search Console and Bing Webmaster Tools.
2. Submit `/sitemap.xml` after replacing the domain placeholder.
3. Inspect the homepage and service URLs for indexing and structured-data errors.
4. Keep an eye on Search Console queries, impressions, clicks and enquiry conversions.
5. Do not expect instant rankings. Technical readiness helps discovery; useful first-hand content, relevance and genuine reputation determine competitiveness.

## Post-Domain Launch Checklist (Complete After Domain is Fixed)

Once the domain name is purchased and confirmed (e.g., `theclarityspace.com` or `clarityspace-monika.de`), complete the following tasks in order:

### 1. Global Domain Placeholder Replacement
Replace every instance of `YOUR-DOMAIN-HERE` with the actual registered domain (e.g. `theclarityspace.com`). Decide whether to use **www** (`https://www.theclarityspace.com`) or **non-www** (`https://theclarityspace.com`) and apply it consistently across all files.

Files to update:
- `index.html` — canonical, `og:url`, `og:image`, `twitter:image`, and WebSite JSON-LD
- `about.html` — canonical, `og:url`, `og:image`, `twitter:image`, and AboutPage / Person JSON-LD
- `work-with-me.html` — canonical, `og:url`, and CollectionPage JSON-LD
- `contact.html` — canonical, `og:url`, and ContactPage JSON-LD
- `nlp-coaching.html` — canonical, `og:url`, and Service JSON-LD
- `self-relaxation.html` — canonical, `og:url`, and Service JSON-LD
- `life-coaching.html` — canonical, `og:url`, Service JSON-LD, and ServiceChannel URL
- `reiki-healing.html` — canonical, `og:url`, and Service JSON-LD
- `courses.html` — canonical URL
- `robots.txt` — Sitemap location directive (`Sitemap: https://<domain>/sitemap.xml`)
- `sitemap.xml` — all `<loc>` page URLs

> **Fast command to replace across all files at once**:
> In the project directory terminal, run:
> ```bash
> python3 -c "
> import glob
> domain = 'yourdomain.com'  # <-- replace with actual domain (without https://)
> for fpath in glob.glob('*.html') + ['sitemap.xml', 'robots.txt']:
>     with open(fpath, 'r', encoding='utf-8') as f:
>         c = f.read()
>     c = c.replace('YOUR-DOMAIN-HERE', domain)
>     with open(fpath, 'w', encoding='utf-8') as f:
>         f.write(c)
> print('Done! Replaced YOUR-DOMAIN-HERE with ' + domain)
> "
> ```

### 2. DNS & Hosting Configuration
- [ ] **Canonical 301 Redirect**: Configure a 301 redirect from `www` to non-`www` (or vice versa) in your DNS / hosting provider so traffic doesn't split between two versions.
- [ ] **Enforce HTTPS / SSL**: Enable automatic HTTPS redirection and verify that the SSL/TLS certificate is active.
- [ ] **Custom 404 Error Page**: Add a simple `404.html` on your static host matching the site design so broken links navigate cleanly back to `index.html`.

### 3. Search Engine Verification & Sitemaps
- [ ] **Google Search Console**:
  - Add domain property and verify ownership via DNS TXT record.
  - Submit sitemap URL: `https://<your-domain>/sitemap.xml`.
  - Use URL Inspection to test `https://<your-domain>/` and request indexing.
- [ ] **Bing Webmaster Tools**:
  - Connect and import the verified domain from Google Search Console.
  - Confirm sitemap detection.
- [ ] **Structured Data Validation**:
  - Test homepage and `about.html` in [Google Rich Results Test](https://search.google.com/test/rich-results) to verify schema parsing without errors.

### 4. Social Sharing & Card Previews
- [ ] **WhatsApp Preview**: Send `https://<your-domain>/` to a chat to confirm the title, description, and portrait thumbnail render cleanly.
- [ ] **Facebook / Meta Debugger**: Run the homepage through the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to refresh Open Graph cache.
- [ ] **Twitter / X Card Validator**: Verify `summary_large_image` renders with `assets/instructor.webp`.
- [ ] **LinkedIn Post Inspector**: Check link preview on [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

### 5. Social & Business Profile Updates
- [ ] **Instagram Bio**: Update website link on `@monikanlpcoach`.
- [ ] **WhatsApp Business**: Add website URL in business profile settings.
- [ ] **Email Signature**: Update website link in outgoing correspondence.
- [ ] **Google Business Profile**: If created for local Reiki or coaching, link the verified website URL.

### 6. Legal & Regulatory Compliance (Germany / EU)
- [ ] **Impressum (Legal Notice)**: If Monika operates in Germany (§ 5 DDG), ensure a dedicated `impressum.html` is added and linked in the footer, stating:
  - Full legal name and physical address (P.O. boxes are not compliant).
  - Fast direct contact details (email and telephone number).
  - VAT ID / Steuernummer (if assigned).
- [ ] **Datenschutzerklärung (Privacy Policy)**: Ensure privacy policy reflects the live domain, static host logging, contact links, and GDPR/DSGVO rights.
- [ ] **Google Fonts Self-Hosting (Optional DSGVO enhancement)**: Consider downloading the font files (`DM Sans` and `Playfair Display`) locally into `assets/fonts/` to prevent external font requests to Google servers, adhering to strict German court privacy guidelines.

## Important technical note
This is a static HTML site. The current build has no build pipeline; upload the generated folder contents to the static host. If later using a build command on Cloudflare Pages, add a deterministic build process and output directory rather than deploying the source folder blindly.
