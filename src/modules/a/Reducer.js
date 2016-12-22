
import {Map} from 'immutable'
import {handleActions} from 'redux-actions'
import {Types} from './Actions'

const INITIAL_STATE = Map({
	number: 0,
})

const Reducer = handleActions({

	[Types.INCREMENT]: (state, action) => {
		return state.merge({
			number: state.get('number') + 1,
		})
	},

	[Types.DECREMENT]: (state, action) => {
		return state.merge({
			number: state.get('number') - 1,
		})
	},


}, INITIAL_STATE)

export default Reducer
