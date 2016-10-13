import { connect } from 'react-redux';
import RepoListTools from '../components/RepoList/RepoListTools';
import { toggleRepo, updateToTip } from '../actions/repos';

const mapStateToProps = (state, ownProps) => {
	return {
		repos: state.repositories.list
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRepo: (id, force) => dispatch(toggleRepo(id, force)),
    updateToTip: (id) => dispatch(updateToTip(id))
  }
}

const ManageRepos = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoListTools);

export default ManageRepos;

