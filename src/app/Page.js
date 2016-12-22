
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import EmptyModule from './EmptyModule'
import ModuleA from 'modules/a/View'
import ModuleB from 'modules/b/View'
import ModuleC from 'modules/c/View'
import ModuleD from 'modules/d/View'



const stateMap = (state) => {
	return {

	}
}
const actionMap = {

}
class Page extends PureComponent {

	render() {

		let DYNAMIC_MODULES = null

		return (
			<div className="page">

				<div className="panel top-left">
					<ModuleA number={12}/>
				</div>

				<div className="panel top-right">
					<ModuleB/>
				</div>

				<div className="panel bottom-left">
					<ModuleC text='AHOJ'/>
				</div>

				<div className="panel bottom-right">
					<EmptyModule/>
				</div>

			</div>
		)
	}
}

export default connect(stateMap, actionMap)(Page)
