import React from "react";

export default class Semaforo extends React.Component {
	render() {
		return (
			<div>
				<div className="trafficlightpole mx-auto" />
				<div className="trafficlightbody mx-auto">
					<div className="red light mx-auto"> </div>
					<div className="yellow light mx-auto"> </div>
					<div className="green light mx-auto"> </div>
				</div>
			</div>
		);
	}
}
