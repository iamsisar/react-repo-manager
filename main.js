import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './reducers';

import MainAppContainer from './containers/MainAppContainer';

/*
 * Stili globali
 */
require('normalize.css');
require('./styles/themes/default/theme-default.scss');


/*
 * Il Provider di react-redux passa lo store come prop
 * lungo la gerarchia dei componenti.
 *
 * In questo modo lo store verrà automaticamente adottato
 * dalla funzione connect() con cui generare i container.
 */

const renderApp = () => ReactDOM.render(
	<Provider store={store}>
		<MainAppContainer />
	</Provider>
, document.getElementById('app'));

store.subscribe(renderApp);

renderApp();