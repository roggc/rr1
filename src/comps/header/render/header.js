__devMode__&& console.log('src/comps/header/render/header')

import React from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/header.css'
import Menu from '../../menu/render/menu'
import store from '../../../redux/store'
import {headerSetTitle, headerSetChildren} from '../redux/actions'

const init= name=> init=>
{
  init.title&& store.dispatch(headerSetTitle(name)(init.title))
  init.children&& store.dispatch(headerSetChildren(name)(init.children))
}

const inst= name=> state=>
(
  state.foo.show&&
  <div className={`${style.headerFlexRow} ${style.headerPlaceholder}`}>
    <div className={`${style.headerFlexGrow} ${style.headerFlexColumn}`}>
      <div className={`${style.headerFlexShrink}`}>
        {state.foo.title}
      </div>
    </div>
    <Menu name='menu1' route={true}>
      {state.foo.children}
    </Menu>
  </div>
)

export default withState(init)(inst)(reducer)
