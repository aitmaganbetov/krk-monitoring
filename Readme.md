# 📘 KRK Monitoring System
## Система мониторинга качества обучения КРК

**Smart Campus + AI Analytics Platform for Educational Quality Assessment**

---

## 🎯 Описание проекта

**KRK Monitoring System** — комплексное решение для оценки и мониторинга качества преподавания в университете.

### Основные функции:
- ✅ Управление профилями преподавателей
- ✅ Система оценки качества КРК (контроль результатов обучения)
- ✅ AI-анализ качества преподавания
- ✅ Формирование KPI и отчетов
- ✅ Интеграция с LMS (Platonus)
- ✅ Система рекомендаций на основе ML

---

## 🏗️ Архитектура системы

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (React)                     │
│              Admin Dashboard + Analytics                │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│              API Gateway (Node.js/Express)              │
│  ✓ REST API  ✓ JWT Auth  ✓ RBAC  ✓ Middleware          │
└────────────┬────────────────────────┬───────────────────┘
             │                        │
    ┌────────▼────────┐      ┌───────▼──────────┐
    │  Services Layer │      │  AI ML Service   │
    │  ✓ Teachers     │      │ (Python/Flask)   │
    │  ✓ Evaluations  │      │ ✓ Sentiment Anal │
    │  ✓ KPI & KPI    │      │ ✓ Performance    │
    │  ✓ Reports      │      │ ✓ Predictions    │
    └────────┬────────┘      └───────┬──────────┘
             │                        │
    ┌────────▼────────────────────────▼────────┐
    │         Database Layer (MySQL)           │
    │  ✓ Teachers  ✓ Evaluations  ✓ KPI       │
    │  ✓ Students  ✓ AI Results   ✓ Audit     │
    └───────────────────────────────────────────┘
             │
    ┌────────▼─────────────────┐
    │   Cache & Queue (Redis)  │
    │  ✓ Cache  ✓ Job Queue    │
    └──────────────────────────┘
```

---

## 🧩 Компоненты системы

### 🌐 Frontend (React)
- **Технологии**: React 18, Tailwind CSS, Recharts
- **Функции**: Дашборд, управление преподавателями, аналитика, отчеты
- **Порт**: 3000

### 🚪 Backend API (Node.js)
- **Технологии**: Express.js, TypeScript, JWT, MySQL
- **Функции**: REST API, аутентификация, управление данными
- **Порт**: 3000

### 🤖 AI Service (Python)
- **Технологии**: Flask, scikit-learn, OpenAI API
- **Функции**: Анализ эмоций, оценка производительности, рекомендации
- **Порт**: 5000

### 🗄️ Database (MySQL)
- **Таблицы**: Teachers, Students, Evaluations, KPI, AI Analysis, Audit Logs
- **Порт**: 3306

### ⚡ Cache & Queue (Redis)
- **Функции**: Кэширование, очереди задач (BullMQ)
- **Порт**: 6379

---

## 🚀 Быстрый старт

### Требования
- Node.js 18+
- Python 3.11+
- Docker & Docker Compose
- Git

### С помощью Docker (рекомендуется)

```bash
# Клонирование репозитория
git clone <your-repo-url>
cd krk

# Настройка переменных окружения
cp backend/.env.example backend/.env
cp ai-service/.env.example ai-service/.env

# Запуск всех сервисов
docker-compose up -d
```

**Доступ:**
- API: http://localhost:3000
- AI Service: http://localhost:5000
- Frontend: http://localhost:3000 (после сборки)

### Локальная разработка

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**AI Service:**
```bash
cd ai-service
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

---

## 📊 API Endpoints

### Teachers
| Метод | Endpoint | Описание |
|-------|----------|---------|
| GET | `/api/v1/teachers` | Список преподавателей |
| POST | `/api/v1/teachers` | Создать преподавателя |
| GET | `/api/v1/teachers/:id` | Получить преподавателя |
| PUT | `/api/v1/teachers/:id` | Обновить преподавателя |
| DELETE | `/api/v1/teachers/:id` | Удалить преподавателя |

### Evaluations (КРК)
| Метод | Endpoint | Описание |
|-------|----------|---------|
| GET | `/api/v1/evaluations` | Список оценок |
| POST | `/api/v1/evaluations` | Создать оценку |
| GET | `/api/v1/evaluations/:id` | Получить оценку |
| PUT | `/api/v1/evaluations/:id` | Обновить оценку |

### Analytics & Reports
| Метод | Endpoint | Описание |
|-------|----------|---------|
| GET | `/api/v1/kpi` | Получить KPI |
| GET | `/api/v1/kpi/:teacher_id` | KPI преподавателя |
| GET | `/api/v1/reports` | Сгенерировать отчет |

### AI Service
| Метод | Endpoint | Описание |
|-------|----------|---------|
| POST | `/api/v1/analyze` | Анализ оценки |
| POST | `/api/v1/predict` | Прогноз производительности |
| GET | `/health` | Проверка статуса |

---

## 🔐 Безопасность

- ✅ JWT токены
- ✅ Role-Based Access Control (RBAC)
- ✅ Валидация входных данных
- ✅ Логирование аудита
- ✅ Переменные окружения для конфигурации
- ✅ HTTPS поддержка (в production)

---

## 📁 Структура проекта

```
krk/
├── backend/                    # Node.js Backend API
│   ├── src/
│   │   ├── main.ts            # Entry point
│   │   ├── database.service.ts
│   │   ├── teacher.service.ts
│   │   └── evaluation.service.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   └── .env.example
├── ai-service/                # Python AI Service
│   ├── main.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env.example
├── frontend/                   # React Dashboard
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── index.tsx
│   ├── package.json
│   └── public/
├── database/                   # Database Schemas
│   └── init.sql               # MySQL initialization
├── .github/
│   └── workflows/             # CI/CD Pipelines
│       ├── backend-test.yml
│       └── ai-test.yml
├── docker-compose.yml         # Docker Compose Configuration
├── .gitignore
├── LICENSE
├── README.md
└── SETUP.md                   # Detailed setup guide
```

---

## 🧪 Тестирование

**Backend:**
```bash
cd backend
npm test
```

**AI Service:**
```bash
cd ai-service
pytest tests/
```

---

## 🔄 CI/CD

Проект включает GitHub Actions для:
- ✅ Автоматического тестирования (Backend & AI Service)
- ✅ Сборки Docker образов
- ✅ Развертывания

---

## 📚 Дополнительные ресурсы

- [Подробное руководство установки](./SETUP.md)
- [Документация API](./docs/API.md)
- [Архитектура системы](./docs/ARCHITECTURE.md)

---

## 🤝 Вклад

1. Сделайте Fork проекта
2. Создайте ветку фичи (`git checkout -b feature/YourFeature`)
3. Коммитьте изменения (`git commit -m 'Add some feature'`)
4. Пушьте в ветку (`git push origin feature/YourFeature`)
5. Откройте Pull Request

---

## 📄 Лицензия

Лицензировано под MIT - см. [LICENSE](./LICENSE) файл

---

## 📧 Контакты и поддержка

Если у вас есть вопросы или проблемы, пожалуйста создайте [Issue](../../issues) в этом репозитории.

---

**Made with ❤️ for better education quality**
**v1.0.0 | 2024**
