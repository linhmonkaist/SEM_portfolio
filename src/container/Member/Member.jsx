import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation  } from "react-router-dom";

import { AppWrap, MotionWrap} from '../../wrapper';
import { urlFor } from '../../client';
import './Member.scss';

const Member = () => {
  const location = useLocation();
  const { state } = location; 
  const mentor = state.member;   
  return (
    <>
      <motion.div
        // animate = {animateCard}
        // transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__member-portfolio'
      >
          <div className= 'app__member-left app__flex' >
            <div className = 'app__member-img app__flex'>
               <img src={urlFor(mentor.imgUrl)} alt={mentor.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className= "app__flex"
                >
                </motion.div>
            </div>

            <div className= 'app__member-content app__flex'>

              <h4 className="bold-text">{mentor.name}</h4>
              <h4 className="bold-text">{mentor.title}</h4>
            </div>
          </div>
          <div className= 'app__work-information app__flex' >
            <div className= 'app__member-content app__flex'>
              <span> <a href= '/'><i class="fa fa-home" /></a> <a onClick={() => window.history.back()}> / Our team</a> </span>
              
              <h4 className="bold-text">Tham gia hỗ trợ</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{mentor.supportDes}</p>
              <h4 className="bold-text">Thành tích của mentee</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{mentor.menteeRep}</p>
              <h4 className="bold-text">Thành tích cá nhân</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{mentor.selfRep}</p>
            </div>
          </div>
      </motion.div>
    </>
  )
}
// export default AppWrap(Work, 'work'); 
export default AppWrap(
  MotionWrap(Member, 'app__member'),
  'member',
  'app__graybg'
);