import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './utils/redux/index'

ReactDOM.render(
	<Provider store={store} >
		<PersistGate persistor={persistor} >
			<App />
		</PersistGate>
	</Provider>
	, document.getElementById('root'))
serviceWorker.register()
