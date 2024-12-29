import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/auth';

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

const logout = async () => {
  await axios.post(`${API_URL}/logout`);
};

const authService = {
  register,
  login,
  logout,
};

export default authService;