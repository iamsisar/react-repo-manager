import { connect } from 'react-redux'
import { Provider } from 'react-redux'


import React from 'react';
import ReactDOM from 'react-dom';
import MainPanel from './components/MainPanel/MainPanel';
import RepoList from './components/RepoList/RepoList';
import store from './reducers';
import style from './App.scss';


require('normalize.css');
require('./styles/themes/default/theme-default.scss');



/*
 * Dispatchers
 * questi sono i dispatcher usati dallo store per aggiornare lo
 * stato dell'applicazione
 */
const _createNewRepo = (name) => {
	store.dispatch({
		type: 'CREATE_REPO',
		name: name
	})
}

const _toggleRepo = (id, force = null) => {
	store.dispatch({
		type: 'TOGGLE_REPO',
		id: id,
		force: force
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
				type: 'SCREEN_WELCOME',
				data: {}
			}
		}
	}

	_selectRow(repo) {
		this.setState({
			currentScreen : {
				type: 'SCREEN_REPOSITORY',
				data: repo
			}
		})
	}

	_handleAddRepo(){
		this.setState({
			currentScreen: {
				type: 'SCREEN_ADD_REPOSITORY',
				data: {},
				actions: {
					createRepo: _createNewRepo
				}
			}
		})
	}


	render(){
		return(
			<div>
				<div className="sidebar">
					<RepoList
						repos={ store.getState().repositories.list }
						addNewRepo={ this._handleAddRepo.bind(this) }
						toggleRepo={ _toggleRepo }
						updateToTip={ _updateToTip }
						onSelectRow={this._selectRow.bind(this)}
					/>
				</div>
				<MainPanel screen={this.state.currentScreen} />
				<button className="button" type="button" onClick={ () => console.log(store.getState()) }>getState</button>
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

