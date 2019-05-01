__devMode__&& console.log('src/comps/menu/render/menu')

import React from 'react'
import withStatus from '../../../hocs/state'
import reducer from '../redux/reducer'
import {menuSetChildren, menuSetRoute, menuSetItem} from '../redux/actions'
import store from '../../../redux/store'
import Modal from '../../modal/render/modal'
import style from '../style/menu.css'
import {modalToggleShow} from '../../modal/redux/actions'

const init= name=> init=>
{
  init.children&& store.dispatch(menuSetChildren(name)(init.children))
  init.route&& store.dispatch(menuSetRoute(name)(init.route))
}

const inst= name=> state=>
{
  const menuToggle= ()=> state.dispatch(modalToggleShow('modal1')())

  const menuClick= key=> clicked=> ()=>
  {
    menuToggle()
    state.dispatch(menuSetItem(name)(key)(clicked))
  }

  const el=
  (
      <div className={`${style.menuPlaceholder}`}>
        <div className={`${style.menuIcon}`} onClick={menuToggle}>
          <i className="fas fa-align-justify"></i>
        </div>
        <Modal name='modal1' style={{top: '47px', right: '58px'}}>
          {
            state.foo.children.items.map
            (
              (item, key)=>
              <div key={key} className={`${style.menuIcon}`} onClick={menuClick(key)(true)}>
                <i className="fas fa-angle-right"></i> {item.text}
              </div>
            )
          }
        </Modal>
      </div>
  )

  return el
}

export default withStatus(init)(inst)(reducer)
