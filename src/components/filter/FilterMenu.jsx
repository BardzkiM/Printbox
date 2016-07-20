import React from "react";
import OrientationFilter from "./OrientationFilter";
import CheckboxListFilter from "./CheckboxListFilter";
import RatingFilter from "./RatingFilter";
import ColorFilter from "./ColorFilter";

export default class FilterMenu extends React.Component {
	constructor(props) {
		super(props);

		this.sizes = [{text: "90x50mm", number: 112},{text: "85x55mm", number: 67}];
		this.ratings = [
			{rating: 4, number: 83},
			{rating: 3, number: 230},
			{rating: 2, number: 18},
			{rating: 1, number: 66},

		];
		this.favorites = [{text: "Only favorites", number: 2}];
		this.industries = [
			{text: "All", number: 840},
			{text: "Automotive", number: 112},
			{text: "Fashion", number: 83},
			{text: "Law", number: 230},
			{text: "IT", number: 18},
			{text: "Sport", number: 66},
			{text: "Art", number: 20}];
		this.styles = [
			{text: "All", number: 208},
			{text: "Abstraction", number: 12},
			{text: "Fashion", number: 7},
			{text: "Geometry", number: 18},
			{text: "Men", number: 28},
			{text: "Women", number: 3},
			{text: "Childrem", number: 36},
			{text: "Music", number: 14},
			{text: "Vintage", number: 11},
			{text: "Flower", number: 79}
		];
		this.colors = [
			{color: "#6b70e6"},
			{color: "#0091ff"},
			{color: "#5ad4ff"},
			{color: "#48dc6c"},
			{color: "#fd4b63"},
			{color: "#fa592b"},
			{color: "#fea501"},
			{color: "#ffd101"},
			{color: "#9fa0a5"}
		];
	}

	render() {


		return(
			<div>
				<div className="title"><h2>Narrow results</h2></div>
				<OrientationFilter title="Orientation" />
				<CheckboxListFilter title="Size" items={this.sizes}/>
				<RatingFilter title="Customer Rating" items={this.ratings}/>
				<CheckboxListFilter title="Favorite" items={this.favorites}/>
				<CheckboxListFilter title="Industry" items={this.industries}/>
				<ColorFilter title="Color" items={this.colors}/>
				<CheckboxListFilter title="Style" items={this.styles}/>
			</div>
		);
	}
}
