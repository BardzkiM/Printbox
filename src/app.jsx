import React from 'react';
import ReactDOM from 'react-dom';
import Hello from "./components/Hello";
import Head from "./components/head/Head";



export class App extends React.Component {

	render() {
		return (
			<div className="asd">
				<Head />
				<Hello title="sample props"/>
				<Hello title="another sample props"/>
			</div>
		);
	}

}

ReactDOM.render(
	<App />,
	document.querySelector("#app"));
