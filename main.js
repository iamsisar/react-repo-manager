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


class Localizer extends React.Component{

    getChildContext() {
        return{
            language: this.props.lang
        }
    }

    render() {
        return this.props.children;
    }
}

let propTypes = {
    children: React.PropTypes.object,
    lang: React.PropTypes.string
};

Localizer.propTypes = propTypes;

let childContextTypes = {
    language: React.PropTypes.string
};

Localizer.childContextTypes = childContextTypes;


/*
 * Il Provider di react-redux passa lo store come prop
 * lungo la gerarchia dei componenti.
 *
 * In questo modo lo store verrà automaticamente adottato
 * dalla funzione connect() con cui generare i container.
 */

const renderApp = () => ReactDOM.render(
	<Provider store={store}>
        <Localizer lang="it_IT">
            <MainAppContainer />
        </Localizer>
    </Provider>
, document.getElementById('app'));

store.subscribe(renderApp);

renderApp();