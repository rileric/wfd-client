import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';
import PropTypes from 'prop-types';

export default class NavBar extends Component {

    render() {
        const menuList = this.props.menuList;
        return (
            <nav className='NavBar'>
                <ul className='NavBar__menu'>
                    {menuList.map( menuButton => (
                    <li key={menuButton.buttonName}>
                        <MenuButton
                            tag={Link}
                            to={menuButton.buttonRoute}
                            type='button'
                            className='NavBar__category-button'
                        >
                            {menuButton.buttonName}
                        </MenuButton>
                    </li>
                    )
                    )}
                </ul>
            </nav>
            
        )
    }
}

NavBar.defaultProps = {
    menuList: []
}
NavBar.propTypes = {
    menuList: PropTypes.arrayOf(PropTypes.object)
}