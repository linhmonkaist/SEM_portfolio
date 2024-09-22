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
      const sortedServices = data.sort((a, b) => {
        if (a.serviceID > b.serviceID) return 1;
        if (a.serviceID < b.serviceID) return -1; 
        return 0; 
      });
      setServices(sortedServices); 
      })
  }, []); 
  
  return (
    <>
      <h2 className= "head-text"> <span>Service</span> </h2>
      <p className= "p-text-description"> SEM Scholars cung cấp nhiều gói mentor linh hoạt nhằm hỗ trợ tốt nhất cho các bạn mentee. <br/>Dịch vụ của team SEM gồm các gói mentor A-Z không giới hạn số lượng các buổi
      hỗ trợ và các gói mentor lẻ với thời lượng trong một buổi. </p>

      <div className= "app__profiles">
        {/* {console.log(services)} */}
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
              <p className="p-text" style={{marginTop: 10, color:'black'}}>{service.des}</p>
              <p className="p-text" style={{color: '#9b121f'}}>Chi tiết</p>

            </motion.div>
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Services, 'app__service'),
  'service',
  'app__primarybg'
);