import axios from 'axios';
import authHeader from './auth-header';
import AuthService from './auth.service';
const API_URL = 'http://localhost:3000/api/test/';
const API_URL2 = 'http://localhost:3000/api/profile/';
const currentUser = AuthService.getCurrentUser();
const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};

const getUserBoard = () => {
  return axios.get(API_URL + 'user', { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + 'mod', { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', { headers: authHeader() });
};

const updateUserByID = (
  username,
  email,
  firstName,
  imageFile,
  phoneNumber,
  address,
  town,
  country
) => {
  return axios.put(API_URL2 + currentUser.id, {
    username,
    email,
    firstName,
    imageFile,
    phoneNumber,
    address,
    town,
    country,
  });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  updateUserByID,
};

export default UserService;
