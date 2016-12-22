
import { combineReducers } from 'redux'

import AppReducer from 'app/Reducer'
import BlueReducer from 'modules/blue/Reducer'

export default combineReducers({
	app: AppReducer,
	blue: BlueReducer,
})
