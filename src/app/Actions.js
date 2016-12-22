
import {injectReducer, ejectReducer} from 'redux-dynamix/index'
import RedReducer from 'modules/red/Reducer'
import PurpleReducer from 'modules/purple/Reducer'

export const Types = {
	INJECT_RED_MODULE:  'INJECT_RED_MODULE',
	EJECT_RED_MODULE:  'EJECT_RED_MODULE',
	INJECT_PURPLE_MODULE:  'INJECT_PURPLE_MODULE',
	EJECT_PURPLE_MODULE:  'EJECT_PURPLE_MODULE',
}

const RED_MODULE_KEY = 'red'
const PURPLE_MODULE_KEY = 'purple'

export const Actions = {
	injectRedModule: () => {
		injectReducer(RED_MODULE_KEY, RedReducer)
		return {type: Types.INJECT_RED_MODULE}
	},
	ejectRedModule: () => {
		ejectReducer(RED_MODULE_KEY)
		return {type: Types.EJECT_RED_MODULE}
	},
	injectPurpleModule: () => {
		injectReducer(PURPLE_MODULE_KEY, PurpleReducer)
		return {type: Types.INJECT_PURPLE_MODULE}
	},
	ejectPurpleModule: () => {
		ejectReducer(PURPLE_MODULE_KEY)
		return {type: Types.EJECT_PURPLE_MODULE}
	},
}
