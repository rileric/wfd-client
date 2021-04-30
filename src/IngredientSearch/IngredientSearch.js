import { Component } from 'react';

const myDebug = console.log;
export default class IngredientSearch extends Component {

    handleSubmit(event) {
        event.preventDefault();
        myDebug('Submitted IngredientSearchForm');
    }

    render() {
        return (
            <section className='ingredientSearch hidden'>
                <h2>Ingredient List</h2>
                <form className='ingredientSearchForm' onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor='ing1'>Ingredient 1: </label>
                    <input className='user-input' id='ing1' type='text' name='ingredient1' required />
                    <label htmlFor='ing2'>Ingredient 2: </label>
                    <input className='user-input' id='ing2' type='text' name='ingredient2' />
                    <label htmlFor='ing3'>Ingredient 3: </label>
                    <input className='user-input' id='ing3' type='text' name='ingredient3' />
                    <label htmlFor='ing4'>Ingredient 4: </label>
                    <input className='user-input' id='ing4' type='text' name='ingredient4' />
                    <label htmlFor='ing5'>Ingredient 5: </label>
                    <input className='user-input' id='ing5' type='text' name='ingredient5' />
                    <label htmlFor='ing6'>Ingredient 6: </label>
                    <input className='user-input' id='ing6' type='text' name='ingredient6' />
                    <label htmlFor='ing7'>Ingredient 7: </label>
                    <input className='user-input' id='ing7' type='text' name='ingredient7' />
                    <label htmlFor='ing8'>Ingredient 8: </label>
                    <input className='user-input' id='ing8' type='text' name='ingredient8' />
                    <label htmlFor='ing9'>Ingredient 9: </label>
                    <input className='user-input' id='ing9' type='text' name='ingredient9' />
                    <label htmlFor='ing10'>Ingredient 10: </label>
                    <input className='user-input' id='ing10' type='text' name='ingredient10' />
                    <button type='submit' className='ingFormSubmit' id='ingSubmit'>Submit</button> 
                </form>
            </section>          
        )
    }
     
}
