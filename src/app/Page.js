
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

import EmptyModule from './EmptyModule'
import BlueModule from 'modules/blue/View'
import GreenModule from 'modules/green/View'
import RedModule from 'modules/red/View'
import PurpleModule from 'modules/purple/View'

import {injectReducer, ejectReducer} from 'redux-dynamix/index'
import RedReducer from 'modules/red/Reducer'
import PurpleReducer from 'modules/purple/Reducer'
const RED_MODULE_KEY = 'red'
const PURPLE_MODULE_KEY = 'purple'

const stateMap = (state) => {
	return {
		isRedModuleActive: (state[RED_MODULE_KEY] !== undefined),
		isPurpleModuleActive: (state[PURPLE_MODULE_KEY] !== undefined),
	}
}
const actionMap = {}
class Page extends PureComponent {

	static propTypes = {
		isRedModuleActive: PropTypes.bool.isRequired,
		isPurpleModuleActive: PropTypes.bool.isRequired,
	}


	injectRedModule = () => {
		injectReducer(RED_MODULE_KEY, RedReducer)
	}

	ejectRedModule = () => {
		ejectReducer(RED_MODULE_KEY)
	}

	injectPurpleModule = () => {
		injectReducer(PURPLE_MODULE_KEY, PurpleReducer)
	}

	ejectPurpleModule = () => {
		ejectReducer(PURPLE_MODULE_KEY)
	}


	render() {

		const RED_MODULE_COMPONENT = (this.props.isRedModuleActive) ? <RedModule/> : <EmptyModule/>

		const PURPLE_MODULE_COMPONENT = (this.props.isPurpleModuleActive) ? <PurpleModule/> : <EmptyModule/>

		return (
			<div className="page">

				<div className="panel top-left">
					<BlueModule/>
				</div>

				<div className="panel top-right">
					<GreenModule
						injectRedModule={this.injectRedModule}
						ejectRedModule={this.ejectRedModule}
						injectPurpleModule={this.injectPurpleModule}
						ejectPurpleModule={this.ejectPurpleModule}
					/>
				</div>

				<div className="panel bottom-left">
					{RED_MODULE_COMPONENT}
				</div>

				<div className="panel bottom-right">
					{PURPLE_MODULE_COMPONENT}
				</div>

			</div>
		)
	}
}

export default connect(stateMap, actionMap)(Page)
