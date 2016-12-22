
import React, { PureComponent } from 'react'

export default class EmptyModule extends PureComponent {

	render() {

		return (
			<div className="module empty-module">
				<h1 className="info">{'{no module here}'}</h1>
			</div>
		)
	}
}
