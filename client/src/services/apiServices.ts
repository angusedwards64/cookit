const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'http://localhost:5001',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const api = {}

//USER

api.signUp = async (user) => {
  try {
    console.log(user)
    const response = await apiClient.post('/api/auth/signup', user)
    return response
  } catch (error) {
    console.error(error)
  }
}

api.login = async (user) => {
  try {
    const response = await apiClient.post('/api/auth/login', user)
    return response
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

api.logout = async (tokenName,user) => {
  localStorage.removeItem(tokenName)
  localStorage.removeItem(user)
}

//RECIPE

api.getRecipes = async () => {
  try {
    const response = await apiClient.get('/api/recipes')
    return response
  } catch (error) {
    console.error(error)
  }
}
api.getRecipe = async (id) => {
  try {
    const response = await apiClient.get('/api/recipes/' + id)
    return response
  } catch (error) {
    console.error(error)
  }
}
api.postRecipes = async (data) => {
  try {
    const response = await apiClient.post('/api/recipes/create', data)
    return response
  } catch (error) {
    console.error(error)
  }
}

export default api

// export default {
//   getEvents() {
//     return apiClient.get('/events')
//   },
//   getEvent(id) {
//     return apiClient.get('/events/' + id)
//   },
// }
