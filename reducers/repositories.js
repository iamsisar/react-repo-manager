import {
	FETCH_REPOS, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE,
	CREATE_REPO, CREATE_REPO_SUCCESS, CREATE_REPO_FAILURE,
	TOGGLE_REPO, UPDATE_TO_TIP, RESET_REPOS
} from '../actions/repos';

/*
 * I reducer ricevono lo stato corrente dell'applicazione
 * e le azioni emesse dalla funzione dispatch(). In base al
 * tipo di azione ritornano un nuovo stato.
 *
 * I reducer sono SEMPRE funzioni pure quindi qualunque manipolazione
 * o richiesta di dati deve avvenire all'interno dell'action.
 *
 */
const repositories = ( state = { list:[], loading: false, error:null }, action ) => {
	switch( action.type ){

		case FETCH_REPOS :

			return {
				...state,
				loading: true
			};


		case FETCH_REPOS_SUCCESS:

			return {
				list: action.payload,
				error:null,
				loading: false
			};


		case FETCH_REPOS_FAILURE:
			return {
				list: [],
				error: action.payload.data,
				loading: false
			}


		case RESET_REPOS:
			return {
				list: [],
				error:null,
				loading: false
			};

		case CREATE_REPO :

			return{
				...state,
				loading:true
			}


		case CREATE_REPO_SUCCESS :

			return {
				...state,
				loading: false,
				error: null,
				list:[...state.list,
					{
						name: action.repo.name,
						id: (state.list.length ? state.list.length : 1),
						url: action.repo.url,
						port: (state.list.length ? state.list[state.list.length - 1].port + 1 : 8000),
						isActive: true,
						idle: false
					}
				]
			};


		case CREATE_REPO_FAILURE :

			return {
				...state,
				loading: false,
				error: action.payload.data
			};


		case TOGGLE_REPO :

			return {
				...state,
				list:state.list.map((repo) => {

					if (Array.isArray(action.id) && action.id.includes(repo.id)) {
						repo.isActive = action.force === 'off' ? false : !repo.isActive;
					}

					if (repo.id === action.id) {
						repo.isActive = action.force === 'off' ? false : !repo.isActive;
					}
					return repo;
				}),
			}


		case UPDATE_TO_TIP :
			alert('update to tip repo ' + action.id);
			return state;

		default:
			return state;

	}
}

export default repositories;