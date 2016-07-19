import React from "react";

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.states = {
			active: "is-active"
		};
		this.state = {selectedTab: 0};
		this.items = [];
		this.changeActive = this.changeActive.bind(this);

	}


	getClassName(value) {
		let classes = 'menu-item ';

		if(value == this.state.selectedTab) {
			classes += this.states.active;
		}

		return classes;
	}

	changeActive(value) {
		this.setState({selectedTab: value});
	}

	render() {
		this.items = [];
		let tabsSource = this.props.tabsSource;

		for(let i = 0; i < tabsSource.length; i++) {
			this.items.push(<div className={this.getClassName(i)} onClick={this.changeActive.bind(this, i)} ><a href={tabsSource[i].target}>{tabsSource[i].text}</a></div>)
		}

		return(
			<div className="menu">{this.items}</div>
		);
	}
}
