import React from 'react';

export default class UsersList extends React.Component {
	constructor(props) {
		super(props);
	}

	displayUser(user) {
  		return (
  			<tr>
				<td>{user.id}</td>
				<td>{user.name}</td>
			</tr>
		);
	}

	render() {
	    return (
			<div>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users.map(this.displayUser)}
					</tbody>
				</table>
					
			</div>
	    );
	}
}


