import { Provider } from 'react-redux'

import store from './reducers';

import React from 'react';
import ReactDOM from 'react-dom';

import MainAppContainer from './containers/MainAppContainer';

require('normalize.css');
require('./styles/themes/default/theme-default.scss');



const renderApp = () => ReactDOM.render(
	<Provider store={store}>
		<MainAppContainer />
	</Provider>
, document.getElementById('app'));

store.subscribe(renderApp);

renderApp();

