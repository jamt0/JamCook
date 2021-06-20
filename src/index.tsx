import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import {store} from 'global/store';
import {Provider} from 'react-redux';
import 'assets/main.css';
import 'lang';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
