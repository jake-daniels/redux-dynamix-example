
const Dynamix = {
	dispatch: () => {},
	staticReducer: null,
	validKeys: [],
	dynamicReducers: [],
}

export const REDUCER_INJECTED_ACTION_TYPE = '@@dynamix/REDUCER_INJECTED'
export const REDUCER_EJECTED_ACTION_TYPE = '@@dynamix/REDUCER_EJECTED'

export const createDynamix = (baseKey) => (createStore) => (reducer, preloadedState, enhancer) => {

	const store = createStore(reducer, preloadedState, enhancer)

	Dynamix.dispatch = store.dispatch
	Dynamix.staticReducer = reducer
	Dynamix.validKeys = Object.keys(store.getState())

	const finalReducer = dynamizeStaticReducer(baseKey)

	store.replaceReducer(finalReducer)

	return store
}

const dynamizeStaticReducer = (baseKey) => (state = {}, action) => {

	const nextStaticState = Dynamix.staticReducer(state, action)

	const potentiallyInvalidState = (baseKey === undefined) ? nextStaticState : nextStaticState[baseKey]
	if (potentiallyInvalidState !== undefined) {
		const invalidKeys = Object.keys(potentiallyInvalidState).filter((x) => !Dynamix.validKeys.includes(x))
		invalidKeys.forEach((key) => {
			delete potentiallyInvalidState[key]
		})
	}

	const nextDynamicState = {}

	Dynamix.dynamicReducers.forEach((x) => {
		const nextPartialState = x.reducer(state[x.key], action)
		nextDynamicState[x.key] = nextPartialState
	})

	const nextFinalState = (baseKey === undefined)
		? {...nextStaticState, ...nextDynamicState}
		: {...nextStaticState, [baseKey]: nextDynamicState}

	return nextFinalState
}


export const injectReducer = (key, reducer) => {

	const dynamicKeys = Dynamix.dynamicReducers.map((x) => x.key)
	const isInjected = dynamicKeys.includes(key)

	if (isInjected) {
		console.warn(`Reducer with key [${key}] is already injected. Use function reinjectReducer(key, reducer) instead. Injection was ignored.`)
		return
	}

	Dynamix.validKeys.push(key)

	Dynamix.dynamicReducers.push({
		key: key,
		reducer: reducer,
	})

	Dynamix.dispatch({type: REDUCER_INJECTED_ACTION_TYPE})

}

export const ejectReducer = (key) => {

	const dynamicKeys = Dynamix.dynamicReducers.map((x) => x.key)
	const isInjected = dynamicKeys.includes(key)

	if (!isInjected) {
		console.warn(`You attempted to eject reducer with key [${key}] but no such reducer was injected. Ejection was ignored.`)
		return
	}

	Dynamix.validKeys = Dynamix.validKeys.filter((x) => x !== key)

	Dynamix.dynamicReducers = Dynamix.dynamicReducers.filter((x) => x.key !== key)

	Dynamix.dispatch({type: REDUCER_EJECTED_ACTION_TYPE})

}