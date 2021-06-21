import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';

class Category extends Component {

  static contextType = ApiContext;

  handleCategoryClick = e => {
    e.preventDefault();
    const category_name = this.props.category_name;
    this.props.history.push(`/categories/${category_name}`);
  }

  render() {
    const { category_name, category_description} = this.props

    return (
        <div className="Category">
            <button type="button" className="CategoryButton" onClick={this.handleCategoryClick}><h2>{category_name}</h2></button>
            <p>{category_description}</p>
        </div>
    )
  }
}

Category.propTypes = {
    category_id: PropTypes.string.isRequired,
    category_name: PropTypes.string.isRequired,
    category_description: PropTypes.string.isRequired,
    category_pic: PropTypes.string.isRequired,
    history: PropTypes.object,
}

export default withRouter(Category);