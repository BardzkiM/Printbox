import React from 'react';
import ReactDOM from 'react-dom';
import Head from "./components/head/Head";
import Menu from "./components/menu/Menu";
import FilterMenu from "./components/filter/FilterMenu";
import ProductListContainer from "./components/products/ProductListContainer";

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
			<div className="asd">
				<Head />
				<Menu tabsSource={menuTabs}/>
				<div className="content">
					<div className="filters col-2">
						<FilterMenu />
					</div>
					<div className="right-content col-10">

						<ProductListContainer />
					</div>
				</div>
			</div>
		);
	}

}

ReactDOM.render(
	<App />,
	document.querySelector("#app"));
