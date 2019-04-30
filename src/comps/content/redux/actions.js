__devMode__&& console.log('src/comps/content/redux/actions')

import * as types from './types'

export const contentSet= name=> val=>
(
  {
    type: types.CONTENT_SET_+ name,
    val: val
  }
)
