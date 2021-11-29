import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Blogs from '../Blogs/Blogs';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Blogs />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;