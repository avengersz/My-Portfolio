import React from 'react';
import expertiseData from '../../../data/expertise.json'
import comfortableData from '../../../data/comfortable.json'
import familiarData from '../../../data/familiar.json'
import toolsData from '../../../data/tools.json'
import SkillsFigure from '../SkillsFigure/SkillFigure';

const Skills = () => {
  const [expertise, setExpertise] = React.useState([]);
  const [comfortable, setComfortable] = React.useState([]);
  const [familiar, setFamiliar] = React.useState([]);
  const [tools, setTools] = React.useState([]);
  React.useEffect(() => {
    setExpertise(expertiseData);
    setComfortable(comfortableData);
    setFamiliar(familiarData);
    setTools(toolsData);
  }, [])
  return (
    <section className="container">
      <h1>Technical skills</h1>

      <div className='row mt-5'>
        <div className='col-md-12 col-sm-12'>
          <hr />
          <h3><u>Expertise</u></h3>
          <div className="row d-flex justify-content-center align-items-center">
            {
              expertise.map(skill => <SkillsFigure skill={skill} key={skill.id}></SkillsFigure>)
            }
          </div>
        </div>
      </div>

      <div className='row  mt-2'>
        <div className='col-md-12 col-sm-12'>
          <hr/>
          <h3><u>Comfortable</u></h3>
          <div className="row d-flex justify-content-center align-items-center">
            {
              comfortable.map(skill => <SkillsFigure skill={skill} key={skill.id}></SkillsFigure>)
            }
          </div>
        </div>
      </div>

      <div className='row  mt-2'>
        <div className='col-md-12 col-sm-12'>
          <hr/>
          <h3><u>Familiar</u></h3>
          <div className="row d-flex justify-content-center align-items-center">
            {
              familiar.map(skill => <SkillsFigure skill={skill} key={skill.id}></SkillsFigure>)
            }
          </div>
        </div>
      </div>

      <div className='row mt-2'>
        <div className='col-md-12 col-sm-12'>
          <hr />
          <h3><u>Tools</u></h3>
          <div className="row d-flex justify-content-center align-items-center">
            {
              tools.map(skill => <SkillsFigure skill={skill} key={skill.id}></SkillsFigure>)
            }
          </div>
          <hr />
        </div>
      </div>

    </section>
  );
};

export default Skills;