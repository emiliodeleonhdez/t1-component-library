# 📦 Component Library – Full Stack Implementation

A reusable **Component Library** built with **TypeScript**, **Tailwind CSS**, and **Next.js**, including a complete **tracking analytics system** with backend support using **Express.js** and **MongoDB**. This project is structured with best practices for scalability, maintainability, and test coverage, fulfilling all technical requirements defined in the evaluation.

---

## 📁 Project Structure

```bash
root/
├── frontend/                # Component Library UI (Next.js)
│   ├── components/          # Button, Input, Modal, Card
│   ├── design/              # Design tokens (colors, spacing, etc.)
│   ├── __tests__/           # Unit and integration tests
│   └── ...
├── backend/                 # Express + MongoDB API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── ...
└── .env.example             # Environment variables template
```

---

## 🚀 Frontend Features (Component Library)

### ✅ Components Implemented

- **Button**

  - Variants: `primary`, `secondary`, `danger`
  - States: `default`, `loading`, `disabled`
  - Supports optional icons

- **Input**

  - Types: `text`, `email`, `password`
  - Validation states: `default`, `error`, `success`
  - Includes label, placeholder, and disabled state

- **Modal**

  - Customizable `header`, `body`, `footer`
  - Dismiss via `X` icon or overlay
  - Sizes: `small`, `medium`, `large`

- **Card**

  - Optional header, body, and footer
  - Image support
  - Customizable border styles

### 🧪 Testing

- 100% test coverage across all components

#### Run tests:

```bash
cd frontend
npm run test
```

### 🎨 Design Tokens

- Implemented in `globals.css`
- Covers colors, spacing, typography, border-radius
- Integrated via Tailwind CSS and used across >80% of components

### 📊 Dashboard Demo

- Live showcase of all 4 components
- Real-time statistics panel
- Interaction counters (auto-updating)
- **Download Stats in CSV** button for Excel export
- Fully responsive (Mobile First Design)
- JWT-based login/logout with cookie storage

---

## 🔧 Backend (Analytics API)

### 🧠 Features

- JWT-based authentication (login, register)
- Component tracking system
- Real-time interaction stats
- CSV export of usage data

### 🧪 Endpoints

| Method | Endpoint                 | Description                         |
| ------ | ------------------------ | ----------------------------------- |
| POST   | `/api/auth/register`     | Register a new user                 |
| POST   | `/api/auth/login`        | Login and receive token (cookie)    |
| POST   | `/api/components/track`  | Track component interaction         |
| GET    | `/api/components/stats`  | Get interaction stats               |
| GET    | `/api/components/export` | Export stats to CSV (auth required) |
| GET    | `/api/health`            | Health check                        |

### 🔐 Authentication

- JWT issued upon login
- Stored as `HttpOnly` cookie (`authToken`)
- Protected routes validate JWT using middleware

### 🧩 Component Tracking

- Tracks: `componentName`, `variant`, `action`, `timestamp`
- Automatically triggered from UI components

### ⚙️ Run Backend

```bash
cd backend
npm install
npm run dev
```

---

## 🔐 Environment Variables Setup

### Backend (`/backend/.env`):

```env
env variables will be shared via email
```

### Frontend (`/frontend/.env.local`):

```env
env variables will be shared via email
```

Copy and rename the example files:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

⚠️ **Note**: These variables are provided for testing purposes only.

---

## 🧪 Run Full Project Locally

1. **Backend**

```bash
cd backend
npm install
npm run dev
```

2. **Frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## 📦 Tech Stack

### Frontend:

- Next.js
- TypeScript
- Tailwind CSS
- Jest + Testing Library

### Backend:

- Node.js + Express
- MongoDB (MongoDB Atlas)
- Mongoose
- JWT Authentication

---

## ✅ Final Notes

- All component features and variants implemented
- Tracking and authentication fully integrated
- 100% test coverage (frontend and backend)

---

© Prueba Técnica Avanzada Frontend – T1
