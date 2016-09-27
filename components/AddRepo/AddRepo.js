import React from 'react';

import style from './AddRepo.scss';

class AddRepo extends React.Component{


	_handleSubmit(){
		let name = this._name.value;
		this.props.action(name);
		this._name.value = '';
	}

	render(){
		return (
			<div>
				<input type="text" ref={ (input) => this._name = input } />
				<button className={style.button} type="button" onClick={ this._handleSubmit.bind(this) } >Add new repo</button>

			</div>

		)
	}
}

export default AddRepo;