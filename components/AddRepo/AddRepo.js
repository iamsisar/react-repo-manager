import React from 'react';

import style from './AddRepo.scss';

class AddRepo extends React.Component{


	_handleSubmit(e){
		e.preventDefault();
		let name = this._nameField.value;
		this.props.action(name);
		this._nameField.value = '';
	}

	render(){
		return (
			<form onSubmit={ (e) => this._handleSubmit(e) }>
				<input type="text" ref={ (input) => this._nameField = input } />
				<button className={style.button} type="submit" >Add new repo</button>
			</form>

		)
	}
}

export default AddRepo;