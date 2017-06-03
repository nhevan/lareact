require('./bootstrap');

import React from 'react';
import ReactDom from 'react-dom';

import HelloReact from './components/HelloReact';
import UsersList from './components/UsersList';

if (document.getElementById('hello-react')) {
	ReactDom.render(<HelloReact />, document.getElementById('hello-react'));
}

if (document.getElementById('users-list')) {
	ReactDom.render(<UsersList/>, document.getElementById('users-list'));
}
