import React from 'react';
import {Bar} from 'react-chartjs-2';
import chart from './chartSettings';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import UpdateButton from '../UpdateButton/UpdateButton';

import style from './RepoControlPanel.scss';

const propTypes = {
	data: React.PropTypes.object,
	toggleRepo: React.PropTypes.func
};

const RepoControlPanel = ({ data, toggleRepo, updateToTip }) => {

	const {name, url, port, id, isActive} = data;

	return(
		<div className={style.repoControlPanel}>
			<h1>
				<strong>{name}</strong>
				<small>{url}:{port}</small>
			</h1>
			<div className={style.controls} >
				<ToggleSwitch changeCallback={ () => toggleRepo(id) } checked={isActive} />
				<UpdateButton clickCallback={ () => updateToTip(id) } />
			</div>
	        <Bar data={chart.chartData} options={chart.chartOptions}  width={100} height={30} />
		</div>
	)
}

RepoControlPanel.propTypes = propTypes;

export default RepoControlPanel