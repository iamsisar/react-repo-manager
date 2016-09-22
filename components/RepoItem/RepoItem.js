import React from 'react';

class RepoItem extends React.Component{


	_handleToggle(e){
		e.stopPropagation();
		let id = this.props.repo.id;
		this.props.toggleRepo(id);
	}

	_handleUpdateToTip(e){
		e.stopPropagation();
		let id = this.props.repo.id;
		this.props.updateToTip(id);
	}


	render(){
		return (
			<tr onClick={this.props.onClick}>
				<td>
				{this.props.repo.name}
				</td>
				<td>
					<button type="button" onClick={this._handleUpdateToTip.bind(this)}>up</button>
				</td>
				<td>
				{this.props.repo.url}
				</td>
				<td>
				{this.props.repo.port}
				</td>
				<td>
					<button type="button" onClick={this._handleToggle.bind(this)}>{ this.props.repo.isActive ? 'off' : 'on' }</button>
					<input type="checkbox" disabled checked={ this.props.repo.isActive ? 'checked' : '' } />
				</td>
			</tr>
		)
	}
}

export default RepoItem;