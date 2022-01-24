const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'http://localhost:5001',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

interface ApiObject {
  signUp: (user: UserObject) => {accessToken: string, user: UserObject};
  login: object;
  getRecipes?: object;
  logout?: object;
  postRecipes?: object;
  getRecipe?: object;
}

interface UserObject {
  email: string;
  password: string;
  name: string;
  username: string;
}



const api: ApiObject = {

//USER

signUp: async (user: UserObject) =>{
  try {
    console.log(user)
    const response = await apiClient.post('/api/auth/signup', user)
    return response
  } catch (error) {
    console.error(error)
  }
},

login = async (user: UserObject) => {
  try {
    const response = await apiClient.post('/api/auth/login', user)
    return response
  } catch (error) {
    console.error(error)
  }
},

api.logout = async (tokenName: string, user: string) => {
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
api.getRecipe = async (id: string) => {
  try {
    const response = await apiClient.get('/api/recipes/' + id)
    return response
  } catch (error) {
    console.error(error)
  }
}
api.postRecipes = async (tokenName, data) => {
  console.log('api data: ', data);
  console.log('api token: ', tokenName);
  try {
    const response = await apiClient.post('/api/recipes/create', data, {
      headers: { 'jwt': tokenName }
    });
    return response
  } catch (error) {
    console.error(error)
  }
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
