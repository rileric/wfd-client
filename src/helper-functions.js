const myDebug = console.log;

export const filterRecipesByCategory = (recipes=[], category) => {
    recipes.filter(recipe => recipe.recipe_category === category)
}

export const filterRecipesByCuisine = (recipes=[], cuisine) => {
    recipes.filter(recipe => recipe.recipe_cuisine === cuisine)
}