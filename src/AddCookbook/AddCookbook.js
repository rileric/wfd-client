import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ApiContext from '../ApiContext';

const myDebug = console.log;

class AddCookbook extends Component {

    static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.state = {
            cookbook_id: '100',
            cookbook_owner: '1',
            cookbook_name: ''
        }
    }

    handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        this.setState({
            [inputName]: inputValue
        });

    }

    handleSubmit(event) {
        event.preventDefault();
        myDebug('Submitted AddCookbook');

        let newCookbook = {
            cookbook_id: this.state.cookbook_id,
            cookbook_owner: this.state.cookbook_owner,
            cookbook_name: this.state.cookbook_name
        }

        this.context.addCookbook(newCookbook);
    }

    render() {
        return (
            <form className='addCookbook-form' onSubmit={e => this.handleSubmit(e)}>
                <h2>New Cookbook</h2>
                <label htmlFor='cookbook_name'>Cookbook name: </label>
                <input
                    type='text'
                    className='addCookbookName'
                    name= 'cookbook_name'
                    id= 'cookbook_name'
                    onChange={this.handleInputChange}
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