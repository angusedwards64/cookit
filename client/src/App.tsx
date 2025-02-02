import React, { useState, useEffect } from 'react'

// import ItemRecipe from './components/itemRecipe'
import Nav from './components/navbar'
import auth from './utils/auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/signIn'
import Signup from './components/signUp'
import PostRecipe from './components/postRecipe'
import ListRecipe from './components/listRecipe'
import api from './services/apiServices'
import { Recipe } from './interfaces/Recipes'
import { authenticatedUser } from './interfaces/User'



function App() {

  const initialState = auth.isAuthenticated()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialState)
  const [user, setAuthenticatedUser] = useState<authenticatedUser[]>([])
  const [recipes, setRecipes] = useState<Recipe[]>([])

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
          user={user[0]}
          setAuthenticatedUser={setAuthenticatedUser}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
              <ListRecipe
                setIsAuthenticated={setIsAuthenticated}
                recipes={recipes}
                />
             </>
            }
          />
          <Route
            path='/recipe/:id'
            // element={<DetailsRecipe setIsAuthenticated={setIsAuthenticated}/>}
          />
          <Route
            path='/recipe/post'
            element={<PostRecipe isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          user={user[0]}
          setAuthenticatedUser={setAuthenticatedUser} />}
          />
          <Route
            path='signin'
            element={
              <SignIn
                setIsAuthenticated={setIsAuthenticated}
                // user={user}
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
                // user={user}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
