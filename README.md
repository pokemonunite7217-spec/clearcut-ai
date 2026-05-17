# ClearCut AI — Background Remover

A premium AI-powered background remover built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Powered by the Remove.bg API.

## ✨ Features

- **AI Background Removal** — Remove.bg API integration for pixel-perfect results
- **Drag & Drop Upload** — Intuitive upload with file validation
- **HD Download** — Full-resolution transparent PNG output
- **Comparison Slider** — Before/after comparison with draggable slider
- **Processing Animation** — Glassmorphism loader with step-by-step progress
- **Toast Notifications** — Success/error feedback
- **Dark Mode** — Premium dark design by default
- **Fully Responsive** — Mobile, tablet, and desktop optimized
- **Framer Motion** — Smooth animations throughout
- **Privacy First** — Images are never stored

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (icons)
- **Axios** (API calls)
- **react-dropzone** (file upload)
- **react-compare-slider** (before/after slider)
- **react-hot-toast** (notifications)

## 📁 Project Structure

```
bg-remover/
├── app/
│   ├── api/
│   │   └── remove-bg/
│   │       └── route.ts          # Remove.bg API route
│   ├── globals.css               # Global styles + design tokens
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   ├── BackgroundBlobs.tsx       # Animated background effects
│   ├── FAQSection.tsx            # FAQ accordion
│   ├── FeatureCards.tsx          # Feature grid
│   ├── Footer.tsx                # Site footer
│   ├── HeroSection.tsx           # Landing hero
│   ├── HowItWorks.tsx            # 3-step explainer
│   ├── ImagePreview.tsx          # Selected image preview
│   ├── Navbar.tsx                # Navigation bar
│   ├── ProcessingLoader.tsx      # AI processing animation
│   ├── ResultPreview.tsx         # Result with comparison slider
│   ├── StatsSection.tsx          # Social proof stats
│   ├── UploadBox.tsx             # Drag & drop upload zone
│   └── UploadSection.tsx         # Upload state machine
├── hooks/
│   └── useBackgroundRemoval.ts   # Core logic hook
├── lib/
│   └── utils.ts                  # Utility functions
├── types/
│   └── index.ts                  # TypeScript types
├── .env.local                    # Environment variables
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18.17+
- npm or yarn or pnpm

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

The `.env.local` file is pre-configured:
```env
REMOVE_BG_API_KEY=Y1KVTaLA5HhZCLbKSsstVVS1
```

### 3. Install fonts (auto-loaded via Google Fonts)

Fonts are loaded automatically via the layout — no manual installation needed.

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for production

```bash
npm run build
npm start
```

## ☁️ Deployment — Vercel

### Option A: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Set the environment variable:
```
REMOVE_BG_API_KEY = Y1KVTaLA5HhZCLbKSsstVVS1
```

### Option B: Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Add Environment Variable:
   - Key: `REMOVE_BG_API_KEY`
   - Value: `Y1KVTaLA5HhZCLbKSsstVVS1`
5. Deploy

### Environment Variables (Vercel)

| Variable | Value |
|---|---|
| `REMOVE_BG_API_KEY` | `Y1KVTaLA5HhZCLbKSsstVVS1` |

## 🔌 API Route

**Endpoint:** `POST /api/remove-bg`

**Request:** `multipart/form-data` with `image` field

**Response:** PNG image binary (transparent background)

**Error codes:**
- `400` — Invalid file type or missing image
- `408` — Request timeout
- `500` — Server/API error

## 📦 Key Dependencies

```json
{
  "next": "15.1.0",
  "framer-motion": "^11.15.0",
  "react-dropzone": "^14.3.5",
  "react-compare-slider": "^3.1.0",
  "react-hot-toast": "^2.4.1",
  "axios": "^1.7.9",
  "lucide-react": "^0.469.0",
  "form-data": "^4.0.1"
}
```

## 🎨 Design System

- **Font:** Syne (display) + DM Sans (body) + JetBrains Mono (code)
- **Theme:** Deep dark blue (#0a0e1a) with violet/cyan gradient accents
- **Glassmorphism:** `backdrop-filter: blur()` cards throughout
- **Animation:** Framer Motion for all transitions

## ⚠️ Notes

- Maximum upload size: **10MB**
- Supported formats: **PNG, JPG, JPEG, WEBP**
- Images are **never stored** on the server
- The API route uses Node.js runtime (not Edge) for `form-data` support
