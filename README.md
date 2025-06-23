# 📈 StockSavvy — Real-Time Stock Tracking Platform

StockSavvy is a full-stack web application that allows users to monitor stock prices, set custom alerts, and track their portfolio using real-time data. It provides authentication, dynamic frontend views, and a secure backend API.

---

## 🧰 Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Frontend    | Next.js, React.js             |
| Backend     | Node.js, Express.js           |
| Database    | MongoDB + Mongoose            |
| Auth        | JWT (JSON Web Token)          |
| Styling     | Basic HTML + CSS              |

---

## 🗂️ Project Structure

```
stocksavvy-system-full/
├── backend/
│   ├── app.js
│   ├── .env
│   ├── models/
│   ├── routes/
│
├── frontend/
│   ├── pages/
│   │   ├── index.js
│   │   ├── login.js
│   │   └── register.js
```

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)

---

### 🖥️ Backend Setup

```bash
cd stocksavvy-system-full/backend
npm install
```

Create `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/stocksavvy
JWT_SECRET=stocksecretkey
PORT=5000
```

Start backend server:

```bash
npm start
```

---

### 🌐 Frontend Setup

```bash
cd stocksavvy-system-full/frontend
npm install
npm run dev
```

Visit: `http://localhost:3000`

---

## 🔐 Authentication

- JWT token returned on login
- Stored in `localStorage`
- Used in `Authorization` header

---

## 📡 API Routes

### `POST /api/auth/register`
Register user  
**Body**: `{ "email": "...", "password": "..." }`

### `POST /api/auth/login`
Login and return JWT  
**Body**: `{ "email": "...", "password": "..." }`

### `GET /api/stocks`
Returns stock data (auth required)

### `POST /api/stocks`
Submit stock entry (auth required)  
**Body**: `{ "symbol": "TSLA", "price": 600 }`

---

## 🧪 Test User

```txt
email: test@stocksavvy.com
password: test123
```

---

## 📝 License

Free for educational and demonstration purposes.