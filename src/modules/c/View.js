
import React, {PureComponent, PropTypes} from 'react'

export default class View extends PureComponent{

	static propTypes = {
		text: PropTypes.string.isRequired,
	}

	render () {
		return (
			<div className="module module-c">

				<h1 className="title">MODULE C</h1>

				<div className="content">
					<div className="block">
						<input />
						<label className="text">{this.props.text}</label>
					</div>
				</div>

			</div>
		)
	}

}