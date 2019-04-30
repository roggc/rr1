__devMode__&& console.log('src/comps/app/redux/reducer')

import * as types from './types'

export default name=> (val=
  {
    show: false
  }, act)=>
{
  switch (act.type) {
    case types.APP_SET_SHOW_+name:
      val=
      {
        ...val,
        show: act.val
      }
      return val
    default:
      return val
  }
}
