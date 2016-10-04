import React from 'react';
import classNames from 'classNames';
import AddRepo from '../AddRepo/AddRepo';

import style from './RepoList.scss';


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


const RepoList = (props) => {

	// props : { repos, addRepo, toggleRepo, updateToTip, onSelectRow }

	const { repos, addRepo, ...others } = props;

	const activeReposCount = repos.filter((repo) => repo.isActive === true ).length;

	const _handleTurnOffAll = () => {

		if ( confirm('This will switch all repositories OFF. Are you sure?') ) props.toggleRepo( repos.map((repo) => repo.id ) , 'off');

	}

	return (
		<div>

			<AddRepo action={ addRepo } />

			<span className={ style.separator } >Manage</span>
			<div className={ style.bulkControls }>
				<span className={ style.label }>Switch all repos off</span>
				<div className={ style.controls }>
					<button className={ style.switch + ' ' + style.bulkSwitch } disabled={activeReposCount === 0} type="button" onClick={ () => _handleTurnOffAll() }>up</button>
				</div>
			</div>

			<span className={ style.separator } >Active ({ activeReposCount })</span>
			<ListItems {...others} items={ repos.filter( repo => repo.isActive ) } />


			<span className={ style.separator } >Inactive ({ repos.length - activeReposCount })</span>
			<ListItems {...others} items={ repos.filter( repo => !repo.isActive ) } />

		</div>
	)
}



export default RepoList;