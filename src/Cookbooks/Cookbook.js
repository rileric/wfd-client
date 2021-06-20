import React from 'react';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';

const myDebug = console.log;

export default class Cookbook extends React.Component {

  static contextType = ApiContext;

  handleCookbookClick = e => {
    e.preventDefault();
    const cookbook = this.props.cookbook;
    myDebug(`Cookbook clicked: ${cookbook.cookbook_name}`);
  }

  render() {
      const cookbook = this.props.cookbook;

    return (
        <div className="Cookbook">
            <button type="button" className="CookbookButton" onClick={this.handleCookbookClick}><h2>{cookbook.cookbook_name}</h2></button>
        </div>
    )
  }
}

Cookbook.propTypes = {
    cookbook: PropTypes.shape({
        cookbook_id: PropTypes.string,
        cookbook_owner: PropTypes.string,
        cookbook_name: PropTypes.string
    })
}
