---

# SaaS Landing Page + Dashboard

Live: https://saas-landing-page1234.netlify.app/

Frontend assignment implementing a Figma homepage design along with authentication and a dashboard using API data.

---

## Features

### Homepage

* Pixel-accurate layout from Figma
* Correct spacing, typography and section order
* Hover & focus states
* Fully responsive (no horizontal scroll)

### Authentication

* `/login` page
* `/signup` page
* Fake auth using localStorage token
* Protected routes
* Logout clears token

### Dashboard

API used: https://jsonplaceholder.typicode.com/users

#### /dashboard

* Total users count
* Example summary cards (derived data)
* Loading & error states

#### /users

* Users list (table/cards)
* Search (name/email)
* Sort A-Z / Z-A
* Client-side pagination
* User detail modal

#### /settings

* Profile form
* Light/Dark theme toggle
* Saved in localStorage

---

## Tech Stack

* Next.js
* TypeScript
* CSS / Tailwind
* LocalStorage
* Fetch API

---

## Run Locally

```bash
git clone <repo-link>
npm install
npm run dev
```

---

## Notes

* Authentication is client-side only
* Pagination handled on frontend
* Dashboard stats are derived from API data

---

**Author:** Aman Talukdar


If you want an even shorter (1-minute recruiter version), tell me 👍
