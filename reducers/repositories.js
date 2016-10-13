
import { FETCH_REPOS, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE,
	CREATE_REPO, TOGGLE_REPO, UPDATE_TO_TIP, RESET_REPOS } from '../actions/repos';


const repositories = ( state = { list:[], loading: false, error:null }, action ) => {
	switch( action.type ){


		case FETCH_REPOS :

			return {
				list:[],
				loading: true,
				error: null }
			break;


		case FETCH_REPOS_SUCCESS:

			return {
				list: action.payload,
				error:null,
				loading: false
			};
			break;


		case FETCH_REPOS_FAILURE:
			error = action.payload.data;
			return {
				list: [],
				error: error,
				loading: false
			}
			break;


		case RESET_REPOS:
			return {
				list: [],
				error:null,
				loading: false
			};
			break;

		case CREATE_REPO :

			return Object.assign({}, state, {
				list:[...state.list,
					{
						name: action.name,
						id: (state.list.length ? state.list.length + 1 : 1),
						url: 'url.url.irl',
						port: (state.list.length ? state.list[state.list.length - 1].port + 1 : 8000),
						isActive: true,
						idle: false
					}
				]
			});

			break;

		case TOGGLE_REPO :

			return Object.assign({}, state, {
				list:state.list.map((repo) => {

					if (Array.isArray(action.id) && action.id.includes(repo.id)) {
						repo.isActive = action.force === 'off' ? false : !repo.isActive;
					}

					if (repo.id === action.id) {
						repo.isActive = action.force === 'off' ? false : !repo.isActive;
					}
					return repo;
				}),
			});

			break;

		case UPDATE_TO_TIP :

				alert('update to tip repo ' + action.id)

			break;

		default:
			return state;
	}
}

export default repositories;