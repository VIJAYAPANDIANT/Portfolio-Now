<div align="center">

# 🌌 Vijayapandian T - Sci-Fi Cyberpunk Portfolio

A premium, highly interactive, and visually stunning personal portfolio designed with a futuristic **Heads-Up Display (HUD)** cyberpunk theme. The site features dynamic 3D elements, ambient sound design, smooth entry animations, and full responsiveness.

[![Portfolio](https://img.shields.io/badge/Live_Demo-00F3FF?style=for-the-badge&logo=vercel&logoColor=black)](https://vj-portfolio-website.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/vijayapandian-t)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/VIJAYAPANDIANT)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:vijayapandian112007@gmail.com)

</div>

---

> [!NOTE]
> This application is powered by **React 19**, **TypeScript**, **Three.js / React Three Fiber**, and **Tailwind CSS v4**.

---

## 🌟 Key Features

### 1. 🛸 Futuristic Cyberpunk HUD
* **3D Particle Canvas**: Powered by [@react-three/fiber](file:///c:/Portfolio%20now/package.json#L16) and [three](file:///c:/Portfolio%20now/package.json#L29), displaying a floating particle nebula that rotates, scales, and shifts in response to page scrolling.
* **Morphing Core**: A central floating sphere utilizing [MeshDistortMaterial](file:///c:/Portfolio%20now/src/components/Scene.tsx#L58) for organic fluid movements.
* **Diagnostics HUD**: A fixed [HUD.tsx](file:///c:/Portfolio%20now/src/components/HUD.tsx) layout depicting retro-futuristic metrics (system status, latency, artificial neural nets) alongside corner brackets and geometric lines.

### 2. ⚡ Micro-Animations & Interactivity
* **Interactive Lighting**: A mouse spotlight effect tracking the cursor, casting a faint radial glow over elements.
* **Audio Feedback**: Faint audio click sound effects trigger upon interface clicks.
* **Loading Boot Sequence**: A terminal-style boot process inside [LoadingScreen.tsx](file:///c:/Portfolio%20now/src/components/LoadingScreen.tsx) that initiates the application framework.
* **Glitch Page Transitions**: Sections appear with spring physics, skew transitions, and holographic laser dividers.

### 3. 📊 Triple-Decker Skill Matrix
* **Dynamic Marquee Tracks**: An automated, infinite-loop marquee in [Skills.tsx](file:///c:/Portfolio%20now/src/components/Skills.tsx) mimicking scrolling train tracks when showing all items.
* **Category Filters**: Filterable matrices by language, frontend, backend, database, cloud, and tools.
* **Devicon Integration**: Fetches official skill logos with a smart fallback to Lucide React icons upon resource errors.

### 4. 🗂️ Interactive Project Archive
* Showcase cards equipped with active category tabs and hovering overlay controls.
* Directly linked GitHub source repositories and live demonstration endpoints.

### 5. 📧 Hybrid Form Submission & Instant WhatsApp
* The contact module leverages FormSubmit for seamless serverless backend email transmissions.
* Pre-fills and executes a WhatsApp click-to-chat API redirection immediately after validation.

---

## 📂 Project Architecture

```
portfolio-now/
├── 📁 public/
│   └── profile.jpg                 # Profile image resource
├── 📁 src/
│   ├── 📁 components/              # Modular section components
│   │   ├── About.tsx               # Professional profile summary
│   │   ├── Contact.tsx             # Interactive email/WhatsApp communication
│   │   ├── Experience.tsx          # Stepwise career timeline log
│   │   ├── Footer.tsx              # Bottom system diagnostic status details
│   │   ├── Hero.tsx                # Terminal intro & call-to-actions
│   │   ├── HUD.tsx                 # Floating layout lines and statistics overlays
│   │   ├── LoadingScreen.tsx       # Initial boot terminal animations
│   │   ├── Navbar.tsx              # Dynamic index navigation controls
│   │   ├── Projects.tsx            # Filterable project archives
│   │   └── Scene.tsx               # 3D interactive Canvas rendering
│   │   └── Skills.tsx              # Infinite scrolling triple marquee skills matrix
│   ├── 📁 lib/                     # Utilities and helpers
│   │   └── utils.ts                # Tailwind merge and class utility helper
│   ├── App.tsx                     # Top-level coordinator & mouse lighting hook
│   ├── index.css                   # Tailwind v4 globals, grid layout rules, & hologram styles
│   └── main.tsx                    # Client-side mounting execution entry
├── vite.config.ts                  # Vite compiler configurations
└── package.json                    # Package metadata & dependencies
```

### Key Files Link Map
* [App.tsx](file:///c:/Portfolio%20now/src/App.tsx): App entry coordinator, mouse tracker, sound engine.
* [Scene.tsx](file:///c:/Portfolio%20now/src/components/Scene.tsx): Core Three.js render setup.
* [index.css](file:///c:/Portfolio%20now/src/index.css): Main design token classes, scanlines, and glow utility rules.
* [Skills.tsx](file:///c:/Portfolio%20now/src/components/Skills.tsx): Grid system & scrolling train-tracks.
* [Projects.tsx](file:///c:/Portfolio%20now/src/components/Projects.tsx): Display cards for featured products.
* [Contact.tsx](file:///c:/Portfolio%20now/src/components/Contact.tsx): Dual form and social link profiles.

---

## 🛠️ Tech Stack & Dependencies

The portfolio operates on a modern, ultra-fast frontend compile system:

| Layer | Library/Framework | Description |
| :--- | :--- | :--- |
| **Core** | [React 19](file:///c:/Portfolio%20now/package.json#L25) & [TypeScript](file:///c:/Portfolio%20now/package.json#L38) | Modern client render engine with strict type checks. |
| **Compilation** | [Vite 6](file:///c:/Portfolio%20now/package.json#L30) | Lighting-fast Hot Module Replacement (HMR). |
| **Styling** | [Tailwind CSS v4](file:///c:/Portfolio%20now/package.json#L36) | CSS-first configuration and fast build pipeline. |
| **3D Rendering** | [Three.js](file:///c:/Portfolio%20now/package.json#L29) & [React Three Fiber](file:///c:/Portfolio%20now/package.json#L16) | High-performance interactive WebGL layouts. |
| **Animations** | [Motion (Framer Motion 12)](file:///c:/Portfolio%20now/package.json#L24) | Spring physics and transition-state rendering. |
| **Icons** | [Lucide React](file:///c:/Portfolio%20now/package.json#L23) | Vector glyph indicators. |

---

## 💻 Running Locally

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Step-by-Step Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VIJAYAPANDIANT/VJ-Portfolio.git
   cd VJ-Portfolio
   ```

2. **Configure Environment Variables:**
   Create a `.env` file at the root level using [.env.example](file:///c:/Portfolio%20now/.env.example) as a template:
   ```bash
   cp .env.example .env
   ```
   Modify `.env` to include your secrets:
   * `GEMINI_API_KEY`: Required if triggering external Google Gemini AI APIs.
   * `APP_URL`: The production host URL.

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Launch the Development Server:**
   ```bash
   npm run dev
   ```

5. **Examine in Browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the running app.

---

## 📫 Connect

* **Email:** [vijayapandian112007@gmail.com](mailto:vijayapandian112007@gmail.com)
* **Phone:** +91 8610554060
* **LinkedIn:** [vijayapandian-t](https://linkedin.com/in/vijayapandian-t)
* **GitHub:** [VIJAYAPANDIANT](https://github.com/VIJAYAPANDIANT)
* **LeetCode:** [hackervj18](https://leetcode.com/u/hackervj18)
