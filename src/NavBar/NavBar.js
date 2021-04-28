import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';

export default class NavBar extends Component {

    render() {

        return (
            <nav className='NavBar'>
                <ul className='NavBar__menu'>
                    <li>
                        <MenuButton
                            tag={Link}
                            to='/category'
                            type='button'
                            className='NavBar__category-button'
                        >
                            Category
                        </MenuButton>
                    </li>
                    <li>
                        <MenuButton
                            tag={Link}
                            to='/cuisine'
                            type='button'
                            className='NavBar__cuisine-button'
                        >
                            Cuisine
                        </MenuButton>
                    </li>
                    <li>
                        <MenuButton
                            tag={Link}
                            to='/random'
                            type='button'
                            className='NavBar__random-button'
                        >
                            Random
                        </MenuButton>
                    </li>
                    <li>
                        <MenuButton
                            tag={Link}
                            to='/recipe/search'
                            type='button'
                            className='NavBar__ingredientSearch-button'
                        >
                            Ingredients
                        </MenuButton>
                    </li>
                    <li>
                        <MenuButton
                            tag={Link}
                            to='/contact'
                            type='button'
                            className='NavBar__contact-button'
                        >
                            Contact
                        </MenuButton>
                    </li>
                </ul>
            </nav>
            
        )
    }
}