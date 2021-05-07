import { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

const myDebug=console.log;

export default class RecipeList extends Component {

    static defaultProps = {
        recipes: []
    }


    render() {
        const recipeList = this.props.recipes;
        recipeList.map( recipe => {
            myDebug('RecipeList: ', recipe);
        });

        return (
            <section className='RecipeList'>
                <h2>Recipes</h2>
                <ul>
                    {recipeList.map( singleRecipe =>
                        <li key={singleRecipe.recipe_id + '_' + singleRecipe.mealDB_id}>                      
                            <Recipe recipe={singleRecipe} />
                        </li>                 
                    )}
                </ul>
            </section>
        )
    }

        
}

RecipeList.propTypes = {
    recipes: PropTypes.array
}