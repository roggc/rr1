__devMode__&& console.log('src/comps/menu/redux/actions')

import * as types from './types'

export const menuSetChildren= name=> val=>
(
  {
    type: types.MENU_SET_CHILDREN_+name,
    val: val
  }
)
