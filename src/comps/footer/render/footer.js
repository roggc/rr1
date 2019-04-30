__devMode__&& console.log('src/comps/footer/render/footer')

import React from 'react'
import withStatus from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/footer.css'

const inst= name=> state=>
(
  <div className={`${style.footerPlaceholder}`}>
    &copy; 2019 React corp dev
  </div>
)

export default withStatus()(inst)(reducer)
