import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import IngredientSearch from './IngredientSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <IngredientSearch />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


