# RestroMonitor

A full-stack web application for monitoring restaurant availability across multiple delivery platforms.

## Architecture

RestroMonitor follows a modern full-stack architecture with clear separation between frontend and backend:

```
restromonitor/
├── frontend/          # React + TypeScript + Vite frontend
│   ├── src/
│   │   ├── components/    
│   │   ├── pages/         
│   │   ├── types/         
│   │   └── config.ts      
│   └── package.json
├── server/            # Express + TypeScript backend
│   ├── src/
│   │   ├── database/      
│   │   ├── services/      
│   │   ├── types/         
│   │   └── index.ts       
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   └── package.json
└── README.md
```

### Technology Stack

**Frontend:**
- React 19.1.1 with TypeScript
- Vite for build tooling and development server
- React Router for client-side routing
- Tailwind CSS for styling
- ESLint for code quality

**Backend:**
- Node.js with Express 5.1.0
- TypeScript for type safety
- Prisma ORM for database operations
- SQLite database
- Nodemon for development

### Database Schema

The application uses a relational database with the following main entities:

- **Restaurants**: Core restaurant information (name, address, hours)
- **Platform**: Delivery platforms (e.g., UberEats, DoorDash)
- **RestaurantPlatform**: Many-to-many relationship linking restaurants to platforms
- **PlatformRestaurantAvailability**: Availability tracking for each restaurant-platform combination

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- ngrok (for backend tunneling)

## Installation & Setup

### 1. Clone and Install Dependencies

```bash
# Install frontend dependencies
cd frontend
npm ci

# Install backend dependencies
cd ../server
npm ci
```

### 2. Database Setup

```bash
# Navigate to server directory
cd server

# Generate Prisma client
npx prisma generate

# Run database migrations (if any)
npx prisma migrate dev

# Seed the database with initial data
npm run seed
```

### 3. Environment Configuration

Create environment files for both frontend and backend:

**Backend (.env in server/):**
```env
DATABASE_URL="file:./dev.db"
PORT=3001
NODE_ENV=development
```

**Frontend (.env in frontend/):**
```env
VITE_API_BASE_URL=http://localhost:8000
```

## Running the Application

### Development Mode

**Option 1: Run Frontend and Backend Separately**

```bash
# Terminal 1 - Start backend server
cd server
npm run dev

# Terminal 2 - Start frontend development server
cd frontend
npm run dev
```
Alternatively

```bash
chmod +x start.sh
./start.sh

```


### Production Build

```bash
# Build frontend for production
cd frontend
npm run build

# Build backend for production
cd server
npm run build

# Start production server
npm start
```

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /` - Health check endpoint
- `GET /restaurants` - Get all restaurants with their platform listings
- `GET /restaurants/:id` - Get specific restaurant details and availability statuses


## Development Scripts

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production

### Backend Scripts
- `npm run dev` - Start development server with nodemon
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run seed` - Seed database with initial data