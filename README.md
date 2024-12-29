# Personal Task Management Application

A full-stack web application for efficient task management, built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to create, manage, and track their tasks with features like categorization, priority settings, and filtering capabilities.

## 🚀 Features

- **User Authentication**
  - Secure registration and login
  - JWT-based authentication with HTTP-only cookies
  - Password encryption with bcrypt

- **Task Management**
  - Create, read, update, and delete tasks
  - Categorize tasks with custom labels
  - Set task priorities (Low, Medium, High)
  - Mark tasks as completed
  - Filter tasks by various criteria

- **User Interface**
  - Responsive design using Tailwind CSS
  - Intuitive task organization
  - Real-time updates
  - Advanced filtering and search capabilities

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- bcrypt for password hashing
- Express-validator for input validation

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Testing
- Jest
- React Testing Library
- Supertest

## 📋 Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## 🔧 Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-task-manager.git
   cd personal-task-manager
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the Application**
   
   In the backend directory:
   ```bash
   npm run dev
   ```
   
   In the frontend directory:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## 📝 API Documentation

### Authentication Endpoints

```bash
POST /api/auth/register - Register a new user
POST /api/auth/login - Login user
POST /api/auth/logout - Logout user
```

### Task Endpoints

```bash
GET /api/tasks - Get all tasks (with pagination and filters)
POST /api/tasks - Create a new task
GET /api/tasks/:id - Get specific task
PUT /api/tasks/:id - Update task
DELETE /api/tasks/:id - Delete task
GET /api/tasks/analytics - Get task statistics
```

## 🧪 Testing

Run backend tests:
```bash
cd backend
npm test
```

Run frontend tests:
```bash
cd frontend
npm test
```

## 🔐 Security Features

- HTTP-only cookies for JWT storage
- Password hashing using bcrypt
- Input validation and sanitization
- Protected API routes
- CORS configuration
- Secure error handling

## 🚦 Project Structure

```
personal-task-manager/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── tests/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Bug Reports and Feature Requests

If you find a bug or have a feature request, please open an issue on GitHub.

## 👥 Authors

- Idriss Rhadbane- [GitHub Profile](https://github.com/rhadbane)

## 🙏 Acknowledgments

- Inspiration from various task management applications
- Open source community for the amazing tools and libraries

## 📱 Future Enhancements

- Real-time notifications
- Collaborative task sharing
- Mobile application development
- Advanced analytics dashboard
- Calendar integration
- Offline functionality

## ⚠️ Important Notes

- Ensure all environment variables are properly set before running the application
- MongoDB must be running for the application to work
- Make sure to use Node.js version 14 or higher

## 💡 Support

For support, email rhadbane.idriss@gmail.com 
