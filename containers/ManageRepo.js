import { connect } from 'react-redux';
import RepoControlPanel from '../components/RepoControlPanel/RepoControlPanel';
import { toggleRepo, updateToTip } from '../actions/repos';

const mapStateToProps = (state, ownProps) => {
	return {
		repo: state.repositories.list
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRepo: (id, force) => dispatch(toggleRepo(id, force)),
    updateToTip: (id) => dispatch(updateToTip(id))
  }
}

const ManageRepo = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoControlPanel);

export default ManageRepo;


