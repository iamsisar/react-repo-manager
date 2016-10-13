import React from 'react';
import ManageRepo from '../../containers/ManageRepo';
import PanelAddRepo from '../../containers/PanelAddRepo';
import style from './MainPanel.scss';

/*
 * Il componente riceve in props.screen la rappresentazione
 * della schermata da visualizzare.
 *
 * Deve solo renderizzare elementi in base a props, quindi lo
 * trattiamo come stateless functional component
 * (https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components)
 */



const MainPanel = ({type, ...data}) => {

	switch (type){
		case 'SCREEN_WELCOME':
			return(
			<div className={style.mainPanel}>
				<span>Benvenuto</span>
			</div>
			)
		break;

		case 'SCREEN_REPOSITORY':
			return(
			<div className={style.mainPanel}>
				<ManageRepo {...data} />
			</div>
			)
		break;

		case 'SCREEN_ADD_REPOSITORY':
			return(
			<div className={style.mainPanel}>
				<PanelAddRepo {...data} />
			</div>
			)

		default:
			return(
			<div className={style.mainPanel}>
				<span>zzz...</span>
			</div>
			)
	}

}



export default MainPanel;