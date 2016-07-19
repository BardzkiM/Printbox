import React from "react";

export default class BaseFilterComponent extends React.Component {



	constructor(props) {
		super(props);
		this.class_name = 'base-filter-component ';
	}

	getContent() {
		return '';
	}

	getClassName() {
		return this.class_name;
	}


	render() {
		return (
			<div className="filter-container">
				<div className={this.getClassName()}>
					<div className="filter-title">{this.props.title}</div>
					<div className="icon-element"><i className="icon-cancel"></i></div>
					{this.getContent()}
				</div>
			</div>
		);
	}
}
