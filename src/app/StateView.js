
import React, { PureComponent, PropTypes } from 'react'

export default class StateView extends PureComponent {

	static propTypes = {
		keys: PropTypes.array.isRequired,
	}

	render() {

		return (
			<div className="state-view">
				<div className="content">
					<h2>STATE KEYS</h2>
					<ul className="list">
						{this.props.keys.map((key, i) => <li key={i} className="item">{key}</li>)}
					</ul>
				</div>
			</div>
		)
	}
}

