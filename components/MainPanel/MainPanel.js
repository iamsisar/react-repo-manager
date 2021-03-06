import React from 'react';
import ManageRepo from '../../containers/ManageRepo';
import PanelAddRepo from '../../containers/PanelAddRepo';
import style from './MainPanel.scss';

/*
 * Il componente riceve la rappresentazione
 * della schermata da visualizzare. In base
 * al valore di props.type renderizza il
 * componente opportuno a cui vengono passate
 * props.data
 */

const propTypes = {
	type: React.PropTypes.string,
	data: React.PropTypes.object
};


const MainPanel = ({type, ...data}) => {

	switch (type){
		case 'SCREEN_WELCOME':
			return(
			<div className={style.mainPanel + ' main-panel'}>
				<div className={style.wrapper + ' main-panel-wrapper'}>
					<h1>Benvenuto</h1>
				</div>
			</div>
			)

		case 'SCREEN_REPOSITORY':
			return(
			<div className={style.mainPanel + ' main-panel'}>
				<div className={style.wrapper + ' main-panel-wrapper'}>
					<ManageRepo {...data} />
				</div>
			</div>
			)

		case 'SCREEN_ADD_REPOSITORY':
			return(
			<div className={style.mainPanel + ' main-panel'}>
				<div className={style.wrapper + ' main-panel-wrapper'}>
					<PanelAddRepo {...data} />
				</div>
			</div>
			)

		default:
			return(
			<div className={style.mainPanel + ' main-panel'}>
				<div className={style.wrapper + ' main-panel-wrapper'}>
					<span>zzz...</span>
				</div>
			</div>
			)
	}

}

MainPanel.propTypes = propTypes;

export default MainPanel;