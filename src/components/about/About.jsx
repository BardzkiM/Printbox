import React from 'react';

export default class About extends React.Component {

	render() {
		return (
			<div className="about col-12">
				<h1 className="logo col-3">Printbox</h1>
				<div className="content-app col-6">
					<div className="content-heading">
						Join us and hundreads of happy klients on our social media!
					</div>
					<div className="content-description">
						We have special effers for our amazing Fans :)
					</div>
				</div>
				<div className="media col-3">
					<i className="icon-gplus"> </i>
					<i className="icon-facebook"> </i>
					<i className="icon-twitter"> </i>
					<i className="icon-linkedin"> </i>
				</div>
			</div>
		);
	}
}
