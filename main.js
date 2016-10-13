import { connect } from 'react-redux'
import { Provider } from 'react-redux'


import React from 'react';
import ReactDOM from 'react-dom';
import MainPanel from './components/MainPanel/MainPanel';
import RepoList from './components/RepoList/RepoList';
import store from './reducers';
import {fetchRepos, fetchReposSuccess, fetchReposFailure} from './actions/repos';
import style from './components/App/App.scss';


require('normalize.css');
require('./styles/themes/default/theme-default.scss');


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

	componentWillMount(){

		store
			.dispatch(fetchRepos()).payload
			.then((response) => {
				console.log(response);
	            !response.error
	            ? store.dispatch(fetchReposSuccess(response.data))
	            : store.dispatch(fetchReposFailure(response.data));
        	});
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
				data: {}
			}
		})
	}


	render(){
		return(
			<div>
				<div className="sidebar">
					<RepoList
						repos={ store.getState().repositories.list }
						addRepo={ this._handleAddRepo.bind(this) }
						onSelectRow={this._selectRow.bind(this)}
					/>
				</div>
				<MainPanel {...this.state.currentScreen} />
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

