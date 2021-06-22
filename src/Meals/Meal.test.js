import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Meal from './Meal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <Meal
            recipe_id='1'
            mealdb_id='null'
            recipe_name='Test'
            recipe_pic='null'
        />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


