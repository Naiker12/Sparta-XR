# API Layer

## Service Structure

```
src/services/
├── api/        # API client & interceptors
├── auth/       # Auth endpoints
└── storage/    # File upload/download
```

## API Client

Base URL configured via environment variables:
```env
VITE_API_URL=http://localhost:3000/api
```

All requests pass through an interceptor that:
- Attaches auth token
- Handles 401 responses
- Logs errors in development
