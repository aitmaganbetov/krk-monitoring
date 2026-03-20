# KRK Monitoring System - Setup & Installation Guide

## 📋 Prerequisites

- Node.js 18+
- Python 3.11+
- Docker & Docker Compose
- Git

## 🚀 Quick Start with Docker

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd krk
```

### 2. Setup environment files
```bash
cp backend/.env.example backend/.env
cp ai-service/.env.example ai-service/.env
```

### 3. Update .env files with your credentials
```bash
# backend/.env
OPENAI_API_KEY=your_key_here
# ai-service/.env
OPENAI_API_KEY=your_key_here
```

### 4. Start services with Docker Compose
```bash
docker-compose up -d
```

Services will be available at:
- Backend API: http://localhost:3000
- AI Service: http://localhost:5000
- MySQL: localhost:3306
- Redis: localhost:6379

## 🔧 Local Development Setup

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### AI Service Setup
```bash
cd ai-service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 📚 API Documentation

### Teachers
- `GET /api/v1/teachers` - List all teachers
- `POST /api/v1/teachers` - Create teacher
- `GET /api/v1/teachers/:id` - Get teacher details
- `PUT /api/v1/teachers/:id` - Update teacher
- `DELETE /api/v1/teachers/:id` - Delete teacher

### Evaluations (КРК)
- `GET /api/v1/evaluations` - List evaluations
- `POST /api/v1/evaluations` - Create evaluation
- `GET /api/v1/evaluations/:id` - Get evaluation
- `PUT /api/v1/evaluations/:id` - Update evaluation

### Analytics & KPI
- `GET /api/v1/kpi` - Get KPI metrics
- `GET /api/v1/kpi/:teacher_id` - Get teacher KPI
- `GET /api/v1/reports` - Generate reports

## 🤖 AI Service Integration

The AI service provides:
- Sentiment analysis on evaluation comments
- Teacher performance scoring
- Risk detection for low performers
- Recommendations engine

**Endpoints:**
- `POST /api/v1/analyze` - Submit evaluation for analysis
- `POST /api/v1/predict` - Get performance predictions
- `GET /health` - Health check

## 🗄️ Database

Database schema includes tables for:
- Teachers
- Students
- Evaluations
- KPI metrics
- AI analysis results
- Audit logs

Database migrations run automatically on container startup.

## 📦 Project Structure

```
krk/
├── backend/              # Node.js/Express API
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── ai-service/          # Python Flask service
│   ├── main.py
│   └── requirements.txt
├── frontend/            # React Dashboard
│   ├── src/
│   └── package.json
├── database/            # SQL schemas
│   └── init.sql
├── docker-compose.yml
└── README.md
```

## 🔐 Security Features

- JWT authentication
- Role-based access control (RBAC)
- Input validation & sanitization
- Audit logging
- Environment-based configuration

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# AI Service tests
cd ai-service
pytest tests/
```

## 📊 Monitoring & Logs

- Health checks: `/health` endpoints on all services
- Logs available via Docker: `docker-compose logs -f [service]`
- Redis queue monitoring for async jobs

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/description`
2. Commit changes: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feature/description`
4. Submit pull request

## 📄 License

MIT License - see LICENSE file for details

## 📧 Support

For issues and questions, please create an issue in the repository.
