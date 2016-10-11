import React from 'react';

import style from './AddRepo.scss';

class AddRepo extends React.Component{

	constructor(){
		super();
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleSubmit(e){
		e.preventDefault();
		let name = this._nameField.value;
		this.props.actions.createRepo(name);
		this._nameField.value = '';
	}

	render(){

		console.log(this.props);

		return (
			<form onSubmit={ this._handleSubmit }>
				<input type="text" ref={ (input) => this._nameField = input } />
				<button className={style.button} type="submit" >Add new repo</button>
			</form>

		)
	}
}

export default AddRepo;