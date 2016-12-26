
import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import {createDynamix} from 'redux-dynamix'

import RootReducer from 'app/RootReducer'
import Page from 'app/Page'

import './Styles.less'

class App extends Component {

	store = null

	constructor(){
		super()
		const logger = createLogger()
		const enhancer = compose(
			createDynamix(),
			applyMiddleware(thunk, logger),
		)
		this.store = createStore(RootReducer, enhancer)
	}

	render() {
		return (
			<Provider store={this.store}>
				<Page/>
			</Provider>
		)
	}
}

export default App