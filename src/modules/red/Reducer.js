
import {Map} from 'immutable'
import {handleActions} from 'redux-actions'
import {Types} from './Actions'

const INITIAL_STATE = Map({
	text: null,
})

const Reducer = handleActions({

	[Types.CHANGE_TEXT]: (state, action) => {
		return state.merge({
			text: action.payload.value,
		})
	},

}, INITIAL_STATE)

export default Reducer
