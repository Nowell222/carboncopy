# Deployment Guide

## Frontend (Vercel)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Backend (Railway/Heroku)

1. Create new project on Railway or Heroku
2. Connect your GitHub repository
3. Set environment variables
4. Add PostgreSQL database addon
5. Deploy

## Database (Supabase)

1. Create new project on Supabase
2. Copy database URL to your environment variables
3. Run migrations: `npx prisma migrate deploy`

## Environment Variables for Production

### Client
```
REACT_APP_API_BASE_URL=https://your-api-domain.com/api
REACT_APP_FIREBASE_API_KEY=your_production_firebase_key
# ... other Firebase config
```

### Server
```
NODE_ENV=production
DATABASE_URL=your_production_database_url
FIREBASE_PROJECT_ID=your_production_project_id
# ... other production config
```
