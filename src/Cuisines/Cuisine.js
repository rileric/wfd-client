import React from 'react';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';

const myDebug = console.log;

export default class Cuisine extends React.Component {

  static contextType = ApiContext;

  handleCuisineClick = e => {
    e.preventDefault();
    const cuisine_name = this.props.cuisine_name;
    myDebug(`Cuisine clicked: ${cuisine_name}`);
  }

  render() {
    const { cuisine_name } = this.props;
    return (
        <button type="button" className="cuisineButton cuisine" onClick={this.handleCuisineClick}><h2>{cuisine_name}</h2></button>
    );
  }
}

Cuisine.propTypes = {
    cuisine_name: PropTypes.string.isRequired,
}