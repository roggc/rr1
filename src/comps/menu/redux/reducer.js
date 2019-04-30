__devMode__&& console.log('src/comps/menu/redux/reducer')

import * as types from './types'

export default name=> (val=
  {
    show: true,
    children: ['item 1']
  }, act)=>
  {
    switch (act.type)
    {
      case types.MENU_SET_CHILDREN_+name:
      val=
      {
        ...val,
        children: act.val
      }
      return val
      default:
        return val
    }
  }
