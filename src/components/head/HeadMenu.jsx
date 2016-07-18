import DropdownList from "../modules/DropdownList";
import DropdownListCart from "../modules/DropdownListCart";
import React from "react";

export default class HeadMenu extends React.Component {

	constructor() {
		super();
		this.languages = ["English", "German", "Japanese"];
		this.cart = ["My cart", "Empty", "Checkout"];
	}


	render() {
		return (
			<div className="head-menu col-12">
				<div className="menu-item"><i className="icon-search"></i></div>
				<div className="menu-item contact-button ">Contact us</div>
				<div className="menu-item dropdown "><DropdownList tabsSource={this.languages} text="" /></div>
				<div className="menu-item account-button "><i className="icon-user"></i>My Account</div>
				<div className="menu-item dropdown "><DropdownListCart tabsSource={this.cart} text={[<i className="icon-basket"></i>, "Cart"]} onlyText="true" /></div>
			</div>

		);
	}
}
