import { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

export default class RecipeList extends Component {

    static defaultProps = {
        recipes: []
    }


    render() {
        const recipeList = this.props.recipes;
        let counter = 0;
        return (
            <section className='RecipeList'>
                <h2>Recipes</h2>
                <ul className='RecipeList-list'>
                    {recipeList.map( singleRecipe =>
                        <li key={counter++} className='RecipeList-item' >               
                            <Recipe recipe={singleRecipe}  key={counter + '_recipe'} />
                            <hr className='recipe-break' key={counter + '_break'} />
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