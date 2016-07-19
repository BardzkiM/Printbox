import React from "react";
import HeadMenu from "./HeadMenu";

export default class Hello extends React.Component {


	render() {
		return(
			<div className="head col-12">
				<h1 className="logo col-7">Printbox</h1>
				<div className="col-5"><HeadMenu /></div>
			</div>
		);
	}

}
