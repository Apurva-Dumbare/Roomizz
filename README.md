# Roomizz

Welcome to the Roomizz Project! This project is a room rental platform with both frontend and backend components.

## Setup

1. Clone this repository:

2. **Backend Setup**:
- Navigate to the `backend` folder:
  ```
  cd backend
  ```
- Create a `.env` file in the `backend` folder and add the following environment variables:

  ```plaintext
  PORT=4000

  CLOUDINARY_CLIENT_NAME=<your-cloudinary-client-name>
  CLOUDINARY_CLIENT_API=<your-cloudinary-client-api>
  CLOUDINARY_CLIENT_SECRET=<your-cloudinary-client-secret>

  MONGO_URI=<your-mongo-uri>

  JWT_SECRET_KEY=<your-jwt-secret-key>
  JWT_EXPIRES=<your-jwt-expires>

  COOKIE_EXPIRE=<your-cookie-expire>
  ```

3. **Frontend Setup**:
- Navigate to the `frontend` folder:
  ```
  cd ../frontend
  ```
- Install dependencies:
  ```
  npm install
  ```

4. **Running the Servers**:
- Navigate back to the root directory:
  ```
  cd ..
  ```
- Start the backend server:
  ```
  cd backend
  npm start
  ```
- Start the frontend server:
  ```
  cd ../frontend
  npm run dev
  ```

## Usage

Describe how to use your project here.
