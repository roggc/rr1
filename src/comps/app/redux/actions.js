__devMode__&& console.log('src/comps/app/redux/actions')

import * as types from './types'

export const appSetShow= name=> val=>
(
  {
    type: types.APP_SET_SHOW_+name,
    val: val
  }
)
