import { Component } from 'react';

export default class About extends Component {

    render() {
        return (
            <section className='about'>
                <h2>About the App:</h2>
                <p>This app is meant to help you find a recipe for dinner. You have four ways to do this:</p>
                <ol>
                <li>By category</li>
                <li>By cuisine</li>
                <li>Ten random recipes</li>
                <li>By ingredient list</li>
                </ol>
                
                <p>Please feel free to reach out through the Contact page for any comments or concerns.</p>
                <p>Recipes come from The MealDB.</p>

            </section>           
        );
    }
     
}
