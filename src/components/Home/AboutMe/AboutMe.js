import React from 'react';
import aboutMeIMG from '../../../images/about-me-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="container aboutme">
      <div className="row d-flex align-items-center">

        <div className="p-5 col-md-6 col-sm-12">
          <img src={aboutMeIMG} alt="" className='border rounded img-fluid' />
        </div>

        <div className="p-5 text-left col-md-6 col-sm-12">
          <h3>SM ENAMUL HOSSAIN APAN</h3>
          <p style={{ fontWeight: '600' }}>Junior Web Developer</p>
          <hr />
          <p>My name is SM Enamul Hossain Apan. I'm a Web Developer, and I'm very passionate and dedicated to my work.
            <br />
            With wide experience as a React Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
          <div className="text-left align-items-center">
            <a href='https://drive.google.com/file/d/1v8S_uGOf3-J_3EV8CIBxpoOC12fyOuMe/view?usp=sharing' download><button className="button-style">Download Resume</button></a>
            <br />
            <a href="https://www.linkedin.com/in/sm-enamul-hossain-apan-775ba3162/" target="_blank" rel='noreferrer' style={{ fontSize: '36px' }}><FontAwesomeIcon icon={faLinkedin} className="ml-3 text-dark" /></a>
            <a href="https://github.com/avengersz" target="_blank" rel='noreferrer' style={{ fontSize: '36px' }}><FontAwesomeIcon icon={faGithub} className="ml-3 text-dark" /></a>
          </div>
        </div>
      </div>

      <div className="wave">
        {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg> */}
      </div>
    </section>
  );
};

export default AboutMe;