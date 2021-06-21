import { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import config from '../config';

export default class RecipeResult extends Component {

    static defaultProps = {
        match: {
            params: {}
        },
        fetchType: '',
        recipes: []
    }

    state = {
        foundRecipe: null
    }

    fetchRecipeResult(searchUrl, search_id) {
        const options = {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${config.API_KEY}`
            }
          };
          Promise.all([
            fetch(`${config.API_ENDPOINT}/${searchUrl}/${search_id}`, options),
          ])
            .then(([res]) => {
              if(!res.ok) {
                return res.json().then(err => Promise.reject(err));
              }
                return Promise.all( [res.json()] );           
            })
            .then(([resJson]) => {
              this.setState({
                  foundRecipe: resJson
              });
            })
            .catch(error => {
              console.error(error);
            });
    }
    
    componentDidMount() {
        const search_id = this.props.match.params.search_id;
        const fetchType = this.props.fetchType;
        if(fetchType === 'mealdb') {
          this.fetchRecipeResult('meal-db-recipe', search_id);
        }
        
        
    }

    render() {
        const fetchedRecipe = (this.state.foundRecipe !== null);
        return (
            <section className='RecipeResult'>
                <h2>Result</h2>
                {fetchedRecipe ? <RecipeList recipes={this.state.foundRecipe} /> : 'Unable to find recipe.'}
            </section>
        )
    }

        
}

RecipeResult.propTypes = {
    recipes: PropTypes.array,
    fetchType: PropTypes.string
}