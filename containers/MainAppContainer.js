import { connect } from 'react-redux';
import App from '../components/App/App';
import { fetchRepos, fetchReposSuccess, fetchReposFailure } from '../actions/repos';


const mapStateToProps = (state) => {
  return{
    repos: state.repositories.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requireRepos: () => dispatch(fetchRepos()).payload
      .then((response) => {
              !response.error
              ? dispatch(fetchReposSuccess(response.data))
              : dispatch(fetchReposFailure(response.data));
    })
  }
}

const MainAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default MainAppContainer;

