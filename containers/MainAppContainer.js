import { connect } from 'react-redux';
import App from '../components/App/App';
import { fetchRepos, fetchReposSuccess, fetchReposFailure } from '../actions/repos';



const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: () => dispatch(fetchRepos()),
    fetchReposSuccess: (repos) => dispatch(fetchReposSuccess(repos)),
    fetchReposFailure: (error) => dispatch(fetchReposFailure(error)),
  }
}

const MainAppContainer = connect(
  null,
  mapDispatchToProps
)(App);

export default MainAppContainer;

