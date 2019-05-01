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
import About from '../comps/about/render/about'
import SayHello from '../comps/sayHello/render/sayHello'
import Say from '../comps/say/render/say'
import Posts from '../comps/posts/render/posts'
import {homeSetShow} from '../comps/home/redux/actions'
import {aboutSetShow} from '../comps/about/redux/actions'
import {menuSetItem} from '../comps/menu/redux/actions'

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
          {
            name: 'content1',
            items:
            [
              {text:'home',name:'home1',func:homeSetShow},
              {text:'about',name:'about1',func:aboutSetShow},
            ]
          }
        }
      </Header>
      <Content name='content1'>
        <Home name='home1'>
          hello ...
        </Home>
        <About name='about1'>
          nppcpp ...
        </About>
      </Content>
      <Footer name='footer1'/>
    </App>
  </Provider>,
  document.getElementById('root')
)

store.dispatch(start())

window.addEventListener('popstate', e=>
{
  const state= store.getState()

  Object.keys(state.comps).forEach(key=>
  {
    const comp = state.comps[key]
    comp.route&& comp.name&& store.dispatch(menuSetItem(comp.name)(e.state)())
  })
})
