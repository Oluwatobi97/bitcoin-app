# Bitcoin Investment Platform

A full-stack application for investing in Bitcoin and other cryptocurrencies.

## Features

- User authentication (signup/login)
- Real-time cryptocurrency price tracking
- Investment management
- Profile management
- Transaction history
- Secure wallet integration

## Tech Stack

### Frontend

- React
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express
- MongoDB
- JWT Authentication

## Setup Instructions

### Backend Setup

1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd bitcoin-app-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:5173
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd bitcoin-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- POST `/api/auth/signup` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user

### Investments

- POST `/api/investments` - Create new investment
- GET `/api/investments/my-investments` - Get user's investments
- PATCH `/api/investments/:id/status` - Update investment status
- GET `/api/investments/stats` - Get investment statistics

### Profile

- GET `/api/profile` - Get user profile
- PATCH `/api/profile` - Update user profile
- GET `/api/profile/investments` - Get investment history
- GET `/api/profile/summary` - Get investment summary

## Environment Variables

### Backend

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Environment (development/production)
- `CORS_ORIGIN` - Allowed origins for CORS

## Security Considerations

- All passwords are hashed using bcrypt
- JWT tokens are used for authentication
- CORS is configured for security
- Environment variables are used for sensitive data

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
