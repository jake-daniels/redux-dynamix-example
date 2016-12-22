
import React, {PureComponent, PropTypes} from 'react'

export default class View extends PureComponent{

	static propTypes = {
		showModuleC: PropTypes.func.isRequired,
		hideModuleC: PropTypes.func.isRequired,
		showModuleD: PropTypes.func.isRequired,
		hideModuleD: PropTypes.func.isRequired,
	}

	render () {
		return (
			<div className="module module-b">

				<h1 className="title">MODULE B</h1>

				<div className="content">

					<div className="block">
						<h2>Module C</h2>
						<div className="buttons">
							<button onClick={this.props.showModuleC}>SHOW</button>
							<button onClick={this.props.hideModuleC}>HIDE</button>
						</div>
					</div>

					<div className="block">
						<h2>Module D</h2>
						<div className="buttons">
							<button onClick={this.props.showModuleD}>SHOW</button>
							<button onClick={this.props.hideModuleD}>HIDE</button>
						</div>
					</div>

				</div>

			</div>
		)
	}

}