import React from 'react';

const Skill = ({text, img}) => {
  return (
    <div className="skill-card">
      <img src={ img } alt={ text } />
      <p>{ text }</p>
    </div>
  );
}

export default Skill;
