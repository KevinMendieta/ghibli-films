import React from 'react'
import ReactDOM from 'react-dom'

import './css/index.css'
import './css/components/card.css'
import './css/components/common.css'
import './css/components/grid.css'
import './css/components/header.css'
import './css/components/footer.css'
import './css/components/spinner.css'

import App from './app'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
