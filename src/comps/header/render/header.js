__devMode__&& console.log('src/comps/header/render/header')

import React from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/header.css'
import Menu from '../../modal/render/modal'
import {modalToggleShow} from '../../modal/redux/actions'

const inst= name=> state=>
{
  const modalToggle= ()=>
  {
    state.dispatch(modalToggleShow('menu1')())
  }

  const el=
  (
    state.foo.show&&
    <div className={`${style.headerFlexRow} ${style.headerPlaceholder}`}>
      <div className={`${style.headerFlexGrow} ${style.headerFlexColumn}`}>
        <div className={`${style.headerFlexShrink}`}>
          React app ...
        </div>
      </div>
      <div className={`${style.headerPlaceholder2}`} onClick={modalToggle}>
        <i className="fas fa-align-justify"></i>
        <Menu name='menu1' style={{top: '47px', right: '58px'}}>
          <div>jsdfj...</div>
        </Menu>
      </div>
    </div>
  )

  return el
}


export default withState()(inst)(reducer)
