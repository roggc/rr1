__devMode__&& console.log('src/comps/home/render/home')

import React from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/home.css'
import store from '../../../redux/store'
import {homeSetChildren, homeSetShow} from '../redux/actions'

const init= name=> init=>
{
  init.show&& store.dispatch(homeSetShow(name)(init.show))
  init.children&& store.dispatch(homeSetChildren(name)(init.children))
}

const inst= name=> state=>
(
  state.foo.show&&
  <div className={`${style.homePlaceholder} ${style.homeFade}`}>
    <div className={`${style.homeBounce}`}>{state.foo.children}</div>
  </div>
)

export default withState(init)(inst)(reducer)
