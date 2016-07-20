import React from "react";
import ProductlistItem from "./ProductListItem";

export default class ProductListContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	getItems() {
		return [
			{title: "Title1", description: "90x50", rating: 5, favourite: true, imgSource: "1.png"},
			{title: "Title2", description: "85x55", rating: 3, favourite: false, imgSource: "2.png"},
			{title: "Title3", description: "85x55", rating: 2, favourite: false, imgSource: "3.png"},
			{title: "Title4", description: "90x50", rating: 1, favourite: false, imgSource: "4.png"},
			{title: "Title5", description: "90x50", rating: 4, favourite: false, imgSource: "5.png"},
			{title: "Title6", description: "85x55", rating: 4, favourite: true, imgSource: "6.png"},
			{title: "Title7", description: "90x50", rating: 0, favourite: false, imgSource: "7.png"},
			{title: "Title8", description: "90x50", rating: 5, favourite: true, imgSource: "8.png"},
			{title: "Title9", description: "85x55", rating: 3, favourite: false, imgSource: "9.png"},
			{title: "Title10", description: "85x55", rating: 2, favourite: false, imgSource: "10.png"},
			{title: "Title11", description: "90x50", rating: 1, favourite: false, imgSource: "4.png"},
			{title: "Title12", description: "90x50", rating: 4, favourite: false, imgSource: "2.png"},
			{title: "Title13", description: "85x55", rating: 4, favourite: true, imgSource: "6.png"},
			{title: "Title14", description: "90x50", rating: 0, favourite: false, imgSource: "7.png"}
		];
	}

	render() {
		let items = [];
		let products = this.getItems();

		for (let i = 0; i < products.length; i++) {
			let item = products[i];
			items.push(<div className="item"><ProductlistItem title={item.title}
																												description={item.description}
																												rating={item.rating}
																												favourite={item.favourite}
																												imgSource={item.imgSource}
			/></div>);
		}

		return (
			<div className="product-list-container">
				{items}
			</div>
		);
	}
}
