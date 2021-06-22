import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class IngredientSearch extends Component {

    state = {};

    handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        this.setState({
            [inputName]: inputValue
        });
        
    }

    handleSubmit(event) {
        event.preventDefault();

        let ingredientList = [];

        for(const [key, value] of Object.entries(this.state) ) {
            let trimValue = value.trim();
            if(trimValue.length !== 0) {
                ingredientList.push(value);
            }
        }
        let searchString = ingredientList.join('%2C');
        this.props.history.push(`search/${searchString}`);
    }

    render() {
        return (
            <section className='ingredientSearch'>
                <h2>Ingredient List</h2>
                <form className='ingredientSearchForm' onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor='ing1'>Ingredient 1 : </label>
                    <input className='user-input' id='ing1' type='text' name='ingredient1' required onChange={this.handleInputChange} />
                    <label htmlFor='ing2'>Ingredient 2 : </label>
                    <input className='user-input' id='ing2' type='text' name='ingredient2' onChange={this.handleInputChange}/>
                    <label htmlFor='ing3'>Ingredient 3 : </label>
                    <input className='user-input' id='ing3' type='text' name='ingredient3' onChange={this.handleInputChange}/>
                    <label htmlFor='ing4'>Ingredient 4 : </label>
                    <input className='user-input' id='ing4' type='text' name='ingredient4' onChange={this.handleInputChange}/>
                    <label htmlFor='ing5'>Ingredient 5 : </label>
                    <input className='user-input' id='ing5' type='text' name='ingredient5' onChange={this.handleInputChange}/>
                    <label htmlFor='ing6'>Ingredient 6 : </label>
                    <input className='user-input' id='ing6' type='text' name='ingredient6' onChange={this.handleInputChange}/>
                    <label htmlFor='ing7'>Ingredient 7 : </label>
                    <input className='user-input' id='ing7' type='text' name='ingredient7' onChange={this.handleInputChange}/>
                    <label htmlFor='ing8'>Ingredient 8 : </label>
                    <input className='user-input' id='ing8' type='text' name='ingredient8' onChange={this.handleInputChange}/>
                    <label htmlFor='ing9'>Ingredient 9 : </label>
                    <input className='user-input' id='ing9' type='text' name='ingredient9' onChange={this.handleInputChange}/>
                    <label htmlFor='ing10'>Ingredient 10: </label>
                    <input className='user-input' id='ing10' type='text' name='ingredient10' onChange={this.handleInputChange}/>
                    <button type='submit' className='ingFormSubmit' id='ingSubmit'>Submit</button> 
                </form>
            </section>          
        )
    }
     
}

IngredientSearch.propTypes = {
    history: PropTypes.object,
}
export default withRouter(IngredientSearch);
