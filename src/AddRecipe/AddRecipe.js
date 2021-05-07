import { Component } from 'react';
import ApiContext from '../ApiContext';

const myDebug = console.log;
export default class AddRecipe extends Component {

    static defaultProps = {
        recipe: {},
        update_YN: false
    }
    static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.state = {
            recipe_id: '',
            recipe_owner: '1', // default user
            recipe_name: '',
            mealDB_id: '',
            recipe_pic: '',
            recipe_cuisine: '',
            recipe_category: '',
            recipe_ingredient_list: '',
            recipe_instructions: '',
            recipe_tags: '',
            recipe_video: '', // don't let users populate this
            tweaked_original_id: '', 
            recipe_source: '',
            nameTouched: false,
            categoryTouched: false,
            cuisineTouched: false,
        }
    }

    

    handleSubmit(event) {
        event.preventDefault();
        myDebug('Submitted IngredientSearchForm');
    }

    handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        this.setState({
            [inputName]: inputValue
        });

        if(inputName === 'recipe_name') {
            this.setState({
                nameTouched: true
            });       
        }

        if(inputName === 'recipe_category') {
            this.setState({
                categoryTouched: true
            });
        }

        if(inputName === 'recipe_cuisine') {
            this.setState({
                cuisineTouched: true
            });
        }
    }

    render() {

        const categoryList = this.context.categories;
        const categoryListMenu = categoryList.map(
            (categoryOption) => <option value={categoryOption.strCategory} key={categoryOption.strCategory}>{categoryOption.strCategory}</option>
        );
        const cuisineList = this.context.cuisines;
        const cuisineListMenu = cuisineList.map(
            (cuisineOption) => <option value={cuisineOption.strArea} key={cuisineOption.strArea}>{cuisineOption.strArea}</option>
        );

        let pageTitle = 'Add Recipe';

        // if we pass a recipe, are we creating a new recipe or updating
        if(this.props.recipe.recipe_name && !this.props.update_YN) {
            pageTitle = 'Tweak Recipe'; // needs a new recipe_id
        }
        else if(this.props.recipe.recipe_name && this.props.update_YN) {
            pageTitle = 'Edit Recipe'
        }
        
        return (
            <section className='ingredientSearch'>
                <h2>{pageTitle}</h2>
                <form className='ingredientSearchForm' onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor='recipeName'>Recipe name: </label>
                        <input
                            type='text'
                            className='addRecipeName'
                            name= 'recipeName'
                            id= 'recipeName'
                            required
                        />
                    <label htmlFor='recipe_category'>Type: </label>
                        <select id='recipe_category' name='recipe_category' onChange={this.handleInputChange}>
                            <option value='none'>Select one...</option>
                            {categoryListMenu}
                        </select>
                    <label htmlFor='recipe_cuisine'>Type: </label>
                        <select id='recipe_cuisine' name='recipe_cuisine' onChange={this.handleInputChange}>
                            <option value='none'>Select one...</option>
                            {cuisineListMenu}
                        </select>
                    <label htmlFor='ingredient-list'>Ingredients (each line should contain measurement and ingredient):</label>
                        <textarea id='ingredient-list' name='ingredient-textarea'></textarea>
                    <label htmlFor='instructions'>Instructions:</label>
                        <textarea id='instructions' name='instructions-textarea'></textarea>
                    <button type='submit' className='recipeSubmit' id='recipeSubmit'>Submit</button> 
                </form>
            </section>          
        )
    }
     
}
