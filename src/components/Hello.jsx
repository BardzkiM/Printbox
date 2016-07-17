import React from "react";


//var asd = require('../../public/assets/scss/components/_Hello.scss');
export default class Hello extends React.Component {


	buttonEvent() {

		alert('sample alert');
		return null;
	}

	render() {

		return (
			<div>
				<h1>Hello !!!</h1>
				<div className="test">world</div>
				<div>{this.props.title}</div>
				<button onClick={this.buttonEvent}>button</button>
			</div>
		)
	}

}
