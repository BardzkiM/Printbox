import React from 'react';
import ReactDOM from 'react-dom';
import Head from "./components/head/Head";
import Menu from "./components/menu/Menu";
import FilterMenu from "./components/filter/FilterMenu";
import ProductListContainer from "./components/products/ProductListContainer";
import ProductMenu from "./components/products/ProductMenu";
import About from "./components/about/About";
import BottomMenu from "./components/menu/BottomMenu";

export class App extends React.Component {

	render() {

		let menuTabs = [
			{text: "PHOTOBOOKS", target: "#"},
			{text: "CALENDARS", target: "#"},
			{text: "CANVAS", target: "#"},
			{text: "CARDS", target: "#"},
			{text: "GIFTS STATIONERY", target: "#"}
		];

		return (
			<div className="wrapper">
				<Head />
				<Menu tabsSource={menuTabs}/>
				<div className="content col-12">
					<div className="filters col-2">
						<FilterMenu />
					</div>
					<div className="right-content col-10">
						<ProductMenu nrOfItems="127"/>
						<ProductListContainer />
					</div>
				</div>
				<div className="about-app">
					<About />
				</div>
				<div>
					<BottomMenu />
				</div>
				<div className="footer">
					<div className="footer-text">&#9400; 2015 Printbox</div>
				</div>
			</div>
		);
	}

}

ReactDOM.render(
	<App />,
	document.querySelector("#app"));
