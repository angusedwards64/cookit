import React, { useState, useEffect } from 'react'

// import ItemRecipe from './components/itemRecipe'
import Nav from './components/navbar'
import auth from './utils/auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/signIn'
import Signup from './components/signUp'
import DetailsRecipe from './components/detailsRecipe'
import PostRecipe from './components/postRecipe'
import ListRecipe from './components/listRecipe'
import api from './services/apiServices'

function App() {
  const initialState = auth.isAuthenticated()
  const [isAuthenticated, setIsAuthenticated] = useState(initialState)
  const [user, setAuthenticatedUser] = useState([])
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    api.getRecipes().then((data) => {
      setRecipes(data.data)
    })
  }, [])

  return (
    <div className='App'>
      <Router>
        <Nav
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          user={user}
          setAuthenticatedUser={setAuthenticatedUser}
        />
        <Routes>
          <Route
            path='/'
            element={
              <ListRecipe
                setIsAuthenticated={setIsAuthenticated}
                recipes={recipes}
              />
            }
          />
          <Route
            path='/recipe/:id'
            element={<DetailsRecipe setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path='/recipe/post'
            element={<PostRecipe setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path='signin'
            element={
              <SignIn
                setIsAuthenticated={setIsAuthenticated}
                user={user}
                setAuthenticatedUser={setAuthenticatedUser}
              />
            }
          />
          <Route
            path='signup'
            element={
              <Signup
                setIsAuthenticated={setIsAuthenticated}
                setAuthenticatedUser={setAuthenticatedUser}
                user={user}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
