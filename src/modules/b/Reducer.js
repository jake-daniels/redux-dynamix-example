
import {Map} from 'immutable'
import {handleActions} from 'redux-actions'
import {Types} from './Actions'

const INITIAL_STATE = Map({
	isVisibleModuleC: false,
	isVisibleModuleD: false,
})

const Reducer = handleActions({

	[Types.SHOW_MODULE_C]: (state, action) => {
		return state.merge({
			isVisibleModuleC: true,
		})
	},

	[Types.HIDE_MODULE_C]: (state, action) => {
		return state.merge({
			isVisibleModuleC: false,
		})
	},

	[Types.SHOW_MODULE_D]: (state, action) => {
		return state.merge({
			isVisibleModuleD: true,
		})
	},

	[Types.HIDE_MODULE_D]: (state, action) => {
		return state.merge({
			isVisibleModuleD: false,
		})
	},


}, INITIAL_STATE)

export default Reducer
