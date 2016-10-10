import React from 'react';
import {Bar} from 'react-chartjs-2';
import chart from './chartSettings';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import moment from 'moment';

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

	const _toggleRepo = () => {
		store.dispatch({
			type: 'TOGGLE_REPO',
			id: data.id
		})
	}


	return(
		<div>
		<h1>{data.name}<br /><small>{data.url}:{data.port}</small></h1>
		<ToggleSwitch changeCallback={ () => _toggleRepo(data) } checked={data.isActive} />
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