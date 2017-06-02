require('./bootstrap');

import React from 'react';
import ReactDom from 'react-dom';

import HelloReact from './components/HelloReact';

if (document.getElementById('hello-react')) {
	ReactDom.render(<HelloReact />, document.getElementById('hello-react'));
}

