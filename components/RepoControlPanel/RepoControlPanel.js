import React from 'react';
import {Bar} from 'react-chartjs-2';
import chart from './chartSettings';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import style from './RepoControlPanel.scss';

/*
 * Il componente riceve come secondo parametro il context
 * dal Provider, già destrutturato per accedere direttamente
 * a store
 * 	context = {
 *  	store: {...}
 * 	}
 */

/*
 * Anche il parametro props è destrutturato in { data }
 */

const RepoControlPanel = ({ data }, { store }) => {

	const _toggleRepo = (id) => {
		store.dispatch({
			type: 'TOGGLE_REPO',
			id: id
		})
	}

	const {name, url, port, id, isActive} = data;

	return(
		<div className={style.repoControlPanel}>
		<h1>{name}<br /><small>{url}:{port}</small></h1>
		<ToggleSwitch changeCallback={ () => _toggleRepo(id) } checked={isActive} />
        <Bar data={chart.chartData} options={chart.chartOptions}  width={100} height={30} />
		</div>
	)
}


/*
 * Questo è il decorator necessario a ricevere il context
 * dal Provider
 */
RepoControlPanel.contextTypes = {
	store: React.PropTypes.object
}

export default RepoControlPanel