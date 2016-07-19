import React from "react";
import BaseFilterComponent from "./BaseFilterComponent";

export default class ColorFilter extends BaseFilterComponent {
	constructor(props) {
		super(props);
		this.items = [];
		this.state = {selectedColor: 0};
		this.states = {active: 'is-active'};
		this.changeActive = this.changeActive.bind(this);
	}

	getClassName() {
		return this.class_name + ' color-filter';
	}

	getColorClass(value) {
		let classes = 'color-item ';

		if (value == this.state.selectedColor) {
			classes += this.states.active;
		}

		return classes;
	}

	changeActive(value) {
		this.setState({selectedColor: value});
	}

	getContent() {
		this.items = [];
		let colors = this.props.items;

		for (let i = 0; i < colors.length; i++) {
			let color = {"background": colors[i].color};
			this.items.push(
				<div className={this.getColorClass(i)} onClick={this.changeActive.bind(this, i)} style={color}></div>
			)
		}
		this.items.push(
			<div className="color-item"></div>
		)
		return (
			<div className="color-picker">
				Choose color(s)
				<div className="color-indicator">
					{this.items}
				</div>
				<div className="or">or</div>
				<div className="upload-logo">
					Use colours from your logo
					<button className="upload-button">UPLOAD LOGO</button>
				</div>
			</div>
		);
	}
}
