// frontend/src/pages/Register.jsx
import React from 'react';
import AuthForm from '../components/AuthForm';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (userData) => {
    try {
      await authService.register(userData);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <AuthForm type="register" onSubmit={handleRegister} />
    </div>
  );
};

export default Register;