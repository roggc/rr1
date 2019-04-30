__devMode__&& console.log('src/comps/home/render/home')

import React from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/home.css'

const inst= name=> state=>
(
  state.foo.show&&
  <div className={`${style.placeholder}`}>
    hello ...
  </div>
)

export default withState()(inst)(reducer)
