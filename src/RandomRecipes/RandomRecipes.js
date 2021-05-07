import { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeList from '../Recipes/RecipeList';
import { convertMealDBtoWFD } from '../helper-functions';

const myDebug = console.log;

export default class RandomRecipes extends Component {

    static defaultProps = {
        preRecipes: [],
        recipes: []
    }


    render() {

        let convertedRecipes = [];
        this.props.preRecipes.forEach( mealDBRecipe => {
            let postConvert = convertMealDBtoWFD(mealDBRecipe);
            myDebug('postConverted Recipe = ', postConvert);
            convertedRecipes.push(postConvert);
        });
        this.props.recipes.forEach( recipe => convertedRecipes.push(recipe) );
        myDebug('convertedRecipes = ', convertedRecipes);

        return (
            <section className='RandomRecipes'>
                <h2>Random</h2>
                <RecipeList recipes={convertedRecipes} />
            </section>
        )
    }

        
}

RandomRecipes.propTypes = {
    preRecipes: PropTypes.array,
    recipes: PropTypes.array
}