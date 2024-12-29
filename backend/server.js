const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from the frontend
  credentials: true, // Allow sending cookies
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Global error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));