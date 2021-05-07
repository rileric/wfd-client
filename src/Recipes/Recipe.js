import React from 'react';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';

const myDebug = console.log;

export default class Recipe extends React.Component {

  static contextType = ApiContext;

  render() {
      const recipe = this.props.recipe;
      const ingredientList = recipe.recipe_ingredient_list;
      

    return (
        <section className='recipe' id={recipe.recipe_id} >
            <div className='recipe-top'>
                <div className='recipe-header'>
                    <h2>{recipe.recipe_name}</h2>
                    <h3>Cuisine:  {recipe.recipe_cuisine}</h3>
                    <h3>Category: {recipe.recipe_category}</h3>
                    <img src={recipe.recipe_pic} alt={recipe.recipe_name} />
                </div>
            </div>
            <div className='ingredientList'>
                {ingredientList.map(ingredient =>
                    <p className='ingredient'>{ingredient}</p>)}
            </div>
            <hr className='recipe-divider' />
            <pre>{recipe.recipe_instructions}</pre>
            <a className='youtubeButton' href={recipe.recipe_video}>Youtube</a>
        </section>
    );
  }
}

Recipe.propTypes = {
    recipe: PropTypes.shape({
        recipe_id: PropTypes.string,
        recipe_owner: PropTypes.string,
        recipe_name: PropTypes.string.isRequired, // only consistent item between MealDB and internal recipes
        mealDB_id:PropTypes.string,
        recipe_pic: PropTypes.string,
        recipe_cuisine: PropTypes.string,
        recipe_category: PropTypes.string,
        recipe_ingredients: PropTypes.arrayOf(PropTypes.string),
        recipe_instructions: PropTypes.string,
        recipe_tags: PropTypes.arrayOf(PropTypes.string),
        recipe_video: PropTypes.string,
        tweaked_original_id: PropTypes.string,
        recipe_source: PropTypes.string
    })
}
