import React from 'react'
import projects from '../data/projects';

const Projects = () => {
  return (
    <div>
      {projects.map(({name}) => <p>{name}</p>)}
    </div>
  )
}

export default Projects
