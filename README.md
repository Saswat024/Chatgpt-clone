# ChatGPT & Image Generator Clone

A full-stack ChatGPT and AI Image Generator clone built with the MERN stack (MongoDB, Express, React, Node.js). The application includes dynamic AI text chat, generative AI image creation, community showcase publishing, a credit consumption model, and Stripe payment integration.

---

## 🚀 Features

- **AI Text Chat**: Seamless interactive chat interface powered by generative language models.
- **AI Image Generation**: Generative image creation directly from text prompts using ImageKit AI.
- **Publish to Community**: Showcase your generated AI images on the public community feed for other users to see.
- **Community Feed**: A curated space where users can explore public images and see who generated them.
- **Credit-Based System**:
  - Text generation costs **1 credit**.
  - Image generation costs **2 credits**.
- **Stripe Checkout**: Easy purchase of premium credit packages (Basic, Pro, Premium).
- **Stripe Webhooks**: Safe, asynchronous fulfillment that increments user credit balances upon successful payment completion.
- **User Authentication**: Secure JWT-based registration, login, and protected API routing.

---

## 🛠️ Tech Stack

### Frontend
- **React** (v19)
- **Vite** (v8)
- **Tailwind CSS** (v4)
- **React Router DOM** (v7)
- **React Hot Toast** (notifications)

### Backend
- **Node.js** & **Express**
- **MongoDB** & **Mongoose**
- **Stripe SDK** (payments)
- **ImageKit SDK** (image uploads & AI transformations)
- **JSON Web Tokens (JWT)** (session security)

---

## 📂 Project Structure

```text
chatgpt-clone/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── assets/         # CSS, SVG icons, and image assets
│   │   ├── components/     # ChatBox, Sidebar, Message components
│   │   ├── context/        # AppContext (global state, auth, and API calls)
│   │   └── pages/          # Community, Credits, Loading, Login pages
│   ├── .env                # Client environment variables
│   └── package.json
│
└── server/                 # Node.js Express Backend
    ├── configs/            # DB, ImageKit, OpenAI configurations
    ├── controllers/        # Credit, Message, User, and Webhook controllers
    ├── middlewares/        # Authentication & authorization middlewares
    ├── models/             # Mongoose schemas (Chat, User, Transaction)
    ├── routes/             # Express API routing endpoints
    ├── .env                # Backend environment variables
    └── server.js           # Server entry point
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed (v18+)
- MongoDB Atlas account or local MongoDB instance
- Stripe Developer Account
- ImageKit Account

### 1. Backend Setup
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add the following:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_signing_secret
   GEMINI_API_KEY=your_gemini_api_key

   # ImageKit
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

   # Stripe
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_signing_secret
   ```
4. Start the backend server:
   ```bash
   npm run server
   ```

### 2. Frontend Setup
1. Navigate to the client folder:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `client` directory and specify the server URL:
   ```env
   VITE_SERVER_URL=http://localhost:3000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
