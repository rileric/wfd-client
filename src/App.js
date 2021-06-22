import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ApiContext from './ApiContext';
import config from './config';

import Header from './Header/Header';
import MainErrorBoundary from './MainErrorBoundary/MainErrorBoundary';
import CuisineList from './Cuisines/CuisineList';
import CategoryList from './Categories/CategoryList';
import MealList from './Meals/MealList';
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
import RecipeResult from './Recipes/RecipeResult';
import AddRecipe from './AddRecipe/AddRecipe';

class App extends Component {

  state = {
    categories: [], //STORE.categories,
    cuisines: [], // STORE.cuisines,
    recipes: [],//STORE.recipes,  internal recipe
    cookbooks: STORE.cookbooks,
    cookbookRecipes: STORE.cookbookRecipes,
  }

  setCategoriesAndCuisines = (categoriesArray, cuisinesArray) => {
    this.setState({
      categories: categoriesArray,
      cuisines: cuisinesArray
    });
  }

  oneTimeFetches = () => {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    };
    Promise.all([
      fetch(`${config.API_ENDPOINT}/meal-db-one-time`, options),
      fetch(`${config.API_ENDPOINT}/recipes/public`, options),
      fetch(`${config.API_ENDPOINT}/cookbooks/public`, options),
    ])
      .then(([oneTimeRes, pubRecipesRes, pubCookbooksRes]) => {
        if(!oneTimeRes.ok) {
          return oneTimeRes.json().then(err => Promise.reject(err));
        }
        if(!pubRecipesRes.ok) {
          return pubRecipesRes.json().then(err => Promise.reject(err));
        }
        if(!pubCookbooksRes.ok) {
          return pubCookbooksRes.json().then(err => Promise.reject(err));
        }
          return Promise.all( [oneTimeRes.json(), pubRecipesRes.json(), pubCookbooksRes.json() ] );
      })
      .then(([oneTimeResJson, pubRecipesResJson, pubCookbooksResJson]) => {
        this.setCategoriesAndCuisines(oneTimeResJson.categories, oneTimeResJson.cuisines);
        pubRecipesResJson.map(recipe => this.handleAddRecipe(recipe) );
        pubCookbooksResJson.map(cookbook => this.handleAddCookbook(cookbook) );
      })
      .catch(error => {
        console.error(error);
      });
    
  }

  fetchPrivateRecipesAndCookbooks(user_id) {

    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    };
    Promise.all([
      fetch(`${config.API_ENDPOINT}/recipes/private/${user_id}`, options),
      fetch(`${config.API_ENDPOINT}/cookbooks/private/${user_id}`, options),
    ])
      .then(([privRecipesRes, privCookbooksRes]) => {

        if(!privRecipesRes.ok) {
          return privRecipesRes.json().then(err => Promise.reject(err));
        }
        if(!privCookbooksRes.ok) {
          return privCookbooksRes.json().then(err => Promise.reject(err));
        }
          return Promise.all( [privRecipesRes.json(), privCookbooksRes.json() ] );
      })
      .then(([privRecipesResJson, privCookbooksResJson]) => {
        privRecipesResJson.map(recipe => this.handleAddRecipe(recipe) );
        privCookbooksResJson.map(cookbook => this.handleAddCookbook(cookbook) );
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.oneTimeFetches();
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

  handleLogin = (user_id) => {
    this.fetchPrivateRecipesAndCookbooks(user_id);
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
        <MainErrorBoundary>
          <Route path='/categories' exact>
            <CategoryList categories={this.state.categories}/>
          </Route>
          <Route path='/categories/:searchString'
            render={(props) => <MealList searchType='categories' recipes={this.state.recipes} {...props} /> } 
          />
          <Route path='/cuisines' exact>
            <CuisineList cuisines={this.state.cuisines} />
          </Route>
          <Route path='/cuisines/:searchString'
            render={(props) => <MealList searchType='cuisines' recipes={this.state.recipes} {...props} /> } 
          />
          <Route path='/random'>
            <RandomRecipes recipes={this.state.recipes} />
          </Route>
          <Route path='/recipes/search' exact>
            <IngredientSearch />
          </Route>
          <Route path='/recipes/search/:searchString'
            render={(props) => <MealList searchType='ingredients' recipes={this.state.recipes} {...props} /> } 
          />
          <Route path='/recipes/mealdb/:search_id'
            render={(props) => <RecipeResult fetchType='mealdb' {...props} /> } 
          />
          <Route path='/contact'>
            <ContactForm />
          </Route>
          <Route path='/cookbooks/new'>
            <AddCookbook />
          </Route>
          <Route path='/recipes/new'>
            <AddRecipe />
          </Route>
          <Route path='/profile'>
            <ProfilePage cookbooks={this.state.cookbooks} recipes={this.state.recipes} />
          </Route>
          <Route path='/menu'>
            <MobileMenu />
          </Route>
        </MainErrorBoundary>
      </>
    )
  }

  render() {

    const value = {
      categories: this.state.categories,
      cuisines: this.state.cuisines,
      recipes: this.state.recipes,
      cookbooks: this.state.cookbooks,
      cookbookRecipes: this.state.cookbookRecipes,
      addRecipe: this.handleAddRecipe,
      updateRecipe: () => {},
      deleteRecipe: this.handleDeleteRecipe,
      addCookbook: this.handleAddCookbook,
      deleteCookbook: this.handleDeleteCookbook,
      addCookbookRecipe: this.handleAddCookbookRecipe,
      deleteCookbookRecipe: this.handleDeleteCookbookRecipe,
      userLogin: this.handleLogin,
      user_id: '1'
    }

    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <Header />
          <main className='App-main'>         
            {this.renderScreenView()}      
          </main>
          <Footer />
        </div>
      </ApiContext.Provider>
    );
  }
  
}

export default App;