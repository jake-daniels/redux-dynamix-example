
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer as HotLoader } from 'react-hot-loader'
import App from 'app/App'

const APPLICATION = (
	<HotLoader>
		<App/>
	</HotLoader>
)
ReactDOM.render(APPLICATION, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
	module.hot.accept()
}