import React from 'react';

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

	return(
		<div>
		<h1>Repository {data.id}: {data.name}</h1>
		<button type="button" onClick={ () => _toggleRepo(data.id) }>{ data.isActive ? 'off' : 'on' }</button>
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