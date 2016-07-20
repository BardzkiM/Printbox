import React from "react";

export default class ShowingFilter extends React.Component {

	constructor(props) {
		super(props);
	}

	getItems() {
		return [
			{title: "Horizontal"},
			{title: "90x50mm"},
			{title: "Automotive"},
			{title: "Sport"},
			{title: "Art"},
			{title: "Music"}
		];
	}


	render() {
		let items = [];
		let filters = this.getItems();

		for (let i = 0; i < filters.length; i++) {
			let item = filters[i];
			items.push(
				<div className="item">
					{item.title}
					<div className="icon icon-cancel"></div>
				</div>)
		}

		return (
			<div className="showing-filter">
				{items}
			</div>
		);
	}
}
