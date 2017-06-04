require('./bootstrap');

import React from 'react';
import ReactDom from 'react-dom';

import HelloReact from './components/HelloReact';
import Users from './components/Users';

if (document.getElementById('hello-react')) {
	ReactDom.render(<HelloReact />, document.getElementById('hello-react'));
}

if (document.getElementById('users')) {
	ReactDom.render(<Users />, document.getElementById('users'));
}
