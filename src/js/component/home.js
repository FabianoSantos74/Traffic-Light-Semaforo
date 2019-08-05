import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Semaforo from "./semaforo.js";

//create your first component
export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Semaforo />
			</div>
		);
	}
}
