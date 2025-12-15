# StudySphere - AI-Powered Interactive Learning Platform

A visually stunning, AI-enhanced learning platform that makes studying engaging through gamification, real-time collaboration, and personalized learning paths.

## 🎯 Project Overview

StudySphere transforms traditional studying into an immersive, interactive experience using cutting-edge web technologies and AI.

### Features

- **3D Learning Galaxy**: Visualize your learning journey with interactive 3D planets
- **Virtual Study Rooms**: Collaborate with others in real-time study sessions
- **AI Study Buddy**: Get personalized study plans and instant answers
- **Flashcard Garden**: Create and review flashcards with spaced repetition
- **Progress Tracking**: Monitor your study time, streaks, and achievements
- **Gamification**: Unlock achievements and level up as you learn

## 📁 Project Structure

```
STUDYSPHERE/
├── CLIENT/               # Frontend (Next.js 14)
├── SERVER/               # Backend (Node.js + Express)
├── SHARED/               # Shared code
├── DATABASE/             # Database files
├── DOCUMENTATION/        # Project documentation
└── TESTS/                # Test files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (or use Docker)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd study
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Setup environment variables**

   Create `.env` files:
   - `studysphere/.env.local` (for frontend)
   - `SERVER/.env` (for backend)

4. **Start MongoDB** (if not using Docker)
   ```bash
   mongod
   ```

5. **Run the development servers**
   ```bash
   npm run dev
   ```

   Or run separately:
   ```bash
   # Terminal 1 - Backend
   npm run dev:server

   # Terminal 2 - Frontend
   npm run dev:client
   ```

6. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🐳 Docker Setup

```bash
docker-compose up -d
```

## 📚 Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Three.js / React Three Fiber
- Framer Motion
- Socket.io Client

### Backend
- Node.js
- Express.js
- MongoDB / Mongoose
- Socket.io
- JWT Authentication

## 📖 API Documentation

API endpoints are available at `/api/*`. See `DOCUMENTATION/api-docs/` for detailed documentation.

### Main Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/study/sessions` - Get study sessions
- `POST /api/study/session` - Create study session
- `GET /api/flashcards` - Get flashcards
- `POST /api/ai/generate-plan` - Generate study plan
- `WS /ws/study-room/:id` - Real-time study room

## 🧪 Testing

```bash
# Run client tests
cd studysphere && npm test

# Run server tests
cd SERVER && npm test
```

## 📝 Development Phases

- **Phase 1**: Foundation & Landing Page ✅
- **Phase 2**: Core Dashboard & 3D Galaxy ✅
- **Phase 3**: Study Features (Rooms, Flashcards, AI) ✅
- **Phase 4**: Advanced Features & Polish 🚧

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- Your Name

## 🙏 Acknowledgments

- Three.js community
- Next.js team
- All open-source contributors

---

**Built with ❤️ for learners everywhere**

