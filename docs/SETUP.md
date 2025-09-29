# Carbon Tracker Setup Guide

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL 12+
- Firebase project with Authentication enabled
- Google Maps API key
- OpenAI API key (optional, for AI features)

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd carbon-tracker
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Environment Variables**
   
   Copy the example environment files:
   ```bash
   cp client/.env.example client/.env.local
   cp server/.env.example server/.env
   ```
   
   Update the environment variables with your actual values.

4. **Database Setup**
   
   Start PostgreSQL and create a database:
   ```bash
   createdb carbon_tracker
   ```
   
   Run Prisma migrations:
   ```bash
   cd server
   npm run prisma:migrate
   npm run prisma:generate
   npm run prisma:seed
   ```

5. **Firebase Setup**
   
   - Create a Firebase project
   - Enable Authentication and add Google/Facebook providers
   - Generate a service account key
   - Add the credentials to your server .env file

6. **Start Development Servers**
   ```bash
   npm run dev
   ```
   
   This will start both the client (port 3000) and server (port 3001).

## Project Structure

See the main README.md for detailed project structure information.

## Available Scripts

- `npm run dev` - Start both client and server
- `npm run build` - Build both client and server
- `npm run install:all` - Install dependencies for all packages

## Testing

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/api
- API Health Check: http://localhost:3001/api/health
