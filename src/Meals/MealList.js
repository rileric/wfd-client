import { Component } from 'react';
import PropTypes from 'prop-types';
import Meal from './Meal';
import ApiContext from '../ApiContext';
import config from '../config';

export default class MealList extends Component {

    static defaultProps = {
        match: {
            params: {}
        },
        searchType: '',
        recipes: [],
    };

    state = {
        mealDBRecipes: [],
        foundRecipes: false,

    };

    static contextType = ApiContext;

    fetchSearchResults(searchUrl, searchString) {
        const options = {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${config.API_KEY}`
            }
          };
          Promise.all([
            fetch(`${config.API_ENDPOINT}/${searchUrl}/${searchString}`, options),
          ])
            .then(([res]) => {
                if(!res.ok) {
                return res.json().then(err => Promise.reject(err));
                }
                return Promise.all( [res.json()] );           
            })
            .then(([resJson]) => {
                if(resJson.message) {
                    this.setState({
                        foundRecipes: false
                    })
                }
                else{
                    this.setState({
                        mealDBRecipes: resJson,
                        foundRecipes: true
                    });
                }
                
            })
            .catch(error => {
              console.error(error);
            });
    }


    componentDidMount() {
        const searchString = this.props.match.params.searchString;
        const mealSearchType = this.props.searchType;

        if(mealSearchType === 'categories') {
            this.fetchSearchResults('meal-db-search-category',searchString);
        }
        else if(mealSearchType === 'cuisines') {
            this.fetchSearchResults('meal-db-search-cuisine',searchString);
        }
        else if(mealSearchType === 'ingredients') {
            this.fetchSearchResults('meal-db-search-ingredients',searchString);
        }
        
    }

    render() {
        let meals = this.state.mealDBRecipes;

        if(this.state.foundRecipes) {
            return (
                <section className='MealList'>
                    <h2>Results</h2>
                    <ul className='MealList-list'>
                        {meals.map( meal =>
                            <li key={meal.recipe_id + '_' + meal.mealdb_id} className='MealList-item'>
                                <Meal
                                    recipe_id={meal.recipe_id}
                                    mealdb_id={meal.mealdb_id}
                                    recipe_name={meal.recipe_name}
                                    recipe_pic={meal.recipe_pic}
                                />
                            </li> 
                        )}
                    </ul>
                </section>
            )
        }
        else {
            return (
                <section className='MealList'>
                        <h2>Results</h2>
                        <p>No recipes found.</p>
                </section>
            )
        }
    }

        
}

MealList.propTypes = {
    history: PropTypes.object,
    searchType: PropTypes.string.isRequired,
    recipes: PropTypes.array
}