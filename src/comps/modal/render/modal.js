__devMode__&& console.log('src/comps/modal/render/modal')

import React from 'react'
import withStatus from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/modal.css'
import store from '../../../redux/store'
import {modalSetStyle, modalSetChildren} from '../redux/actions'

const init= name=> init=>
{
  init.style&& store.dispatch(modalSetStyle(name)(init.style))
  init.children&& store.dispatch(modalSetChildren(name)(init.children))
}

const inst= name=> state=>
(
  state.foo.show&&
  <div className={`${style.modalPlaceholder}`} style={state.foo.style}>
    {state.foo.children}
  </div>
)

export default withStatus(init)(inst)(reducer)
