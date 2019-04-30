__devMode__&& console.log('src/comps/menu/render/menu')

import React from 'react'
import withStatus from '../../../hocs/state'
import reducer from '../redux/reducer'
import {menuSetChildren} from '../redux/actions'
import store from '../../../redux/store'
import Modal from '../../modal/render/modal'
import style from '../style/menu.css'
import {modalToggleShow} from '../../modal/redux/actions'

const init= name=> init=>
{
  init.children&& store.dispatch(menuSetChildren(name)(init.children))
}

const inst= name=> state=>
{
  const menuToggle= ()=>
  {
    state.dispatch(modalToggleShow('modal1')())
  }

  const el=
  (
      <div className={`${style.menuPlaceholder}`}>
        <div className={`${style.menuIcon}`} onClick={menuToggle}>
          <i className="fas fa-align-justify"></i>
        </div>
        <Modal name='modal1' style={{top: '47px', right: '58px'}}>
          {
            state.foo.children.map
            (
              (item, key)=>
              <div key={key}><i className="fas fa-angle-right"></i> {item}</div>
            )
          }
        </Modal>
      </div>
  )

  return el
}

export default withStatus(init)(inst)(reducer)
