import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CuisineList from './CuisineList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CuisineList />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


