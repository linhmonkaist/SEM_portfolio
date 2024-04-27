import React from 'react';
import { NavigationDots, SocialMedia } from '../components'

export const SimpleWrap = (Component, idName, classNames) => function HOC () {
  return (
    <div id = {idName} className= {`app__container ${classNames}`}>
        <div className='app__wrapper app__flex'>
            <Component/>
            
            <div className='copyright'>
              <p className= 'p-text'>@2024 Linh Mon</p>
              <p className= 'p-text'>All right reserved</p>
            </div>
        </div>
    </div>
  )
}
