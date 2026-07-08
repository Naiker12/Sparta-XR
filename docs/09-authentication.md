# Authentication

## Flow

1. User registers via `/register` or logs in via `/login`
2. Backend returns JWT token
3. Token stored in localStorage
4. API interceptor attaches token to requests
5. Protected routes check for valid token

## Auth Service

```typescript
import { authService } from '@/services/auth'

// Login
await authService.login({ email, password })

// Register
await authService.register({ name, email, password })

// Logout
authService.logout()

// Get current user
const user = authService.getUser()
```
