import React, { useState, Dispatch, SetStateAction } from 'react'
import ItemRecipe from './itemRecipe'
import { Recipe } from '../interfaces/Recipes'




interface ListRecipeProps {
  recipes: Recipe[]
  setIsAuthenticated: Dispatch<SetStateAction<Boolean>>;
  // setIsAuthenticated: (setisAuthenticated: fn) => void;
}


export default function ListRecipe(props: ListRecipeProps) {
  return (
    <>
    {props.recipes.length && props.recipes.map((recipe) => (
          <ItemRecipe key={recipe.id} recipe={recipe}/>
      ))}
    </>
    // <ItemRecipe />
  )
}
