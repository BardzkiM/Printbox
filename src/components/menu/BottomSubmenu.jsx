import React from 'react';

export default class BottomSubmenu extends React.Component {

	constructor(props) {
		super(props);
		this.items = [];
	}

	render() {
		this.items = [];
		let tabs = this.props.items;

		this.items.push(<div className="submenu-title">{tabs.title}</div>)
		for (let i = 0; i < tabs.item.length; i++) {
			this.items.push(
				<div className="submenu-item">{tabs.item[i].name}</div>
			);
		}

		return (
			<div className="bottom-menu">
				{this.items}
			</div>
		);
	}
}
