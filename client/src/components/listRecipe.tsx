import React, { useState, Dispatch, SetStateAction } from 'react'
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

interface ListRecipeProps {
  recipes: Recipe[]
  setIsAuthenticated: Dispatch<SetStateAction<Boolean>>;
}


export default function ListRecipe(props: ListRecipeProps) {
  return (
       props.recipes.length && props.recipes.map((recipe) => (
          <ItemRecipe key={recipe.id} recipe={recipe}/>
      ))
    // <ItemRecipe />
  )
}
