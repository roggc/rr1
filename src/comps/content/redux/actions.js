__devMode__&& console.log('src/comps/content/redux/actions')

import * as types from './types'

export const contentSetChildren= name=> val=>
(
  {
    type: types.CONTENT_SET_CHILDREN_+ name,
    val: val
  }
)
