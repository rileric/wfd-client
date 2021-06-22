import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddCookbook from './AddCookbook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AddCookbook />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


