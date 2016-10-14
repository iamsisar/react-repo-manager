import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classNames';

import UpdateButton from '../UpdateButton/UpdateButton';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import style from './RepoList.scss';


const transitionName = {
	enter: `${style.animEnter}`,
	leave: `${style.animLeave}`,
	enterActive: `${style.animEnterActive}`,
	leaveActive: `${style.animLeaveActive}`
}


const propTypes = {
	items: React.PropTypes.array,
	selectedItems: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.bool
	]),
	addRepo: React.PropTypes.func,
	toggleRepo: React.PropTypes.func,
	updateToTip: React.PropTypes.func,
	onSelectItem: React.PropTypes.func
};


const ListOfItems = ({ items, addRepo, toggleRepo, updateToTip, onSelectItem, selectedItems }) => {

	const _handleToggle = (repo) => {
		toggleRepo(repo.id)
	}

	const _handleUpdateToTip = (e, repo) => {
		e.stopPropagation();
		updateToTip(repo.id);
	}

	const _handleSelectItem = (repo) => {
		onSelectItem(repo);
	}

	return (
		<ReactCSSTransitionGroup
			component="ul"
			className={style.repoList}
			transitionName={transitionName}
			transitionEnterTimeout={300}
			transitionLeaveTimeout={300} >
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
							{ (repo.isActive)
								? <UpdateButton clickCallback={ () => updateToTip(id) }  />
								: null
							}
							<ToggleSwitch changeCallback={ () => _handleToggle(repo) } checked={repo.isActive} />
						</div>
					</li>
				)
			})}
		</ReactCSSTransitionGroup>
	)
}

ListOfItems.propTypes = propTypes;

export default ListOfItems;