import React from 'react';
import ReactDOM from 'react-dom';
import Hello from "./components/Hello";
import Head from "./components/head/Head";



export class App extends React.Component {

	render() {
		return (
			<div className="asd">
				<Head />

			</div>
		);
	}

}

ReactDOM.render(
	<App />,
	document.querySelector("#app"));
