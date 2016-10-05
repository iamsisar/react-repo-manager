import React from 'react';
import {Bar} from 'react-chartjs-2';

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

	const _toggleRepo = (id) => {
		store.dispatch({
			type: 'TOGGLE_REPO',
			id: id
		})
	}


    var randomScalingFactor = function() {
        return (Math.random() > 0.5 ? 1.0 : 0) * Math.round(Math.random() * 10);
    };

    let dataUser1 = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()];
    let dataUser2 = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()];

    let dataTotal = dataUser1.map((c,i) => dataUser1[i] + dataUser2[i] )

	var chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
            datasets: [{
                type: 'bar',
                label: 'Commits by User1',
                backgroundColor: "rgba(101,137,155,0.5)",
                data: dataUser1
            }, {
                type: 'bar',
                label: 'Commits by User2',
                backgroundColor: "rgba(151,187,205,0.5)",
                data: dataUser2
            }, {
                type: 'line',
                label: 'Commits per day',
                data: dataTotal,
                borderColor: 'rgba(151,187,205,0.5)',
                backgroundColor: "transparent",
                borderWidth: 2
            }]
    };

    var charOptions = {
            scales: {
                yAxes: [{
                    stacked: true,

                }],
                xAxes: [{
                    stacked: true
                }]
            }
        };

	return(
		<div>
		<h1>{data.name}<br /><small>{data.url}:{data.port}</small></h1>
		<button type="button" onClick={ () => _toggleRepo(data.id) }>{ data.isActive ? 'off' : 'on' }</button>

        <Bar data={chartData} options={charOptions}  width={100} height={30} />
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