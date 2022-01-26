interface Recipes {
  user_id: string,
  cuisine_id: string,
  title: string,
  description: string,
  ingredients: string,
  steps: string,
}


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

interface ApiRecipe {
  title: string,
  cuisine_id: number,
  user_id: string,
  description: string,
  ingredients:string,
  steps:string
}




export { Recipes, Recipe, ApiRecipe }