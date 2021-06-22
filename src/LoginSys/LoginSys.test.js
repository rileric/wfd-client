import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AuthNav from './AuthNav';
import GetUserId from './GetUserId';
import Loading from './loading';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AuthNav />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <GetUserId />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Loading />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <LoginButton />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <LogoutButton />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});

