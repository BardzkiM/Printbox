import React from "react";
import BaseFilterComponent from "./BaseFilterComponent";

export default class OrientationFilter extends BaseFilterComponent {
	constructor(props) {
		super(props);
	}

	getClassName() {
		return this.class_name + ' orientation-filter';
	}

	getContent() {
		return (
			<div className="orientation-indicator">
				<div className="horizontal-indicator indicator is-active">
					<div className="horizontal-checkbox checkbox">
						<i className="icon-ok"> </i>
					</div>
					<div className="text">Horizontal</div>
				</div>
				<div className="vertical-indicator indicator">
					<div className="vertical-checkbox checkbox">
						<i className="icon-ok"> </i>
					</div>
					<div className="text">Vertical</div>
				</div>
			</div>
		);
	}
}
