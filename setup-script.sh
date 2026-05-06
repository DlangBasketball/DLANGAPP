#!/bin/bash
# DLANG Dashboard — one-shot project generator
# Usage: bash setup.sh

set -e

PROJECT_NAME="dlang-dashboard"
echo "Creating $PROJECT_NAME..."

mkdir -p "$PROJECT_NAME"/{src,public}
cd "$PROJECT_NAME"

# .gitignore
cat > .gitignore <<'EOF'
node_modules
dist
dist-ssr
*.local
.DS_Store
.env
.env.local
.vscode
.idea
*.log
.wrangler
EOF

# package.json
cat > package.json <<'EOF'
{
  "name": "dlang-dashboard",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && wrangler pages deploy dist --project-name=dlang-dashboard",
    "deploy:prod": "npm run build && wrangler pages deploy dist --project-name=dlang-dashboard --branch=main"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "recharts": "^2.12.7",
    "lucide-react": "^0.383.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.0",
    "wrangler": "^3.78.0"
  }
}
EOF

# vite.config.js
cat > vite.config.js <<'EOF'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          recharts: ['recharts'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  server: { port: 5173, open: true },
});
EOF

# wrangler.toml
cat > wrangler.toml <<'EOF'
name = "dlang-dashboard"
compatibility_date = "2025-01-01"
pages_build_output_dir = "./dist"
EOF

# index.html
cat > index.html <<'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28'%3E%3Cpath fill='%230a0a0a' d='M0 19.6 L28 0 L28 8.4 L0 28 Z'/%3E%3C/svg%3E" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0a0a0a" />
    <meta name="description" content="DLANG Sports OS — Club Admin Dashboard" />
    <title>DLANG / Sports OS — Dashboard</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

# public/_headers
cat > public/_headers <<'EOF'
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/
  Cache-Control: public, max-age=0, must-revalidate

/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains
EOF

# public/_redirects
cat > public/_redirects <<'EOF'
/*    /index.html   200
EOF

# src/main.jsx
cat > src/main.jsx <<'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

# src/index.css
cat > src/index.css <<'EOF'
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body {
  width: 100%; min-height: 100vh; background: #f5f3ee;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
body {
  font-family: 'Archivo', sans-serif;
  color: #0a0a0a; line-height: 1.45; overflow-x: hidden;
}
#root { width: 100%; min-height: 100vh; }
button, input { font-family: inherit; }
EOF

# README.md
cat > README.md <<'EOF'
# DLANG Sports OS — Club Admin Dashboard

White-label sports club management dashboard. Built with React + Vite.
Deployed on Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy to Cloudflare Pages

```bash
npx wrangler login
npm run deploy
```

## Stack

- React 18
- Vite 5
- Recharts (charts)
- Lucide React (icons)
- Cloudflare Pages (hosting)
EOF

echo ""
echo "✓ Project scaffolded at ./$PROJECT_NAME"
echo ""
echo "⚠️  ONE FILE LEFT: paste the App.jsx contents into:"
echo "    $PROJECT_NAME/src/App.jsx"
echo ""
echo "Then run:"
echo "  cd $PROJECT_NAME"
echo "  npm install"
echo "  npm run dev"
EOF
