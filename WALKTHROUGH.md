# Portfolio Website Walkthrough

I have successfully rebuilt your portfolio website using **React** and **Tailwind CSS**, implementing the requested Glassmorphism design and content sections.

## Changes Overview

### 1. Project Setup
- **Archived Legacy Site**: Moved all previous files to `_legacy/` to preserve them.
- **New Tech Stack**: Initialized a Vite + React application with Tailwind CSS.
- **Dependencies**: Installed `lucide-react` for icons and `framer-motion` for smooth animations.

### 2. Design System
- **Glassmorphism**: Implemented a custom glass effect using `backdrop-filter: blur()`, semi-transparent backgrounds, and white borders.
- **Colors**:
  - **Background**: Dark Grey/Black (`#0f0f0f`)
  - **Accent**: Pastel Blue (`#aec6cf`)
  - **Text**: White/Off-white for high contrast.
- **Typography**: Used `Inter` (sans-serif) for a clean, professional look.

### 3. Components
- **Navbar**: Sticky navigation with a glass effect that activates on scroll. Fully responsive with a mobile menu.
- **Hero**: Features your headline, sub-headline, and a placeholder for your profile image with a glowing background effect.
- **About**: A clean section highlighting your background in Jodhpur and dual passion for Engineering and Art.
- **Experience**: A vertical timeline showcasing your journey from B.Tech to your current Master's studies.
- **Future Vision**: Two distinct glass cards for your goals: "PLC Automation Engineer" and "Art Club".
- **Footer**: Includes social links and a dedicated "Top Mate" booking section.

## How to Run

1.  **Install Dependencies** (if not already done):
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    This will start the local server, usually at `http://localhost:5173`.

3.  **Build for Production**:
    ```bash
    npm run build
    ```
    The output will be in the `dist/` folder.

## Next Steps
- **Profile Image**: Replace the placeholder in `src/components/Hero.jsx` with your actual photo.
- **Links**: Update the `href` attributes in `Navbar.jsx` and `Footer.jsx` with your actual social profile URLs if needed.
- **Content**: Review the text in `About.jsx` and `Experience.jsx` to ensure it perfectly matches your story.
