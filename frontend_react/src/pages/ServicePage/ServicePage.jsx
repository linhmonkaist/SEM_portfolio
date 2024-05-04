import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation, Link } from "react-router-dom";

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { SideBar } from '../../components';
import './ServicePage.scss';

const ServicePage = () => {
  const location = useLocation();
  const { state } = location;
  const selectService = state.service;
  const [activeItem, setActiveItem] = useState(selectService.serviceID);
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(selectService.serviceID);
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [services, setServices] = useState([]);
  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setServices(data);
    })
  }, []);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  let delay = 1;
  useEffect(() => {
    setAnimate(true);
    let timer = setTimeout(() => setAnimate(false), delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [active, delay]);
  return (
    <>
      <motion.div
        className='app__work-portfolio'
      >
        <div className='app__work-item app__flex' >
          <div className="sidebar app__flex">
            <div className={`sidebar ${expanded && "expanded"} app__flex`}>
              {services.map((item, index) => {
                let middle = true;
                return (
                  <div className={`boxicon-container ${expanded && "expanded-boxicon-container"}`}
                    onMouseEnter={() => { setHovered(item.serviceID); }}
                    onMouseLeave={() => { setHovered(null); }}
                    onClick={() => { setActive(item.serviceID); handleItemClick(item.serviceID);}}
                    key={index}
                  >
                    <box-icon
                      class={`${middle && "boxicon"} 
                      ${!middle && "first-and-last-trash-fix"}
                      ${active === item.serviceID && "active"}
                      `}
                      color={hovered === item.serviceID || active === item.serviceID ? "white" : "black"}
                    ></box-icon>
                    <p
                      className={`description 
            ${"show-description"}
            ${active === item.serviceID && "active-description"}`}
                    >
                      {item.serviceName}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='app__work-item2 app__flex' >
          <div className='app__work-content app__flex'>
            <span> <a href='/'><i class="fa fa-home" /></a> <a onClick={() => window.history.back()}> / Our service</a> </span>
            <div>
              {services.map((item) => (
                (item.serviceID === activeItem) ?
                  (
                    <>
                      <h4 className="bold-text">Giới thiệu</h4>
                      <p className="p-text" style={{ marginTop: 10 }}>{item.introduction}</p>
                      <h4 className="bold-text">Đối tượng hướng đến</h4>
                      <p className="p-text" style={{ marginTop: 10 }}>{item.target}</p>
                      <h4 className="bold-text">Roadmap</h4>
                      <p className="p-text" style={{ marginTop: 10 }}>{item.roadMap}</p>
                      {item.bonus ? 
                      <>
                      <h4 className="bold-text">Ưu đãi</h4>
                      <p className="p-text" style={{ marginTop: 10 }}>{item.bonus}</p>
                      </> : null
                      }
                      {item.faq? 
                      <>
                      <h4 className="bold-text">FQ&A</h4>
                      {item.faq?.map((qa, index) => (
                        <>
                          <p className='p-text'><span>Question: </span><span>{qa.question}</span></p>
                          <p className='p-text'><span>Answer: </span><span>{qa.answer}</span></p>
                        </>
                      ))}
                      </> : null
                      }
                    </>
                  ) : null
              ))}
            </div>
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