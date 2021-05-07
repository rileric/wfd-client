import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import ApiContext from './ApiContext';
import CONFIG from './config';

import Header from './Header/Header';
import CuisineList from './Cuisines/CuisineList';
import CategoryList from './Categories/CategoryList';
import IngredientSearch from './IngredientSearch/IngredientSearch';
import ContactForm from './ContactForm/ContactForm';
import Footer from './Footer/Footer';
import AddCookbook from './AddCookbook/AddCookbook';
import About from './About/About';

import STORE from './dummy-store';
import './App.css';
import ProfilePage from './ProfilePage/ProfilePage';
import MobileMenu from './MobileMenu/MobileMenu';
import RandomRecipes from './RandomRecipes/RandomRecipes';
import AddRecipe from './AddRecipe/AddRecipe';

const myDebug = console.log;

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
    newCookbook.cookbook_id = newCookbook.cookbook_id + newCookbook.cookbook_name.length;
    this.setState({
      cookbooks: [...this.state.cookbooks, newCookbook]
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
      cookbookRecipes: [...this.state.cookbookRecipes, newCookbookRecipe]
    });
  }

  handleDeleteCookbookRecipe = (cookbook_id, recipe_id) => {
    this.setState({
      cookbookRecipes: this.state.cookbookRecipes.filter(cookbookRecipe => (cookbookRecipe.cookbook_id !== parseInt(cookbook_id)) && (cookbookRecipe.recipe_id !== parseInt(recipe_id)) )
    });
  }

  renderScreenView() {
    return (
      <>
        {['/', '/about'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={About}
          />
        ))}
        <Route path='/category'>
          <CategoryList categories={this.state.categories}/>
        </Route>
        <Route path='/cuisine'>
          <CuisineList cuisines={this.state.cuisines} />
        </Route>
        <Route path='/random'>
          <RandomRecipes preRecipes={this.state.preRecipes} recipes={this.state.recipes} />
        </Route>
        <Route path='/recipe/search'>
          <IngredientSearch />
        </Route>
        <Route path='/contact'>
          <ContactForm />
        </Route>
        <Route path='/cookbook/new'>
          <AddCookbook />
        </Route>
        <Route path='/recipe/new'>
          <AddRecipe />
        </Route>
        <Route path='/profile'>
          <ProfilePage cookbooks={this.state.cookbooks} recipes={this.state.recipes} />
        </Route>
        <Route path='/menu'>
          <MobileMenu />
        </Route>
      </>
    )
  }

  render() {
    const value = {
      categories: this.state.categories,
      cuisines: this.state.cuisines,
      recipes: this.state.recipes,
      cookbooks: this.state.cookbooks,
      cookbookRecipes: this.state.cookbooks,
      addRecipe: this.handleAddRecipe,
      updateRecipe: () => {},
      deleteRecipe: this.handleDeleteRecipe,
      addCookbook: this.handleAddCookbook,
      deleteCookbook: this.handleDeleteCookbook,
      addCookbookRecipe: this.handleAddCookbookRecipe,
      deleteCookbookRecipe: this.handleDeleteCookbookRecipe,
      user_id: '1'
    }

    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <Header />
          <main className='App-main'>         
            {this.renderScreenView()}
            {/*AddRecipe */}         
          </main>
          <Footer />
        </div>
      </ApiContext.Provider>
    );
  }
  
}

export default App;