import { Component } from 'react';
import PropTypes from 'prop-types';
import CookbookList from '../Cookbooks/CookbookList';
import RecipeList from '../Recipes/RecipeList';
import LogoutButton from '../LoginSys/logout-button';
import ApiContext from '../ApiContext';

const myDebug=console.log;

class ProfilePage extends Component {

    static defaultProps = {
        cookbooks: [],
        recipes: []
    }

    state = {
        profileView: 1
    }

    static contextType = ApiContext;

    componentDidMount() {
        let user_id = this.context.user_id;
        myDebug('Profile page mounted: ', user_id);
        myDebug('recipes.length = ' , this.props.recipes.length);
        this.context.userLogin(user_id);
    }

    handleBackClick = e => {
        e.preventDefault();
        
        this.setState({
            profileView: 1
        })
    }

    handleCookbooksClick = e => {
        e.preventDefault();
        
        this.setState({
            profileView: 2
        })
    }

    handleRecipesClick = e => {
        e.preventDefault();
        
        this.setState({
            profileView: 3
        })
    }

    renderProfileView() {
        if(this.state.profileView === 1) {
            return (
                <div className="myButtons">
                    {/* Removing Cookbook functionality for now.
                    <button type="button" className="myCookbooksButton" onClick={this.handleCookbooksClick}><h2>My Cookbooks</h2></button> */}
                    <button type="button" className="myRecipesButton" onClick={this.handleRecipesClick}><h2>My Recipes</h2></button>
                    <LogoutButton />
                </div>
            );
        }
        /* Removing Cookbook functionality for now.
        else if(this.state.profileView === 2) {
            return (
                <div className='myCookbookList'>
                    <button type="button" className="backButton" onClick={this.handleBackClick}><h2>Back</h2></button>
                    <CookbookList cookbooks={this.props.cookbooks} />
                </div>              
            );
        } */
        else if(this.state.profileView === 3) {
            return (
                <div className='myRecipeList'>
                    <button type="button" className="backButton" onClick={this.handleBackClick}><h2>Back</h2></button>
                    <RecipeList recipes={this.props.recipes} />
                </div>              
            );
        }
    }

    render() {

        return (
            <section className='myProfile'>
                {this.renderProfileView()}
            </section>
        );
    }

        
}

export default ProfilePage;

ProfilePage.propTypes = {
    cookbooks: PropTypes.array,
    recipes: PropTypes.array
}