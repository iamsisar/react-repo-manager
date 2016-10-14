import React from 'react';

import style from './ToggleSwitch.scss';


const propTypes = {
	checked: React.PropTypes.bool,
	changeCallback: React.PropTypes.func,
	label: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.bool
	]),
	disabled: React.PropTypes.bool
};


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

ToggleSwitch.propTypes = propTypes;

export default ToggleSwitch;