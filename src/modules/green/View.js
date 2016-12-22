
import React, {PureComponent, PropTypes} from 'react'

class View extends PureComponent{

	static propTypes = {
		injectRedModule: PropTypes.func.isRequired,
		ejectRedModule: PropTypes.func.isRequired,
		injectPurpleModule: PropTypes.func.isRequired,
		ejectPurpleModule: PropTypes.func.isRequired,
	}

	render () {
		return (
			<div className="module green">

				<h1 className="title">Green Module</h1>

				<div className="content">

					<div className="block">
						<h2>Red Module</h2>
						<div className="buttons">
							<button onClick={this.props.injectRedModule}>INJECT</button>
							<button onClick={this.props.ejectRedModule}>EJECT</button>
						</div>
					</div>

					<div className="block">
						<h2>Purple Module</h2>
						<div className="buttons">
							<button onClick={this.props.injectPurpleModule}>INJECT</button>
							<button onClick={this.props.ejectPurpleModule}>EJECT</button>
						</div>
					</div>

				</div>

			</div>
		)
	}

}

export default View