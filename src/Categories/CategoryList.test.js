import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CategoryList from './CategoryList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CategoryList />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


