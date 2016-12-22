
import React, {PureComponent, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Actions} from './Actions'

const stateMap = (state) => {
	return {
		isLoading: state.d.get('isLoading'),
		data: state.d.get('data') && state.d.get('data').toJS(),
	}
}
const actionMap = {
	loadData: Actions.loadData,
}
class View extends PureComponent{

	static propTypes = {
		loadData: PropTypes.func.isRequired,
		isLoading: PropTypes.bool.isRequired,
		data: PropTypes.object,
	}

	render () {

		let status = null;
		if (this.props.isLoading) {
			status = 'Loading...'
		} else if (this.props.data !== null) {
			status = 'Loaded!'
		}

		return (
			<div className="module module-d">

				<h1 className="title">Module D</h1>

				<div className="content">
					<div className="block">
						<button onClick={this.props.loadData}>LOAD DATA</button>
					</div>
					<div className="block">
						<label className="status">{status}</label>
					</div>
					<div className="block">
						<label className="data">
							{this.props.data && `{foo: ${this.props.data.foo}, bar: '${this.props.data.bar}'}`}
						</label>
					</div>
				</div>

			</div>
		)
	}

}

export default connect(stateMap, actionMap)(View)