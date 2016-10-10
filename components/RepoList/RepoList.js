import React from 'react';
import ListOfItems from './ListOfItems';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import style from './RepoList.scss';

const propTypes = {
	repos: React.PropTypes.array,
	addNewRepo: React.PropTypes.func,
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
		this._handleTurnOffAll = this._handleTurnOffAll.bind(this)
	}


	_handleTurnOffAll(){
		const { repos, toggleRepo } = this.props;
		if ( confirm('This will switch all repositories OFF. Are you sure?') ) toggleRepo( repos.map((repo) => repo.id ) , 'off');
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

	_filterLists(repo, condition){
		return this.state.searchString !== ''
			? condition && repo.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1
			: condition;
	}

	render(){

		const { repos, addNewRepo, onSelectRow, ...others } = this.props;
		const countActive = repos.filter((repo) => repo.isActive).length;
		const countInactive = repos.filter((repo) => !repo.isActive).length;

		return (

			<div>
				<span className={ style.separator + ' ' + 'separator' } >Manage</span>
				<div className={ style.bulkControls }>
					<div className={ style.controls }>
						<div className="row">
							<button className={ style.add } type="button" onClick={ addNewRepo } >Add New Repo</button>
						</div>
						<div className="row">
							<button className={ style.switch } disabled={countActive === 0} type="button" onClick={ this._handleTurnOffAll }>Switch all off</button>
						</div>
					</div>
				</div>

				<span className={ style.separator + ' ' + 'separator' } >Search</span>
				<div className={ style.search  + ' ' + 'search' } >
					<input type="text" onChange={ this._updateOnSearch } />
				</div>

				<span className={ style.separator  + ' ' + 'separator' } >Active ({ countActive })</span>
					<ListOfItems
						onSelectItem={ this._selectItem }
						selectedItems={this.state.selectedItems}
						items={ repos.filter( repo => this._filterLists(repo, repo.isActive) ) }
						{...others}
					/>

				<span className={ style.separator  + ' ' + 'separator' } >Inactive ({ countInactive })</span>

					<ListOfItems
						onSelectItem={this._selectItem}
						selectedItems={this.state.selectedItems}
						items={ repos.filter( repo => this._filterLists(repo, !repo.isActive) ) }
						{...others}
					/>

			</div>
		)
	}
}

RepoList.propTypes = propTypes;


export default RepoList;