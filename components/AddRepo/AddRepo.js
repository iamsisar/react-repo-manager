import React from 'react';
import style from './AddRepo.scss';
import classNames from 'classNames';
import {parseNameToSlug} from '../../utilities/strings';

import {REPOS_DOMAIN} from '../../config.js';


const propTypes = {
	createNewRepo: React.PropTypes.func
}

class AddRepo extends React.Component{

	constructor(){
		super();
		this._handleSubmit = this._handleSubmit.bind(this);

		this.state = {
			newRepoName: '',
			newRepoUrl: '',
			fieldsBind: true
		}

		this._handleNameChange = this._handleNameChange.bind(this);
		this._toggleFieldsBind = this._toggleFieldsBind.bind(this);
	}


	_handleNameChange() {
		this.setState({
			newRepoName: this._nameField.value,
			newRepoUrl: parseNameToSlug(this._nameField.value)
		});
	}

	_toggleFieldsBind(){
		this.setState({
			fieldsBind: !this.state.fieldsBind
		})

		this._urlField.setSelectionRange(0, this._urlField.value.length)
	}

	_handleSubmit(e){
		e.preventDefault();
		let name = this._nameField.value;
		let url = this._urlField.value;
		this.props.createNewRepo(name, url);
		this._nameField.value = '';
	}

	render(){

		const urlInputClassName = classNames({
			[style.urlInput] : true,
			[style.unbound] : this.state.fieldsBind
		});

		const urlSpanClassName = classNames({
			[style.url] : true,
			[style.unbound] : this.state.fieldsBind
		});

		return (
			<form className={ style.addRepo + ' add-repo-panel' } onSubmit={ this._handleSubmit }>
				<h1>Add new repository</h1>
				<div className={style.fields}>
					<h2>Name</h2>
					<input type="text"
						className="new-repo-name"
						ref={ (input) => this._nameField = input }
						onChange={ this.state.fieldsBind ? this._handleNameChange : false}
					/>

					<h2>Address</h2>
					<span className={style.domain} >http://</span>
					<span className={urlSpanClassName} >{this.state.newRepoUrl}</span>
					<input type="text"
						className={urlInputClassName}
						readOnly={this.state.fieldsBind}
						ref={ (input) => this._urlField = input }
						onChange={ (e) => e.target.value = parseNameToSlug(e.target.value) }
						value={ this.state.fieldsBind ? this.state.newRepoUrl : undefined }
					/>

					<span className={style.domain} >.{ REPOS_DOMAIN }</span>
					<button type="button" className={style.toggleFieldsBinding} onClick={this._toggleFieldsBind}>[edit]</button>

					<button type="submit" className={style.addButton}><span>Add new repo</span></button>
				</div>
			</form>

		)
	}
}

AddRepo.propTypes = propTypes;

export default AddRepo;