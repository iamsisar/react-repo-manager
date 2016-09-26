const repositories = ( state = { list:[], loading: false, error:false }, action ) => {
	switch( action.type ){

		case 'ADD_REPO' :

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
					if (repo.id === action.id) {
						repo.isActive = !repo.isActive;
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