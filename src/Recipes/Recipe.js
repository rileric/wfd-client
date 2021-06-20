import React from 'react';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';

const myDebug = console.log;

export default class Recipe extends React.Component {

  static contextType = ApiContext;

  render() {
      const recipe = this.props.recipe;
      const ingredientList = recipe.recipe_ingredient_list;
      let counterKey = 0;      

    return (
        <section className='recipe' id={recipe.recipe_id  + '_' + recipe.mealdb_id} key={counterKey++} >
            <div className='recipe-top' key={counterKey++} >
                <div className='recipe-header'key={counterKey++} >
                    <h2 key={counterKey++} >{recipe.recipe_name}</h2>
                    <h3 key={counterKey++} >Cuisine:  {recipe.recipe_cuisine}</h3>
                    <h3 key={counterKey++} >Category: {recipe.recipe_category}</h3>
                    {(recipe.recipe_pic !== '') ? <img src={recipe.recipe_pic} alt={recipe.recipe_name} key={counterKey++} /> : '' }
                </div>
            </div>
            <div className='ingredientList' key={counterKey++}>
                {ingredientList.map(ingredient =>
                    <p className='ingredient' key={counterKey++}>{ingredient}</p>)}
            </div>
            <hr className='recipe-divider' key={counterKey++}/>
            <pre key={counterKey++}>{recipe.recipe_instructions}</pre>
            <a className='youtubeButton' href={recipe.recipe_video} key={counterKey++}>Youtube</a>
        </section>
    );
  }
}

Recipe.propTypes = {
    recipe: PropTypes.shape({
        recipe_id: PropTypes.number,
        recipe_owner: PropTypes.string,
        recipe_name: PropTypes.string.isRequired, // only consistent item between MealDB and internal recipes
        mealDB_id:PropTypes.string,
        recipe_pic: PropTypes.string,
        recipe_cuisine: PropTypes.string,
        recipe_category: PropTypes.string,
        recipe_ingredients: PropTypes.arrayOf(PropTypes.string),
        recipe_instructions: PropTypes.string,
        recipe_tags: PropTypes.oneOfType([
                        PropTypes.arrayOf(PropTypes.string),
                        PropTypes.string
                    ]),
        recipe_video: PropTypes.string,
        tweaked_original_id: PropTypes.string,
        recipe_source: PropTypes.string
    })
}
