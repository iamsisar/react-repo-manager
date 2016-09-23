import React from 'react';


const RepoItem = ({repo, toggleRepo, update, onClick}) => {

	const _handleToggle = (e) => {
		e.stopPropagation();
		let id = repo.id;
		toggleRepo(id);
	}

	const _handleUpdateToTip = (e) => {
		e.stopPropagation();
		let id = repo.id;
		updateToTip(id);
	}


	return (
		<tr onClick={onClick}>
			<td>
			{repo.name}
			</td>
			<td>
				<button type="button" onClick={_handleUpdateToTip }>up</button>
			</td>
			<td>
			{repo.url}
			</td>
			<td>
			{repo.port}
			</td>
			<td>
				<button type="button" onClick={_handleToggle }>{ repo.isActive ? 'off' : 'on' }</button>
				<input type="checkbox" disabled checked={ repo.isActive ? 'checked' : '' } />
			</td>
		</tr>
	)

}


// class RepoItem extends React.Component{




// 	render(){
// 		return (
// 			<tr onClick={this.props.onClick}>
// 				<td>
// 				{this.props.repo.name}
// 				</td>
// 				<td>
// 					<button type="button" onClick={this._handleUpdateToTip.bind(this)}>up</button>
// 				</td>
// 				<td>
// 				{this.props.repo.url}
// 				</td>
// 				<td>
// 				{this.props.repo.port}
// 				</td>
// 				<td>
// 					<button type="button" onClick={this._handleToggle.bind(this)}>{ this.props.repo.isActive ? 'off' : 'on' }</button>
// 					<input type="checkbox" disabled checked={ this.props.repo.isActive ? 'checked' : '' } />
// 				</td>
// 			</tr>
// 		)
// 	}
// }

export default RepoItem;