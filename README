# react-repo-manager

rrm is an opinionated versioning server management UI built in React to satisfy the following simple needs:

- control over the status of repositories (switch on / off)
- update server working copies to last pushed
commit
- initialize new repos to be cloned
- represent users latest commits in a graph

## Scenario

**rrm is a study project based on an actual need of the agency I used to work for**

The workflow relies on a server which acts as remote repository hub and as preview web server as well. When a new feature is released, the remote repository is updated to last commit, ready to be reviewed by project managers, creative directors or whoever else.

## Opinionated Api

As it comes, rrm needs an opninionated REST api which provides following structure

### Endpoints

#### /repos/

method : `GET`

Retrieves the the repositories list as an array of objects. Each Object is structured as follows:

- `id` (int) : an unique identifier of the repo
- `name` (str) : the human friendly name of the repo (may contain spaces and uppercase chars)
- `isActive` (bool) : whether or not the repository is active (server is listening on the port)
- `port` (int) : the port number which the repository is served through
- `idle` (bool) : wether or not the server is running a command on the repository
- `url` (str) : the http address of the repo
- `stats` (object) : the dataset used to generate the activity graph, contains:
	- `months` (array) : labels of the intervals which the dataset is splitted into (could be months, week, interval of days, or whatever)
	- `users` (array) : array of object rapresenting the commit history splat by user
		- `name` (string) : the user name
		- `commits` (array) : number of commits for each interval present in `months` (must have the same size across users)

**Expample:**

```json
[
    {
      "id": 0,
      "name": "Zepitope",
      "isActive": false,
      "port": 8099,
      "idle": false,
      "url": "zepitope.myawesomereposerver.com",
      "stats": {
        "months": [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        "users": [
          {
            "name": "Mary",
            "commits": [1,0,0,3,0,5,1,0,1,0,1,11]
          },
          {
            "name": "Jack",
            "commits": [1,1,1,0,0,5,1,7,1,9,0,0]
          }
        ]
      }
    },
    ...
]
```
to be finished

