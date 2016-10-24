var config;

try{
	config = require('./config.override.js')
}

catch(err) {
	config = {
		serverUrl 		: 'http://localhost:3334',
		reposDomain 	: 'myawesomereposerver.com',
		routeGetRepos 	: 'repos',
		routePostRepo 	: 'repos'
	}
}

console.log(config);

export const SERVER_URL = config.serverUrl;
export const REPOS_DOMAIN = config.reposDomain;
export const ROUTE_GET_REPOS = config.routeGetRepos;
export const ROUTE_POST_REPO = config.routePostRepo;