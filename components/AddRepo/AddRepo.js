import React from 'react';


import style from './AddRepo.scss';


const propTypes = {
	createNewRepo: React.PropTypes.func
}

class AddRepo extends React.Component{

	constructor(){
		super();
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleSubmit(e){
		e.preventDefault();
		let name = this._nameField.value;
		this.props.createNewRepo(name);
		this._nameField.value = '';
	}

	render(){

		return (
			<form onSubmit={ this._handleSubmit }>
				<input type="text" ref={ (input) => this._nameField = input } />
				<button className={style.button} type="submit" >Add new repo</button>
			</form>

		)
	}
}

AddRepo.propTypes = propTypes;

export default AddRepo;