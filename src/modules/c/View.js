
import React, {PureComponent, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Actions} from './Actions'

const stateMap = (state) => {
	return {
		text: state.c.get('text'),
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
			<div className="module module-c">

				<h1 className="title">Module C</h1>

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