__devMode__&& console.log('src/comps/content/render/content')

import React from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/content.css'
import store from '../../../redux/store'
import {contentSetChildren} from '../redux/actions'

const init= name=> init=>
{
  init.children&& store.dispatch(contentSetChildren(name)(init.children))
}

const inst= name=> state=>
(
  state.foo.show&&
  <div className= {`${style.contentPlaceholder} ${style.contentFlexColumn1}`}>
    <div className={`${style.contentFlexRow1}`}>
      {state.foo.children}
    </div>
  </div>
)

export default withState(init)(inst)(reducer)
