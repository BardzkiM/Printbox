import React from "react";
import ShowingFilter from "./ShowingFilter";
import DropdownListShow from "../modules/DropdownListShow";

export default class ProductMenu extends React.Component {

	constructor(props) {
		super(props);
		this.showOptions = ["20", "40", "80", "All"];
	}

	render() {

		return (
			<div className="product-menu">
				<div className="filter-options col-9">
					<div className="search-results-title">
						Search Results:
						<div className="search-filters-number">
							{this.props.nrOfItems}
						</div>
					</div>
					<div className="showing-filters-title">
						Showing Filters:
						<ShowingFilter />
					</div>
				</div>
				<div className="show-options col-3">

					<DropdownListShow tabsSource={this.showOptions} text="Show: " onlyText="true"/>
					<i className="icon icon-th"></i>
					<i className="icon icon-th-large"></i>
					<i className="icon icon-menu"></i>

				</div>

			</div>
		);
	}
}
