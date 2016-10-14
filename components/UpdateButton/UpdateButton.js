import React from 'react';

import style from './UpdateButton.scss';


const UpdateButton = ({clickCallback, label}) => {

	return (

		<button className={ style.updateButton + ' update-button' } type="button" onClick={ () => clickCallback() }>
		<span>{label}</span>
		</button>
	)

}


export default UpdateButton;