import React from 'react';
import classNames from 'classNames';

import style from './RepoList.scss';

class RepoList extends React.Component{

	constructor(){
		super();
		this.state = {
			searchString : ''
		}
	}

	_handleTurnOffAll(){
		const { repos, toggleRepo } = this.props
		if ( confirm('This will switch all repositories OFF. Are you sure?') ) toggleRepo( repos.map((repo) => repo.id ) , 'off');
	}

	_filterLists(repo, condition){
		return this.state.searchString !== ''
			? condition && repo.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1
			: condition;
	}

	render(){

		const { repos, addNewRepo, ...others } = this.props;
		const countActive = repos.filter((repo) => repo.isActive).length;
		const countInactive = repos.filter((repo) => !repo.isActive).length;


		return (

			<div>

				<span className={ style.separator + ' ' + 'separator' } >Manage</span>
				<div className={ style.bulkControls }>
					<div className={ style.controls }>
						<button className={ style.add } type="button" onClick={ addNewRepo } >Add New Repo</button>
						<button className={ style.switch } disabled={countActive === 0} type="button" onClick={ () => this._handleTurnOffAll() }>Switch all off</button>
					</div>
				</div>

				<span className={ style.separator + ' ' + 'separator' } >Search</span>
				<div className={ style.search  + ' ' + 'search' } >
					<input type="text" onChange={ (e) => this.setState({searchString: e.target.value})} />
				</div>

				<span className={ style.separator  + ' ' + 'separator' } >Active ({ countActive })</span>
				<ListItems {...others} items={ repos.filter( repo => this._filterLists(repo, repo.isActive) ) } />


				<span className={ style.separator  + ' ' + 'separator' } >Inactive ({ countInactive })</span>
				<ListItems {...others} items={ repos.filter( repo => this._filterLists(repo, !repo.isActive) ) } />

			</div>
		)
	}
}


const ListItems = ({ items, addRepo, toggleRepo, updateToTip, onSelectRow }) => {

	const _handleToggle = (e, repo) => {
		e.stopPropagation();
		toggleRepo(repo.id);
	}

	const _handleUpdateToTip = (e, repo) => {
		e.stopPropagation();
		updateToTip(repo.id);
	}

	return (
		<ul className={style.repoList}>
		{ items.map( repo => {

		    const className = classNames({
	    		[ style.repoItem ] 	: true,
				[ style.active ] 	: repo.isActive,
				[ style.inactive ]	: !repo.isActive,
				'row'				: true
		    });

			return(
				<li className={ className } onClick={ () => onSelectRow(repo) } key={repo.id}>
					<span className={ style.label }>{repo.name}</span>
					<div className={ style.controls }>
						<button className={ style.update } type="button" onClick={ (e) => _handleUpdateToTip(e, repo) }>up</button>
						<button className={ style.switch } type="button" onClick={ (e) => _handleToggle(e, repo) }>{ repo.isActive ? 'off' : 'on' }</button>
					</div>
				</li>
			)
		})}
		</ul>
	)
}





export default RepoList;