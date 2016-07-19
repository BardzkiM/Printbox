import React from "react";
import BaseFilterComponent from "./BaseFilterComponent";

export default class RatingFilter extends BaseFilterComponent {
	constructor(props) {
		super(props);

		this.items = [];
	}

	getClassName() {
		return this.class_name + ' rating-filter';
	}

	getCheckboxId(value) {
		return 'radio-rating-' + value;
	}

	getRatingStars(rating) {
		let stars = [];

		for(let i = 1; i <= 5; i++) {
			if(i <= rating) {
				stars.push(<i className="full-star icon-star" ></i>);
			}
			else {
				stars.push(<i className="empty-star icon-star"></i>);
			}
		}

		return stars;
	}


	getContent() {
		this.items = [];
		let tabs = this.props.items;

		for (let i = 0; i < tabs.length; i++) {
			let chkId = this.getCheckboxId(i);
			this.items.push(
				<div className="item">
					<input name="rating" type="radio" className="radio-input" id={chkId}/>
					<label className="stars" htmlFor={chkId} >&nbsp;{this.getRatingStars(tabs[i].rating)}</label>
					<div className="number">{tabs[i].number}</div>
				</div>
			);
		}


		return (
			<div className="rating-indicator">
				{this.items}
			</div>
		);
	}


}
