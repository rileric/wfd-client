import React from 'react';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';

const myDebug = console.log;

export default class Category extends React.Component {

  static contextType = ApiContext;

  handleCategoryClick = e => {
    e.preventDefault();
    const category_id = this.props.category_id;
    myDebug(`Category clicked: ${category_id}`);
  }

  render() {
    const { category_id, category_name, category_description, category_pic } = this.props
    return (
        <div className="category">
            <button type="button" className="categoryButton" onClick={this.handleCategoryClick}><h2>{category_name}</h2></button>
            <p>{category_description}</p>
        </div>
    )
  }
}

Category.propTypes = {
    category_id: PropTypes.string.isRequired,
    category_name: PropTypes.string.isRequired,
    category_description: PropTypes.string.isRequired,
    category_pic: PropTypes.string.isRequired
}