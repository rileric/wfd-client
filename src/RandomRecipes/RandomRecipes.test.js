import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RandomRecipes from './RandomRecipes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <RandomRecipes />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


