
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

import {Actions} from './Actions'

import StateView from './StateView'
import EmptyModule from './EmptyModule'
import BlueModule from 'modules/blue/View'
import GreenModule from 'modules/green/View'
import RedModule from 'modules/red/View'
import PurpleModule from 'modules/purple/View'

const stateMap = (state) => {
	return {
		stateKeys: Object.keys(state),
		isRedModuleActive: state.app.get('isRedModuleActive'),
		isPurpleModuleActive: state.app.get('isPurpleModuleActive'),
	}
}
const actionMap = {
	injectRedModule: Actions.injectRedModule,
	ejectRedModule: Actions.ejectRedModule,
	injectPurpleModule: Actions.injectPurpleModule,
	ejectPurpleModule: Actions.ejectPurpleModule,
}
class Page extends PureComponent {

	static propTypes = {
		stateKeys: PropTypes.array.isRequired,
		isRedModuleActive: PropTypes.bool.isRequired,
		isPurpleModuleActive: PropTypes.bool.isRequired,

		injectRedModule: PropTypes.func.isRequired,
		ejectRedModule: PropTypes.func.isRequired,
		injectPurpleModule: PropTypes.func.isRequired,
		ejectPurpleModule: PropTypes.func.isRequired,
	}

	render() {

		const RED_MODULE = (this.props.isRedModuleActive) ? <RedModule/> : <EmptyModule/>

		const PURPLE_MODULE = (this.props.isPurpleModuleActive) ? <PurpleModule/> : <EmptyModule/>

		return (
			<div className="page">

				<StateView keys={this.props.stateKeys}/>

				<div className="panel top-left">
					<BlueModule/>
				</div>

				<div className="panel top-right">
					<GreenModule
						injectRedModule={this.props.injectRedModule}
						ejectRedModule={this.props.ejectRedModule}
						injectPurpleModule={this.props.injectPurpleModule}
						ejectPurpleModule={this.props.ejectPurpleModule}
					/>
				</div>

				<div className="panel bottom-left">
					{RED_MODULE}
				</div>

				<div className="panel bottom-right">
					{PURPLE_MODULE}
				</div>

			</div>
		)
	}
}

export default connect(stateMap, actionMap)(Page)
