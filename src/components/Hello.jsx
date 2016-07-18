import React from "react";



export default class Hello extends React.Component {

	handleButton() {
		alert("button action");
	}

	render() {
		return (
			<div>
				<h1>Hello !!!{this.props.title}</h1>
				<div class="test">world</div>
				<button onClick={this.handleButton}>button</button>
				<i className="icon-basket">'\E800'</i><br/>
			</div>
		)
	}

}
