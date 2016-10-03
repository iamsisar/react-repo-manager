const fake = [
  {
    "id": 0,
    "name": "Buzzness",
    "isActive": true,
    "port": 8007,
    "idle": false
  },
  {
    "id": 1,
    "name": "Retrack",
    "isActive": false,
    "port": 8004,
    "idle": false
  },
  {
    "id": 2,
    "name": "Ersum",
    "isActive": true,
    "port": 8008,
    "idle": false
  },
  {
    "id": 3,
    "name": "Venoflex",
    "isActive": false,
    "port": 8046,
    "idle": false
  },
  {
    "id": 4,
    "name": "Centuria",
    "isActive": true,
    "port": 8061,
    "idle": false
  },
  {
    "id": 5,
    "name": "Oceanica",
    "isActive": true,
    "port": 8099,
    "idle": false
  },
  {
    "id": 6,
    "name": "Isis",
    "isActive": false,
    "port": 8049,
    "idle": false
  },
  {
    "id": 7,
    "name": "Vitricomp",
    "isActive": false,
    "port": 8082,
    "idle": false
  },
  {
    "id": 8,
    "name": "Dragbot",
    "isActive": false,
    "port": 8057,
    "idle": false
  },
  {
    "id": 9,
    "name": "Bedlam",
    "isActive": true,
    "port": 8031,
    "idle": false
  }
]


const repositories = ( state = { list:fake, loading: false, error:false }, action ) => {
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