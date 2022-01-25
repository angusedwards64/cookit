const { getById, list, add, deleteById } = require('./recipes.js');

let recipeId;
let mockRecipe = {
  "title": "asd",
  "cuisine_id": 1,
  "user_id": 1,
  "description": "asd",
  "ingredients": "",
  "steps": ""
};


it('should be able to add recipes', () => {
  return add(mockRecipe)
  .then(data => {
    recipeId = data[0].id;
    expect(data[0].title).toEqual("asd");
  })
})

it('should not add bad recipes', () => {
  return add({
    "title": "asd",
  }).then(data => expect(data[0])
  .toBeUndefined());
})

it('should list the recipes', () => {
  return list().then(data =>
    expect(data[data.length - 1].title)
    .toEqual("asd"));
})

it('recipes should not be empty', () => {
  return list().then(data =>
    expect(data).not.toHaveLength(0));
})

it('should get a recipe by ID', () => {
  return getById(recipeId)
  .then(data =>
    expect(data.id).toBe(recipeId))
})

it('should delete a recipe', () => {
  return deleteById(recipeId)
  .then(data => expect(data).toBe(1));
})
