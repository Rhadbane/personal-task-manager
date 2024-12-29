import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/tasks';

const getAuthHeader = () => {
  // No need to manually add token, it's handled by cookies
  return {};
};

const getTasks = async (page = 1, filters = {}) => {
  const params = new URLSearchParams({ page, ...filters });
  const response = await axios.get(`${API_URL}?${params}`, { headers: getAuthHeader() });
  return response.data;
};

const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData, { headers: getAuthHeader() });
  return response.data;
};

const updateTask = async (id, taskData) => {
  const response = await axios.put(`${API_URL}/${id}`, taskData, { headers: getAuthHeader() });
  return response.data;
};

const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, { headers: getAuthHeader() });
  return response.data;
};

const taskService = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};

export default taskService;