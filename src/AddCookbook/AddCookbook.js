import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from '../../config';
import ApiContext from '../../ApiContext';
import '../../App.css';

const myDebug = console.log;

class AddCookbook extends Component {
    static contextType = ApiContext;

    handleSubmit(event) {
        event.preventDefault();
        myDebug('SUbmitted AddCookbook');
    }

    render() {
        return (
            <form className='addCookbook-form' onSubmit={e => this.handleSubmit(e)}>
                <h2>New Cookbook</h2>
                <label htmlFor='cookbookName'>Cookbook name: </label>
                <input
                    type='text'
                    className='addCookbookName'
                    name= 'cookbookName'
                    id= 'cookbookName'
                    required
                />
                <button type='submit' className='saveButton'>Save</button>
            </form>
        );
    }
}

export default AddCookbook;

AddCookbook.propTypes = {
    history: PropTypes.object,
    onAddCookbook: PropTypes.func
}