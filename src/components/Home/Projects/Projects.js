import React from 'react';
import ProjectsCard from '../ProjectsCard/ProjectsCard';
import data from '../../../data/data.json'

const Projects = () => {
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    setProjects(data);
  }, [])

  return (
    <section className='container d-flex flex-column mt-5' id="projects">
      <h1>Some of my recent projects - take a look.</h1>
      {
        projects.map(project => <ProjectsCard project={project} key={project.id}></ProjectsCard>)
      }
    </section>
  );
};

export default Projects;