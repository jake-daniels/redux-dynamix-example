
import React, {PureComponent, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Actions} from './Actions'

const stateMap = (state) => {
	return {
		text: state.red.get('text'),
	}
}
const actionMap = {
	changeText: Actions.changeText,
}
class View extends PureComponent{

	static propTypes = {
		text: PropTypes.string,
		changeText: PropTypes.func.isRequired,
	}

	inputChanged = (e) => {
		this.props.changeText(e.target.value)
	}

	render () {
		return (
			<div className="module red">

				<h1 className="title">Red Module</h1>

				<div className="content">
					<div className="block">
						<input placeholder="Type here..." onInput={this.inputChanged}/>
						<label className="text">{this.props.text}</label>
					</div>
				</div>

			</div>
		)
	}

}

export default connect(stateMap, actionMap)(View)