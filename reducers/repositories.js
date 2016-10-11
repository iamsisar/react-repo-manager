import fakeData from '../fakeData';

function getJSON(url, success, error) {
  'use strict';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      } else {
        error(xhr.responseText);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}


function getInitialStateRepos() {
	getJSON('http://localhost:3334/repos', function (repos) {
		console.log(repos);
		return repos;
	});
}

const INTIAL_STATE_REPOS = getInitialStateRepos();


const repositories = ( state = { list:fakeData, loading: false, error:false }, action ) => {
	switch( action.type ){

		case 'CREATE_REPO' :

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

		case 'TOGGLE_REPO' :

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

		case 'UPDATE_TO_TIP' :

				alert('update to tip repo ' + action.id)

			break;

        default:
            return state;
	}
}

export default repositories;