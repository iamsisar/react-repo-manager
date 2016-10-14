import { connect } from 'react-redux';
import AddRepo from '../components/AddRepo/AddRepo';
import { createNewRepo, createNewRepoSuccess, createNewRepoFailure } from '../actions/repos';

const mapDispatchToProps = (dispatch) => {
	return {
		createNewRepo: (name) => dispatch(createNewRepo(name)).payload
			.then((response) => {
				console.log(response);
				!response.error
				? dispatch(createNewRepoSuccess(response.data))
				: dispatch(createNewRepoFailure(response.data))
			})
	}
}

const PanelAddRepo = connect(
	null,
	mapDispatchToProps
)(AddRepo);

export default PanelAddRepo;