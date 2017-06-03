import React from 'react';

export default class UsersList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users : []
		}
	}

	componentDidMount() {
		this.getUsers()
	}

	displayUser(user) {
  		return <li>{user.name}</li>;
	}

	getUsers() {
		var endpoint = `/users`;
		axios.get(endpoint)
			.then((response) => {
				this.setState({
					users: response.data.data,
					response : response
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
	    return (
			<div>
				<p>Listing users</p>
				<ol>
					{this.state.users.map(this.displayUser)}
				</ol>
			</div>
	    );
	}
}
