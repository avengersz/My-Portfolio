import React from 'react';

const SkillFigure = ({skill}) => {
  const {imgURL, caption} = skill;
  return (
    <div className="text-center">
      <img src={imgURL} alt="" style={{height:'50px'}} className="mx-4 my-4"/>
      <figcaption>{caption}</figcaption>
    </div>
  );
};

export default SkillFigure;