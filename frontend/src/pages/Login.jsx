// frontend/src/pages/Login.jsx
import React from 'react';
import AuthForm from '../components/AuthForm';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      await authService.login(credentials);
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (e.g., display message to user)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
};

export default Login;