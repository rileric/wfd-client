import React from 'react';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const myDebug = console.log;

class Cuisine extends React.Component {

  static contextType = ApiContext;

  handleCuisineClick = e => {
    e.preventDefault();
    const cuisine_name = this.props.cuisine_name;
    this.props.history.push(`/cuisines/${cuisine_name}`);
  }

  render() {
    const { cuisine_name } = this.props;
    return (
        <button type="button" className="CuisineButton Cuisine" onClick={this.handleCuisineClick}><h2>{cuisine_name}</h2></button>
    );
  }
}

Cuisine.propTypes = {
    cuisine_name: PropTypes.string.isRequired,
}

export default withRouter(Cuisine);