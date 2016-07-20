import React from "react";
import DropdownList from "./DropdownList";

export default class DropdownListShow extends DropdownList {

	constructor(props) {
		super(props);
	}

	getClassNames() {
		let classes = 'tab ';
		if (this.state.expanded) {
			classes += this.states.expanded;
		}
		return classes;
	}

	expandList(item) {
		this.setState({expanded: !this.state.expanded});
	}

	render() {
		let self = this;
		self.items = [];
		this.props.tabsSource.forEach(function (value) {
			self.items.push(<li className={self.getClassNames()} onClick={self.expandList.bind(self, value)}>{value}</li>);
		});


		return (
			<ul className="dropdown-list">
				<li className="tab is-active"
						onClick={this.expandList.bind(this, this.getSelectedItem())}>
					<div className="show">Show:</div>
					<div>{this.items[this.selectedTab]}</div>
					<i className={(this.state.expanded ? 'icon-up-dir': 'icon-down-dir')}></i>
				</li>
				{this.items}
			</ul>
		);
	}
}
