import React from 'react';

export default class UsersPager extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<nav aria-label="...">
					<ul className="pager">
						<li className={ this.props.prevPageUrl ? '':'disabled' }><a onClick={this.props.prev} href={this.props.prevPageUrl}>Previous</a></li>
						<li className={ this.props.nextPageUrl ? '':'disabled' }><a onClick={this.props.next} href={this.props.nextPageUrl}>Next</a></li>
					</ul>
				</nav>
			</div>
		);
}
}
