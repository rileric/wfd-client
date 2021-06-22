import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Cuisine from './Cuisine';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <Cuisine
            cuisine_name='test'
        />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


