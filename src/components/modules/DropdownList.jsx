import React from "react";

export default class DropdownList extends React.Component {

	constructor(props) {
		super(props);
		this.states = {
			expanded: 'is-expanded',
			active: 'is-active',
			selected: 'is-selected'
		}
		this.state = {expanded: false};
		this.selectedTab = 0;
		this.items = [];
		this.expandList = this.expandList.bind(this);
	}


	getClassNames(value) {
		let classes = 'tab ';
		if (value == this.selectedTab) {
			classes += this.states.selected + ' ';
		}

		if (this.state.expanded) {
			classes += this.states.expanded;
		}

		return classes;
	}

	getSelectedItem() {
		return this.items[this.selectedTab].props.children;
	}

	expandList(item) {
		for (let i = 0; i < this.items.length; i++) {
			let tab = this.items[i];
			if (item === tab.props.children) {
				this.selectedTab = i;
				break;
			}
		}
		this.setState({expanded: !this.state.expanded});
	}

	render() {

		let self = this;
		self.items = [];
		let i = 0;
		this.props.tabsSource.forEach(function (value) {
			self.items.push(<li className={self.getClassNames(i)} onClick={self.expandList.bind(self, value)}>{value}</li>);
			i++;
		});

		let clone;

		if (this.props.onlyText) {
			clone = <li className="tab is-active"
									onClick={this.expandList.bind(this, this.getSelectedItem())}>{this.props.text}<i
				className={(this.state.expanded ? 'icon-up-dir': 'icon-down-dir')}></i></li>;
		}
		else {
			clone = <li className="tab is-active"
									onClick={this.expandList.bind(this, this.getSelectedItem())}>{this.props.text}{this.getSelectedItem()}
				<i className={(this.state.expanded ? 'icon-up-dir': 'icon-down-dir')}></i>
			</li>;
		}


		return (
			<ul className="dropdown-list">
				{clone}
				{this.items}
			</ul>
		);
	}
}
