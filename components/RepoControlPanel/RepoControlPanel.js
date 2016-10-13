import React from 'react';
import {Bar} from 'react-chartjs-2';
import chart from './chartSettings';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import style from './RepoControlPanel.scss';


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
				<button className={ style.update } type="button" onClick={ () => updateToTip(id) }>up</button>
			</div>
	        <Bar data={chart.chartData} options={chart.chartOptions}  width={100} height={30} />
		</div>
	)
}


export default RepoControlPanel