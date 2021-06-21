import { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeList from '../Recipes/RecipeList';
import config from '../config';

export default class RandomRecipes extends Component {

    static defaultProps = {
        recipes: []
    }

    state = {
        mealDBRecipes: []
    }

    componentDidMount() {
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
                return Promise.all([randomRes.json()]);           
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
        this.state.mealDBRecipes.map( recipe => convertedRecipes.push(recipe) );

        return (
            <section className='RandomRecipes'>
                <h2>Random</h2>
                { (convertedRecipes.length > 0) ? <RecipeList recipes={convertedRecipes} /> : <p>Unable to fetch recipes.</p>}
            </section>
        )
    }

        
}

RandomRecipes.propTypes = {
    recipes: PropTypes.array
}