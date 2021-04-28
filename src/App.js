import React, { Component } from 'react';
import Header from './Header/Header';
import ApiContext from './ApiContext';
import CONFIG from './config';
import STORE from './dummy-store'

class App extends Component {

  state = {
    categories: STORE.categories,
    cuisines: STORE.cuisines,
    preRecipes: STORE.preRecipes, // MealDB recipe
    recipes: STORE.recipes, // internal recipe
    cookbooks: STORE.cookbooks,
    cookbookRecipes: STORE.cookbookRecipes,
  }

  componentDidMount() {
    // Add initial fetches here
  }

  // Recipes
  handleAddRecipe = newRecipe => {
    this.setState({
      recipes: [...this.state.recipes, newRecipe]
    });
  }

  handleDeleteRecipe = recipe_id => {
    this.setState({
      recipes: this.state.recipes.filter(recipe => recipe.recipe_id !== parseInt(recipe_id))
    });
  }

  //Cookbooks
  handleAddCookbook = newCookbook => {
    this.setState({
      recipes: [...this.state.cookbooks, newCookbook]
    });
  }

  handleDeleteCookbook = cookbook_id => {
    this.setState({
      cookbooks: this.state.cookbooks.filter(cookbook => cookbook.cookbook_id !== parseInt(cookbook_id))
    });
  }

  //CookbookRecipes
  handleAddCookbookRecipe = newCookbookRecipe => {
    this.setState({
      recipes: [...this.state.cookbookRecipes, newCookbookRecipe]
    });
  }

  handleDeleteCookbookRecipe = (cookbook_id, recipe_id) => {
    this.setState({
      cookbookRecipes: this.state.cookbookRecipes.filter(cookbookRecipe => (cookbookRecipe.cookbook_id !== parseInt(cookbook_id)) && (cookbookRecipe.recipe_id !== parseInt(recipe_id)) )
    });
  }

  render() {
    return (
      <main className='App'>
        {/* content goes here */}
        Hello!
        <Header />
      </main>
    );
  }
  
}

export default App;