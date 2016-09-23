import React from 'react';
import RepoItem from '../RepoItem/RepoItem';



class RepoList extends React.Component{

	_handleSelect(id){
		this.props.onSelectRow(id);
	}



	_printRepos(){

			return this.props.repos.map((repo) => {
				return <RepoItem
							repo={repo}
							toggleRepo={this.props.toggleRepo}
							update={this.props.updateToTip}
							onClick={this._handleSelect.bind(this, repo)}
							key={repo.id}
							/>
			})
	}


	render(){
		return (
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
			{this._printRepos()}
			</tbody>
			</table>
		)
	}
}

export default RepoList;