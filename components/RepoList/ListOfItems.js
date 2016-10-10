import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classNames';

import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import style from './RepoList.scss';


const transitionName = {
	enter: `${style.animEnter}`,
	leave: `${style.animLeave}`,
	enterActive: `${style.animEnterActive}`,
	leaveActive: `${style.animLeaveActive}`
}

const transitionDuration = 300;

const ListOfItems = ({ items, addRepo, toggleRepo, updateToTip, onSelectItem, selectedItems }) => {

	const _handleToggle = (repo) => {

		let asd = setTimeout(() => toggleRepo(repo.id), transitionDuration/2);
	}

	const _handleUpdateToTip = (e, repo) => {
		e.stopPropagation();
		updateToTip(repo.id);
	}

	const _handleSelectItem = (repo) => {
		onSelectItem(repo);
	}

	return (
		<ul className={style.repoList}>
			<ReactCSSTransitionGroup
				transitionName={transitionName} transitionEnterTimeout={transitionDuration} transitionLeaveTimeout={transitionDuration} >
				{items.map( repo => {

			    const className = classNames({
		    		[ style.repoItem ] 	: true,
					[ style.active ] 	: repo.isActive,
					[ style.inactive ]	: !repo.isActive,
					'selected'			: selectedItems === repo.id,
					'row'				: true
			    });

				return(
						<li className={ className } onClick={ () => _handleSelectItem(repo) } key={repo.id}>
							<span className={ style.label }>{repo.name}</span>
							<div className={ style.controls }>
								<button className={ style.update } type="button" onClick={ (e) => _handleUpdateToTip(e, repo) }>up</button>
								<ToggleSwitch changeCallback={ () => _handleToggle(repo) } checked={repo.isActive} />
							</div>
						</li>
				)})}
			</ReactCSSTransitionGroup>
		</ul>
	)
}

export default ListOfItems;