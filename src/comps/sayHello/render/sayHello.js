__devMode__&& console.log('src/comps/sayHello/render/sayHello')

import React from 'react'
import withState from '../../../hocs/state'
import store from '../../../redux/store'
import reducer from '../redux/reducer'
import {sayHelloSet, sayHelloHide} from '../redux/actions'
import style from '../style/sayHello.css'

const init= name=> init=>
{
  init.message&& store.dispatch(sayHelloSet(name)(init.message))
}

const inst= name=> state=>
{
  const hide= ()=>
  {
    state.dispatch(sayHelloHide(name)())
  }

  const el=
  (
    state.foo.show&&
    <div className={`${style.general}`}>
      {state.foo.message}
      <button onClick={hide}>hide</button>
    </div>
  )
  return el
}

export default withState(init)(inst)(reducer)
