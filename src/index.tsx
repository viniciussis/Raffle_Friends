import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import './assets/styles/typography.scss'
import './assets/styles/normalize.scss'
import './assets/styles/reset.scss'
import './index.scss'
import AppRoutes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
