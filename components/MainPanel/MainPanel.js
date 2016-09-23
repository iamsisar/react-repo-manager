import React from 'react';
import RepoControlPanel from '../RepoControlPanel/RepoControlPanel';


/*
 * Il componente riceve in props.screen la rappresentazione
 * della schermata da visualizzare.
 *
 * Deve solo renderizzare elementi in base a props, quindi lo
 * trattiamo come stateless functional component
 * (https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components)
 */

const panelOutput = (screen) => {

	switch (screen.type){
		case 'WELCOME':
			return(
				<span>Benvenuto</span>
			)
		break;

		case 'REPOSITORY':
			return <RepoControlPanel data={screen.data} />
		break;

		default:
			return(
				<span>zzz...</span>
			)
	}
}



const MainPanel = (props) => (

		<div>
			{ panelOutput(props.screen) }
		</div>
)


export default MainPanel;