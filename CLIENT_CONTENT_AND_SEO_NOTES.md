# SEO and content review notes — The Clarity Space with Monika

This is an SEO-readiness implementation, not a ranking guarantee. Blog functionality is intentionally excluded.

## Before publishing (required)
1. Replace every `YOUR-DOMAIN-HERE` value in canonical URLs, Open Graph URLs, JSON-LD URLs, `robots.txt` and `sitemap.xml` with the final verified domain. Choose either www or non-www and use it consistently.
2. Confirm the final public brand spelling and whether Monika wants her full professional name displayed. The current pages use “Monika” only because a full professional name was not confirmed for public use.
3. Replace the portrait placeholders with an approved, authentic photo, or remove the placeholder blocks. Add accurate alt text.
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

## Important technical note
This is a static HTML site. The current build has no build pipeline; upload the generated folder contents to the static host. If later using a build command on Cloudflare Pages, add a deterministic build process and output directory rather than deploying the source folder blindly.
