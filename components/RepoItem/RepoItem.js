import React from 'react';


const RepoItem = ({repo, toggleRepo, updateToTip, onClick}) => {

	const _handleToggle = (e) => {
		e.stopPropagation();
		toggleRepo(repo.id);
	}

	const _handleUpdateToTip = (e) => {
		e.stopPropagation();
		updateToTip(repo.id);
	}


	return (
		<tr onClick={onClick}>
			<td>
			{repo.name}
			</td>
			<td>
				<button type="button" onClick={ _handleUpdateToTip }>up</button>
			</td>
			<td>
			{repo.url}
			</td>
			<td>
			{repo.port}
			</td>
			<td>
				<button type="button" onClick={ _handleToggle }>{ repo.isActive ? 'off' : 'on' }</button>
				<input type="checkbox" disabled checked={ repo.isActive ? 'checked' : '' } />
			</td>
		</tr>
	)

}


export default RepoItem;