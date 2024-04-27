import React, { useState, useEffect} from 'react';
import './SideBar.scss';

const Sidebar = () => {

  let menuItems = [ "Eduhance", "Home" , "Explore"]
   
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(true);
  let delay = 1;
  useEffect(() => {
    setAnimate(true);
    let timer = setTimeout(() => setAnimate(false), delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [active, delay]);

  return (
    <div className={`sidebar ${expanded && "expanded"} app__flex`}>
      {menuItems.map((item, index) => {
        let middle = true;
        return (
          <div
            className={`boxicon-container ${
              expanded && "expanded-boxicon-container"
            }`}
            onMouseEnter={() => {
              if (middle) {
                setHovered(index);
              }
            }}
            onMouseLeave={() => {
              if (middle) {
                setHovered(null);
              }
            }}
            onClick={() => {
              if (middle) {
                setActive(index);
              }
            }}
            key={index}
          >
            <box-icon 
              class={`${middle && "boxicon"} 
                      ${!middle && "first-and-last-trash-fix"}
                      ${active === index && "active"}
                      `}
              color={
                hovered === index || active === index ? "white" : item.color
              }
              animation={active === index && animate ? "tada" : ""}
              rotate={item.rotate}
            ></box-icon>
            <p
              className={`description 
            ${"show-description"}
            ${active === index && "active-description"}`}
            >
              {item}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar; 
