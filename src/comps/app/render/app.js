__devMode__&& console.log('src/comps/app/render/app')

import React from 'react'
import Posts from '../../posts/render/posts'
import Header from '../../header/render/header'
import Content from '../../content/render/content'
import SayHello from '../../sayHello/render/sayHello'
import Say from '../../say/render/say'
import Footer from '../../footer/render/footer'
import Home from '../../home/render/home'
import style from '../style/app.css'
import reducer from '../redux/reducer'
import {appSetShow} from '../redux/actions'
import store from '../../../redux/store'
import withState from '../../../hocs/state'

const init = name=> init=>
{
  init.show&& store.dispatch(appSetShow(name)(init.show))
}

const inst= name=> state=>
(
  state.foo.show&&
  <div className={`${style.appGenerics}`}>
    <Say name='say0'/>
    <Say name='say1' message='goodbye'/>
    <SayHello name='say2' message='italy'/>
    <Posts name='hey'/>
    <Posts name='hey2' time={5000}/>
    <div className={`${style.appClear}`}/>
    <Header name='header1'/>
    <Content name='content1'>
      <Home name='home1'/>
    </Content>
    <Footer name='footer1'/>
  </div>
)

export default withState(init)(inst)(reducer)
