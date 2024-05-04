import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation  } from "react-router-dom";

import {images} from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper';
import './Services.scss';
import { urlFor, client } from '../../client'

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setServices(data); 
      })
  }, []); 
  
  return (
    <>
      <h2 className= "head-text"> <span>Our Service</span> </h2>
      <p className= "p-text-description"> SEM Scholars cung cấp nhiều gói mentor linh hoạt nhằm hỗ trợ tốt nhất cho các bạn mentee. Dịch vụ của team SEM gồm các gói mentor A-Z không giới hạn số lượng các buổi
      hỗ trợ và các gói mentor lẻ với thời lượng trong một buổi. </p>

      <div className= "app__profiles">
        {services.map((service, index) => (
          <NavLink className="nav-link" to={{ pathname: "/service" }}  state= {{service: service}}>
            <motion.div
              whileInView={{ opacity: 1}}
              whileHover={{ scale: 1.1}}
              transition={{ duration: 0.5, type: 'tween'}}
              className='app__profiles-item'
              key= {service.title + index}
            >
              <img src={urlFor(service.imgUrl)} alt ={service.serviceName}/>
              <h2 className="bold-text" style={{marginTop: 20}}>{service.serviceName}</h2>
              <p className="p-text" style={{marginTop: 10}}>{service.des}</p>
              <p className="p-text">Chi tiết</p>

            </motion.div>
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Services, 'app__about'),
  'service',
  'app__whitebg'
);