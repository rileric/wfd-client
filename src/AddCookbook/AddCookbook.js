import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ApiContext from '../ApiContext';
import config from '../config';

class AddCookbook extends Component {

    static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.state = {
            cookbook_owner: '1',
            cookbook_name: '',
            cookbook_public: true
        }
    }

    handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        this.setState({
            [inputName]: inputValue
        });

    }

    handlePublicCheckbox = (event) => {
        this.setState({
            cookbook_public: !this.state.cookbook_public // starts as true (checked)
        });

    }

    handleSubmit(event) {
        event.preventDefault();
        let url = `${config.API_ENDPOINT}/cookbooks`;

        let newCookbook = {
            cookbook_owner: this.state.cookbook_owner,
            cookbook_name: this.state.cookbook_name,
            cookbook_public: this.state.cookbook_public
        }

        const options = {
            method: 'POST',
            body: JSON.stringify({
                cookbook: newCookbook
            }),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            }
        };

        fetch(url, options)
            .then( res => {
                if(!res.ok) {
                    throw new Error('Something went wrong, please try again later');
                }
                else {
                    return res.json();
                }
            })
            .then( cookbook => {
                this.props.history.push('/'); // not working
                this.context.addCookbook(cookbook);
            })
            .catch(err => {
                console.log('Error during AddCookbook.js: ', err);
            });
        
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
                <label htmlFor='cookbook_public'>Public: </label>
                <input type='checkbox' id='cookbook_public' name='cookbook_public' checked={this.state.cookbook_public} onChange={e => this.handlePublicCheckbox(e)} />
                <button type='submit' className='saveButton'>Save</button>
            </form>
        );
    }
}

export default withRouter(AddCookbook);

AddCookbook.propTypes = {
    history: PropTypes.object,
    onAddCookbook: PropTypes.func
}