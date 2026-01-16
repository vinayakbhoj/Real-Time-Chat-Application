# Chat Application – Backend

This is the backend part of a real-time chat application built using **Spring Boot**, **Java**, and **WebSocket (STOMP + SockJS)**.

---

## 🚀 Tech Stack
- Java 17+
- Spring Boot
- Spring WebSocket
- Maven
- STOMP + SockJS for real-time messaging

---

## 📂 Project Structure
src/main/java/com/chatapp/
├── controller/   # REST controllers & WebSocket endpoints
├── model/        # DTOs
├── config/       # WebSocket & Security configuration
└── RealTimeChatApplication.java # Main Spring Boot application

src/main/resources/
├── application.properties # Configurations
└── static/                # Optional static resources

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites
- Java 17+
- Maven

### 2️⃣ Run Backend
```bash
cd Chat-Application-Backend
./mvnw spring-boot:run  # for Maven

