import React from 'react';
import RepoControlPanel from '../RepoControlPanel/RepoControlPanel';
import AddRepo from '../AddRepo/AddRepo';
import style from './MainPanel.scss';

/*
 * Il componente riceve in props.screen la rappresentazione
 * della schermata da visualizzare.
 *
 * Deve solo renderizzare elementi in base a props, quindi lo
 * trattiamo come stateless functional component
 * (https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components)
 */



const panelOutput = ({type, ...others}) => {

	switch (type){
		case 'SCREEN_WELCOME':
			return <ScreenWelcome />
		break;

		case 'SCREEN_REPOSITORY':
			return <ScreenRepository {...others} />
		break;

		case 'SCREEN_ADD_REPOSITORY':
			return <ScreenAddRepository {...others} />

		default:
			return <span>zzz...</span>
	}
}



const MainPanel = (props) => (

		<div className={style.mainPanel}>
			{ panelOutput(props.screen) }
		</div>
)


const ScreenWelcome = props => {
	return(
		<span>Benvenuto</span>
	)
}

const ScreenRepository = props => {
	return(
		<RepoControlPanel data={props.data} />
	)
}

const ScreenAddRepository = props => {
	return(
		<AddRepo action={ props.actions.createRepo } />
	)
}


export default MainPanel;