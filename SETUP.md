# Connect Robo Backend Setup Guide

## Quick Start (Without MongoDB - For Testing)

The server will now start even without MongoDB, but database features won't work.

1. Copy `env.example` to `.env`:
   ```powershell
   copy env.example .env
   ```

2. Edit `.env` and set at minimum:
   ```
   PORT=5000
   FRONTED_URL=http://localhost:5173
   JWT_SECRET=connect-robo-secret-key-12345
   OTP_SECRET=connect-robo-otp-secret-12345
   ```

3. Start the server:
   ```powershell
   npm start
   ```

## Full Setup (With MongoDB)

### Option 1: Local MongoDB

1. Install MongoDB Community Edition from https://www.mongodb.com/try/download/community

2. Start MongoDB service:
   ```powershell
   # If installed as service, it should start automatically
   # Or run manually:
   mongod
   ```

3. Create `.env` file with:
   ```
   PORT=5000
   DATA_BASE_URL=mongodb://localhost:27017/connect-robo
   FRONTED_URL=http://localhost:5173
   JWT_SECRET=your-secret-key
   OTP_SECRET=your-otp-secret
   ```

### Option 2: MongoDB Atlas (Cloud - Recommended)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get your connection string
4. Update `.env`:
   ```
   DATA_BASE_URL=mongodb+srv://username:password@cluster.mongodb.net/connect-robo
   ```

## Environment Variables

- `PORT`: Backend server port (default: 5000)
- `DATA_BASE_URL`: MongoDB connection string
- `FRONTED_URL`: Frontend URL for CORS
- `JWT_SECRET`: Secret key for JWT tokens
- `OTP_SECRET`: Secret key for OTP verification
- `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS`: Email configuration for OTP

## Testing

The server will start on `http://localhost:5000` (or your configured PORT).

Test endpoint: `http://localhost:5000/` should return "jay shree ram"

