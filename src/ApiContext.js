import React from 'react';

export default React.createContext({
    categories: [],
    cuisines: [],
    recipes: [],
    cookbooks: [],
    cookbookRecipes: [],
    addRecipe: () => {},
    updateRecipe: () => {},
    deleteRecipe: () => {},
    addCookbook: () => {},
    deleteCookbook: () => {},
    addCookbookRecipe: () => {},
    deleteCookbookRecipe: () => {},
    userLogin: () => {},
    user_id: '1'
});