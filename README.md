# The Clarity Space — static website starter

## Pages
- index.html — homepage
- about.html — instructor introduction (dummy content to replace)
- courses.html — Reiki Level 1 and Level 2
- contact.html — enquiry form

## Before launch
1. Replace `[Instructor Name]` and all bracketed biography/training placeholders with accurate details.
2. Replace the dummy phone number `+91 90000 00000` and `hello@example.com`.
3. Replace `https://example.com/` canonical URLs with the real domain.
4. Configure the Google Form:
   - Create a Google Form with fields for name, email, phone/WhatsApp, course interest (Level 1 / Level 2 / unsure), preferred format, preferred timing, and a question/message.
   - In Google Forms, use Send > Embed HTML and copy the iframe `src` URL.
   - Replace `YOUR_GOOGLE_FORM_ID` in `contact.html` with the ID from that URL (or replace the iframe `src` with the full copied URL).
   - In Google Forms, set the response destination to a Google Sheet if you want enquiries stored in a spreadsheet.
   - Submit a test enquiry and confirm the response appears in the form responses / linked Sheet.
5. Confirm course duration, format, fees, prerequisites, attunement/certification details with the instructor before publishing. Do not advertise unverified qualifications.
6. Replace `YOUR PORTRAIT` placeholder with an instructor photo if available.
7. Add a privacy policy appropriate to the contact form and the way enquiry data is handled.
8. Replace the `example.com` canonical URLs in all pages and add `robots.txt` and `sitemap.xml` for the real domain.
9. The Google Fonts import needs internet access. System fallback fonts are provided.

## Google Forms note
The embedded form will NOT work until `YOUR_GOOGLE_FORM_ID` is replaced with the real Google Forms embed URL. HTML/CSS alone cannot securely store submissions.
