import React from 'react';
import MainPanel from '../MainPanel/MainPanel';
import RepoList from '../RepoList/RepoList';
import style from './App.scss';


const App = (props) => {
	return(
		<div>
			Heòòp
		</div>
	)
}

// class App extends React.Component{


// 	/*
// 	 * Ci sono aspetti strettamente legati alla UI
// 	 * che non è necessario passino da Redux, quindi
// 	 * li gestiamo direttamente nello stato dell'componente
// 	 * contenitore.
// 	 */
// 	constructor(){
// 		super();
// 		this.state = {
// 			currentScreen : {
// 				type: 'SCREEN_WELCOME',
// 				data: {}
// 			}
// 		}
// 	}

// 	componentWillMount(){
// 		this.store
// 			.dispatch(this.props.fetchRepos()).payload
// 			.then((response) => {
// 				console.log(response);
// 	            !response.error
// 	            ? this.store.dispatch(this.props.fetchReposSuccess(response.data))
// 	            : this.store.dispatch(this.props.fetchReposFailure(response.data));
//         	});
// 	}

// 	_selectRow(repo) {
// 		this.setState({
// 			currentScreen : {
// 				type: 'SCREEN_REPOSITORY',
// 				data: repo
// 			}
// 		})
// 	}

// 	_handleAddRepo(){
// 		this.setState({
// 			currentScreen: {
// 				type: 'SCREEN_ADD_REPOSITORY',
// 				data: {}
// 			}
// 		})
// 	}


// 	render(){
// 		return(
// 			<div>
// 				<div className="sidebar">
// 					<RepoList
// 						repos={ store.getState().repositories.list }
// 						addRepo={ this._handleAddRepo.bind(this) }
// 						onSelectRow={this._selectRow.bind(this)}
// 					/>
// 				</div>
// 				<MainPanel {...this.state.currentScreen} />
// 				<button className="button" type="button" onClick={ () => console.log(store.getState()) }>getState</button>
// 			</div>
// 		)
// 	}
// }

export default 'App';