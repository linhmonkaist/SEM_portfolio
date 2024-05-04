import React from 'react';
import { NavigationDots } from '../components'

export const FooterWrap = (Component, idName, classNames) => function HOC () {
  return (
    <div id = {idName} >
        <div className='app__footer-wrapper'>
            <Component/>
            
            {/* <div className='copyright'>
              <p className= 'p-text'>@2024 Linh Mon</p>
              <p className= 'p-text'>All right reserved</p>
            </div> */}
        </div>
     </div>
  )
}
