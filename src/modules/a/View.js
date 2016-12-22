
import React, {PureComponent, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Actions} from './Actions'

const stateMap = (state) => {
	return {
		number: state.a.get('number'),
	}
}
const actionMap = {
	increment: Actions.increment,
	decrement: Actions.decrement,
}
class View extends PureComponent{

	static propTypes = {
		number: PropTypes.number.isRequired,
		increment: PropTypes.func.isRequired,
		decrement: PropTypes.func.isRequired,
	}

	render () {
		return (
			<div className="module module-a">

				<h1 className="title">Module A</h1>

				<div className="content">
					<div className="block">
						<div className="buttons">
							<button onClick={this.props.increment}>INCREMENT</button>
							<button onClick={this.props.decrement}>DECREMENT</button>
						</div>
						<label className="number">{this.props.number}</label>
					</div>
				</div>

			</div>
		)
	}

}

export default connect(stateMap, actionMap)(View)