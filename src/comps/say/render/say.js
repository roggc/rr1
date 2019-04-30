__devMode__&& console.log('src/comps/say/render/say')

import React from 'react'
import store from '../../../redux/store'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import {saySet, sayHide} from '../redux/actions'
import style from '../style/say.css'

const init= name=> init=>
{
  init.message&& store.dispatch(saySet(name)(init.message))
}

const inst= name=> state=>
{
  const hide= ()=>
  {
    state.dispatch(sayHide(name)())
  }

  const el=
  (
    state.foo.show&&
    <div className={`${style.general}`}>
      {state.foo.val}
      <button onClick={hide}>hide</button>
    </div>
  )

  return el
}

export default withState(init)(inst)(reducer)
