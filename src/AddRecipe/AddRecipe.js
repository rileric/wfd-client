import { Component } from 'react';
import config from '../config';
import ApiContext from '../ApiContext';
import { withRouter } from 'react-router-dom';

class AddRecipe extends Component {

    static defaultProps = {
        recipe: {},
        update_YN: false
    }
    static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.state = {
            recipe_id: null,
            recipe_owner: '1', // default user
            recipe_name: '',
            mealdb_id: '',
            recipe_pic: '',
            recipe_cuisine: '',
            recipe_category: '',
            recipe_ingredient_list: '',
            recipe_instructions: '',
            recipe_tags: '',
            recipe_video: '', // don't let users populate this
            tweaked_original_id: '', 
            recipe_source: '',
            recipe_public: true,
            nameTouched: false,
            categoryTouched: false,
            cuisineTouched: false,
        }
    }

    handlePublicCheckbox = (event) => {
        this.setState({
            recipe_public: !this.state.recipe_public // starts as true (checked)
        });

    }

    validateName() {
        const trimName = this.state.recipe_name.trim();

        if(this.state.nameTouched) {
            if(trimName.length === 0) {
                return( "Name is required and cannot be whitespace.");
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let owner = this.context.user_id;
        let url = `${config.API_ENDPOINT}/recipes`;

        let newRecipe = {
            recipe_owner: owner,
            recipe_name: this.state.recipe_name,
            mealdb_id: '', // even tweaked MealDB recipes should not have this populated
            recipe_pic: this.state.recipe_pic,
            recipe_cuisine: this.state.recipe_cuisine,
            recipe_category: this.state.recipe_category,
            recipe_ingredient_list: this.state.recipe_ingredient_list.split('\n'),
            recipe_instructions: this.state.recipe_instructions,
            recipe_tags: this.state.recipe_tags.split(','),
            recipe_video: '', // don't let users populate this
            tweaked_original_id: '', // TODO will come from props
            recipe_source: this.state.recipe_source,
            recipe_public: this.state.recipe_public,
        }
        if(this.state.recipe_id) {
            newRecipe['recipe_id']= this.state.recipe_id;
        }

        const options = {
            method: 'POST',
            body: JSON.stringify({
                recipe: newRecipe
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
            .then( recipe => {
                this.props.history.push('/'); // not working
                this.context.addRecipe(recipe);
            })
            .catch(err => {
                console.log('Error during AddRecipe.js: ', err);
            });
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
                    <label htmlFor='recipe_name'>Recipe name: </label>
                        <input
                            type='text'
                            className='addRecipeName'
                            name= 'recipe_name'
                            id= 'recipe_name'
                            onChange={this.handleInputChange}
                            required
                        />
                    <label htmlFor='recipe_category'>Category: </label>
                        <select id='recipe_category' name='recipe_category' onChange={this.handleInputChange}>
                            <option value='none'>Select one...</option>
                            {categoryListMenu}
                        </select>
                    <label htmlFor='recipe_cuisine'>Cuisine: </label>
                        <select id='recipe_cuisine' name='recipe_cuisine' onChange={this.handleInputChange}>
                            <option value='none'>Select one...</option>
                            {cuisineListMenu}
                        </select>
                    <label htmlFor='recipe_ingredient_list'>Ingredients (each line should contain measurement and ingredient):</label>
                        <textarea id='recipe_ingredient_list' name='recipe_ingredient_list' onChange={this.handleInputChange}></textarea>
                    <label htmlFor='recipe_instructions'>Instructions:</label>
                        <textarea id='recipe_instructions' name='recipe_instructions' onChange={this.handleInputChange}></textarea>
                        <label htmlFor='recipe_public'>Public: </label>
                        <input type='checkbox' id='recipe_public' name='recipe_public' checked={this.state.recipe_public} onChange={e => this.handlePublicCheckbox(e)} />
                    <button type='submit' className='recipeSubmit' id='recipeSubmit' disabled={this.validateName()}>Submit</button> 
                </form>
            </section>          
        )
    }
     
}

export default withRouter(AddRecipe);
