
import React, { PureComponent } from 'react'

export default class EmptyModule extends PureComponent {

	render() {

		return (
			<div className="module empty-module">
				<h1 className="info">{'{empty module}'}</h1>
			</div>
		)
	}
}
