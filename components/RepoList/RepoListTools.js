import React from "react";
import style from './RepoList.scss';

const propTypes = {
	repos: React.PropTypes.array,
	addRepo: React.PropTypes.func,
	toggleRepo: React.PropTypes.func
}

const RepoListTools = ({repos, addRepo, toggleRepo}) => {


	const countActive = repos.filter((repo) => repo.isActive).length;

	const _handleTurnOffAll = () => {
		if ( confirm('This will switch all repositories OFF. Are you sure?') ) toggleRepo( repos.map((repo) => repo.id ) , 'off');
	}

	return(
		<div className={ style.manageTools }>
			<div className={ style.controls }>
				<div className="row">
					<button className={ style.add } type="button" onClick={ addRepo } >Add New Repo</button>
				</div>
				<div className="row">
					<button className={ style.switch } disabled={countActive === 0} type="button" onClick={ _handleTurnOffAll }>Switch all off</button>
				</div>
			</div>
		</div>
	)
}

RepoListTools.propTypes = propTypes;

export default RepoListTools;

