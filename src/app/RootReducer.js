
import { combineReducers } from 'redux'

import AppReducer from 'app/Reducer'
import BlueReducer from 'modules/blue/Reducer'
import RedReducer from 'modules/red/Reducer'
import PurpleReducer from 'modules/purple/Reducer'

export default combineReducers({
	app: AppReducer,
	blue: BlueReducer,
	red: RedReducer,
	purple: PurpleReducer,
})
