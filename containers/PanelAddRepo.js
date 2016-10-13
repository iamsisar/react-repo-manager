import { connect } from 'react-redux';
import AddRepo from '../components/AddRepo/AddRepo';
import { createNewRepo } from '../actions/repos';

const mapDispatchToProps = (dispatch) => {
	return {
		createNewRepo: (name) => dispatch(createNewRepo(name))
	}
}

const PanelAddRepo = connect(
	null,
	mapDispatchToProps
)(AddRepo);

export default PanelAddRepo;