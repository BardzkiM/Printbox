import React from "react";

export default class Language extends React.Component {

	constructor(props) {
		super(props);
		this.state = {listVisible: false};
		this.select = this.select.bind(this);
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
	}

	select(item) {
		this.props.selected = item;
	}

	show() {
		this.state = {listVisible: true};
			document.addEventListener("click", this.hide);
	}

	hide() {
		this.state = {listVisible: false};
		document.removeEventListener("click", this.hide)
	}

	render() {
		return (
			<div className={(this.state.listVisible ? " show" : "")}>
				<div className={(this.state.listVisible ? " clicked": "")} onClick={this.show}>
					<span style={{ color: '#052401' }}>yello</span>
					<i className="icon-down-dir"></i>
				</div>
				<div>
					<div>
						{this.renderLanguages()}
					</div>
				</div>
			</div>
		);
	}

	renderLanguages() {
		var items = [];
		items.push("English");
		items.push("Polish");
		items.push("German");
		items.push("Japanese");
		return items;
	}
}
