import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import list from './app/list';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={list}>
			<App />
		</Provider>
	</React.StrictMode>
);
