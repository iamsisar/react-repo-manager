import store from ".";
import expect from "expect";

describe("Store", () => {
  it("should create repos", () => {

    const actions = [{
      type: 'CREATE_REPO_SUCCESS',
      repo: {
        "name": "Lorem",
        "url": "lorem.myawesomereposerver.com",
      }
    },{
      type: 'CREATE_REPO_SUCCESS',
      repo: {
        "name": "Ipsum",
        "url": "ipsum.myawesomereposerver.com",
      }
    },{
      type: 'CREATE_REPO_SUCCESS',
      repo: {
        "name": "Dolor",
        "url": "dolor.myawesomereposerver.com",
      }
    }];

    actions.forEach(action => store.dispatch(action));

    expect(store.getState()).toEqual({
      repositories: {
        error: null,
        loading:false,
        list: [
          {
            "id": 1,
            "name": "Lorem",
            "isActive": true,
            "port": 8000,
            "idle": false,
            "url": "lorem.myawesomereposerver.com",
          },
          {
            "id": 2,
            "name": "Ipsum",
            "isActive": true,
            "port": 8001,
            "idle": false,
            "url": "ipsum.myawesomereposerver.com",
          },
          {
            "id": 3,
            "name": "Dolor",
            "isActive": true,
            "port": 8002,
            "idle": false,
            "url": "dolor.myawesomereposerver.com",
          }
        ],
      }
    });
  });


  it("should toggle an array of repos", () => {
    store.dispatch({
      type: 'TOGGLE_REPO',
      id: [1,3]
    });

    const expected = store.getState().repositories.list.map(c => {
      return {
        "id": c.id,
        "isActive": c.isActive
      }
    });

    expect(expected).toEqual([
      {
        "id": 1,
        "isActive": false,
      },
      {
        "id": 2,
        "isActive": true,
      },
      {
        "id": 3,
        "isActive": false,
      }
    ]);
  });

  it("should toggle an unique repo", () => {
    store.dispatch({
      type: 'TOGGLE_REPO',
      id: 2
    });

    const expected = store.getState().repositories.list.map(c => {
      return {
        "id": c.id,
        "isActive": c.isActive
      }
    });

    expect(expected).toEqual([
      {
        "id": 1,
        "isActive": false,
      },
      {
        "id": 2,
        "isActive": false,
      },
      {
        "id": 3,
        "isActive": false,
      }
    ]);
  });

  it("should flush repos list", () => {
    store.dispatch({
      type: 'RESET_REPOS'
    });

    expect(store.getState().repositories.list.length).toEqual(0);
  });

});