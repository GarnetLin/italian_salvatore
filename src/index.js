import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './style/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
);
