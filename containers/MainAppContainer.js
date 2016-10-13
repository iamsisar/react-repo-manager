import { connect } from 'react-redux';
import App from '../components/App/App';
import { fetchRepos, fetchReposSuccess, fetchReposFailure } from '../actions/repos';


const mapStateToProps = (state, ownProps) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: () => {
      dispatch(fetchRepos())
      .then((response) => {
            !response.error ? dispatch(fetchReposSuccess(response.payload)) : dispatch(fetchReposFailure(response.payload));
        });
    },
    fetchReposSuccess: (repos) => dispatch(fetchReposSuccess(repos)),
    fetchReposFailure: (error) => dispatch(fetchReposFailure(error)),
  }
}

const MainAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default MainAppContainer;

