
import {Map} from 'immutable'
import {handleActions} from 'redux-actions'
import {Types} from './Actions'

const INITIAL_STATE = Map({
	isRedModuleActive: false,
	isPurpleModuleActive: false,
})

const Reducer = handleActions({

	[Types.INJECT_RED_MODULE]: (state, action) => {
		return state.merge({
			isRedModuleActive: true,
		})
	},

	[Types.EJECT_RED_MODULE]: (state, action) => {
		return state.merge({
			isRedModuleActive: false,
		})
	},

	[Types.INJECT_PURPLE_MODULE]: (state, action) => {
		return state.merge({
			isPurpleModuleActive: true,
		})
	},

	[Types.EJECT_PURPLE_MODULE]: (state, action) => {
		return state.merge({
			isPurpleModuleActive: false,
		})
	},


}, INITIAL_STATE)

export default Reducer
