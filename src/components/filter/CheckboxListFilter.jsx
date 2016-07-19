import React from "react";
import BaseFilterComponent from "./BaseFilterComponent";

export default class CheckboxListFilter extends BaseFilterComponent {

	constructor(props) {
		super(props);
		this.items = [];
	}

	getClassName() {
		return this.class_name + ' size-filter';
	}

	getCheckboxId(value, id) {
		return 'checkbox-' + value + '-' + id;
	}


	getContent() {
		this.items = [];
		let tabs = this.props.items;
		let title = this.props.title;

		for (let i = 0; i < tabs.length; i++) {
			let chkId = this.getCheckboxId(title, i);
			this.items.push(
				<div className="item">
					<input type="checkbox" className="checkbox-input" id={chkId}/>
					<label className="text" htmlFor={chkId} >{tabs[i].text}</label>
					<div className="number">{tabs[i].number}</div>
				</div>
			);
		}


		return (
			<div className="checkbox-list-filter-indicator">
				{this.items}
			</div>
		);
	}


}
