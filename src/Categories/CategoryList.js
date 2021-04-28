import { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

export default class CategoryList extends Component {

    static defaultProps = {
        categories: []
    }


    render() {
        return (
            <section className='CategoryList'>
                <ul>
                    {this.props.categories.map( category =>
                        <li key={category.idCategory}>
                            <Category
                                category_id={category.idCategory}
                                category_name={category.strCategory}
                                category_description={category.strCategoryDescription}
                                category_pic={category.strCategoryThumb}
                            />
                        </li> 
                    )}
                </ul>
            </section>
        )
    }

        
}

CategoryList.propTypes = {
    categories: PropTypes.array
}