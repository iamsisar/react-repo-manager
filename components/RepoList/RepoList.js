import React from 'react';
import RepoItem from '../RepoItem/RepoItem';



const RepoList = ({ repos, toggleRepo, updateToTip, onSelectRow }) => (
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
		repos.map((repo) => ( <RepoItem repo={repo} toggleRepo={toggleRepo} updateToTip={updateToTip} updateToTip={updateToTip} onClick={onSelectRow.bind(this, repo)} key={repo.id} /> ))
	}
	</tbody>
	</table>
)



export default RepoList;