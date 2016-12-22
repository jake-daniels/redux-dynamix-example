
import { combineReducers } from 'redux'

import ReducerModuleA from 'modules/a/Reducer'
import ReducerModuleB from 'modules/b/Reducer'
import ReducerModuleC from 'modules/c/Reducer'
import ReducerModuleD from 'modules/d/Reducer'

export default combineReducers({
	a: ReducerModuleA,
	b: ReducerModuleB,
	c: ReducerModuleC,
	d: ReducerModuleD,
})
