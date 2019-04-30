__devMode__&& console.log('src/entries/client')

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from '../comps/app/render/app'
import store from '../redux/store'
import {start} from '../redux/extra/start/actions'

render
(
  <Provider store={store}>
    <App name='app1' show={true}/>
  </Provider>,
  document.getElementById('root')
)

store.dispatch(start())
