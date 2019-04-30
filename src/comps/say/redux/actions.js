__devMode__&& console.log('src/comps/say/redux/actions')

import * as types from './types'

export const saySet= (name)=>(val)=>
(
  {
    type: types.SAY_SET_+name,
    val: val
  }
)

export const sayHide= (name)=>()=>
(
  {
    type: types.SAY_HIDE_+name
  }
)
