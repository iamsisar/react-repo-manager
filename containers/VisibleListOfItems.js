import { connect } from 'react-redux';
import ListOfItems from '../components/RepoList/ListOfItems';
import { toggleRepo, updateToTip } from '../actions/repos';


const filterLists = (repos, condition) => {
	return repos.filter( repo => condition(repo))
}

const mapStateToProps = (state, ownProps) => {

	let { filter } = ownProps;

	return {
		items: filterLists(state.repositories.list, filter),
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRepo: (id) => dispatch(toggleRepo(id)),
    updateToTip: (id) => dispatch(updateToTip(id))
  }
}

const VisibleListOfItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfItems);

export default VisibleListOfItems;

