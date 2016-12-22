
import { combineReducers } from 'redux'

import ReducerModuleA from 'modules/a/Reducer'
import ReducerModuleB from 'modules/b/Reducer'

export default combineReducers({
	moduleA: ReducerModuleA,
	moduleB: ReducerModuleB,
})
