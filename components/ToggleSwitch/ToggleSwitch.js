import React from 'react';

import style from './ToggleSwitch.scss';


const ToggleSwitch = ({changeCallback, checked, label, disabled, }) => {

	const _handleChange = () =>{
		changeCallback();
	}

	return (
		<div className={style.toggleSwitch + ' toggle-switch'} onClick={ (e) => e.stopPropagation() }>
	      <input type="checkbox" defaultChecked={checked} disabled={disabled} onChange={_handleChange} />
	      <label>{label}</label>
	    </div>
	)
}

export default ToggleSwitch;