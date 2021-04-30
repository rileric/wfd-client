import React, { Component } from 'react';
import Header from './Header/Header';
import ApiContext from './ApiContext';
import CONFIG from './config';
import STORE from './dummy-store'
import CuisineList from './Cuisines/CuisineList';
import CategoryList from './Categories/CategoryList';
import IngredientSearch from './IngredientSearch/IngredientSearch';
import ContactForm from './ContactForm/ContactForm';
import Footer from './Footer/Footer';
import AddCookbook from './AddCookbook/AddCookbook';
import About from './About/About';

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
        <Header />
        <CategoryList categories={this.state.categories}/>
        <CuisineList cuisines={this.state.cuisines} />
        <IngredientSearch />
        <ContactForm />
        <About />
        <AddCookbook />
        <Footer />
      </main>
    );
  }
  
}

export default App;