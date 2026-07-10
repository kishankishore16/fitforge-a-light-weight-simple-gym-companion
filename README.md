# FitForge 💪

<div align="center">
  <h3>A modern, lightweight, and blazing-fast fitness companion.</h3>
  <p>Built with Next.js 16 (App Router), serverless Cloud SQLite (Turso), and a custom Design System.</p>
</div>

---

## 🚀 Overview

**FitForge** is a production-grade, API-free fitness application designed for users who want to track their workouts, log their diets (specifically tailored for budget-friendly Indian nutrition), and manage their physical progress—all wrapped in a premium dark and neon-lime aesthetic. 

The architecture is explicitly designed for speed, operating exclusively on serverless edge functions and a cloud SQLite database, completely bypassing the need for slow, rate-limited external APIs.

## 🛠 Tech Stack & Architecture

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Database**: [Turso (libSQL)](https://turso.tech/) - Serverless Cloud SQLite
- **Styling**: Custom CSS Design System (Zero dependencies, pure CSS variables)
- **Authentication**: JWT-based secure HTTP-only cookies with `bcryptjs`
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Deployment**: [Vercel](https://vercel.com)

## ✨ Key Features

*   **Custom Muscle Map UI**: An interactive SVG component allowing users to filter an expansive catalog of 80+ exercises by visually tapping muscle groups on a human figure.
*   **Zero-API Offline-First Data**: Bundled with 200+ Indian food items and robust exercise metadata natively, meaning zero reliance on third-party API rate limits.
*   **Automated Tracking**: Users can track daily calories against custom macro goals (Protein, Carbs, Fats) and log their weight progress.
*   **Structured Plans**: Includes 6 budget-friendly Indian diet plans and 6 multi-week workout splits for beginners to intermediates.
*   **Micro-Animations & Aesthetics**: Implements advanced CSS animations (staggered fade-ins, spring-scaled modals, animated SVG rings) to ensure a premium user experience.

## 🧠 Engineering Decisions

1. **Why Turso over Postgres?** 
   To maintain a highly portable, lightweight "lite" architecture. Developing locally using standard SQLite and migrating seamlessly to Turso's libSQL client for Vercel deployment allowed for rapid iteration without heavy database containers.
2. **Why a Custom CSS System over Tailwind?** 
   To demonstrate deep proficiency in CSS architecture. The entire application uses a strict token-based variable system (`globals.css`) that controls theming, spacing, and responsive breakpoints without the overhead of utility classes crowding the JSX.
3. **Why JWT Cookies over NextAuth?** 
   For granular control and performance. A custom `proxy.js` (Next.js Middleware) intercepts protected routes, verifying the encrypted JWT securely at the edge before a page even begins rendering.

## 💻 Getting Started (Local Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/kishankishore16/fitforge-a-light-weight-simple-gym-companion.git
   cd fitforge-a-light-weight-simple-gym-companion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file and add your Turso database credentials:
   ```env
   TURSO_DATABASE_URL=libsql://your-turso-db.turso.io
   TURSO_AUTH_TOKEN=your-auth-token
   JWT_SECRET=your-secure-secret
   ```

4. **Initialize the Database**
   ```bash
   node init-db.mjs
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📱 Screenshots & UI

*(Screenshots can be added here to showcase the Dashboard, Tracker, and Muscle Map components)*

---
*Built by Kishan Kishore*
