import axios from 'axios';

// Base API URL
const API_URL = 'http://localhost:5000/api';

// Fetch all services
export const getServices = async () => {
  const response = await axios.get(`${API_URL}/services`);
  return response.data;
};

// Fetch all team members
export const getTeamMembers = async () => {
  const response = await axios.get(`${API_URL}/team`);
  return response.data;
};

// Fetch all projects
export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};
