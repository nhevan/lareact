import React from 'react';

export default class SearchUsers extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className="navbar-form navbar-left">
				<div className="form-group">
					<input onChange={this.props.search} type="text" className="form-control" placeholder="Search by user name" />
				</div>
			</form>
		);
	}
}
