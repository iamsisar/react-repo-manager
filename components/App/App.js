import React from 'react';
import MainPanel from '../MainPanel/MainPanel';
import RepoList from '../RepoList/RepoList';
import './App.scss';

const propTypes = {
	repos: React.PropTypes.array,
	requireRepos: React.PropTypes.func
};

class App extends React.Component{

	/*
	 * Ci sono aspetti strettamente legati alla UI
	 * che non è necessario passino da Redux, quindi
	 * li gestiamo direttamente nello stato dell'componente.
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

	componentDidMount(){
		this.props.requireRepos();
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
						repos={ this.props.repos }
						addRepo={ this._handleAddRepo.bind(this) }
						onSelectRow={this._selectRow.bind(this)}
					/>
				</div>
				<MainPanel {...this.state.currentScreen} />
			</div>
		)
	}
}


App.propTypes = propTypes;

export default App;