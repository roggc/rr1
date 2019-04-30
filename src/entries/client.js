__devMode__&& console.log('src/entries/client')

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from '../redux/store'
import {start} from '../redux/extra/start/actions'
import App from '../comps/app/render/app'
import Header from '../comps/header/render/header'
import Content from '../comps/content/render/content'
import Footer from '../comps/footer/render/footer'
import Home from '../comps/home/render/home'
import SayHello from '../comps/sayHello/render/sayHello'
import Say from '../comps/say/render/say'
import Posts from '../comps/posts/render/posts'

render
(
  <Provider store={store}>
    <App name='app1' children0=
    {
      <div>
        <Say name='say0'/>
        <Say name='say1' message='goodbye'/>
        <SayHello name='sayHello1' message='italy'/>
        <Posts name='posts1'/>
        <Posts name='posts2' time={5000}/>
      </div>
    }>
      <Header name='header1' title={'React app ...'}>
        {
          [
            'item1',
            'item2',
            'item3'
          ]
        }
      </Header>
      <Content name='content1'>
        <Home name='home1'/>
      </Content>
      <Footer name='footer1'/>
    </App>
  </Provider>,
  document.getElementById('root')
)

store.dispatch(start())
