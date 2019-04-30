__devMode__&& console.log('src/comps/content/redux/reducer')

import React from 'react'
import * as types from './types'

export default name=> (val=
  {
    show: true,
    children: <div>some content ...</div>
  }, act)=>
{
  switch (act.type)
  {
    case types.CONTENT_SET_+name:
      val=
      {
        ...val,
        children: act.val
      }
    default:
      return val
  }
}
