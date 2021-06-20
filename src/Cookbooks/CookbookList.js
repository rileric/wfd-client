import { Component } from 'react';
import PropTypes from 'prop-types';
import Cookbook from './Cookbook';

const myDebug=console.log;

export default class CookbookList extends Component {

    static defaultProps = {
        cookbooks: []
    }


    render() {

        return (
            <section className='CookbookList'>
                <h2>Cookbooks</h2>
                <ul className='CookbookList-list'>
                    {this.props.cookbooks.map( cookbook =>
                        <li key={cookbook.cookbook_id} className='CookbookList-item'>
                            <Cookbook cookbook={cookbook} />
                        </li> 
                    )}
                </ul>
            </section>
        )
    }

        
}

CookbookList.propTypes = {
    cookbooks: PropTypes.array
}