import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectsCard = ({ project }) => {
  const { screenshot1, screenshot2, screenshot3, title, title2, projectDetails1, projectDetails2, projectDetails3, projectLiveSite, projectCode } = project;
  return (
    <div className="p-5 m-2 row" style={{ backgroundColor: '#f2f2f2' }}>
      <div className="col-md-6">
        <Carousel>
          <div>
            <img src={screenshot1} alt='' />
          </div>
          <div>
            <img src={screenshot2} alt='' />
          </div>
          <div>
            <img src={screenshot3} alt='' />
          </div>
        </Carousel>
      </div>
      <div className="col-md-6 text-left">
        <h3>{title} <span style={{ fontSize: '16px', color: '#404040' }}>- {title2}</span></h3>
        <ul>
          <li>{projectDetails1}</li>
          <li>{projectDetails2}</li>
          <li>{projectDetails3}</li>
        </ul>
        <a href={projectCode} target="_blank" rel="noreferrer"><button className="button-style">See Code</button></a>
        <a href={projectLiveSite} target="_blank" rel="noreferrer"><button className="button-style ml-2">Live Site</button></a>
      </div>
    </div>
  );
};

export default ProjectsCard;