import React from "react";

export default class ProductListItem extends React.Component {

	constructor(props) {
		super(props)
	}

	getRatingStars(rating) {
		let stars = [];

		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(<i className="full-star icon-star"></i>);
			}
			else {
				stars.push(<i className="empty-star icon-star"></i>);
			}
		}

		return stars;
	}

	getImageSrc() {
		return "/assets/images/" + this.props.imgSource;
	}

	getHeartClassName() {
		let className = 'heart icon-heart';
		className += this.props.favourite ? ' full-heart' : ' empty-heart';
		return className;
	}

	render() {
		return (
			<div className="product-list-item">
				<div className="item-image">
					<img src={this.getImageSrc()}/>
				</div>
				<div className="stars">{this.getRatingStars(this.props.rating)}</div>
				<div className={this.getHeartClassName()}></div>
				<div className="title">{this.props.title}</div>
				<div className="description">{this.props.description}</div>
			</div>
		);
	}
}
