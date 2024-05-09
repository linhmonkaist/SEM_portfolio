import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, FooterWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div classname= "app__footer app__flex">
        <div className='app__footer-container'>
          <div className='app__footer-description'>
            <h2 className= "bold-text"> <span>Contact Us</span> </h2>
            <h4 className="bold-text" style={{fontSize: '2.2rem'}}><span>SEM Scholars</span></h4>
            <p className='p-text' style={{color: 'black'}}>SEM chính là viết tắt của Scholarship Exploring with Mentors.<br/>
             SEM Scholars được thành lập với sứ mệnh hỗ trợ các bạn trẻ Việt Nam trong việc apply học bổng đi 
             du học cũng như cung cấp các khóa học để trang bị những kỹ năng, năng lực ngoại ngữ cần thiết để 
             các bạn trẻ tự tin vươn mình ra biển lớn.</p>
            <p><span>Email: </span>semscholars.team@gmail.com</p>
          </div>
          <div className='app__footer-sns'>
            <h5 className="bold-text">Facebook</h5>
            <a href="https://www.facebook.com/SEMScholarsTeam" target='_blank'><img src={images.facebook} alt="facebook"></img></a>
          </div>
          <div className='app__footer-sns'>
            <h5 className="bold-text">Tiktok</h5>
            <a href="https://www.tiktok.com/@sem_scholars" target='_blank'><img src={images.tiktok} alt='tiktok'></img></a>
          </div>
          <div className='app__footer-sns'>
            <h5 className="bold-text">Instagram</h5>
            <a href="https://www.instagram.com/sem_scholars/" target='_blank'><img src={images.instagram} alt='instagram'></img></a>
          </div>
        </div>
        <hr/>
        <div className='app__footer-rights app__flex'>
          <p className= 'p-text'>@2024 SEM Scholars</p>
          <p className= 'p-text'>All right reserved</p>
        </div>
      </div>
    </>
  );
};
// export default Footer; 

export default FooterWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);