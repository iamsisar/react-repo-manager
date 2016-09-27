import React from 'react';
import RepoItem from '../RepoItem/RepoItem';
import AddRepo from '../AddRepo/AddRepo';

import style from './RepoList.scss';


const RepoList = ({ repos, addRepo, toggleRepo, updateToTip, onSelectRow }) => (
	<div className={style.repoList}>

		<AddRepo action={ addRepo } />

		<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Update</th>
				<th>Url</th>
				<th>Port</th>
				<th>Active</th>
			</tr>
		</thead>
		<tbody>
		{
			repos.map( repo => <RepoItem repo={repo} toggleRepo={toggleRepo} updateToTip={updateToTip} updateToTip={updateToTip} onClick={ () => onSelectRow(repo) } key={repo.id} /> )
		}
		</tbody>
		</table>
	</div>
)



export default RepoList;