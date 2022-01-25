import React from 'react'
import ItemRecipe from './itemRecipe'


interface Recipe {
  id: number,
  user_id: number,
  cuisine_id: number,
  title: string,
  description: string,
  ingredients: string,
  steps: string,
  likes: null,
  created_at: string,
  updated_at: string,
  cuisine: string,
  username: string,
}


export default function ListRecipe(recipes: Recipe[]) {
  return (
       recipes.length && recipes.map((recipe) => (
          <ItemRecipe key={recipe.id} recipe={recipe}/>
      ))
    // <ItemRecipe />
  )
}
