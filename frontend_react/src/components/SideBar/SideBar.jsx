import React, { useState, useEffect} from 'react';
import './SideBar.scss';

import { urlFor, client } from '../../client'

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [services, setServices] = useState([]); 
  let delay = 1;
  useEffect(() => {
    setAnimate(true);
    let timer = setTimeout(() => setAnimate(false), delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [active, delay]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setServices(data); 
      })
  }, []); 
  return (
    <div className={`sidebar ${expanded && "expanded"} app__flex`}>
      {services.map((item, index) => {
        let middle = true;
        return (
          <div className={`boxicon-container ${expanded && "expanded-boxicon-container"}`}
            onMouseEnter={() => {setHovered(index);}}
            onMouseLeave={() => {setHovered(null);}}
            onClick={() => {setActive(index);}}
            key={index}
          >
            <box-icon 
              class={`${middle && "boxicon"} 
                      ${!middle && "first-and-last-trash-fix"}
                      ${active === index && "active"}
                      `}
              color={hovered === index || active === index ? "white" : "black"}
            ></box-icon>
            <p
              className={`description 
            ${"show-description"}
            ${active === index && "active-description"}`}
            >
              {item.serviceName}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar; 
