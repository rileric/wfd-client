import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';

const myDebug = console.log;

class Meal extends Component {

  static contextType = ApiContext;

  handleMealClick = e => {
    e.preventDefault();
    const recipe_name = this.props.recipe_name;
    const recipe_id = this.props.recipe_id;
    const mealdb_id = this.props.mealdb_id;

    if(mealdb_id && !recipe_id) {
        this.props.history.push(`/recipes/mealdb/${mealdb_id}`);
    }
  }

  render() {
    const { recipe_id, recipe_name, mealdb_id, recipe_pic } = this.props

    return (
        <div className="Meal">
            <button type="button" className="MealButton" onClick={this.handleMealClick}><h2>{recipe_name}</h2></button>
            <img src={recipe_pic} alt={recipe_name} />
        </div>
    )
  }
}

Meal.propTypes = {
    recipe_id: PropTypes.string,
    recipe_name: PropTypes.string.isRequired,
    mealdb_id: PropTypes.string,
    recipe_pic: PropTypes.string,
    history: PropTypes.object,
}

export default withRouter(Meal);