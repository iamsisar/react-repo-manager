import React from 'react';
import classNames from 'classNames';
import AddRepo from '../AddRepo/AddRepo';

import style from './RepoList.scss';


const RepoList = ({ repos, addRepo, toggleRepo, updateToTip, onSelectRow }) => {


	const _handleToggle = (e, repo) => {
		e.stopPropagation();
		toggleRepo(repo.id);
	}

	const _handleUpdateToTip = (e, repo) => {
		e.stopPropagation();
		updateToTip(repo.id);
	}


	return (
		<div>
			<ul className={style.repoList}>
			{ repos.map( repo => {

			    const className = classNames({
		    		[ style.repoItem ] 	: true,
					[ style.active ] 	: repo.isActive,
					[ style.inactive ]	: !repo.isActive
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

			<AddRepo action={ addRepo } />
		</div>
	)
}



export default RepoList;