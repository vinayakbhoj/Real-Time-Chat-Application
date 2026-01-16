
---

# 2️⃣ Main Folder README (`README.md` in `Real-Time-Chat-App/`)

```markdown
# Real-Time Chat Application

This repository contains a **full-stack real-time chat application** with separate frontend and backend folders.

---

## 📂 Folder Structure

Real-Time-Chat-App/
├── Chat-Application-Backend/ # Spring Boot backend
├── chat-frontend/ # React + Vite frontend
└── README.md # Main repo README


---

## ⚙️ Setup Instructions

### 1️⃣ Backend
```bash
cd Chat-Application-Backend
./mvnw spring-boot:run  # Maven

Backend URL: http://localhost:8080

2️⃣ Frontend
cd chat-frontend
npm install
npm run dev

Frontend URL: http://localhost:5173

🚀 Tech Stack

Frontend: React (Vite), Tailwind CSS, JavaScript, WebSocket (SockJS + STOMP)
Backend: Spring Boot, Java, WebSocket (STOMP + SockJS), Maven
