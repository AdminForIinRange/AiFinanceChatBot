# Finance Chat Bot

An AI-powered, real-time chat assistant for market analysis, finance strategies, and investment insights — built with Next.js, React, and Chakra UI.

### (Not to be used as a financial instrument, it should not be used for any serious or business-critical purposes)
---

## Table of Contents

* [Features](#features)
* [Demo](#demo)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Development](#development)
  * [Production](#production)
* [Configuration](#configuration)
* [Project Structure](#project-structure)
* [Contributing](#contributing)
* [License](#license)

---

## Features

* **Real-time chat** with AI assistant powered by your choice of LLM (OpenAI, Google GenAI, etc.)
* **Sentiment analysis** on both user prompts and AI responses
* **Dynamic loading indicator** for in-flight requests
* **Smart suggestions** (e.g. “What’s your analysis on Bitcoin?”) to help get started
* **Darker finance-platform theme** using Chakra UI and custom color tokens
* **Keyboard & click support**: press Enter or click Send to submit
* **Responsive design**: works on mobile, tablet, and desktop

---


## Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (v15)
* **UI Library:** [Chakra UI](https://chakra-ui.com/) (v3)
* **Language:** TypeScript & React (v19)
* **Styling:** Stitches, Tailwind CSS (for utility overrides)
* **Icons:** Lucide React
* **State & Effects:** React Hooks
* **LLM Clients:** `openai`, `@google-genai`, `@google-cloud/aiplatform`
* **Bundler:** Turbopack (dev server)
* **Lint & Format:** ESLint, Prettier

---

## Getting Started

### Prerequisites

* **Node.js** v16 or higher
* **npm** v8 or higher (or Yarn v1.22+)

### Installation

1. **Clone the repository**

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the development server with Turbopack:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes reload instantly.

### Production

Build and start in production mode:

```bash
npm run build
npm run start
```

---

## Configuration

Create a `.env.local` file in the project root and add your keys:

```bash
# .env.local
OPENAI_API_KEY=your_openai_api_key
GOOGLE_APPLICATION_CREDENTIALS=/path/to/your/google-service-account.json
NEXT_PUBLIC_AI_API_URL=https://your-backend.com/api/gemini
```

> **Note:** The frontend calls `/api/gemini`. Implement this endpoint in `pages/api/gemini.ts` (or `.js`) to proxy requests to your chosen AI provider.

---

## Project Structure

```
├── components/
│   ├── ActiveChatArea.tsx    # Main chat UI + logic
│   └── ChatArea.tsx          # Welcome screen & suggestions
├── pages/
│   ├── api/
│   │   └── gemini.ts         # AI-proxy endpoint (implement provider logic)
│   └── _app.tsx              # Chakra & theme provider
├── public/
│   └── assets/               # Images, icons, etc.
├── styles/
│   └── …                     # Global styles & Tailwind configs
├── docs/
│   └── demo.png              # Demo screenshot
├── .env.local                # Local env vars (ignored by Git)
├── next.config.js            # Next.js config (sitemap, themes)
├── package.json              # Scripts & dependencies
└── README.md
```

---

## Contributing

1. Fork this repository
2. Create a feature branch:

   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:

   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request!

Please follow the existing code style and run:

```bash
npm run lint
```

before submitting.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
