import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Cookbook from './Cookbook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const testCookbook = {
    cookbook_id: '1',
    cookbook_name: 'Test',
    cookbook_owner: '1',
    cookbook_public: true
  }
  ReactDOM.render(
    <BrowserRouter>
        <Cookbook
            cookbook={testCookbook}
        />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


