import React from 'react';
import ReactDOM from 'react-dom';
import Hello from "./components/Hello";

export class App extends React.Component {

	render() {
		return (
			<div className="asd">
				<Hello title="sample props"/>
				<Hello title="another sample props"/>
			</div>
		);
	}

}

ReactDOM.render(
	<App />,
	document.querySelector("#app"));
