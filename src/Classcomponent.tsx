import React from "react";

interface LearnProps {
	message: string;
	arr: number[];
}

class Learn extends React.Component<LearnProps> {
	render() {
		return (
			<>
				{this.props.message}
				<ul>
					{this.props.arr.map((e, index) => (
						<li key={index}>{e}</li>
					))}
				</ul>
			</>
		);
	}
}

export default Learn;
