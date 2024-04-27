import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation, Link  } from "react-router-dom";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

import { AppWrap, MotionWrap} from '../../wrapper';
import { urlFor, client } from '../../client';
import { SideBar } from '../../components';
import './ServicePage.scss';

const ServicePage = () => {
  const location = useLocation();
  const { state } = location; 
  const mentor = state.about; 
  const items = ['Tư vấn apply', 'gói Basic', 'premium'];

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  
  return (
    <>
      <motion.div
        className='app__work-portfolio'
      >
          <div className= 'app__work-item1 app__flex' >
            <div className="sidebar app__flex">
                <SideBar />
              </div>
          </div>
          <div className= 'app__work-item2 app__flex' >
            <div className= 'app__work-content app__flex'>
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
  MotionWrap(ServicePage, 'app__work'),
  'servicepage',
  'app__primarybg'
);