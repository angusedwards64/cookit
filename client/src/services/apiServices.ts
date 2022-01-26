import { ApiRecipe } from '../interfaces/Recipes'
import { UserSignUpObject, UserSignInObject } from '../interfaces/User'
const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'http://localhost:5001',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})


// interface UserSignUpObject {
//   email: string;
//   password: string;
//   name: string;
//   username: string;
// }

// interface UserSignInObject {
//   email: string;
//   password: string;
// }


//USER

const signUp = async (user: UserSignUpObject) => {
  try {
    console.log(user)
    const response = await apiClient.post('/api/auth/signup', user)
    return response
  } catch (error) {
    console.error(error)
  }
}

const login = async (user: UserSignInObject) => {
  console.log(user)
  try {
    const response = await apiClient.post('/api/auth/login', user)
    return response
  } catch (error) {
    console.error(error)
  }
}

 const logout = async (tokenName: string, user: string) => {
  localStorage.removeItem(tokenName)
  localStorage.removeItem(user)
}

//RECIPE

const getRecipes = async () => {
  try {
    const response = await apiClient.get('/api/recipes')
    console.log('recipes', response)
    return response
  } catch (error) {
    console.error(error)
  }
}
const getRecipe = async (id: string) => {
  try {
    const response = await apiClient.get('/api/recipes/' + id)
    return response
  } catch (error) {
    console.error(error)
  }
}
const postRecipes = async (tokenName: string, data: ApiRecipe) => {
  console.log('api data: ', data);
  console.log('api token: ', tokenName);
  console.log('hitting Api');
  try {
    const response = await apiClient.post('/api/recipes/create', data, {
      headers: { 'jwt': tokenName }
    });
    return response
  } catch (error) {
    console.error(error)
  }
}

const api = {signUp, login, logout, getRecipes, getRecipe, postRecipes}

export default api

