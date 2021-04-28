import { Component } from 'react';
import PropTypes from 'prop-types';
import Cuisine from './Cuisine';

export default class CuisineList extends Component {

    static defaultProps = {
        cuisines: []
    }


    render() {
        return (
            <section className='CuisineList'>
                <ul>
                    {this.props.cuisines.map( cuisine =>
                        <li key={cuisine.strArea}>
                            <Cuisine cuisine_name={cuisine.strArea}/>
                        </li> 
                    )}
                </ul>
            </section>
        )
    }

        
}

CuisineList.propTypes = {
    cuisines: PropTypes.array
}