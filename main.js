import { connect } from 'react-redux'
import { Provider } from 'react-redux'


import React from 'react';
import ReactDOM from 'react-dom';
import MainPanel from './components/MainPanel/MainPanel';
import RepoList from './components/RepoList/RepoList';
import store from './reducers';

require('normalize.css');
require('./styles/app.scss');



/*
 * Dispatchers
 * questi sono i dispatcher usati dallo store per aggiornare lo
 * stato dell'applicazione
 */
const _addNewRepo = (name) => {
	store.dispatch({
		type: 'ADD_REPO',
		name: name
	})
}

const _toggleRepo = (id) => {
	store.dispatch({
		type: 'TOGGLE_REPO',
		id: id
	})
}

const _updateToTip = (id) =>
{
	store.dispatch({
		type: 'UPDATE_TO_TIP',
		id: id
	})
}



class MainApp extends React.Component{


	/*
	 * Ci sono aspetti strettamente legati alla UI
	 * che non è necessario passino da Redux, quindi
	 * li gestiamo direttamente nello stato dell'componente
	 * contenitore.
	 */
	constructor(){
		super();

		this.state = {
			currentScreen : {
				type: 'WELCOME',
				data: {}
			}
		}
	}

	selectRow(repo) {
		this.setState({
			currentScreen : {
				type: 'REPOSITORY',
				data: repo
			}
		})
	}


	render(){
		return(
			<div>
				<div className="sidebar">
					<RepoList repos={ store.getState().repositories.list } addRepo={ _addNewRepo } toggleRepo={ _toggleRepo } updateToTip={ _updateToTip } onSelectRow={this.selectRow.bind(this)} />
				</div>
				<MainPanel screen={this.state.currentScreen} />
				<button className="button" type="button" onClick={ function(){ console.log(store.getState())}}>getState</button>
			</div>
		)
	}
}

const renderApp = () => ReactDOM.render(
	<Provider store={store}>
		<MainApp />
	</Provider>
, document.getElementById('app'));

store.subscribe(renderApp);

renderApp();

