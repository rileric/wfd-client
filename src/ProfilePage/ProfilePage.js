import { Component } from 'react';
import PropTypes from 'prop-types';
import CookbookList from '../Cookbooks/CookbookList';
import RecipeList from '../Recipes/RecipeList';
import LogoutButton from '../LoginSys/logout-button';

const myDebug=console.log;

export default class ProfilePage extends Component {

    static defaultProps = {
        cookbooks: [],
        recipes: []
    }

    state = {
        profileView: 1
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
                    <button type="button" className="myCookbooksButton" onClick={this.handleCookbooksClick}><h2>My Cookbooks</h2></button>
                    <button type="button" className="myRecipesButton" onClick={this.handleRecipesClick}><h2>My Recipes</h2></button>
                    <LogoutButton />
                </div>
            );
        }
        else if(this.state.profileView === 2) {
            return (
                <div className='myCookbookList'>
                    <button type="button" className="backButton" onClick={this.handleBackClick}><h2>Back</h2></button>
                    <CookbookList cookbooks={this.props.cookbooks} />
                </div>              
            );
        }
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

ProfilePage.propTypes = {
    cookbooks: PropTypes.array,
    recipes: PropTypes.array
}