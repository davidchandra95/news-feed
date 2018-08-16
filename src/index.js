import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home }  from './pages'
import { Provider } from 'react-redux'
import store from './stores'

const App = (
   <Provider store={store.configure(null)}>
      <Home />
   </Provider>
)

ReactDOM.render(App, document.getElementById('root'))