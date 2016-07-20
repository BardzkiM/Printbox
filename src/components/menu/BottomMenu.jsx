import React from 'react';
import BottomSubmenu from "./BottomSubmenu";

export default class BottomMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {text: "Email Address"};
		this.menuCategories =
		{
			title: "Categories",
			item: [
				{name: "Photobooks"},
				{name: "Calendars"},
				{name: "Cards"},
				{name: "Canvas"},
				{name: "Gifts"},
				{name: "Stationery"}
			]
		};
		this.menuInformation =
		{
			title: "Information",
			item: [
				{name: "Contact us"},
				{name: "Terms and conditions"},
				{name: "About us"},
				{name: "Privacy policy"},
				{name: "Sitemap"}
			]
		};
		this.menuMyAccount =
		{
			title: "My Account",
			item: [
				{name: "My orders"},
				{name: "My credit slips"},
				{name: "My adresses"},
				{name: "My personal info"},
				{name: "My vouchers"}
			]
		};
		this.menuAddress =
		{
			title: "",
			item: [
				{name: "Printbox Sp. z o.o."},
				{name: "Main Square 17"},
				{name: "31-008 Cracow, Poland"},
				{name: "+48 12 881 20 68"},
				{name: "sales@getprintbox.com"}
			]
		};
	}

	handleChange(e) {
		var change = {};
		change[name] = e.target.value;
		this.setState(change);
	}

	render() {
		return (
			<div className="menu-bottom-main col-12">
				<div className="bottom-submenu col-3">
					<BottomSubmenu items={this.menuAddress}/>
				</div>
				<div className="bottom-submenu col-2">
					<BottomSubmenu className="bottom-submenu" items={this.menuCategories}/>
				</div>
				<div className="bottom-submenu col-2">
					<BottomSubmenu className="bottom-submenu" items={this.menuInformation}/>
				</div>
				<div className="bottom-submenu col-2">
					<BottomSubmenu className="bottom-submenu" items={this.menuMyAccount}/>
				</div>
				<div className="newsletter col-3">
					<div className="newsletter-title">
						Newsletter
					</div>
					<div className="newsletter-content">
						Get weekly emails with new blog posts and rabate codes!
					</div>
					<input type="text" value={this.state.text} className="newsletter-input"
								 onChangeText={this.handleChange.bind(this, 'text')}/>
					<button className="newsletter-subscribe">SUBSCRIBE</button>
				</div>
			</div>
		);
	}
}
