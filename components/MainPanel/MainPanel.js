import React from 'react';


class MainPanel extends React.Component{

	/*
	 * Il componente riceve in this.props.output la rappresentazione
	 * della schermata da visualizzare
	 */


	render(){

		const output = () => {

			const currentScreen = this.props.screen;

			switch (currentScreen.type){
				case 'WELCOME':
					return(
						<span>Benvenuto</span>
					)
				break;

				case 'REPOSITORY':
					return(
						<span>Repository <strong>{currentScreen.data.id}</strong> selezionata</span>
					)
				break;

				default:
					return(
						<span>zzz...</span>
					)
			}
		}



		return (
			<div>
				{output()}
			</div>
		)
	}
}

export default MainPanel;