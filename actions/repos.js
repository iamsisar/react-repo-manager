import axios from 'axios';

export const FETCH_REPOS = 'FETCH_REPOS';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';
export const RESET_REPOS = 'RESET_REPOS';


export const CREATE_REPO = 'CREATE_REPO';
export const TOGGLE_REPO = 'TOGGLE_REPO';
export const UPDATE_TO_TIP = 'UPDATE_TO_TIP';



export function fetchRepos() {
	  const request = axios({
	    method: 'get',
	    url: 'http://localhost:3334/repos',
	    headers: []
	  });

	return {
		type: FETCH_REPOS,
		payload: request
	};
}

export function fetchReposSuccess(repos) {
	return {
		type: FETCH_REPOS_SUCCESS,
		payload: repos
	};
}

export function fetchReposFailure(error) {
	return {
		type: FETCH_REPOS_FAILURE,
		payload: error
	};
}


export function createNewRepo(name){
	return{
		type: CREATE_REPO,
		name: name
	}
}

export function toggleRepo(id, force = null){
	return{
		type: TOGGLE_REPO,
		id: id,
		force: force
	}
}

export function updateToTip(id){
	return{
		type: UPDATE_TO_TIP,
		id: id
	}
}
