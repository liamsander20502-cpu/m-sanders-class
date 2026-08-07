# Classroom Calendar Portal Prototype

This is a front-end prototype for a teacher/parent classroom calendar website.

## Included
- Monthly calendar
- Teacher/admin and parent demo modes
- Add calendar events with icons/categories
- French/English calendar labels
- Print-friendly calendar
- AI import workflow with review-before-publish
- Local parsing of pasted text such as:
  `Sept. 8 – School photos`
- Image upload preview
- Private planned-absence submission workflow
- Teacher acknowledgement of parent submissions
- Mobile-friendly layout

## Important: what is NOT production-ready yet
This prototype stores everything only in the page's memory. Refreshing the page resets it.

Before real families use it, add:
1. Real authentication
2. A secure database
3. Parent/student account linking
4. Proper authorization rules
5. A backend endpoint for image-to-event AI extraction
6. Privacy/security review suitable for your school division

## Run it
Open `index.html` in a modern browser.

For easier local testing, you can also serve the folder with:
`python -m http.server 8000`

Then visit:
`http://localhost:8000`

## Suggested production stack
A simple path would be:
- Frontend: Next.js
- Auth + database: Supabase
- Hosting: Vercel
- AI image reading: OpenAI vision model through a server-side API route

Never put an AI API key directly in browser JavaScript.
