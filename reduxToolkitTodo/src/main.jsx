import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import {store} from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  //iss provider o ek value chahiye so redux mei we call value as store n we pass that store in it which we have created for our app
  <Provider store={store}>
    <App />
  </Provider>,
)
