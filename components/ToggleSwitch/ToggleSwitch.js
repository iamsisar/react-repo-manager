import React from 'react';

import style from './ToggleSwitch.scss';


class ToggleSwitch extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			checked : this.props.checked
		};

		this._handleChange = this._handleChange.bind(this)
	}

	_handleChange(){
		console.log('change');
		this.setState({
			checked : !this.state.checked
		})
		let t = setTimeout(() => this.props.changeCallback(), 300);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.checked !== this.props.checked){
			this.setState({
				checked : nextProps.checked
			});
		}
	}


	render(){

		let {changeCallback, checked, label, disabled} = this.props;

		return (
			<div className={style.toggleSwitch + ' toggle-switch'} onClick={ (e) => e.stopPropagation() }>
		      <input type="checkbox" checked={this.state.checked} disabled={disabled} onChange={this._handleChange} />
		      <label>{label}</label>
		    </div>
		)
	}
}

export default ToggleSwitch;