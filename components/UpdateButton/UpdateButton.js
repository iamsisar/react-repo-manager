import React from 'react';

import style from './UpdateButton.scss';

const propTypes = {
	clickCallback : React.PropTypes.func,
	label : React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.bool
	])
}

const UpdateButton = ({clickCallback, label}) => {

	const _handleClick = (e) => {
		e.stopPropagation();
		clickCallback();
	}

	return (

		<button className={ style.updateButton + ' update-button' } type="button" onClick={ (e) => _handleClick(e) }>
		<span>{label}</span>
		</button>
	)

}

UpdateButton.propTypes = propTypes;


export default UpdateButton;