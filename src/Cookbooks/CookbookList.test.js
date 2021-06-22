import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CookbookList from './CookbookList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CookbookList />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


