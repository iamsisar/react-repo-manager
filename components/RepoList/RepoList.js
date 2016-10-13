import React from 'react';
import ListOfItems from './ListOfItems';
import ManageRepos from '../../containers/ManageRepos';
import VisibleListOfItems from '../../containers/VisibleListOfItems';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import style from './RepoList.scss';

const propTypes = {
	repos: React.PropTypes.array,
	addRepo: React.PropTypes.func,
	toggleRepo: React.PropTypes.func,
	updateToTip: React.PropTypes.func,
	onSelectRow: React.PropTypes.func,
};

class RepoList extends React.Component{

	constructor(){
		super();
		this.state = {
			searchString : '',
			selectedItems : false
		}

		this._selectItem = this._selectItem.bind(this);
		this._updateOnSearch = this._updateOnSearch.bind(this)
	}


	_selectItem(repo){
		this.props.onSelectRow(repo);
		this.setState({
			selectedItems: repo.id
		})
	}


	_updateOnSearch(e){
		this.setState({searchString: e.target.value})
	}

	_getNameFilter(repo, condition){
		return this.state.searchString !== ''
			? condition && repo.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1
			: condition;
	}

	render(){

		const { repos, addRepo, onSelectRow, ...others } = this.props;
		const countActive = repos.filter((repo) => repo.isActive).length;
		const countInactive = repos.filter((repo) => !repo.isActive).length;

		return (

			<div>
				<span className={ style.separator + ' ' + 'separator' } >Manage</span>
				<ManageRepos addRepo={addRepo} />

				<span className={ style.separator + ' ' + 'separator' } >Search</span>
				<div className={ style.search  + ' ' + 'search' } >
					<input type="text" onChange={ this._updateOnSearch } />
				</div>

				<span className={ style.separator  + ' ' + 'separator' } >Active ({ countActive })</span>
				<VisibleListOfItems
					filter={ (repo) => this._getNameFilter(repo, repo.isActive) }
					onSelectItem={this._selectItem}
					selectedItems={this.state.selectedItems}
				/>

				<span className={ style.separator  + ' ' + 'separator' } >Inactive ({ countInactive })</span>
				<VisibleListOfItems
					filter={ (repo) => this._getNameFilter(repo, !repo.isActive) }
					onSelectItem={this._selectItem}
					selectedItems={this.state.selectedItems}
				/>

			</div>
		)
	}
}

RepoList.propTypes = propTypes;


export default RepoList;