
import {Map} from 'immutable'
import {handleActions} from 'redux-actions'
import {Types} from './Actions'

const INITIAL_STATE = Map({
	isLoading: false,
	data: null,
})

const Reducer = handleActions({

	[Types.LOAD_DATA_REQUEST]: (state, action) => {
		return state.merge({
			isLoading: true,
			data: null,
		})
	},

	[Types.LOAD_DATA_SUCCESS]: (state, action) => {
		return state.merge({
			isLoading: false,
			data: action.payload.data,
		})
	},

}, INITIAL_STATE)

export default Reducer
