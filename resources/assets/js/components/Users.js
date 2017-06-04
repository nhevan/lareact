import React from 'react';
import UsersList from './UsersList';
import UsersPager from './UsersPager';
import SearchUsers from './SearchUsers'

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	users: [],
    	page: 1,
    	prevPageUrl: '',
    	nextPageUrl: ''
    }

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.searchUser = this.searchUser.bind(this);
  }
	componentWillMount() {
		this.getUsers(1);
	}

	searchByUserName(name) {
		var endpoint = `/api/users/search/${name}`;
		axios.get(endpoint)
			.then((response) => {
				// console.log(response);
				this.setState({
					users: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	getUsers(page) {
		var endpoint = `/api/users?page=${page}`;
		axios.get(endpoint)
			.then((response) => {
				this.setState({
					users: response.data.data,
					response : response,
					nextPageUrl: response.data.next_page_url,
					prevPageUrl: response.data.prev_page_url
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	getPreviousPage() {
		var decrement = 1;

		if (this.state.page == 1) {
			decrement = 0;
		}

		var prev_page = this.state.page - decrement;
		return prev_page;
	}

	next(e) {
		e.preventDefault();
		this.getUsers(this.state.page + 1);
		
		this.setState({
			page: this.state.page + 1
		});
	}

	prev(e) {
		e.preventDefault();
		this.getUsers(this.getPreviousPage());
		
		this.setState({
			page: this.getPreviousPage()
		});
	}

	searchUser(e) {
		let search_string = e.target.value;
		
		if (search_string == "") {
			this.getUsers(this.state.page);
			return;
		}

		this.searchByUserName(search_string);

		// this.setState({
		// 	users: [{
		// 		name: 'searched user',
		// 		id: '*'
		// 	}]
		// });
	}

	render() {
		return (
		  	<div className="panel panel-default">
		        <div className="panel-heading level">
		        	<div className="flex">
			        	<h4>Users</h4>
		        	</div>
		        	<SearchUsers search={this.searchUser} />
	        	</div>

		        <div className="panel-body">
		            <UsersList users={this.state.users}/>
					<UsersPager prevPageUrl={this.state.prevPageUrl} nextPageUrl={this.state.nextPageUrl} next={this.next} prev={this.prev} />
		        </div>
		    </div>
		);
	}
}
