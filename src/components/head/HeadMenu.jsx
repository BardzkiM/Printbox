import React from "react";
import Language from "./Language";

export default class HeadMenu extends React.Component {


	render() {
		return (
			<div>
				<i className="icon-search"> a </i>
				<div>Contact us</div>
				<Language />
			</div>
		);
	}
}
