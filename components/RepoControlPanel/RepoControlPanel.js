import React from 'react';
import Chart from 'chart.js'


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

	// let ctx;

// 	var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
		// console.log(ctx)


	return(
		<div>
		<h1>Repository {data.id}: {data.name}</h1>
		<button type="button" onClick={ () => _toggleRepo(data.id) }>{ data.isActive ? 'off' : 'on' }</button>

		{ /*<canvas ref={ c => ctx = c } width="400" height="400"></canvas> */ }
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