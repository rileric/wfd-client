import { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeList from '../Recipes/RecipeList';
import config from '../config';

const myDebug = console.log;

export default class RandomRecipes extends Component {

    static defaultProps = {
        recipes: []
    }

    state = {
        mealDBRecipes: []
    }

    componentDidMount() {
        myDebug(' RandomRecipes component mounted');
        const options = {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${config.API_KEY}`
            }
          };
          Promise.all([
            fetch(`${config.API_ENDPOINT}/meal-db-random`, options),
          ])
            .then(([randomRes]) => {
              if(!randomRes.ok) {
                return randomRes.json().then(err => Promise.reject(err));
              }
                return JSON.stringify( [randomRes.json()] );           
            })
            .then(([randomResJson]) => {
              this.setState({
                  mealDBRecipes: randomResJson
              });
            })
            .catch(error => {
              console.error(error);
            });
    }

    render() {

        let convertedRecipes = [];
        this.state.mealDBRecipes.forEach( recipe => convertedRecipes.push(recipe) );

        return (
            <section className='RandomRecipes'>
                <h2>Random</h2>
                <RecipeList recipes={convertedRecipes} />
            </section>
        )
    }

        
}

RandomRecipes.propTypes = {
    recipes: PropTypes.array
}