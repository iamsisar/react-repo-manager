import axios from 'axios';
import { SERVER_URL, REPOS_DOMAIN, ROUTE_GET_REPOS, ROUTE_POST_REPO } from '../config.js';

export const FETCH_REPOS = 'FETCH_REPOS';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';
export const RESET_REPOS = 'RESET_REPOS';

export const CREATE_REPO = 'CREATE_REPO';
export const CREATE_REPO_SUCCESS = 'CREATE_REPO_SUCCESS';
export const CREATE_REPO_FAILURE = 'CREATE_REPO_FAILURE';

export const TOGGLE_REPO = 'TOGGLE_REPO';
export const UPDATE_TO_TIP = 'UPDATE_TO_TIP';


/*
 * In redux conviene usare dei "creators" per incapsulare
 * le actions in modo da poterle richiamare più facilmente
 * nei container che vengono generati tramite connect()
 */
export function fetchRepos() {
	const request = axios({
		method: 'get',
		url: `${SERVER_URL}/${ROUTE_GET_REPOS}`
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


export function createNewRepo(name, url){
	const request = axios({
		method: 'post',
		url: `${SERVER_URL}/${ROUTE_POST_REPO}`,
		data: {
			name: name,
			url: `${url}.${REPOS_DOMAIN}`
		}
	});

	return{
		type: CREATE_REPO,
		payload: request
	}
}


export function createNewRepoSuccess(newRepo) {
	return {
		type: CREATE_REPO_SUCCESS,
		repo: newRepo
	};
}


export function createNewRepoFailure(error) {
  return {
    type: CREATE_REPO_FAILURE,
    payload: error
  };
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
