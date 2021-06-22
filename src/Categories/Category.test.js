import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Category from './Category';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <Category
            category_id='1'
            category_name='Beef'
            category_description="Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
            category_pic="https://www.themealdb.com/images/category/beef.png"
        />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


