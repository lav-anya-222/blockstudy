# StudySphere Project Structure

This document outlines the complete folder and file structure of the StudySphere project.

## Root Structure

```
STUDYSPHERE/
├── CLIENT/               # Frontend (Next.js 14)
├── SERVER/               # Backend (Node.js + Express)
├── SHARED/               # Shared code between client and server
├── DATABASE/             # Database schemas and migrations
├── DOCUMENTATION/        # Project documentation
├── TESTS/                # Test files
├── docker-compose.yml    # Docker configuration
├── package.json          # Root package.json (monorepo)
├── README.md             # Main README
└── .gitignore           # Git ignore rules
```

## Frontend Structure (CLIENT/)

```
CLIENT/
├── public/
│   ├── 3d-models/        # 3D assets
│   ├── sounds/           # Audio files
│   └── certificates/     # Certificate templates
│
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (auth)/       # Auth routes group
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── layout.tsx
│   │   ├── dashboard/    # Dashboard page
│   │   ├── galaxy/       # 3D galaxy view
│   │   ├── study-room/   # Study rooms
│   │   ├── library/      # Resource library
│   │   ├── profile/      # User profile
│   │   ├── ai-tutor/     # AI tutor page
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Landing page
│   │
│   ├── components/       # React components
│   │   ├── 3d/          # 3D components
│   │   ├── ui/          # UI components
│   │   ├── learning/    # Learning components
│   │   ├── ai/          # AI components
│   │   ├── dashboard/   # Dashboard components
│   │   └── shared/      # Shared components
│   │
│   ├── lib/             # Libraries and utilities
│   │   ├── utils/       # Utility functions
│   │   ├── hooks/       # Custom React hooks
│   │   ├── services/    # API services
│   │   └── constants/   # Constants
│   │
│   ├── styles/          # CSS files
│   │   ├── animations.css
│   │   └── themes/      # Theme CSS files
│   │
│   └── types/           # TypeScript types
│
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## Backend Structure (SERVER/)

```
SERVER/
├── src/
│   ├── controllers/      # Request handlers
│   ├── routes/          # API routes
│   ├── models/          # Database models
│   ├── middleware/      # Express middleware
│   ├── services/        # Business logic
│   ├── utils/          # Helper functions
│   ├── config/         # Configuration files
│   ├── app.js          # Express app
│   └── server.js       # Server entry point
│
├── package.json
├── .env.example
└── Dockerfile
```

## Key Files Checklist

### Frontend Files ✅
- [x] All component files created
- [x] All utility files created
- [x] All hook files created
- [x] All service files created
- [x] All type files created
- [x] Configuration files (tailwind, next.config)

### Backend Files ✅
- [x] All controller files created
- [x] All route files created
- [x] All model files created
- [x] All middleware files created
- [x] All service files created
- [x] Configuration files

### Shared Files ✅
- [x] Shared types
- [x] Shared utilities

### Database Files ✅
- [x] Schema SQL
- [x] Seed data SQL
- [x] Migrations folder

### Configuration Files ✅
- [x] docker-compose.yml
- [x] Root package.json
- [x] .gitignore
- [x] README.md

## Notes

- The frontend uses Next.js 14 with App Router
- The backend uses Express.js with MongoDB
- All TypeScript types are properly defined
- All API endpoints are structured and documented
- Docker setup is configured for local development

